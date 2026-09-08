/*
  # Add missing chatbot conversation context columns

  ## Summary
  The chatbot-assistant edge function tracks per-conversation booking state
  (inspection_type, preferred_date, preferred_time, address, city) on
  chatbot_conversations, but that table never had these columns. Every
  conversation that got past collecting a phone number would fail with a
  "column not found" error when the function tried to persist this state.

  ## Changes
  Add nullable tracking columns to chatbot_conversations to match what the
  edge function reads/writes.
*/

ALTER TABLE chatbot_conversations
  ADD COLUMN IF NOT EXISTS inspection_type text,
  ADD COLUMN IF NOT EXISTS preferred_date date,
  ADD COLUMN IF NOT EXISTS preferred_time time,
  ADD COLUMN IF NOT EXISTS address text,
  ADD COLUMN IF NOT EXISTS city text;
