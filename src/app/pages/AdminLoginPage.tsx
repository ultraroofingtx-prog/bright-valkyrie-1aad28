import { useState, FormEvent } from 'react';
import { Navigate } from 'react-router-dom';
import { Shield, Eye, EyeOff } from 'lucide-react';
import { useAdminAuth } from '../hooks/useAdminAuth';

export default function AdminLoginPage() {
  const { session, loading, signIn } = useAdminAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1C2A39]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#FFC107]"></div>
      </div>
    );
  }

  if (session) {
    return <Navigate to="/admin/leads" replace />;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    const err = await signIn(email, password);
    if (err) {
      setError(err.message || 'Invalid email or password. Please try again.');
    }
    setSubmitting(false);
  }

  return (
    <div className="min-h-screen bg-[#1C2A39] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo / branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFC107] rounded-2xl mb-4 shadow-lg">
            <Shield className="h-8 w-8 text-[#1C2A39]" />
          </div>
          <h1 className="text-2xl font-bold text-white">Admin Portal</h1>
          <p className="text-gray-400 text-sm mt-1">Ultra Roofing — Authorized Access Only</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0096D7] focus:border-transparent outline-none transition-all"
                placeholder="admin@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0096D7] focus:border-transparent outline-none transition-all"
                  placeholder="••••••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#1C2A39] text-white py-3 rounded-xl font-bold text-base hover:bg-[#2a3d54] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
            >
              {submitting ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>

        <p className="text-center text-gray-500 text-xs mt-6">
          Ultra Roofing Admin Portal &mdash; Unauthorized access is prohibited
        </p>
      </div>
    </div>
  );
}
