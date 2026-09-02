/*
  # Fix contact_submissions RLS security issues

  ## Problems fixed
  1. DROP the "Anyone can submit contact form" INSERT policy — its WITH CHECK (true) bypasses
     all row-level validation and was flagged as always-true RLS.
  2. DROP the "Admin can view contact submissions" SELECT policy — its USING (true) grants
     SELECT to any role (including anon), making the table visible in the GraphQL schema
     without authentication.
  3. REVOKE SELECT from the anon role directly to remove GraphQL schema visibility.

  The legitimate policies that remain:
  - "Anonymous users can submit contact forms" (INSERT) — validates name, email, message
  - "Admins can view contact submissions" (SELECT) — admin-only
  - "Admins can update contact submissions" (UPDATE) — admin-only
  - "Admins can delete contact submissions" (DELETE) — admin-only
*/

-- Drop the always-true INSERT policy
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;

-- Drop the always-true SELECT policy that exposes the table to anon
DROP POLICY IF EXISTS "Admin can view contact submissions" ON public.contact_submissions;

-- Revoke SELECT from anon to remove GraphQL schema discoverability
REVOKE SELECT ON public.contact_submissions FROM anon;
