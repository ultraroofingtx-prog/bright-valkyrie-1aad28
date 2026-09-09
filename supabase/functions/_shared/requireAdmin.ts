import { createClient } from 'npm:@supabase/supabase-js@2';

type AdminCheckResult =
  | { ok: true; email: string }
  | { ok: false; response: Response };

/**
 * Verifies the caller's Authorization Bearer JWT belongs to a logged-in
 * Supabase user listed in admin_users. Use this in any function that
 * uses the service-role key to bypass RLS for a privileged action -
 * the service-role key itself proves nothing about who is calling.
 */
export async function requireAdmin(
  req: Request,
  supabaseUrl: string,
  serviceRoleKey: string,
  corsHeaders: Record<string, string>,
): Promise<AdminCheckResult> {
  const authHeader = req.headers.get('Authorization');
  const jwt = authHeader?.replace(/^Bearer\s+/i, '');

  if (!jwt) {
    return {
      ok: false,
      response: new Response(
        JSON.stringify({ error: 'Missing Authorization header' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      ),
    };
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey);
  const { data: userData, error: userError } = await supabase.auth.getUser(jwt);

  if (userError || !userData?.user?.email) {
    return {
      ok: false,
      response: new Response(
        JSON.stringify({ error: 'Invalid or expired session' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      ),
    };
  }

  const { data: admin } = await supabase
    .from('admin_users')
    .select('id')
    .eq('user_email', userData.user.email)
    .maybeSingle();

  if (!admin) {
    return {
      ok: false,
      response: new Response(
        JSON.stringify({ error: 'Forbidden: admin access required' }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      ),
    };
  }

  return { ok: true, email: userData.user.email };
}
