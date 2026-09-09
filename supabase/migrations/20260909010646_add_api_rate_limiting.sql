/*
  # API Rate Limiting

  1. New Tables
    - `api_rate_limit_hits`
      - `id` (bigint, primary key, identity) - Unique identifier
      - `ip_address` (text) - Client IP address (from x-forwarded-for / cf-connecting-ip)
      - `function_name` (text) - Which edge function was called
      - `created_at` (timestamptz) - When the request was recorded

  2. Security
    - Enable RLS
    - No policies granted to anon/authenticated: this table is only ever
      read/written by edge functions using the service-role key, which
      bypasses RLS. Locking it down this way means it can never be read
      or tampered with from the browser even if someone tries to query
      it directly with the public anon key.

  3. Notes
    - Backs a simple sliding-window rate limiter: each allowed request
      inserts one row; a check counts rows for the same IP + function
      within the last hour. Stale rows are opportunistically deleted by
      the same helper so the table doesn't grow unbounded.
*/

CREATE TABLE IF NOT EXISTS api_rate_limit_hits (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  ip_address text NOT NULL,
  function_name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE api_rate_limit_hits ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS idx_rate_limit_lookup
  ON api_rate_limit_hits (function_name, ip_address, created_at);
