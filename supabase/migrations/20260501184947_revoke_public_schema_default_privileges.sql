/*
  # Revoke Public Schema Default Privileges and Harden Table/Function Security

  ## Problem
  Supabase projects created before a certain date have overly broad default privileges
  on the public schema: `anon` and `authenticated` roles receive ALL privileges
  (SELECT, INSERT, UPDATE, DELETE, EXECUTE, etc.) on every new table and function
  by default. This causes all tables and SECURITY DEFINER functions to be visible
  and callable via the GraphQL schema and REST API even when RLS is enabled.

  ## Changes

  ### 1. Alter default privileges
  Remove the automatic grant of ALL on tables and functions in the public schema
  for `anon` and `authenticated` roles. New tables will no longer inherit these
  broad privileges.

  ### 2. Revoke ALL on specific sensitive tables from anon and authenticated
  Ensures the current tables are locked down regardless of how privileges were
  previously granted (explicit or via default).

  ### 3. Revoke EXECUTE on SECURITY DEFINER trigger functions
  Removes the RPC-callable surface for internal trigger functions that should
  never be directly invoked.

  ## Security Notes
  - RLS policies are untouched; this only closes the GraphQL/REST visibility gap
  - service_role access is unaffected
  - Edge functions using service_role key continue to work normally
  - Trigger functions continue to fire normally (triggers bypass EXECUTE grants)
*/

-- ============================================================
-- 1. Fix default privileges going forward
--    Remove ALL from anon/authenticated for tables and functions
-- ============================================================
ALTER DEFAULT PRIVILEGES IN SCHEMA public REVOKE ALL ON TABLES FROM anon;
ALTER DEFAULT PRIVILEGES IN SCHEMA public REVOKE ALL ON TABLES FROM authenticated;
ALTER DEFAULT PRIVILEGES IN SCHEMA public REVOKE ALL ON FUNCTIONS FROM anon;
ALTER DEFAULT PRIVILEGES IN SCHEMA public REVOKE ALL ON FUNCTIONS FROM authenticated;
ALTER DEFAULT PRIVILEGES IN SCHEMA public REVOKE ALL ON SEQUENCES FROM anon;
ALTER DEFAULT PRIVILEGES IN SCHEMA public REVOKE ALL ON SEQUENCES FROM authenticated;

-- ============================================================
-- 2. Revoke ALL on the specific sensitive tables (belt + suspenders)
-- ============================================================
REVOKE ALL ON public.admin_users FROM anon, authenticated;
REVOKE ALL ON public.calendar_availability FROM anon, authenticated;
REVOKE ALL ON public.calendar_sync_log FROM anon, authenticated;
REVOKE ALL ON public.chatbot_conversations FROM anon, authenticated;
REVOKE ALL ON public.chatbot_messages FROM anon, authenticated;
REVOKE ALL ON public.contact_submissions FROM anon, authenticated;
REVOKE ALL ON public.inspection_bookings FROM anon, authenticated;
REVOKE ALL ON public.outlook_calendar_config FROM anon, authenticated;
REVOKE ALL ON public.scheduled_blog_posts FROM anon, authenticated;
REVOKE ALL ON public.seo_keyword_tracking FROM anon, authenticated;
REVOKE ALL ON public.seo_monthly_reports FROM anon, authenticated;
REVOKE ALL ON public.seo_pages FROM anon, authenticated;
REVOKE ALL ON public.seo_update_history FROM anon, authenticated;

-- ============================================================
-- 3. Revoke EXECUTE on SECURITY DEFINER trigger functions
-- ============================================================
REVOKE EXECUTE ON FUNCTION public.notify_booking_created() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.update_contact_submission_timestamp() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM anon, authenticated, public;
