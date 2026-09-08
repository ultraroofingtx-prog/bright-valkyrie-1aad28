import { supabase } from './supabase';

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface CalendarDay {
  date: string;
  slots: TimeSlot[];
}

export async function getAvailableSlots(date: string): Promise<TimeSlot[]> {
  try {
    const { data: availability, error: availError } = await supabase
      .from('calendar_availability')
      .select('available_slots, blocked_slots')
      .eq('date', date)
      .maybeSingle();

    if (availError) throw availError;

    if (!availability) {
      return [];
    }

    const availableSlots = availability.available_slots || [];
    const blockedSlots = availability.blocked_slots || [];

    const { data: bookings, error: bookError } = await supabase
      .from('inspection_bookings')
      .select('scheduled_time')
      .eq('scheduled_date', date)
      .in('status', ['pending', 'confirmed']);

    if (bookError) throw bookError;

    const bookedTimes = bookings?.map((b) => b.scheduled_time) || [];

    return availableSlots.map((time: string) => ({
      time,
      available: !blockedSlots.includes(time) && !bookedTimes.includes(time),
    }));
  } catch (error) {
    console.error('Error fetching available slots:', error);
    return [];
  }
}

export async function getAvailableDates(daysAhead = 30): Promise<CalendarDay[]> {
  const dates: CalendarDay[] = [];
  const today = new Date();

  for (let i = 0; i < daysAhead; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dateStr = date.toISOString().split('T')[0];

    const slots = await getAvailableSlots(dateStr);

    dates.push({
      date: dateStr,
      slots,
    });
  }

  return dates;
}

export async function bookInspection(data: {
  conversationId?: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  address: string;
  city: string;
  scheduledDate: string;
  scheduledTime: string;
  inspectionType: string;
  notes?: string;
}) {
  try {
    const slots = await getAvailableSlots(data.scheduledDate);
    const requestedSlot = slots.find((s) => s.time === data.scheduledTime);

    if (!requestedSlot || !requestedSlot.available) {
      throw new Error('Selected time slot is not available');
    }

    const { data: booking, error } = await supabase
      .from('inspection_bookings')
      .insert({
        conversation_id: data.conversationId || null,
        customer_name: data.customerName,
        customer_email: data.customerEmail,
        customer_phone: data.customerPhone,
        address: data.address,
        city: data.city,
        scheduled_date: data.scheduledDate,
        scheduled_time: data.scheduledTime,
        inspection_type: data.inspectionType,
        notes: data.notes || null,
        status: 'pending',
      })
      .select()
      .single();

    if (error) throw error;

    return booking;
  } catch (error) {
    console.error('Error booking inspection:', error);
    throw error;
  }
}
