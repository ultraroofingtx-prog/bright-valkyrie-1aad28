import { useState, useEffect } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

export function useAdminAuth() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function signIn(email: string, password: string) {
    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/password-check`;
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.compromised) {
          return { message: 'This password has been found in known data breaches. Please change your password before signing in.' } as AuthError;
        }
      }
    } catch {
      // If HIBP check fails, allow sign-in to proceed (fail open for availability)
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return error;
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  return { session, loading, signIn, signOut };
}
