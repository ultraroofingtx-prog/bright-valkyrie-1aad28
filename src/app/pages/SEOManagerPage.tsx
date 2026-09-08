import { useState, useEffect } from 'react';
import { Search, TrendingUp, Edit2, Save, X, Calendar, BarChart3, FileText } from 'lucide-react';
import SEO from '../components/SEO';

interface SEOPage {
  id: string;
  page_path: string;
  page_name: string;
  title: string;
  description: string;
  keywords: string[];
  h1_heading: string | null;
  og_title: string | null;
  og_description: string | null;
  og_image: string | null;
  status: string;
  last_updated: string;
}

interface Keyword {
  id: string;
  keyword: string;
  page_path: string | null;
  search_volume: number;
  difficulty: number;
  priority: string;
  status: string;
  notes: string | null;
}

interface UpdateHistory {
  id: string;
  page_path: string;
  field_updated: string;
  old_value: string;
  new_value: string;
  update_type: string;
  updated_by: string;
  created_at: string;
}

export default function SEOManagerPage() {
  const [pages, setPages] = useState<SEOPage[]>([]);
  const [keywords, setKeywords] = useState<Keyword[]>([]);
  const [history, setHistory] = useState<UpdateHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingPage, setEditingPage] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<SEOPage>>({});
  const [activeTab, setActiveTab] = useState<'pages' | 'keywords' | 'history'>('pages');

  const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/seo-manager`;
  const headers = {
    'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
    'Content-Type': 'application/json',
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [pagesRes, keywordsRes, historyRes] = await Promise.all([
        fetch(`${apiUrl}?action=list`, { headers }),
        fetch(`${apiUrl}?action=keywords`, { headers }),
        fetch(`${apiUrl}?action=history&limit=20`, { headers })
      ]);

      const pagesData = await pagesRes.json();
      const keywordsData = await keywordsRes.json();
      const historyData = await historyRes.json();

      setPages(pagesData.pages || []);
      setKeywords(keywordsData.keywords || []);
      setHistory(historyData.history || []);
    } catch (error) {
      console.error('Error fetching SEO data:', error);
    } finally {
      setLoading(false);
    }
  };

  const startEditing = (page: SEOPage) => {
    setEditingPage(page.page_path);
    setEditForm({
      title: page.title,
      description: page.description,
      keywords: page.keywords,
      h1_heading: page.h1_heading,
      og_title: page.og_title,
      og_description: page.og_description,
    });
  };

  const cancelEditing = () => {
    setEditingPage(null);
    setEditForm({});
  };

  const saveChanges = async (pagePath: string) => {
    try {
      const response = await fetch(`${apiUrl}?action=update-page`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          page_path: pagePath,
          updates: editForm
        })
      });

      const result = await response.json();

      if (result.success) {
        await fetchData();
        setEditingPage(null);
        setEditForm({});
      }
    } catch (error) {
      console.error('Error updating page:', error);
    }
  };

  const generateReport = async () => {
    try {
      const response = await fetch(`${apiUrl}?action=generate-report`, { headers });
      const result = await response.json();
      alert('Monthly SEO report generated successfully!');
    } catch (error) {
      console.error('Error generating report:', error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading SEO data...</p>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="SEO Manager - Ultra Roofing Admin"
        description="Manage SEO keywords and page optimization"
      />

      <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-[#1C2A39] mb-2">
                  SEO Manager
                </h1>
                <p className="text-gray-600">
                  Manage keywords, page SEO, and monthly optimization
                </p>
              </div>
              <button
                onClick={generateReport}
                className="flex items-center gap-2 bg-[#FFC107] text-[#1C2A39] px-6 py-3 rounded-full font-bold hover:bg-[#FFD54F] transition-colors"
              >
                <FileText className="h-5 w-5" />
                Generate Report
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-700">Active Pages</h3>
                  <Search className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-3xl font-bold text-[#1C2A39]">{pages.length}</p>
                <p className="text-sm text-gray-600">SEO-optimized pages</p>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-700">Keywords</h3>
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-3xl font-bold text-[#1C2A39]">{keywords.length}</p>
                <p className="text-sm text-gray-600">Being tracked</p>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-700">Updates</h3>
                  <Calendar className="h-6 w-6 text-[#FFC107]" />
                </div>
                <p className="text-3xl font-bold text-[#1C2A39]">{history.length}</p>
                <p className="text-sm text-gray-600">Recent changes</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow mb-6">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                <button
                  onClick={() => setActiveTab('pages')}
                  className={`px-6 py-4 text-sm font-semibold border-b-2 transition-colors ${
                    activeTab === 'pages'
                      ? 'border-[#FFC107] text-[#1C2A39]'
                      : 'border-transparent text-gray-600 hover:text-[#1C2A39]'
                  }`}
                >
                  Page SEO
                </button>
                <button
                  onClick={() => setActiveTab('keywords')}
                  className={`px-6 py-4 text-sm font-semibold border-b-2 transition-colors ${
                    activeTab === 'keywords'
                      ? 'border-[#FFC107] text-[#1C2A39]'
                      : 'border-transparent text-gray-600 hover:text-[#1C2A39]'
                  }`}
                >
                  Keywords
                </button>
                <button
                  onClick={() => setActiveTab('history')}
                  className={`px-6 py-4 text-sm font-semibold border-b-2 transition-colors ${
                    activeTab === 'history'
                      ? 'border-[#FFC107] text-[#1C2A39]'
                      : 'border-transparent text-gray-600 hover:text-[#1C2A39]'
                  }`}
                >
                  Update History
                </button>
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'pages' && (
                <div className="space-y-4">
                  {pages.map((page) => (
                    <div key={page.id} className="border border-gray-200 rounded-lg p-6">
                      {editingPage === page.page_path ? (
                        <div className="space-y-4">
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-[#1C2A39]">{page.page_name}</h3>
                            <div className="flex gap-2">
                              <button
                                onClick={() => saveChanges(page.page_path)}
                                className="flex items-center gap-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                              >
                                <Save className="h-4 w-4" />
                                Save
                              </button>
                              <button
                                onClick={cancelEditing}
                                className="flex items-center gap-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                              >
                                <X className="h-4 w-4" />
                                Cancel
                              </button>
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Page Title
                            </label>
                            <input
                              type="text"
                              value={editForm.title || ''}
                              onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                              {editForm.title?.length || 0} characters (Optimal: 50-60)
                            </p>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Meta Description
                            </label>
                            <textarea
                              value={editForm.description || ''}
                              onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent"
                              rows={3}
                            />
                            <p className="text-xs text-gray-500 mt-1">
                              {editForm.description?.length || 0} characters (Optimal: 150-160)
                            </p>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Keywords (comma-separated)
                            </label>
                            <input
                              type="text"
                              value={editForm.keywords?.join(', ') || ''}
                              onChange={(e) => setEditForm({ ...editForm, keywords: e.target.value.split(',').map(k => k.trim()) })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              H1 Heading
                            </label>
                            <input
                              type="text"
                              value={editForm.h1_heading || ''}
                              onChange={(e) => setEditForm({ ...editForm, h1_heading: e.target.value })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent"
                            />
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-lg font-bold text-[#1C2A39] mb-1">{page.page_name}</h3>
                              <p className="text-sm text-gray-600">{page.page_path}</p>
                            </div>
                            <button
                              onClick={() => startEditing(page)}
                              className="flex items-center gap-1 px-4 py-2 bg-[#FFC107] text-[#1C2A39] rounded-lg font-semibold hover:bg-[#FFD54F] transition-colors"
                            >
                              <Edit2 className="h-4 w-4" />
                              Edit
                            </button>
                          </div>

                          <div className="space-y-3">
                            <div>
                              <p className="text-xs font-semibold text-gray-600 mb-1">Title</p>
                              <p className="text-sm text-gray-800">{page.title}</p>
                              <p className="text-xs text-gray-500">
                                {page.title.length} characters
                              </p>
                            </div>

                            <div>
                              <p className="text-xs font-semibold text-gray-600 mb-1">Description</p>
                              <p className="text-sm text-gray-800">{page.description}</p>
                              <p className="text-xs text-gray-500">
                                {page.description.length} characters
                              </p>
                            </div>

                            <div>
                              <p className="text-xs font-semibold text-gray-600 mb-1">Keywords</p>
                              <div className="flex flex-wrap gap-2">
                                {page.keywords.map((keyword, idx) => (
                                  <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                                    {keyword}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="pt-2 border-t border-gray-200">
                              <p className="text-xs text-gray-500">
                                Last updated: {formatDate(page.last_updated)}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'keywords' && (
                <div className="space-y-4">
                  {keywords.map((keyword) => (
                    <div key={keyword.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-bold text-[#1C2A39]">{keyword.keyword}</h3>
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${getPriorityColor(keyword.priority)}`}>
                              {keyword.priority}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-gray-600">Search Volume</p>
                              <p className="font-semibold">{keyword.search_volume.toLocaleString()}/month</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Difficulty</p>
                              <p className="font-semibold">{keyword.difficulty}/100</p>
                            </div>
                          </div>
                          {keyword.page_path && (
                            <p className="text-sm text-gray-600 mt-2">
                              Target page: <span className="font-medium">{keyword.page_path}</span>
                            </p>
                          )}
                          {keyword.notes && (
                            <p className="text-sm text-gray-600 mt-2 italic">{keyword.notes}</p>
                          )}
                        </div>
                        <BarChart3 className="h-6 w-6 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'history' && (
                <div className="space-y-3">
                  {history.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold text-[#1C2A39]">{item.page_path}</p>
                          <p className="text-sm text-gray-600">
                            Updated <span className="font-medium">{item.field_updated}</span>
                          </p>
                        </div>
                        <span className="text-xs text-gray-500">{formatDate(item.created_at)}</span>
                      </div>
                      <div className="text-sm space-y-1">
                        <p className="text-gray-600">
                          <span className="font-medium">From:</span> {item.old_value?.substring(0, 100)}
                          {item.old_value && item.old_value.length > 100 ? '...' : ''}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">To:</span> {item.new_value?.substring(0, 100)}
                          {item.new_value && item.new_value.length > 100 ? '...' : ''}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
