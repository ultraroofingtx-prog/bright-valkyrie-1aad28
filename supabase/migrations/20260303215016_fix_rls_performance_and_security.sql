/*
  # Fix RLS Performance and Security Issues

  ## Performance Optimizations
  
  1. **RLS Policy Optimization**
     - Replace all `auth.uid()` calls with `(select auth.uid())` to prevent re-evaluation per row
     - This applies to all tables: scheduled_blog_posts, seo_pages, seo_keyword_tracking, 
       seo_update_history, seo_monthly_reports, admin_users, contact_submissions
  
  2. **Remove Duplicate Policies**
     - Consolidate multiple permissive policies into single policies
     - Remove redundant "Authenticated users" policies (admin policies are sufficient)
  
  ## Security Fixes
  
  3. **Contact Submissions RLS**
     - Replace the "always true" policy with proper anon-only insert policy
     - Maintain security while allowing public form submissions
  
  4. **Function Search Path**
     - Fix mutable search_path in update_contact_submission_timestamp function
  
  5. **Admin Authentication**
     - Use email-based authentication matching auth.users.email with admin_users.user_email
  
  ## Notes
  - All existing policies are dropped and recreated with optimized syntax
  - Admin access is properly restricted to users in admin_users table
  - Public contact form submissions remain functional
*/

-- ============================================================================
-- Drop all existing policies
-- ============================================================================

-- scheduled_blog_posts policies
DROP POLICY IF EXISTS "Authenticated users can select scheduled posts" ON public.scheduled_blog_posts;
DROP POLICY IF EXISTS "Authenticated users can insert scheduled posts" ON public.scheduled_blog_posts;
DROP POLICY IF EXISTS "Authenticated users can update scheduled posts" ON public.scheduled_blog_posts;
DROP POLICY IF EXISTS "Authenticated users can delete scheduled posts" ON public.scheduled_blog_posts;
DROP POLICY IF EXISTS "Admin users can view scheduled posts" ON public.scheduled_blog_posts;
DROP POLICY IF EXISTS "Admin users can insert scheduled posts" ON public.scheduled_blog_posts;
DROP POLICY IF EXISTS "Admin users can update scheduled posts" ON public.scheduled_blog_posts;
DROP POLICY IF EXISTS "Admin users can delete scheduled posts" ON public.scheduled_blog_posts;

-- seo_pages policies
DROP POLICY IF EXISTS "Authenticated users can select SEO pages" ON public.seo_pages;
DROP POLICY IF EXISTS "Authenticated users can insert SEO pages" ON public.seo_pages;
DROP POLICY IF EXISTS "Authenticated users can update SEO pages" ON public.seo_pages;
DROP POLICY IF EXISTS "Authenticated users can delete SEO pages" ON public.seo_pages;
DROP POLICY IF EXISTS "Admin users can view SEO pages" ON public.seo_pages;
DROP POLICY IF EXISTS "Admin users can insert SEO pages" ON public.seo_pages;
DROP POLICY IF EXISTS "Admin users can update SEO pages" ON public.seo_pages;
DROP POLICY IF EXISTS "Admin users can delete SEO pages" ON public.seo_pages;

-- seo_keyword_tracking policies
DROP POLICY IF EXISTS "Authenticated users can select keywords" ON public.seo_keyword_tracking;
DROP POLICY IF EXISTS "Authenticated users can insert keywords" ON public.seo_keyword_tracking;
DROP POLICY IF EXISTS "Authenticated users can update keywords" ON public.seo_keyword_tracking;
DROP POLICY IF EXISTS "Authenticated users can delete keywords" ON public.seo_keyword_tracking;
DROP POLICY IF EXISTS "Admin users can view keyword tracking" ON public.seo_keyword_tracking;
DROP POLICY IF EXISTS "Admin users can insert keywords" ON public.seo_keyword_tracking;
DROP POLICY IF EXISTS "Admin users can update keywords" ON public.seo_keyword_tracking;
DROP POLICY IF EXISTS "Admin users can delete keywords" ON public.seo_keyword_tracking;

-- seo_update_history policies
DROP POLICY IF EXISTS "Authenticated users can view update history" ON public.seo_update_history;
DROP POLICY IF EXISTS "Authenticated users can log updates" ON public.seo_update_history;
DROP POLICY IF EXISTS "System can log updates" ON public.seo_update_history;

-- seo_monthly_reports policies
DROP POLICY IF EXISTS "Authenticated users can select reports" ON public.seo_monthly_reports;
DROP POLICY IF EXISTS "Authenticated users can insert reports" ON public.seo_monthly_reports;
DROP POLICY IF EXISTS "Authenticated users can update reports" ON public.seo_monthly_reports;
DROP POLICY IF EXISTS "Authenticated users can delete reports" ON public.seo_monthly_reports;
DROP POLICY IF EXISTS "Admin users can view reports" ON public.seo_monthly_reports;
DROP POLICY IF EXISTS "Admin users can insert reports" ON public.seo_monthly_reports;
DROP POLICY IF EXISTS "Admin users can update reports" ON public.seo_monthly_reports;
DROP POLICY IF EXISTS "Admin users can delete reports" ON public.seo_monthly_reports;

-- admin_users policies
DROP POLICY IF EXISTS "Admins can view admin users" ON public.admin_users;

-- contact_submissions policies
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON public.contact_submissions;
DROP POLICY IF EXISTS "Admin users can view submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Admin users can update submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Admin users can delete submissions" ON public.contact_submissions;

-- ============================================================================
-- Create optimized policies with (select auth.uid())
-- ============================================================================

-- scheduled_blog_posts: Admin-only access
CREATE POLICY "Admins have full access to scheduled posts"
  ON public.scheduled_blog_posts
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users
      JOIN auth.users ON auth.users.email = admin_users.user_email
      WHERE auth.users.id = (select auth.uid())
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.admin_users
      JOIN auth.users ON auth.users.email = admin_users.user_email
      WHERE auth.users.id = (select auth.uid())
    )
  );

-- seo_pages: Admin-only access
CREATE POLICY "Admins have full access to SEO pages"
  ON public.seo_pages
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users
      JOIN auth.users ON auth.users.email = admin_users.user_email
      WHERE auth.users.id = (select auth.uid())
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.admin_users
      JOIN auth.users ON auth.users.email = admin_users.user_email
      WHERE auth.users.id = (select auth.uid())
    )
  );

-- seo_keyword_tracking: Admin-only access
CREATE POLICY "Admins have full access to keyword tracking"
  ON public.seo_keyword_tracking
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users
      JOIN auth.users ON auth.users.email = admin_users.user_email
      WHERE auth.users.id = (select auth.uid())
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.admin_users
      JOIN auth.users ON auth.users.email = admin_users.user_email
      WHERE auth.users.id = (select auth.uid())
    )
  );

-- seo_update_history: Admin read, authenticated insert
CREATE POLICY "Admins can view update history"
  ON public.seo_update_history
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users
      JOIN auth.users ON auth.users.email = admin_users.user_email
      WHERE auth.users.id = (select auth.uid())
    )
  );

CREATE POLICY "Authenticated users can log updates"
  ON public.seo_update_history
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- seo_monthly_reports: Admin-only access
CREATE POLICY "Admins have full access to monthly reports"
  ON public.seo_monthly_reports
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users
      JOIN auth.users ON auth.users.email = admin_users.user_email
      WHERE auth.users.id = (select auth.uid())
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.admin_users
      JOIN auth.users ON auth.users.email = admin_users.user_email
      WHERE auth.users.id = (select auth.uid())
    )
  );

-- admin_users: Admins can view other admins
CREATE POLICY "Admins can view admin users"
  ON public.admin_users
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users AS au
      JOIN auth.users ON auth.users.email = au.user_email
      WHERE auth.users.id = (select auth.uid())
    )
  );

-- contact_submissions: Public insert (anon only), admin read/update/delete
CREATE POLICY "Anonymous users can submit contact forms"
  ON public.contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Admins can view contact submissions"
  ON public.contact_submissions
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users
      JOIN auth.users ON auth.users.email = admin_users.user_email
      WHERE auth.users.id = (select auth.uid())
    )
  );

CREATE POLICY "Admins can update contact submissions"
  ON public.contact_submissions
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users
      JOIN auth.users ON auth.users.email = admin_users.user_email
      WHERE auth.users.id = (select auth.uid())
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.admin_users
      JOIN auth.users ON auth.users.email = admin_users.user_email
      WHERE auth.users.id = (select auth.uid())
    )
  );

CREATE POLICY "Admins can delete contact submissions"
  ON public.contact_submissions
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users
      JOIN auth.users ON auth.users.email = admin_users.user_email
      WHERE auth.users.id = (select auth.uid())
    )
  );

-- ============================================================================
-- Fix function search path
-- ============================================================================

CREATE OR REPLACE FUNCTION public.update_contact_submission_timestamp()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;
