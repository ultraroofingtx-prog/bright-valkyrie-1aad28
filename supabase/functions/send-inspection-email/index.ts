import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";
import { checkRateLimit, getClientIp, rateLimitResponse } from "../_shared/rateLimit.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface InspectionRequest {
  name: string;
  email: string;
  phone: string;
  address: string;
  propertyType: string;
  message?: string;
  smsConsent?: boolean;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const { allowed } = await checkRateLimit(supabaseUrl, serviceRoleKey, getClientIp(req), "send-inspection-email");
    if (!allowed) return rateLimitResponse(corsHeaders);

    const data: InspectionRequest = await req.json();

    // Always save to database first so no lead is ever lost
    const supabase = createClient(supabaseUrl, serviceRoleKey);

    await supabase.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      property_type: data.propertyType,
      message: data.message || "",
      status: "pending",
      sms_consent: data.smsConsent === true,
    });

    // Attempt email delivery — non-fatal if it fails
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    let emailError: string | null = null;

    if (!resendApiKey) {
      emailError = "RESEND_API_KEY secret is not configured";
      console.error(emailError);
    } else {
      const emailBody = `
New Roof Inspection Request

Customer Information:
---------------------
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Property Address: ${data.address}
Property Type: ${data.propertyType}

Additional Details:
${data.message || "None provided"}

---------------------
Submitted: ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })}
      `.trim();

      // Try custom domain first, fall back to Resend's verified sender
      const senders = [
        "Ultra Roofing <noreply@ultraroofingtx.com>",
        "Ultra Roofing <onboarding@resend.dev>",
      ];

      for (const from of senders) {
        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from,
            to: ["office@ultraroofingtx.com"],
            reply_to: data.email,
            subject: `New Inspection Request - ${data.name}`,
            text: emailBody,
          }),
        });

        if (emailResponse.ok) {
          emailError = null;
          break;
        }

        const errorText = await emailResponse.text();
        emailError = `${emailResponse.status}: ${errorText}`;

        // Only retry on domain-related 403; bail on other errors
        if (emailResponse.status !== 403) break;
      }

      if (emailError) {
        console.error("Email delivery failed (submission saved to DB):", emailError);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Inspection request received. We'll contact you within 24 hours.",
        emailSent: !emailError,
        emailError: emailError,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error) {
    console.error("Error processing inspection request:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Failed to send inspection request",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
