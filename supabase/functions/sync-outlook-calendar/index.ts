import { createClient } from "npm:@supabase/supabase-js@2.57.4";
import { checkRateLimit, getClientIp, rateLimitResponse } from "../_shared/rateLimit.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface BookingData {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  address: string;
  city: string;
  scheduled_date: string;
  scheduled_time: string;
  inspection_type: string;
  notes?: string;
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

    const { allowed } = await checkRateLimit(supabaseUrl, serviceRoleKey, getClientIp(req), "sync-outlook-calendar");
    if (!allowed) return rateLimitResponse(corsHeaders);

    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const { booking_id } = await req.json();

    const { data: booking, error: bookingError } = await supabase
      .from("inspection_bookings")
      .select("*")
      .eq("id", booking_id)
      .maybeSingle();

    if (bookingError) throw bookingError;
    if (!booking) throw new Error("Booking not found");

    const { data: config, error: configError } = await supabase
      .from("outlook_calendar_config")
      .select("*")
      .eq("is_active", true)
      .maybeSingle();

    if (configError) throw configError;
    if (!config) {
      throw new Error("Outlook Calendar not configured");
    }

    let accessToken = config.access_token;
    const tokenExpired = new Date(config.token_expires_at) < new Date();

    if (tokenExpired && config.refresh_token) {
      accessToken = await refreshAccessToken(
        config.client_id,
        config.refresh_token,
        config.tenant_id,
        supabase,
        config.id
      );
    }

    const eventId = await createOutlookEvent(booking, accessToken);

    await supabase.from("calendar_sync_log").insert({
      booking_id: booking.id,
      outlook_event_id: eventId,
      sync_status: "success",
      synced_at: new Date().toISOString(),
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Booking synced to Outlook Calendar",
        event_id: eventId,
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Outlook sync error:", error);

    const { booking_id } = await req.json().catch(() => ({ booking_id: null }));
    if (booking_id) {
      const supabase = createClient(
        Deno.env.get("SUPABASE_URL") ?? "",
        Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
      );

      await supabase.from("calendar_sync_log").insert({
        booking_id,
        sync_status: "failed",
        error_message: error.message,
        synced_at: new Date().toISOString(),
      });
    }

    return new Response(
      JSON.stringify({
        success: false,
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

async function createOutlookEvent(
  booking: BookingData,
  accessToken: string
): Promise<string> {
  const dateTime = `${booking.scheduled_date}T${booking.scheduled_time}:00`;
  const endDateTime = calculateEndTime(booking.scheduled_date, booking.scheduled_time);

  const event = {
    subject: `Roof Inspection - ${booking.customer_name}`,
    body: {
      contentType: "HTML",
      content: `
        <h3>Roof Inspection Appointment</h3>
        <p><strong>Customer:</strong> ${booking.customer_name}</p>
        <p><strong>Email:</strong> ${booking.customer_email}</p>
        <p><strong>Phone:</strong> ${booking.customer_phone}</p>
        <p><strong>Location:</strong> ${booking.address}, ${booking.city}</p>
        <p><strong>Inspection Type:</strong> ${booking.inspection_type}</p>
        ${booking.notes ? `<p><strong>Notes:</strong> ${booking.notes}</p>` : ""}
      `,
    },
    start: {
      dateTime: dateTime,
      timeZone: "America/Chicago",
    },
    end: {
      dateTime: endDateTime,
      timeZone: "America/Chicago",
    },
    location: {
      displayName: `${booking.address}, ${booking.city}`,
    },
    attendees: [
      {
        emailAddress: {
          address: booking.customer_email,
          name: booking.customer_name,
        },
        type: "required",
      },
    ],
    isReminderOn: true,
    reminderMinutesBeforeStart: 60,
  };

  const response = await fetch(
    "https://graph.microsoft.com/v1.0/me/events",
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Failed to create Outlook event: ${error.error?.message || response.statusText}`);
  }

  const data = await response.json();
  return data.id;
}

async function refreshAccessToken(
  clientId: string,
  refreshToken: string,
  tenantId: string,
  supabase: any,
  configId: string
): Promise<string> {
  const clientSecret = Deno.env.get("OUTLOOK_CLIENT_SECRET");
  if (!clientSecret) {
    throw new Error("OUTLOOK_CLIENT_SECRET not configured");
  }

  const tokenEndpoint = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

  const params = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    grant_type: "refresh_token",
    scope: "https://graph.microsoft.com/Calendars.ReadWrite offline_access",
  });

  const response = await fetch(tokenEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  if (!response.ok) {
    throw new Error("Failed to refresh access token");
  }

  const data = await response.json();

  const expiresAt = new Date();
  expiresAt.setSeconds(expiresAt.getSeconds() + data.expires_in);

  await supabase
    .from("outlook_calendar_config")
    .update({
      access_token: data.access_token,
      refresh_token: data.refresh_token || refreshToken,
      token_expires_at: expiresAt.toISOString(),
    })
    .eq("id", configId);

  return data.access_token;
}

function calculateEndTime(date: string, time: string): string {
  const dateTime = new Date(`${date}T${time}:00`);
  dateTime.setHours(dateTime.getHours() + 2);
  return dateTime.toISOString().slice(0, 19);
}
