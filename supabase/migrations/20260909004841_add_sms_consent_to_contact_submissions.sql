/*
  # SMS Consent Tracking

  1. Changes
    - `contact_submissions`
      - Add `sms_consent` (boolean, default false) - Whether the submitter
        checked the SMS-opt-in checkbox on the booking form. Recorded so
        there's an auditable record of consent for A2P 10DLC / TCPA
        compliance, tied to the same row as the contact details it
        applies to.

  2. Notes
    - contact_submissions itself predates the committed migration
      history in this repo (no CREATE TABLE for it here), so this uses
      ADD COLUMN IF NOT EXISTS rather than assuming its full shape.
    - Defaults to false so any pre-existing rows are correctly recorded
      as not having given consent, rather than defaulting to true.
*/

ALTER TABLE contact_submissions
  ADD COLUMN IF NOT EXISTS sms_consent boolean NOT NULL DEFAULT false;
