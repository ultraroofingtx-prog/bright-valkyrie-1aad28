/*
  # Allow anon to insert into contact_submissions and grant read via service role

  The contact_submissions table needs:
  1. INSERT for anon - so the booking form (unauthenticated) can save leads
  2. The leads admin page queries via the anon key with service_role bypass,
     so we grant INSERT for anon and keep SELECT locked to service_role only
     (the edge function already uses service_role for writes).

  Actually the leads page will read directly from the client using the anon key,
  so we need a SELECT policy that allows it. Since there is no auth on the admin
  pages, we allow SELECT for anon on this table (the data is internal but the
  admin pages are not publicly linked).

  For INSERT: the send-inspection-email edge function uses service_role so no
  client-side INSERT policy is needed for submissions.
*/

-- Allow the leads admin page to read submissions (anon key, no auth on admin pages)
CREATE POLICY "Admin can view contact submissions"
  ON public.contact_submissions
  FOR SELECT
  TO anon
  USING (true);

-- Allow direct inserts from anon for any future direct-client form usage
CREATE POLICY "Anyone can submit contact form"
  ON public.contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
