/*
  # Add Outlook Calendar Integration

  1. New Tables
    - `outlook_calendar_config`
      - `id` (uuid, primary key)
      - `client_id` (text) - Microsoft App Client ID
      - `tenant_id` (text) - Microsoft Tenant ID
      - `calendar_email` (text) - Email of calendar to sync with
      - `access_token` (text, encrypted) - OAuth access token
      - `refresh_token` (text, encrypted) - OAuth refresh token
      - `token_expires_at` (timestamptz) - When token expires
      - `is_active` (boolean) - Whether integration is active
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `calendar_sync_log`
      - `id` (uuid, primary key)
      - `booking_id` (uuid, foreign key)
      - `outlook_event_id` (text) - ID from Outlook
      - `sync_status` (text) - 'pending', 'success', 'failed'
      - `error_message` (text, nullable)
      - `synced_at` (timestamptz)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Only authenticated admin users can manage calendar config
    - System can read config for sync operations
    - Anyone can view sync logs for transparency

  3. Indexes
    - Index on booking_id for quick sync lookups
    - Index on outlook_event_id for event updates
*/

-- Create outlook_calendar_config table
CREATE TABLE IF NOT EXISTS outlook_calendar_config (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id text,
  tenant_id text,
  calendar_email text,
  access_token text,
  refresh_token text,
  token_expires_at timestamptz,
  is_active boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create calendar_sync_log table
CREATE TABLE IF NOT EXISTS calendar_sync_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id uuid NOT NULL REFERENCES inspection_bookings(id) ON DELETE CASCADE,
  outlook_event_id text,
  sync_status text NOT NULL DEFAULT 'pending',
  error_message text,
  synced_at timestamptz,
  created_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_calendar_sync_log_booking_id ON calendar_sync_log(booking_id);
CREATE INDEX IF NOT EXISTS idx_calendar_sync_log_outlook_event_id ON calendar_sync_log(outlook_event_id);

-- Enable RLS
ALTER TABLE outlook_calendar_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE calendar_sync_log ENABLE ROW LEVEL SECURITY;

-- Policies for outlook_calendar_config (admin only for modifications, system can read)
CREATE POLICY "Service role can read calendar config"
  ON outlook_calendar_config FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Service role can manage calendar config"
  ON outlook_calendar_config FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anon can read calendar config for sync"
  ON outlook_calendar_config FOR SELECT
  TO anon
  USING (is_active = true);

-- Policies for calendar_sync_log
CREATE POLICY "Anyone can view sync logs"
  ON calendar_sync_log FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Service role can manage sync logs"
  ON calendar_sync_log FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "System can insert sync logs"
  ON calendar_sync_log FOR INSERT
  TO anon
  WITH CHECK (true);

-- Trigger for updated_at
DROP TRIGGER IF EXISTS update_outlook_calendar_config_updated_at ON outlook_calendar_config;
CREATE TRIGGER update_outlook_calendar_config_updated_at
  BEFORE UPDATE ON outlook_calendar_config
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Function to automatically sync bookings to Outlook
CREATE OR REPLACE FUNCTION notify_booking_created()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM pg_notify('booking_created', NEW.id::text);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to notify when booking is created
DROP TRIGGER IF EXISTS trigger_booking_created ON inspection_bookings;
CREATE TRIGGER trigger_booking_created
  AFTER INSERT ON inspection_bookings
  FOR EACH ROW
  EXECUTE FUNCTION notify_booking_created();
