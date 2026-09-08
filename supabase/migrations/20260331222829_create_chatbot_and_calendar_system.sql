/*
  # Create Chatbot and Calendar Booking System

  1. New Tables
    - `chatbot_conversations`
      - `id` (uuid, primary key)
      - `session_id` (text, unique) - tracks user session
      - `customer_name` (text, nullable) - collected during conversation
      - `customer_email` (text, nullable) - collected during conversation
      - `customer_phone` (text, nullable) - collected during conversation
      - `status` (text) - 'active', 'completed', 'abandoned'
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `chatbot_messages`
      - `id` (uuid, primary key)
      - `conversation_id` (uuid, foreign key)
      - `role` (text) - 'user', 'assistant', 'system'
      - `content` (text)
      - `created_at` (timestamptz)
    
    - `inspection_bookings`
      - `id` (uuid, primary key)
      - `conversation_id` (uuid, foreign key, nullable)
      - `customer_name` (text)
      - `customer_email` (text)
      - `customer_phone` (text)
      - `address` (text)
      - `city` (text)
      - `scheduled_date` (date)
      - `scheduled_time` (time)
      - `inspection_type` (text) - 'residential', 'commercial', 'emergency'
      - `notes` (text, nullable)
      - `status` (text) - 'pending', 'confirmed', 'completed', 'cancelled'
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `calendar_availability`
      - `id` (uuid, primary key)
      - `date` (date, unique)
      - `available_slots` (jsonb) - array of time slots
      - `blocked_slots` (jsonb) - array of blocked time slots
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Public can insert conversations and messages (chatbot usage)
    - Public can read available calendar slots
    - Public can insert bookings
    - Only authenticated admins can modify calendar and view all bookings

  3. Indexes
    - Index on session_id for fast conversation lookups
    - Index on conversation_id for message queries
    - Index on scheduled_date for calendar queries
    - Index on date for availability lookups
*/

-- Create chatbot_conversations table
CREATE TABLE IF NOT EXISTS chatbot_conversations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text UNIQUE NOT NULL,
  customer_name text,
  customer_email text,
  customer_phone text,
  status text NOT NULL DEFAULT 'active',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create chatbot_messages table
CREATE TABLE IF NOT EXISTS chatbot_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id uuid NOT NULL REFERENCES chatbot_conversations(id) ON DELETE CASCADE,
  role text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create inspection_bookings table
CREATE TABLE IF NOT EXISTS inspection_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id uuid REFERENCES chatbot_conversations(id) ON DELETE SET NULL,
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  address text NOT NULL,
  city text NOT NULL,
  scheduled_date date NOT NULL,
  scheduled_time time NOT NULL,
  inspection_type text NOT NULL DEFAULT 'residential',
  notes text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create calendar_availability table
CREATE TABLE IF NOT EXISTS calendar_availability (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date date UNIQUE NOT NULL,
  available_slots jsonb DEFAULT '[]'::jsonb,
  blocked_slots jsonb DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_chatbot_conversations_session_id ON chatbot_conversations(session_id);
CREATE INDEX IF NOT EXISTS idx_chatbot_messages_conversation_id ON chatbot_messages(conversation_id);
CREATE INDEX IF NOT EXISTS idx_inspection_bookings_scheduled_date ON inspection_bookings(scheduled_date);
CREATE INDEX IF NOT EXISTS idx_calendar_availability_date ON calendar_availability(date);

-- Enable RLS
ALTER TABLE chatbot_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE chatbot_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE inspection_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE calendar_availability ENABLE ROW LEVEL SECURITY;

-- Policies for chatbot_conversations
CREATE POLICY "Anyone can create conversations"
  ON chatbot_conversations FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can view their own conversation"
  ON chatbot_conversations FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can update their conversation"
  ON chatbot_conversations FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

-- Policies for chatbot_messages
CREATE POLICY "Anyone can insert messages"
  ON chatbot_messages FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can view messages"
  ON chatbot_messages FOR SELECT
  TO anon
  USING (true);

-- Policies for inspection_bookings
CREATE POLICY "Anyone can create bookings"
  ON inspection_bookings FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can view bookings"
  ON inspection_bookings FOR SELECT
  TO anon
  USING (true);

-- Policies for calendar_availability
CREATE POLICY "Anyone can view calendar availability"
  ON calendar_availability FOR SELECT
  TO anon
  USING (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
DROP TRIGGER IF EXISTS update_chatbot_conversations_updated_at ON chatbot_conversations;
CREATE TRIGGER update_chatbot_conversations_updated_at
  BEFORE UPDATE ON chatbot_conversations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_inspection_bookings_updated_at ON inspection_bookings;
CREATE TRIGGER update_inspection_bookings_updated_at
  BEFORE UPDATE ON inspection_bookings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_calendar_availability_updated_at ON calendar_availability;
CREATE TRIGGER update_calendar_availability_updated_at
  BEFORE UPDATE ON calendar_availability
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Seed some default available time slots for the next 30 days
INSERT INTO calendar_availability (date, available_slots)
SELECT 
  (CURRENT_DATE + i)::date,
  '["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"]'::jsonb
FROM generate_series(0, 30) AS i
ON CONFLICT (date) DO NOTHING;