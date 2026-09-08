import { useState, useEffect } from 'react';
import { Calendar, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import SEO from '../components/SEO';

interface CalendarConfig {
  id: string;
  client_id: string;
  tenant_id: string;
  calendar_email: string;
  is_active: boolean;
  token_expires_at: string;
}

export default function OutlookCalendarSetupPage() {
  const [config, setConfig] = useState<CalendarConfig | null>(null);
  const [clientId, setClientId] = useState('');
  const [tenantId, setTenantId] = useState('');
  const [calendarEmail, setCalendarEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    loadConfig();
  }, []);

  const loadConfig = async () => {
    try {
      const { data, error } = await supabase
        .from('outlook_calendar_config')
        .select('*')
        .maybeSingle();

      if (error) throw error;
      if (data) {
        setConfig(data);
        setClientId(data.client_id || '');
        setTenantId(data.tenant_id || '');
        setCalendarEmail(data.calendar_email || '');
      }
    } catch (error) {
      console.error('Error loading config:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    try {
      if (config) {
        const { error } = await supabase
          .from('outlook_calendar_config')
          .update({
            client_id: clientId,
            tenant_id: tenantId,
            calendar_email: calendarEmail,
          })
          .eq('id', config.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('outlook_calendar_config')
          .insert({
            client_id: clientId,
            tenant_id: tenantId,
            calendar_email: calendarEmail,
            is_active: false,
          });

        if (error) throw error;
      }

      setMessage({ type: 'success', text: 'Configuration saved successfully!' });
      await loadConfig();
    } catch (error) {
      console.error('Error saving config:', error);
      setMessage({ type: 'error', text: 'Failed to save configuration. Please try again.' });
    } finally {
      setSaving(false);
    }
  };

  const handleAuthorize = () => {
    if (!clientId || !tenantId) {
      setMessage({ type: 'error', text: 'Please save Client ID and Tenant ID first.' });
      return;
    }

    const redirectUri = `${window.location.origin}/admin/outlook-callback`;
    const scope = 'https://graph.microsoft.com/Calendars.ReadWrite offline_access';
    const authUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}`;

    window.location.href = authUrl;
  };

  const handleToggleActive = async () => {
    if (!config) return;

    try {
      const { error } = await supabase
        .from('outlook_calendar_config')
        .update({ is_active: !config.is_active })
        .eq('id', config.id);

      if (error) throw error;

      setMessage({
        type: 'success',
        text: `Calendar sync ${!config.is_active ? 'enabled' : 'disabled'} successfully!`,
      });
      await loadConfig();
    } catch (error) {
      console.error('Error toggling active status:', error);
      setMessage({ type: 'error', text: 'Failed to update status. Please try again.' });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Outlook Calendar Setup - Admin"
        description="Configure Outlook Calendar integration for automated appointment scheduling"
        noindex={true}
      />

      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="w-8 h-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">Outlook Calendar Setup</h1>
            </div>

            {message && (
              <div
                className={`mb-6 p-4 rounded-lg flex items-center gap-2 ${
                  message.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {message.type === 'success' ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <XCircle className="w-5 h-5" />
                )}
                {message.text}
              </div>
            )}

            <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                <div className="text-sm text-blue-900">
                  <p className="font-semibold mb-2">Setup Instructions:</p>
                  <ol className="list-decimal ml-4 space-y-1">
                    <li>Create an Azure AD app at portal.azure.com</li>
                    <li>Add redirect URI: {window.location.origin}/admin/outlook-callback</li>
                    <li>Enable Calendars.ReadWrite and offline_access permissions</li>
                    <li>Copy Client ID and Tenant ID below</li>
                    <li>Add OUTLOOK_CLIENT_SECRET to your environment</li>
                    <li>Click Authorize to connect your calendar</li>
                  </ol>
                </div>
              </div>
            </div>

            <form onSubmit={handleSave} className="space-y-6 mb-8">
              <div>
                <label htmlFor="clientId" className="block text-sm font-medium text-gray-700 mb-2">
                  Client ID
                </label>
                <input
                  type="text"
                  id="clientId"
                  value={clientId}
                  onChange={(e) => setClientId(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="00000000-0000-0000-0000-000000000000"
                  required
                />
              </div>

              <div>
                <label htmlFor="tenantId" className="block text-sm font-medium text-gray-700 mb-2">
                  Tenant ID
                </label>
                <input
                  type="text"
                  id="tenantId"
                  value={tenantId}
                  onChange={(e) => setTenantId(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="00000000-0000-0000-0000-000000000000"
                  required
                />
              </div>

              <div>
                <label htmlFor="calendarEmail" className="block text-sm font-medium text-gray-700 mb-2">
                  Calendar Email
                </label>
                <input
                  type="email"
                  id="calendarEmail"
                  value={calendarEmail}
                  onChange={(e) => setCalendarEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="calendar@yourcompany.com"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={saving}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {saving ? 'Saving...' : 'Save Configuration'}
              </button>
            </form>

            <div className="space-y-4 pt-6 border-t border-gray-200">
              <button
                onClick={handleAuthorize}
                disabled={!clientId || !tenantId}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Authorize Outlook Calendar
              </button>

              {config && (
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Calendar Sync</p>
                    <p className="text-sm text-gray-600">
                      {config.is_active ? 'Active' : 'Inactive'}
                    </p>
                  </div>
                  <button
                    onClick={handleToggleActive}
                    className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                      config.is_active
                        ? 'bg-red-100 text-red-700 hover:bg-red-200'
                        : 'bg-green-100 text-green-700 hover:bg-green-200'
                    }`}
                  >
                    {config.is_active ? 'Disable' : 'Enable'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
