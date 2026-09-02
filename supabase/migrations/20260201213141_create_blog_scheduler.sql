/*
  # Blog Post Scheduler
  
  1. New Tables
    - `scheduled_blog_posts`
      - `id` (uuid, primary key) - Unique identifier
      - `title` (text) - Blog post title
      - `slug` (text, unique) - URL-friendly slug
      - `topic` (text) - Main topic/theme
      - `keywords` (text array) - Target SEO keywords
      - `status` (text) - draft, scheduled, published
      - `scheduled_date` (date) - When to publish
      - `published_date` (timestamptz) - Actual publish timestamp
      - `content` (text) - Generated blog content
      - `excerpt` (text) - Short description
      - `image_url` (text) - Featured image URL
      - `created_at` (timestamptz) - Record creation time
      - `updated_at` (timestamptz) - Last update time
      
  2. Security
    - Enable RLS on `scheduled_blog_posts` table
    - Add policy for authenticated users to manage posts
    
  3. Notes
    - Supports monthly automated blog post scheduling
    - Stores both scheduled and published content
    - Tracks SEO keywords for optimization
*/

CREATE TABLE IF NOT EXISTS scheduled_blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  topic text NOT NULL,
  keywords text[] DEFAULT ARRAY[]::text[],
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'scheduled', 'published')),
  scheduled_date date NOT NULL,
  published_date timestamptz,
  content text,
  excerpt text,
  image_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE scheduled_blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can manage scheduled posts"
  ON scheduled_blog_posts
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Public can view published posts"
  ON scheduled_blog_posts
  FOR SELECT
  TO anon
  USING (status = 'published');

CREATE INDEX IF NOT EXISTS idx_scheduled_date ON scheduled_blog_posts(scheduled_date);
CREATE INDEX IF NOT EXISTS idx_status ON scheduled_blog_posts(status);

INSERT INTO scheduled_blog_posts (title, slug, topic, keywords, status, scheduled_date, excerpt, image_url) VALUES
  (
    'How to Know If You Need Roof Repair or Roof Replacement in Texas',
    'roof-repair-vs-replacement-texas',
    'Help homeowners determine whether they need roof repair or full replacement',
    ARRAY['roof repair', 'roof replacement', 'when to replace roof', 'roof damage Texas'],
    'scheduled',
    CURRENT_DATE + INTERVAL '30 days',
    'Learn when roof repair is enough and when you need a complete roof replacement for your Texas home.',
    'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800'
  ),
  (
    'What Hail Damage Looks Like on a Roof in DFW',
    'identify-hail-damage-roof-dfw',
    'Guide to identifying hail damage on roofs after DFW storms',
    ARRAY['hail damage', 'roof inspection', 'storm damage', 'DFW hail'],
    'scheduled',
    CURRENT_DATE + INTERVAL '60 days',
    'Visual guide to identifying hail damage on your DFW roof and what to do next.',
    'https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&w=800'
  ),
  (
    'How Roofing Insurance Claims Work in Texas',
    'roofing-insurance-claims-process-texas',
    'Complete guide to filing roofing insurance claims in Texas',
    ARRAY['insurance claims', 'roof insurance', 'claim process', 'Texas homeowners insurance'],
    'scheduled',
    CURRENT_DATE + INTERVAL '90 days',
    'Step-by-step guide to filing a successful roofing insurance claim in Texas after storm damage.',
    'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=800'
  ),
  (
    'How Long Does a Roof Last in North Texas?',
    'roof-lifespan-north-texas',
    'Expected lifespan of different roofing materials in North Texas climate',
    ARRAY['roof lifespan', 'roofing materials', 'roof durability', 'Texas climate'],
    'scheduled',
    CURRENT_DATE + INTERVAL '120 days',
    'Discover how long different roofing materials last in North Texas extreme weather conditions.',
    'https://images.pexels.com/photos/221024/pexels-photo-221024.jpeg?auto=compress&cs=tinysrgb&w=800'
  )
ON CONFLICT (slug) DO NOTHING;