import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Phone, Mail, MapPin, Clock, RefreshCw, ChevronDown, LogOut, FileText, Search, Calendar } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAdminAuth } from '../hooks/useAdminAuth';
import SEO from '../components/SEO';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  property_type: string;
  message: string;
  status: 'pending' | 'contacted' | 'scheduled' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
}

const STATUS_LABELS: Record<Lead['status'], string> = {
  pending: 'New',
  contacted: 'Contacted',
  scheduled: 'Scheduled',
  completed: 'Completed',
  cancelled: 'Cancelled',
};

const STATUS_COLORS: Record<Lead['status'], string> = {
  pending: 'bg-amber-100 text-amber-800 border-amber-200',
  contacted: 'bg-blue-100 text-blue-800 border-blue-200',
  scheduled: 'bg-cyan-100 text-cyan-800 border-cyan-200',
  completed: 'bg-green-100 text-green-800 border-green-200',
  cancelled: 'bg-gray-100 text-gray-600 border-gray-200',
};

const ALL_STATUSES: Lead['status'][] = ['pending', 'contacted', 'scheduled', 'completed', 'cancelled'];

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
    hour: 'numeric', minute: '2-digit', hour12: true,
    timeZone: 'America/Chicago',
  });
}

export default function LeadsPage() {
  const { signOut } = useAdminAuth();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Lead['status'] | 'all'>('all');
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  async function fetchLeads() {
    setLoading(true);
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) setLeads(data as Lead[]);
    setLoading(false);
  }

  useEffect(() => { fetchLeads(); }, []);

  async function updateStatus(id: string, status: Lead['status']) {
    setUpdatingId(id);
    await supabase.from('contact_submissions').update({ status }).eq('id', id);
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status } : l));
    setUpdatingId(null);
  }

  const filtered = filter === 'all' ? leads : leads.filter(l => l.status === filter);

  const counts = ALL_STATUSES.reduce((acc, s) => {
    acc[s] = leads.filter(l => l.status === s).length;
    return acc;
  }, {} as Record<Lead['status'], number>);

  return (
    <>
      <SEO
        title="Leads Dashboard | Ultra Roofing"
        description="Manage incoming inspection requests and leads."
      />
      <div className="min-h-screen bg-gray-50">
        <div className="bg-[#1C2A39] text-white py-6 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Top bar */}
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FFC107] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-[#1C2A39]" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Leads Dashboard</h1>
                  <p className="text-gray-400 text-sm">Incoming inspection requests</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={fetchLeads}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-lg text-sm font-medium"
                >
                  <RefreshCw className="h-4 w-4" />
                  Refresh
                </button>
                <button
                  onClick={signOut}
                  className="flex items-center gap-2 bg-white/10 hover:bg-red-500/30 transition-colors px-4 py-2 rounded-lg text-sm font-medium"
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </button>
              </div>
            </div>
            {/* Admin nav */}
            <div className="flex gap-2 flex-wrap">
              <Link to="/admin/leads" className="flex items-center gap-1.5 bg-white/20 text-white px-3 py-1.5 rounded-lg text-sm font-medium">
                <Users className="h-4 w-4" /> Leads
              </Link>
              <Link to="/admin/blog-scheduler" className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
                <FileText className="h-4 w-4" /> Blog Scheduler
              </Link>
              <Link to="/admin/seo-manager" className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
                <Search className="h-4 w-4" /> SEO Manager
              </Link>
              <Link to="/admin/outlook-calendar-setup" className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
                <Calendar className="h-4 w-4" /> Calendar
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Summary cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {ALL_STATUSES.map(s => (
              <button
                key={s}
                onClick={() => setFilter(filter === s ? 'all' : s)}
                className={`bg-white rounded-xl p-4 text-left border-2 transition-all shadow-sm hover:shadow-md ${
                  filter === s ? 'border-[#0096D7]' : 'border-transparent'
                }`}
              >
                <div className="text-2xl font-bold text-[#1C2A39]">{counts[s]}</div>
                <div className={`inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded-full border ${STATUS_COLORS[s]}`}>
                  {STATUS_LABELS[s]}
                </div>
              </button>
            ))}
          </div>

          {/* Filter bar */}
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="text-sm text-gray-500 font-medium">Filter:</span>
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                filter === 'all'
                  ? 'bg-[#1C2A39] text-white border-[#1C2A39]'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
              }`}
            >
              All ({leads.length})
            </button>
            {ALL_STATUSES.map(s => (
              <button
                key={s}
                onClick={() => setFilter(filter === s ? 'all' : s)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  filter === s
                    ? 'bg-[#1C2A39] text-white border-[#1C2A39]'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                }`}
              >
                {STATUS_LABELS[s]} ({counts[s]})
              </button>
            ))}
          </div>

          {/* Lead list */}
          {loading ? (
            <div className="flex items-center justify-center py-24">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#FFC107]"></div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-16 text-center">
              <Users className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 font-medium">No leads found</p>
              <p className="text-gray-400 text-sm mt-1">Leads will appear here when inspection forms are submitted.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map(lead => (
                <div key={lead.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  {/* Main row */}
                  <div className="p-5 flex items-start gap-4 flex-wrap">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap mb-2">
                        <h3 className="font-bold text-[#1C2A39] text-lg">{lead.name}</h3>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${STATUS_COLORS[lead.status]}`}>
                          {STATUS_LABELS[lead.status]}
                        </span>
                        <span className="text-xs text-gray-400 capitalize bg-gray-100 px-2 py-0.5 rounded-full">
                          {lead.property_type}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-gray-600">
                        <a href={`tel:${lead.phone}`} className="flex items-center gap-2 hover:text-[#0096D7] transition-colors">
                          <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                          {lead.phone}
                        </a>
                        <a href={`mailto:${lead.email}`} className="flex items-center gap-2 hover:text-[#0096D7] transition-colors min-w-0">
                          <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                          <span className="truncate">{lead.email}</span>
                        </a>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
                          <span className="truncate">{lead.address}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-400">
                        <Clock className="h-3.5 w-3.5" />
                        {formatDate(lead.created_at)}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className="relative">
                        <select
                          value={lead.status}
                          onChange={e => updateStatus(lead.id, e.target.value as Lead['status'])}
                          disabled={updatingId === lead.id}
                          className="appearance-none pl-3 pr-8 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0096D7] focus:border-transparent bg-white cursor-pointer disabled:opacity-50"
                        >
                          {ALL_STATUSES.map(s => (
                            <option key={s} value={s}>{STATUS_LABELS[s]}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                      </div>

                      {lead.message && (
                        <button
                          onClick={() => setExpandedId(expandedId === lead.id ? null : lead.id)}
                          className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-gray-500"
                          title="View notes"
                        >
                          <ChevronDown className={`h-4 w-4 transition-transform ${expandedId === lead.id ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Expanded notes */}
                  {expandedId === lead.id && lead.message && (
                    <div className="px-5 pb-5 pt-0">
                      <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-700 border border-gray-100">
                        <p className="font-semibold text-gray-500 text-xs uppercase tracking-wide mb-1">Customer Notes</p>
                        {lead.message}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
