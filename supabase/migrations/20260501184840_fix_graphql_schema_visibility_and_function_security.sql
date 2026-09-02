/*
  # Fix GraphQL Schema Visibility and Function Security

  ## Summary
  Revokes public GraphQL schema visibility for all sensitive tables and secures
  SECURITY DEFINER trigger functions that should not be directly callable via RPC.

  ## Changes

  ### 1. Revoke SELECT from `anon` and `authenticated` on all sensitive tables
  These tables contain private/admin data and should not be visible in the
  GraphQL schema to unauthenticated or arbitrary authenticated users:
  - admin_users
  - calendar_availability
  - calendar_sync_log
  - chatbot_conversations
  - chatbot_messages
  - contact_submissions
  - inspection_bookings
  - outlook_calendar_config
  - scheduled_blog_posts
  - seo_keyword_tracking
  - seo_monthly_reports
  - seo_pages
  - seo_update_history

  ### 2. Revoke EXECUTE on SECURITY DEFINER functions from `anon` and `authenticated`
  These are internal trigger functions that should never be called directly via
  the REST API. Revoking EXECUTE removes them from the publicly callable RPC surface:
  - notify_booking_created()
  - update_contact_submission_timestamp()
  - update_updated_at_column()

  ### Notes
  - RLS policies are untouched; this only removes the GraphQL/REST visibility
  - The functions will continue to work as triggers (triggers run as the definer,
    not via the public RPC endpoint)
  - Table access via the service_role key is unaffected
*/

-- ============================================================
-- Revoke SELECT from anon on all sensitive tables
-- ============================================================
REVOKE SELECT ON public.admin_users FROM anon;
REVOKE SELECT ON public.calendar_availability FROM anon;
REVOKE SELECT ON public.calendar_sync_log FROM anon;
REVOKE SELECT ON public.chatbot_conversations FROM anon;
REVOKE SELECT ON public.chatbot_messages FROM anon;
REVOKE SELECT ON public.contact_submissions FROM anon;
REVOKE SELECT ON public.inspection_bookings FROM anon;
REVOKE SELECT ON public.outlook_calendar_config FROM anon;
REVOKE SELECT ON public.scheduled_blog_posts FROM anon;
REVOKE SELECT ON public.seo_keyword_tracking FROM anon;
REVOKE SELECT ON public.seo_monthly_reports FROM anon;
REVOKE SELECT ON public.seo_pages FROM anon;
REVOKE SELECT ON public.seo_update_history FROM anon;

-- ============================================================
-- Revoke SELECT from authenticated on all sensitive tables
-- ============================================================
REVOKE SELECT ON public.admin_users FROM authenticated;
REVOKE SELECT ON public.calendar_availability FROM authenticated;
REVOKE SELECT ON public.calendar_sync_log FROM authenticated;
REVOKE SELECT ON public.chatbot_conversations FROM authenticated;
REVOKE SELECT ON public.chatbot_messages FROM authenticated;
REVOKE SELECT ON public.contact_submissions FROM authenticated;
REVOKE SELECT ON public.inspection_bookings FROM authenticated;
REVOKE SELECT ON public.outlook_calendar_config FROM authenticated;
REVOKE SELECT ON public.scheduled_blog_posts FROM authenticated;
REVOKE SELECT ON public.seo_keyword_tracking FROM authenticated;
REVOKE SELECT ON public.seo_monthly_reports FROM authenticated;
REVOKE SELECT ON public.seo_pages FROM authenticated;
REVOKE SELECT ON public.seo_update_history FROM authenticated;

-- ============================================================
-- Revoke EXECUTE on SECURITY DEFINER functions from public roles
-- These are trigger functions and must not be callable via RPC
-- ============================================================
REVOKE EXECUTE ON FUNCTION public.notify_booking_created() FROM anon;
REVOKE EXECUTE ON FUNCTION public.notify_booking_created() FROM authenticated;

REVOKE EXECUTE ON FUNCTION public.update_contact_submission_timestamp() FROM anon;
REVOKE EXECUTE ON FUNCTION public.update_contact_submission_timestamp() FROM authenticated;

REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM anon;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM authenticated;
