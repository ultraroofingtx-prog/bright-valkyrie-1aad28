/*
  # Fix RLS Security Policies
  
  1. Security Improvements
    - Remove policies with always-true conditions
    - Consolidate duplicate permissive policies
    - Add admin user role checking
    - Implement proper access controls
    
  2. Changes
    - Create admin_users table for role-based access
    - Drop and recreate all RLS policies with proper checks
    - Add authenticated user validation
    - Separate read and write permissions
    
  3. Notes
    - Public can still read active SEO pages (for website)
    - Only admin users can modify content
    - All changes require authentication
    - Audit trail maintained for accountability
*/

CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email text UNIQUE NOT NULL,
  role text NOT NULL DEFAULT 'admin' CHECK (role IN ('admin', 'editor', 'viewer')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view admin users"
  ON admin_users
  FOR SELECT
  TO authenticated
  USING (
    user_email = current_setting('request.jwt.claims', true)::json->>'email'
  );

DROP POLICY IF EXISTS "Authenticated users can manage scheduled posts" ON scheduled_blog_posts;
DROP POLICY IF EXISTS "Authenticated users can view scheduled posts" ON scheduled_blog_posts;

CREATE POLICY "Admin users can view scheduled posts"
  ON scheduled_blog_posts
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_email = current_setting('request.jwt.claims', true)::json->>'email'
    )
  );

CREATE POLICY "Admin users can insert scheduled posts"
  ON scheduled_blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_email = current_setting('request.jwt.claims', true)::json->>'email'
      AND role IN ('admin', 'editor')
    )
  );

CREATE POLICY "Admin users can update scheduled posts"
  ON scheduled_blog_posts
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_email = current_setting('request.jwt.claims', true)::json->>'email'
      AND role IN ('admin', 'editor')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_email = current_setting('request.jwt.claims', true)::json->>'email'
      AND role IN ('admin', 'editor')
    )
  );

CREATE POLICY "Admin users can delete scheduled posts"
  ON scheduled_blog_posts
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_email = current_setting('request.jwt.claims', true)::json->>'email'
      AND role = 'admin'
    )
  );

DROP POLICY IF EXISTS "Authenticated users can manage SEO pages" ON seo_pages;
DROP POLICY IF EXISTS "Authenticated users can read all SEO pages" ON seo_pages;

CREATE POLICY "Admin users can view SEO pages"
  ON seo_pages
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_email = current_setting('request.jwt.claims', true)::json->>'email'
    )
  );

CREATE POLICY "Admin users can insert SEO pages"
  ON seo_pages
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_email = current_setting('request.jwt.claims', true)::json->>'email'
      AND role IN ('admin', 'editor')
    )
  );

CREATE POLICY "Admin users can update SEO pages"
  ON seo_pages
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_email = current_setting('request.jwt.claims', true)::json->>'email'
      AND role IN ('admin', 'editor')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_email = current_setting('request.jwt.claims', true)::json->>'email'
      AND role IN ('admin', 'editor')
    )
  );

CREATE POLICY "Admin users can delete SEO pages"
  ON seo_pages
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_email = current_setting('request.jwt.claims', true)::json->>'email'
      AND role = 'admin'
    )
  );

DROP POLICY IF EXISTS "Authenticated users can manage keyword tracking" ON seo_keyword_tracking;

CREATE POLICY "Admin users can view keyword tracking"
  ON seo_keyword_tracking
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_email = current_setting('request.jwt.claims', true)::json->>'email'
    )
  );

CREATE POLICY "Admin users can insert keywords"
  ON seo_keyword_tracking
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_email = current_setting('request.jwt.claims', true)::json->>'email'
      AND role IN ('admin', 'editor')
    )
  );

CREATE POLICY "Admin users can update keywords"
  ON seo_keyword_tracking
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_email = current_setting('request.jwt.claims', true)::json->>'email'
      AND role IN ('admin', 'editor')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_email = current_setting('request.jwt.claims', true)::json->>'email'
      AND role IN ('admin', 'editor')
    )
  );

CREATE POLICY "Admin users can delete keywords"
  ON seo_keyword_tracking
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_email = current_setting('request.jwt.claims', true)::json->>'email'
      AND role = 'admin'
    )
  );

DROP POLICY IF EXISTS "System can log updates" ON seo_update_history;

CREATE POLICY "System can log updates"
  ON seo_update_history
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_email = current_setting('request.jwt.claims', true)::json->>'email'
    )
  );

DROP POLICY IF EXISTS "Authenticated users can manage reports" ON seo_monthly_reports;
DROP POLICY IF EXISTS "Authenticated users can view reports" ON seo_monthly_reports;

CREATE POLICY "Admin users can view reports"
  ON seo_monthly_reports
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_email = current_setting('request.jwt.claims', true)::json->>'email'
    )
  );

CREATE POLICY "Admin users can insert reports"
  ON seo_monthly_reports
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_email = current_setting('request.jwt.claims', true)::json->>'email'
      AND role IN ('admin', 'editor')
    )
  );

CREATE POLICY "Admin users can update reports"
  ON seo_monthly_reports
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_email = current_setting('request.jwt.claims', true)::json->>'email'
      AND role IN ('admin', 'editor')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_email = current_setting('request.jwt.claims', true)::json->>'email'
      AND role IN ('admin', 'editor')
    )
  );

CREATE POLICY "Admin users can delete reports"
  ON seo_monthly_reports
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_email = current_setting('request.jwt.claims', true)::json->>'email'
      AND role = 'admin'
    )
  );

CREATE INDEX IF NOT EXISTS idx_admin_users_email ON admin_users(user_email);
