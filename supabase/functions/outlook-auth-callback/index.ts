import { createClient } from "npm:@supabase/supabase-js@2.57.4";
import { checkRateLimit, getClientIp, rateLimitResponse } from "../_shared/rateLimit.ts";
import { requireAdmin } from "../_shared/requireAdmin.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

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
    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const { allowed } = await checkRateLimit(supabaseUrl, serviceRoleKey, getClientIp(req), "outlook-auth-callback");
    if (!allowed) return rateLimitResponse(corsHeaders);

    // This exchanges an OAuth code for a token and writes it to
    // outlook_calendar_config with the service-role key, which bypasses
    // RLS - only the admin who owns that Outlook connection should be
    // able to trigger it. It's only ever called from the authenticated
    // admin panel, so this check should never actually block a real user.
    const admin = await requireAdmin(req, supabaseUrl, serviceRoleKey, corsHeaders);
    if (!admin.ok) return admin.response;

    const { code, redirect_uri, config_id } = await req.json();

    if (!code || !redirect_uri || !config_id) {
      throw new Error("Missing required parameters");
    }

    const { data: config, error: configError } = await supabase
      .from("outlook_calendar_config")
      .select("*")
      .eq("id", config_id)
      .maybeSingle();

    if (configError) throw configError;
    if (!config) throw new Error("Configuration not found");

    const clientSecret = Deno.env.get("OUTLOOK_CLIENT_SECRET");
    if (!clientSecret) {
      throw new Error("OUTLOOK_CLIENT_SECRET not configured");
    }

    const tokenEndpoint = `https://login.microsoftonline.com/${config.tenant_id}/oauth2/v2.0/token`;

    const params = new URLSearchParams({
      client_id: config.client_id,
      client_secret: clientSecret,
      code: code,
      redirect_uri: redirect_uri,
      grant_type: "authorization_code",
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
      const errorData = await response.json();
      throw new Error(`Token exchange failed: ${errorData.error_description || response.statusText}`);
    }

    const tokenData = await response.json();

    const expiresAt = new Date();
    expiresAt.setSeconds(expiresAt.getSeconds() + tokenData.expires_in);

    const { error: updateError } = await supabase
      .from("outlook_calendar_config")
      .update({
        access_token: tokenData.access_token,
        refresh_token: tokenData.refresh_token,
        token_expires_at: expiresAt.toISOString(),
        is_active: true,
      })
      .eq("id", config_id);

    if (updateError) throw updateError;

    return new Response(
      JSON.stringify({
        success: true,
        message: "Calendar authorized successfully",
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("OAuth callback error:", error);
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
