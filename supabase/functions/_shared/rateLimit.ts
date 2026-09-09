import { createClient } from 'npm:@supabase/supabase-js@2';

const DEFAULT_LIMIT = 100;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

export function getClientIp(req: Request): string {
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) return forwardedFor.split(',')[0].trim();
  return req.headers.get('cf-connecting-ip') ?? req.headers.get('x-real-ip') ?? 'unknown';
}

/**
 * Sliding-window rate limit backed by api_rate_limit_hits.
 * Fails open (allows the request) if the DB check itself errors, so a
 * database hiccup can't take your API down.
 */
export async function checkRateLimit(
  supabaseUrl: string,
  serviceRoleKey: string,
  ip: string,
  functionName: string,
  limit: number = DEFAULT_LIMIT,
): Promise<{ allowed: boolean; remaining: number }> {
  const supabase = createClient(supabaseUrl, serviceRoleKey);
  const windowStart = new Date(Date.now() - WINDOW_MS).toISOString();

  const { count, error } = await supabase
    .from('api_rate_limit_hits')
    .select('*', { count: 'exact', head: true })
    .eq('function_name', functionName)
    .eq('ip_address', ip)
    .gte('created_at', windowStart);

  if (error) {
    console.error('rate limit check failed, failing open:', error.message);
    return { allowed: true, remaining: limit };
  }

  const currentCount = count ?? 0;
  if (currentCount >= limit) {
    return { allowed: false, remaining: 0 };
  }

  await supabase.from('api_rate_limit_hits').insert({ ip_address: ip, function_name: functionName });
  // Opportunistic cleanup so the table doesn't grow unbounded; cheap at this traffic scale.
  supabase
    .from('api_rate_limit_hits')
    .delete()
    .eq('function_name', functionName)
    .lt('created_at', windowStart)
    .then(() => {}, () => {});

  return { allowed: true, remaining: limit - currentCount - 1 };
}

export function rateLimitResponse(corsHeaders: Record<string, string>): Response {
  return new Response(
    JSON.stringify({ error: 'Too many requests. Please try again in a bit.' }),
    {
      status: 429,
      headers: { ...corsHeaders, 'Content-Type': 'application/json', 'Retry-After': '3600' },
    },
  );
}
