import { createClient } from "npm:@supabase/supabase-js@2.57.4";
import { checkRateLimit, getClientIp, rateLimitResponse } from "../_shared/rateLimit.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ChatRequest {
  conversation_id: string;
  message: string;
  session_id: string;
}

interface ConversationContext {
  conversation_id?: string;
  customer_name?: string;
  customer_email?: string;
  customer_phone?: string;
  address?: string;
  city?: string;
  preferred_date?: string;
  preferred_time?: string;
  inspection_type?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

    const { allowed } = await checkRateLimit(supabaseUrl, serviceRoleKey, getClientIp(req), "chatbot-assistant");
    if (!allowed) return rateLimitResponse(corsHeaders);

    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const body = await req.json();

    if (body.action === "init") {
      const { session_id } = body;
      if (!session_id) throw new Error("session_id is required");

      const { data: conversation, error: convError } = await supabase
        .from("chatbot_conversations")
        .insert({ session_id, status: "active" })
        .select()
        .single();

      if (convError) throw convError;

      const welcomeMessage =
        "Hi! I'm here to help you schedule a roof inspection. I can check available dates and book an appointment for you. How can I assist you today?";

      await supabase.from("chatbot_messages").insert({
        conversation_id: conversation.id,
        role: "assistant",
        content: welcomeMessage,
      });

      return new Response(
        JSON.stringify({ conversation_id: conversation.id, message: welcomeMessage }),
        {
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const { conversation_id, message }: ChatRequest = body;

    const { data: conversation, error: convError } = await supabase
      .from("chatbot_conversations")
      .select("*")
      .eq("id", conversation_id)
      .maybeSingle();

    if (convError) throw convError;
    if (!conversation) throw new Error("Conversation not found");

    const { data: messages, error: msgError } = await supabase
      .from("chatbot_messages")
      .select("*")
      .eq("conversation_id", conversation_id)
      .order("created_at", { ascending: true });

    if (msgError) throw msgError;

    await supabase.from("chatbot_messages").insert({
      conversation_id,
      role: "user",
      content: message,
    });

    const context: ConversationContext = {
      conversation_id: conversation.id,
      customer_name: conversation.customer_name,
      customer_email: conversation.customer_email,
      customer_phone: conversation.customer_phone,
      address: conversation.address,
      city: conversation.city,
      preferred_date: conversation.preferred_date,
      preferred_time: conversation.preferred_time,
      inspection_type: conversation.inspection_type,
    };

    const response = await generateResponse(message, context, messages || [], supabase);

    await supabase.from("chatbot_messages").insert({
      conversation_id,
      role: "assistant",
      content: response.message,
    });

    await updateConversationContext(conversation_id, response.updates, supabase);

    return new Response(
      JSON.stringify({
        message: response.message,
        action: response.action,
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Chatbot error:", error);
    return new Response(
      JSON.stringify({
        message: "I apologize, but I'm having trouble processing your request. Please call us at (123) 456-7890 for immediate assistance.",
        error: error.message,
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});

async function generateResponse(
  userMessage: string,
  context: ConversationContext,
  conversationHistory: any[],
  supabase: any
) {
  const lowerMessage = userMessage.toLowerCase();

  if (!context.customer_name) {
    if (lowerMessage.includes("my name is") || lowerMessage.includes("i'm") || lowerMessage.includes("i am")) {
      const nameMatch = userMessage.match(/(?:my name is|i'm|i am)\s+([a-zA-Z\s]+)/i);
      const extractedName = nameMatch ? nameMatch[1].trim() : null;

      if (extractedName) {
        return {
          message: `Nice to meet you, ${extractedName}! To schedule your roof inspection, I'll need a few details. What's your email address?`,
          updates: { customer_name: extractedName },
          action: "collect_email",
        };
      }
    }
    return {
      message: "I'd be happy to help you schedule a roof inspection! To get started, may I have your name?",
      updates: {},
      action: "collect_name",
    };
  }

  if (!context.customer_email) {
    const emailMatch = userMessage.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/);
    if (emailMatch) {
      return {
        message: `Great! And what's the best phone number to reach you?`,
        updates: { customer_email: emailMatch[0] },
        action: "collect_phone",
      };
    }
    return {
      message: "Could you please provide your email address?",
      updates: {},
      action: "collect_email",
    };
  }

  if (!context.customer_phone) {
    const phoneMatch = userMessage.match(/(\d{3}[-.\s]?\d{3}[-.\s]?\d{4}|\(\d{3}\)\s*\d{3}[-.\s]?\d{4})/);
    if (phoneMatch) {
      return {
        message: `Perfect! Now, what type of inspection do you need?\n\n1. Residential Roof Inspection\n2. Commercial Roof Inspection\n3. Emergency Inspection\n\nYou can type the number or the name.`,
        updates: { customer_phone: phoneMatch[0] },
        action: "collect_inspection_type",
      };
    }
    return {
      message: "What's your phone number?",
      updates: {},
      action: "collect_phone",
    };
  }

  if (!context.inspection_type) {
    let inspectionType = "";
    if (lowerMessage.includes("residential") || lowerMessage.includes("1") || lowerMessage.includes("home") || lowerMessage.includes("house")) {
      inspectionType = "residential";
    } else if (lowerMessage.includes("commercial") || lowerMessage.includes("2") || lowerMessage.includes("business")) {
      inspectionType = "commercial";
    } else if (lowerMessage.includes("emergency") || lowerMessage.includes("3") || lowerMessage.includes("urgent")) {
      inspectionType = "emergency";
    }

    if (inspectionType) {
      const availableDates = await getNextAvailableDates(supabase, 7);
      const datesList = availableDates.map((d, i) => {
        const date = new Date(d.date);
        const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
        const monthDay = date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
        return `${i + 1}. ${dayName}, ${monthDay}`;
      }).join("\n");

      return {
        message: `Great! I can schedule a ${inspectionType} inspection for you. Here are our available dates:\n\n${datesList}\n\nWhich date works best for you? (Type the number or date)`,
        updates: { inspection_type: inspectionType },
        action: "collect_date",
      };
    }
    return {
      message: "Please choose:\n1. Residential\n2. Commercial\n3. Emergency",
      updates: {},
      action: "collect_inspection_type",
    };
  }

  if (!context.preferred_date) {
    const availableDates = await getNextAvailableDates(supabase, 7);

    let selectedDate = null;
    const numberMatch = userMessage.match(/(\d+)/);
    if (numberMatch) {
      const index = parseInt(numberMatch[1]) - 1;
      if (index >= 0 && index < availableDates.length) {
        selectedDate = availableDates[index].date;
      }
    }

    if (!selectedDate) {
      const dateMatch = userMessage.match(/\d{4}-\d{2}-\d{2}/);
      if (dateMatch) {
        selectedDate = dateMatch[0];
      }
    }

    if (selectedDate) {
      const slots = await getAvailableSlots(supabase, selectedDate);
      const availableSlots = slots.filter((s: any) => s.available);

      if (availableSlots.length === 0) {
        return {
          message: "I'm sorry, that date is fully booked. Please choose another date from the list above.",
          updates: {},
          action: "collect_date",
        };
      }

      const timesList = availableSlots.map((s: any, i: number) => {
        const time = formatTime(s.time);
        return `${i + 1}. ${time}`;
      }).join("\n");

      return {
        message: `Perfect! Here are the available times for ${new Date(selectedDate).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}:\n\n${timesList}\n\nWhich time works for you?`,
        updates: { preferred_date: selectedDate },
        action: "collect_time",
      };
    }
    return {
      message: "Please select a date by typing its number or the full date.",
      updates: {},
      action: "collect_date",
    };
  }

  if (!context.preferred_time) {
    const slots = await getAvailableSlots(supabase, context.preferred_date);
    const availableSlots = slots.filter((s: any) => s.available);

    let selectedTime = null;
    const numberMatch = userMessage.match(/(\d+)/);
    if (numberMatch) {
      const index = parseInt(numberMatch[1]) - 1;
      if (index >= 0 && index < availableSlots.length) {
        selectedTime = availableSlots[index].time;
      }
    }

    if (!selectedTime) {
      const timeMatch = userMessage.match(/(\d{1,2}):(\d{2})/);
      if (timeMatch) {
        selectedTime = `${timeMatch[1].padStart(2, "0")}:${timeMatch[2]}`;
      }
    }

    if (selectedTime) {
      return {
        message: `Excellent! Last question - what's the address where the inspection will take place?`,
        updates: { preferred_time: selectedTime },
        action: "collect_address",
      };
    }
    return {
      message: "Please select a time by typing its number or time (e.g., 2:00 PM).",
      updates: {},
      action: "collect_time",
    };
  }

  if (!context.address) {
    if (userMessage.length > 10) {
      return {
        message: `And which city is this property in?`,
        updates: { address: userMessage },
        action: "collect_city",
      };
    }
    return {
      message: "Please provide the full street address.",
      updates: {},
      action: "collect_address",
    };
  }

  if (!context.city) {
    if (userMessage.length > 2) {
      try {
        const { data: booking, error } = await supabase
          .from("inspection_bookings")
          .insert({
            conversation_id: context.conversation_id,
            customer_name: context.customer_name,
            customer_email: context.customer_email,
            customer_phone: context.customer_phone,
            address: context.address,
            city: userMessage,
            scheduled_date: context.preferred_date,
            scheduled_time: context.preferred_time,
            inspection_type: context.inspection_type,
            status: "pending",
          })
          .select()
          .single();

        if (error) throw error;

        try {
          await fetch(
            `${Deno.env.get("SUPABASE_URL")}/functions/v1/sync-outlook-calendar`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`,
              },
              body: JSON.stringify({ booking_id: booking.id }),
            }
          );
        } catch (syncError) {
          console.error("Calendar sync error:", syncError);
        }

        const date = new Date(context.preferred_date!);
        const formattedDate = date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
        const formattedTime = formatTime(context.preferred_time!);

        return {
          message: `Perfect! Your ${context.inspection_type} roof inspection is scheduled! 🎉\n\n📅 Date: ${formattedDate}\n⏰ Time: ${formattedTime}\n📍 Location: ${context.address}, ${userMessage}\n\nWe'll send a confirmation email to ${context.customer_email}. A team member will call you at ${context.customer_phone} the day before your appointment.\n\nIs there anything else I can help you with?`,
          updates: { city: userMessage },
          action: "booking_complete",
        };
      } catch (error) {
        console.error("Booking error:", error);
        return {
          message: "I encountered an error creating your booking. Please call us at (123) 456-7890 to complete your scheduling.",
          updates: {},
          action: "error",
        };
      }
    }
    return {
      message: "Please provide the city name.",
      updates: {},
      action: "collect_city",
    };
  }

  if (lowerMessage.includes("reschedule") || lowerMessage.includes("change")) {
    return {
      message: "To reschedule your appointment, please call us at (123) 456-7890.",
      updates: {},
      action: "help",
    };
  }

  return {
    message: "Your inspection is all scheduled! If you need anything else, feel free to ask or call us at (123) 456-7890.",
    updates: {},
    action: "complete",
  };
}

async function updateConversationContext(
  conversationId: string,
  updates: Record<string, any>,
  supabase: any
) {
  if (Object.keys(updates).length === 0) return;

  await supabase
    .from("chatbot_conversations")
    .update(updates)
    .eq("id", conversationId);
}

async function getNextAvailableDates(supabase: any, count: number) {
  const today = new Date();
  const dates = [];

  for (let i = 1; i <= 30 && dates.length < count; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dateStr = date.toISOString().split("T")[0];

    const { data, error } = await supabase
      .from("calendar_availability")
      .select("available_slots, blocked_slots")
      .eq("date", dateStr)
      .maybeSingle();

    if (!error && data) {
      const slots = await getAvailableSlots(supabase, dateStr);
      const hasAvailableSlots = slots.some((s: any) => s.available);
      if (hasAvailableSlots) {
        dates.push({ date: dateStr, slots });
      }
    }
  }

  return dates;
}

async function getAvailableSlots(supabase: any, date: string) {
  const { data: availability } = await supabase
    .from("calendar_availability")
    .select("available_slots, blocked_slots")
    .eq("date", date)
    .maybeSingle();

  if (!availability) return [];

  const availableSlots = availability.available_slots || [];
  const blockedSlots = availability.blocked_slots || [];

  const { data: bookings } = await supabase
    .from("inspection_bookings")
    .select("scheduled_time")
    .eq("scheduled_date", date)
    .in("status", ["pending", "confirmed"]);

  const bookedTimes = bookings?.map((b: any) => b.scheduled_time) || [];

  return availableSlots.map((time: string) => ({
    time,
    available: !blockedSlots.includes(time) && !bookedTimes.includes(time),
  }));
}

function formatTime(time: string): string {
  const [hours, minutes] = time.split(":");
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? "PM" : "AM";
  const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  return `${displayHour}:${minutes} ${ampm}`;
}
