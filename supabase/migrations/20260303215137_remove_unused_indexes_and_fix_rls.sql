/*
  # Remove Unused Indexes and Fix RLS Policies

  ## Changes
  
  1. **Remove Unused Indexes**
     - Drop idx_contact_submissions_created (unused)
     - Drop idx_contact_submissions_status (unused)
     - Drop idx_contact_submissions_email (unused)
     - Drop idx_admin_users_email (unused)
     - These indexes are not being used and add unnecessary overhead to INSERT/UPDATE operations
  
  2. **Fix "Always True" RLS Policies**
     - Contact submissions: The policy is intentionally permissive for public form submissions
       but we'll add basic validation to ensure required fields are present
     - SEO update history: Restrict to admin users only for better security
  
  ## Security Notes
  - Contact form submissions remain public but now validate required fields
  - SEO update history is now restricted to admin users only
  - Unused indexes removed to improve write performance
*/

-- ============================================================================
-- Drop unused indexes
-- ============================================================================

DROP INDEX IF EXISTS public.idx_contact_submissions_created;
DROP INDEX IF EXISTS public.idx_contact_submissions_status;
DROP INDEX IF EXISTS public.idx_contact_submissions_email;
DROP INDEX IF EXISTS public.idx_admin_users_email;

-- ============================================================================
-- Fix RLS policies with "always true" checks
-- ============================================================================

-- Drop existing policies that need fixing
DROP POLICY IF EXISTS "Anonymous users can submit contact forms" ON public.contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can log updates" ON public.seo_update_history;

-- Contact submissions: Public insert with field validation
-- Ensure required fields are present to prevent empty submissions
CREATE POLICY "Anonymous users can submit contact forms"
  ON public.contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    name IS NOT NULL AND 
    name != '' AND
    email IS NOT NULL AND 
    email != '' AND
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
    message IS NOT NULL AND 
    message != ''
  );

-- SEO update history: Restrict to admin users only
CREATE POLICY "Admins can log updates"
  ON public.seo_update_history
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.admin_users
      JOIN auth.users ON auth.users.email = admin_users.user_email
      WHERE auth.users.id = (select auth.uid())
    )
  );
