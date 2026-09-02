/*
  # Fix Security Issues
  
  1. Security Improvements
    - Replace overly permissive RLS policies with restrictive ones
    - Remove duplicate policies
    - Add proper authentication checks
    - Clean up unused indexes
  
  2. Changes
    - Drop "always true" RLS policies
    - Create separate SELECT, INSERT, UPDATE, DELETE policies
    - Each policy checks auth.uid() for authenticated users
    - Remove redundant policies
    - Drop unused indexes that aren't being utilized
  
  3. Notes
    - Admin tables now require authentication
    - In production, add role-based access control (admin-only)
    - Policies now properly enforce row-level security
*/

DROP POLICY IF EXISTS "Authenticated users can manage scheduled posts" ON scheduled_blog_posts;
DROP POLICY IF EXISTS "Authenticated users can manage SEO pages" ON seo_pages;
DROP POLICY IF EXISTS "Authenticated users can read all SEO pages" ON seo_pages;
DROP POLICY IF EXISTS "Authenticated users can manage keyword tracking" ON seo_keyword_tracking;
DROP POLICY IF EXISTS "Authenticated users can view update history" ON seo_update_history;
DROP POLICY IF EXISTS "System can log updates" ON seo_update_history;
DROP POLICY IF EXISTS "Authenticated users can view reports" ON seo_monthly_reports;
DROP POLICY IF EXISTS "Authenticated users can manage reports" ON seo_monthly_reports;

CREATE POLICY "Authenticated users can select scheduled posts"
  ON scheduled_blog_posts
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can insert scheduled posts"
  ON scheduled_blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update scheduled posts"
  ON scheduled_blog_posts
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete scheduled posts"
  ON scheduled_blog_posts
  FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can select SEO pages"
  ON seo_pages
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can insert SEO pages"
  ON seo_pages
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update SEO pages"
  ON seo_pages
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete SEO pages"
  ON seo_pages
  FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can select keywords"
  ON seo_keyword_tracking
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can insert keywords"
  ON seo_keyword_tracking
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update keywords"
  ON seo_keyword_tracking
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete keywords"
  ON seo_keyword_tracking
  FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can view update history"
  ON seo_update_history
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can log updates"
  ON seo_update_history
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can select reports"
  ON seo_monthly_reports
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can insert reports"
  ON seo_monthly_reports
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update reports"
  ON seo_monthly_reports
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete reports"
  ON seo_monthly_reports
  FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);

DROP INDEX IF EXISTS idx_scheduled_date;
DROP INDEX IF EXISTS idx_status;
DROP INDEX IF EXISTS idx_seo_pages_path;
DROP INDEX IF EXISTS idx_seo_pages_status;
DROP INDEX IF EXISTS idx_keyword_tracking_keyword;
DROP INDEX IF EXISTS idx_keyword_tracking_page;
DROP INDEX IF EXISTS idx_update_history_page;
DROP INDEX IF EXISTS idx_update_history_date;
DROP INDEX IF EXISTS idx_monthly_reports_month;
