import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CheckCircle, XCircle, Loader } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function OutlookCallbackPage() {
  const [status, setStatus] = useState<'processing' | 'success' | 'error'>('processing');
  const [message, setMessage] = useState('Processing authorization...');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    handleCallback();
  }, []);

  const handleCallback = async () => {
    try {
      const params = new URLSearchParams(location.search);
      const code = params.get('code');
      const error = params.get('error');

      if (error) {
        throw new Error(`Authorization failed: ${error}`);
      }

      if (!code) {
        throw new Error('No authorization code received');
      }

      const { data: config, error: configError } = await supabase
        .from('outlook_calendar_config')
        .select('*')
        .maybeSingle();

      if (configError) throw configError;
      if (!config) throw new Error('Calendar configuration not found');

      const redirectUri = `${window.location.origin}/admin/outlook-callback`;

      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/outlook-auth-callback`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            code,
            redirect_uri: redirectUri,
            config_id: config.id,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to complete authorization');
      }

      setStatus('success');
      setMessage('Calendar connected successfully! Redirecting...');

      setTimeout(() => {
        navigate('/admin/outlook-calendar-setup');
      }, 2000);
    } catch (error) {
      console.error('Callback error:', error);
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Authorization failed');

      setTimeout(() => {
        navigate('/admin/outlook-calendar-setup');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        {status === 'processing' && (
          <>
            <Loader className="w-16 h-16 text-blue-600 mx-auto mb-4 animate-spin" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Processing</h2>
            <p className="text-gray-600">{message}</p>
          </>
        )}

        {status === 'success' && (
          <>
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Success!</h2>
            <p className="text-gray-600">{message}</p>
          </>
        )}

        {status === 'error' && (
          <>
            <XCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Error</h2>
            <p className="text-gray-600">{message}</p>
          </>
        )}
      </div>
    </div>
  );
}
