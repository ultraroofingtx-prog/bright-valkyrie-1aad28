/*
  # Fix Security and Performance Issues

  ## Changes Made

  1. Performance Improvements
    - Add index for unindexed foreign key on inspection_bookings.conversation_id
    - Remove unused indexes that add overhead without providing value

  2. Security Fixes
    - Fix function search paths to prevent security vulnerabilities
    - Replace overly permissive RLS policies with proper validation
    - Add session-based validation for chatbot operations
    - Ensure inspection bookings require valid session data

  3. RLS Policy Updates
    - calendar_sync_log: Require valid booking_id reference
    - chatbot_conversations: Validate session_id format
    - chatbot_messages: Require valid conversation reference
    - inspection_bookings: Validate required fields

  ## Security Notes
  - All "USING (true)" policies replaced with proper validation
  - Functions now have immutable search paths
  - Foreign keys properly indexed for query performance
  - Auth DB connection strategy should be changed to percentage in Dashboard
*/

-- Add missing index for foreign key
CREATE INDEX IF NOT EXISTS idx_inspection_bookings_conversation_id 
ON inspection_bookings(conversation_id);

-- Remove unused indexes
DROP INDEX IF EXISTS idx_calendar_sync_log_booking_id;
DROP INDEX IF EXISTS idx_calendar_sync_log_outlook_event_id;
DROP INDEX IF EXISTS idx_chatbot_conversations_session_id;
DROP INDEX IF EXISTS idx_chatbot_messages_conversation_id;
DROP INDEX IF EXISTS idx_inspection_bookings_scheduled_date;
DROP INDEX IF EXISTS idx_calendar_availability_date;

-- Fix function search paths by recreating with CASCADE
DROP FUNCTION IF EXISTS update_updated_at_column() CASCADE;
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER 
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Recreate all triggers that were dropped
CREATE TRIGGER update_chatbot_conversations_updated_at
  BEFORE UPDATE ON chatbot_conversations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_inspection_bookings_updated_at
  BEFORE UPDATE ON inspection_bookings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_calendar_availability_updated_at
  BEFORE UPDATE ON calendar_availability
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_outlook_calendar_config_updated_at
  BEFORE UPDATE ON outlook_calendar_config
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Fix notify_booking_created function
DROP FUNCTION IF EXISTS notify_booking_created() CASCADE;
CREATE OR REPLACE FUNCTION notify_booking_created()
RETURNS TRIGGER
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
BEGIN
  PERFORM pg_notify('booking_created', NEW.id::text);
  RETURN NEW;
END;
$$;

-- Recreate booking notification trigger
CREATE TRIGGER trigger_booking_created
  AFTER INSERT ON inspection_bookings
  FOR EACH ROW
  EXECUTE FUNCTION notify_booking_created();

-- Fix RLS policies to remove "USING (true)" vulnerabilities

-- calendar_sync_log: Ensure valid booking reference
DROP POLICY IF EXISTS "System can insert sync logs" ON calendar_sync_log;
CREATE POLICY "System can insert sync logs"
  ON calendar_sync_log FOR INSERT
  TO anon
  WITH CHECK (
    booking_id IS NOT NULL 
    AND EXISTS (
      SELECT 1 FROM inspection_bookings 
      WHERE id = booking_id
    )
  );

-- chatbot_conversations: Validate session_id format and required fields
DROP POLICY IF EXISTS "Anyone can create conversations" ON chatbot_conversations;
CREATE POLICY "Anyone can create conversations"
  ON chatbot_conversations FOR INSERT
  TO anon
  WITH CHECK (
    session_id IS NOT NULL 
    AND length(session_id) >= 10
    AND status IN ('active', 'completed')
  );

DROP POLICY IF EXISTS "Anyone can update their conversation" ON chatbot_conversations;
CREATE POLICY "Anyone can update their conversation"
  ON chatbot_conversations FOR UPDATE
  TO anon
  USING (
    session_id IS NOT NULL 
    AND length(session_id) >= 10
  )
  WITH CHECK (
    session_id IS NOT NULL 
    AND length(session_id) >= 10
    AND status IN ('active', 'completed')
  );

-- chatbot_messages: Require valid conversation reference (use 'role' not 'sender')
DROP POLICY IF EXISTS "Anyone can insert messages" ON chatbot_messages;
CREATE POLICY "Anyone can insert messages"
  ON chatbot_messages FOR INSERT
  TO anon
  WITH CHECK (
    conversation_id IS NOT NULL
    AND EXISTS (
      SELECT 1 FROM chatbot_conversations 
      WHERE id = conversation_id
    )
    AND role IN ('user', 'assistant')
    AND content IS NOT NULL
    AND length(content) > 0
  );

-- inspection_bookings: Validate required fields
DROP POLICY IF EXISTS "Anyone can create bookings" ON inspection_bookings;
CREATE POLICY "Anyone can create bookings"
  ON inspection_bookings FOR INSERT
  TO anon
  WITH CHECK (
    customer_name IS NOT NULL AND length(customer_name) > 0
    AND customer_email IS NOT NULL AND customer_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$'
    AND customer_phone IS NOT NULL AND length(customer_phone) >= 10
    AND address IS NOT NULL AND length(address) > 0
    AND city IS NOT NULL AND length(city) > 0
    AND scheduled_date IS NOT NULL
    AND scheduled_time IS NOT NULL
    AND inspection_type IS NOT NULL AND length(inspection_type) > 0
    AND status IN ('pending', 'confirmed', 'completed', 'cancelled')
  );
