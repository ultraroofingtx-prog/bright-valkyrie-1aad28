/*
  # SEO Management System
  
  1. New Tables
    - `seo_pages`
      - `id` (uuid, primary key) - Unique identifier
      - `page_path` (text, unique) - URL path (e.g., "/", "/about", "/service-areas/dallas")
      - `page_name` (text) - Human-readable page name
      - `title` (text) - SEO title tag
      - `description` (text) - Meta description
      - `keywords` (text array) - Target keywords
      - `h1_heading` (text) - Main H1 heading
      - `og_title` (text) - Open Graph title
      - `og_description` (text) - Open Graph description
      - `og_image` (text) - Open Graph image URL
      - `status` (text) - active, review, archived
      - `last_updated` (timestamptz) - Last update time
      - `created_at` (timestamptz) - Record creation time
      
    - `seo_keyword_tracking`
      - `id` (uuid, primary key) - Unique identifier
      - `keyword` (text) - The keyword being tracked
      - `page_path` (text) - Associated page
      - `search_volume` (integer) - Monthly search volume estimate
      - `difficulty` (integer) - Keyword difficulty (1-100)
      - `priority` (text) - high, medium, low
      - `status` (text) - active, monitoring, retired
      - `notes` (text) - Additional notes
      - `created_at` (timestamptz) - Record creation time
      - `updated_at` (timestamptz) - Last update time
      
    - `seo_update_history`
      - `id` (uuid, primary key) - Unique identifier
      - `page_path` (text) - Page that was updated
      - `field_updated` (text) - Which field changed
      - `old_value` (text) - Previous value
      - `new_value` (text) - New value
      - `update_type` (text) - manual, automated, scheduled
      - `updated_by` (text) - Who/what made the change
      - `created_at` (timestamptz) - When the change happened
      
    - `seo_monthly_reports`
      - `id` (uuid, primary key) - Unique identifier
      - `report_month` (date) - Month of report (first day of month)
      - `total_pages` (integer) - Total pages tracked
      - `pages_updated` (integer) - Pages updated this month
      - `top_keywords` (jsonb) - Array of top performing keywords
      - `recommendations` (text) - AI-generated recommendations
      - `status` (text) - draft, finalized
      - `created_at` (timestamptz) - Report creation time
      
  2. Security
    - Enable RLS on all tables
    - Public can read active SEO pages
    - Authenticated users can manage SEO data
    
  3. Notes
    - Supports automated monthly SEO updates
    - Tracks keyword performance and changes
    - Maintains complete audit history
    - Generates monthly optimization reports
*/

CREATE TABLE IF NOT EXISTS seo_pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_path text UNIQUE NOT NULL,
  page_name text NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  keywords text[] DEFAULT ARRAY[]::text[],
  h1_heading text,
  og_title text,
  og_description text,
  og_image text,
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'review', 'archived')),
  last_updated timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS seo_keyword_tracking (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  keyword text NOT NULL,
  page_path text,
  search_volume integer DEFAULT 0,
  difficulty integer DEFAULT 50,
  priority text NOT NULL DEFAULT 'medium' CHECK (priority IN ('high', 'medium', 'low')),
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'monitoring', 'retired')),
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS seo_update_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_path text NOT NULL,
  field_updated text NOT NULL,
  old_value text,
  new_value text,
  update_type text NOT NULL DEFAULT 'manual' CHECK (update_type IN ('manual', 'automated', 'scheduled')),
  updated_by text DEFAULT 'system',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS seo_monthly_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  report_month date NOT NULL UNIQUE,
  total_pages integer DEFAULT 0,
  pages_updated integer DEFAULT 0,
  top_keywords jsonb DEFAULT '[]'::jsonb,
  recommendations text,
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'finalized')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE seo_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE seo_keyword_tracking ENABLE ROW LEVEL SECURITY;
ALTER TABLE seo_update_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE seo_monthly_reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read active SEO pages"
  ON seo_pages
  FOR SELECT
  TO anon
  USING (status = 'active');

CREATE POLICY "Authenticated users can read all SEO pages"
  ON seo_pages
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage SEO pages"
  ON seo_pages
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage keyword tracking"
  ON seo_keyword_tracking
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view update history"
  ON seo_update_history
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "System can log updates"
  ON seo_update_history
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view reports"
  ON seo_monthly_reports
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage reports"
  ON seo_monthly_reports
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_seo_pages_path ON seo_pages(page_path);
CREATE INDEX IF NOT EXISTS idx_seo_pages_status ON seo_pages(status);
CREATE INDEX IF NOT EXISTS idx_keyword_tracking_keyword ON seo_keyword_tracking(keyword);
CREATE INDEX IF NOT EXISTS idx_keyword_tracking_page ON seo_keyword_tracking(page_path);
CREATE INDEX IF NOT EXISTS idx_update_history_page ON seo_update_history(page_path);
CREATE INDEX IF NOT EXISTS idx_update_history_date ON seo_update_history(created_at);
CREATE INDEX IF NOT EXISTS idx_monthly_reports_month ON seo_monthly_reports(report_month);

INSERT INTO seo_pages (page_path, page_name, title, description, keywords, h1_heading, og_title, og_description) VALUES
  (
    '/',
    'Home Page',
    'Ultra Roofing - Professional Roofing Services in Dallas-Fort Worth | #1 Rated',
    'Ultra Roofing provides expert residential and commercial roofing services in DFW. Licensed, insured, and locally trusted for roof repair, replacement, and maintenance.',
    ARRAY['roofing Dallas', 'Fort Worth roofing', 'DFW roofer', 'roof replacement', 'roof repair', 'commercial roofing', 'residential roofing'],
    'Dallas-Fort Worth''s Most Trusted Roofing Company',
    'Ultra Roofing - #1 Rated Roofer in Dallas-Fort Worth',
    'Award-winning roofing company serving DFW. Expert roof repair, replacement, and maintenance. Licensed, insured, and locally trusted.'
  ),
  (
    '/services',
    'Services Page',
    'Roofing Services Dallas Fort Worth | Repair, Replacement, Maintenance',
    'Complete roofing solutions for DFW homes and businesses. Roof repair, replacement, storm damage restoration, maintenance, and emergency services. Free estimates.',
    ARRAY['roofing services', 'roof repair DFW', 'roof replacement Dallas', 'storm damage repair', 'emergency roofing', 'roof maintenance'],
    'Comprehensive Roofing Services',
    'Professional Roofing Services in Dallas-Fort Worth',
    'Expert roof repair, replacement, maintenance, and storm damage restoration throughout the DFW metroplex.'
  ),
  (
    '/service-areas/dallas',
    'Dallas Service Area',
    'Roofing Services in Dallas TX | Local Roofers | Free Estimates',
    'Professional roofing services in Dallas, Texas. Local licensed roofers specializing in repair, replacement, and storm damage. Serving Dallas neighborhoods since 2005.',
    ARRAY['Dallas roofer', 'roofing Dallas TX', 'Dallas roof repair', 'Dallas roof replacement', 'Dallas storm damage'],
    'Professional Roofing Services in Dallas, TX',
    'Dallas Roofing Contractor | Ultra Roofing',
    'Trusted Dallas roofing company providing expert repair, replacement, and maintenance services. Licensed and insured.'
  ),
  (
    '/service-areas/fort-worth',
    'Fort Worth Service Area',
    'Roofing Services Fort Worth TX | Local Roofers | Free Estimates',
    'Expert roofing services in Fort Worth, Texas. Licensed local roofers for residential and commercial projects. Roof repair, replacement, and storm damage specialists.',
    ARRAY['Fort Worth roofer', 'roofing Fort Worth TX', 'Fort Worth roof repair', 'Fort Worth roof replacement'],
    'Professional Roofing Services in Fort Worth, TX',
    'Fort Worth Roofing Contractor | Ultra Roofing',
    'Fort Worth''s trusted roofing company for all your repair, replacement, and maintenance needs.'
  ),
  (
    '/about',
    'About Page',
    'About Ultra Roofing | Dallas-Fort Worth Roofing Company',
    'Learn about Ultra Roofing - DFW''s trusted roofing company since 2005. Licensed, insured, and locally owned. Meet our team and see why we''re rated #1.',
    ARRAY['Ultra Roofing', 'DFW roofing company', 'about us', 'licensed roofer Dallas'],
    'About Ultra Roofing',
    'About Ultra Roofing - DFW''s Trusted Roofing Company',
    'Family-owned roofing company serving Dallas-Fort Worth since 2005. Licensed, insured, and committed to quality.'
  ),
  (
    '/contact',
    'Contact Page',
    'Contact Ultra Roofing | Free Roof Inspection | Dallas Fort Worth',
    'Contact Ultra Roofing for a free roof inspection and estimate. Serving Dallas-Fort Worth. Call, email, or book online. Emergency services available 24/7.',
    ARRAY['contact roofer', 'free roof inspection', 'roofing estimate Dallas', 'emergency roofing'],
    'Contact Us for a Free Inspection',
    'Contact Ultra Roofing | Free Roof Inspection',
    'Get a free roof inspection and estimate. Serving all of Dallas-Fort Worth. Call now or book online.'
  )
ON CONFLICT (page_path) DO NOTHING;

INSERT INTO seo_keyword_tracking (keyword, page_path, search_volume, difficulty, priority, notes) VALUES
  ('roofing Dallas', '/', 2400, 65, 'high', 'Primary target keyword for homepage'),
  ('Fort Worth roofing', '/', 1900, 62, 'high', 'Secondary target for homepage'),
  ('DFW roofer', '/', 1600, 58, 'high', 'Geo-targeted primary keyword'),
  ('roof replacement cost Dallas', '/blog', 1200, 45, 'high', 'High-intent transactional keyword'),
  ('hail damage roof', '/blog', 980, 42, 'medium', 'Storm-related content'),
  ('roof repair near me', '/services', 3200, 72, 'high', 'High volume local search'),
  ('commercial roofing Dallas', '/services', 720, 55, 'medium', 'Commercial service focus'),
  ('emergency roof repair', '/services', 890, 48, 'medium', 'Emergency service keyword'),
  ('Dallas roofer', '/service-areas/dallas', 1800, 68, 'high', 'City-specific primary'),
  ('Fort Worth roof repair', '/service-areas/fort-worth', 650, 52, 'medium', 'City-specific service')
ON CONFLICT DO NOTHING;