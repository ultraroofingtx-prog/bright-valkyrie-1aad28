import { useState, useEffect } from 'react';
import { Calendar, Clock, Plus, CreditCard as Edit2, Trash2, Send, X, CheckCircle, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { useAdminAuth } from '../hooks/useAdminAuth';

interface ScheduledPost {
  id: string;
  title: string;
  slug: string;
  topic: string;
  keywords: string[];
  status: string;
  scheduled_date: string;
  published_date: string | null;
  excerpt: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

interface FormData {
  title: string;
  slug: string;
  topic: string;
  keywords: string;
  scheduled_date: string;
  excerpt: string;
  image_url: string;
  status: string;
}

const BLANK_FORM: FormData = {
  title: '',
  slug: '',
  topic: '',
  keywords: '',
  scheduled_date: '',
  excerpt: '',
  image_url: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
  status: 'scheduled',
};

const API_BASE = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/blog-scheduler`;

export default function BlogSchedulerPage() {
  const { session } = useAdminAuth();
  // Must be the logged-in admin's own session token, not the anon key -
  // blog-scheduler checks this against admin_users to authorize writes.
  const AUTH_HEADERS = {
    'Authorization': `Bearer ${session?.access_token}`,
    'Content-Type': 'application/json',
  };
  const [posts, setPosts] = useState<ScheduledPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<ScheduledPost | null>(null);
  const [formData, setFormData] = useState<FormData>(BLANK_FORM);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  useEffect(() => {
    if (session) fetchPosts();
  }, [session]);

  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(t);
    }
  }, [toast]);

  const fetchPosts = async () => {
    try {
      const res = await fetch(`${API_BASE}?action=list`, { headers: AUTH_HEADERS });
      const data = await res.json();
      setPosts(data.posts || []);
    } catch {
      showToast('error', 'Failed to load posts');
    } finally {
      setLoading(false);
    }
  };

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message });
  };

  const generateSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: editingPost ? prev.slug : generateSlug(title),
    }));
  };

  const openAddForm = () => {
    setEditingPost(null);
    setFormData(BLANK_FORM);
    setShowForm(true);
  };

  const openEditForm = (post: ScheduledPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      slug: post.slug,
      topic: post.topic,
      keywords: post.keywords.join(', '),
      scheduled_date: post.scheduled_date,
      excerpt: post.excerpt,
      image_url: post.image_url,
      status: post.status,
    });
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingPost(null);
    setFormData(BLANK_FORM);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.slug || !formData.scheduled_date) {
      showToast('error', 'Title, slug, and scheduled date are required');
      return;
    }
    setSaving(true);
    try {
      const action = editingPost ? 'update' : 'create';
      const url = editingPost
        ? `${API_BASE}?action=${action}&id=${editingPost.id}`
        : `${API_BASE}?action=${action}`;

      const res = await fetch(url, {
        method: editingPost ? 'PUT' : 'POST',
        headers: AUTH_HEADERS,
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Save failed');

      showToast('success', editingPost ? 'Post updated successfully' : 'Post scheduled successfully');
      closeForm();
      fetchPosts();
    } catch (err: unknown) {
      showToast('error', err instanceof Error ? err.message : 'Save failed');
    } finally {
      setSaving(false);
    }
  };

  const handlePublish = async (postId: string) => {
    try {
      const res = await fetch(`${API_BASE}?action=publish&id=${postId}`, {
        method: 'PUT',
        headers: AUTH_HEADERS,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Publish failed');
      showToast('success', 'Post published successfully');
      fetchPosts();
    } catch (err: unknown) {
      showToast('error', err instanceof Error ? err.message : 'Publish failed');
    }
  };

  const handleDelete = async (postId: string) => {
    try {
      const res = await fetch(`${API_BASE}?action=delete&id=${postId}`, {
        method: 'DELETE',
        headers: AUTH_HEADERS,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Delete failed');
      showToast('success', 'Post deleted');
      setConfirmDelete(null);
      fetchPosts();
    } catch (err: unknown) {
      showToast('error', err instanceof Error ? err.message : 'Delete failed');
    }
  };

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const scheduledPosts = posts.filter(p => p.status === 'scheduled');
  const publishedPosts = posts.filter(p => p.status === 'published');
  const draftPosts = posts.filter(p => p.status === 'draft');

  return (
    <>
      <SEO title="Blog Scheduler - Ultra Roofing Admin" description="Manage scheduled blog posts for Ultra Roofing" noindex />

      {/* Toast */}
      {toast && (
        <div className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-5 py-3 rounded-lg shadow-xl text-white font-semibold transition-all ${toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
          {toast.type === 'success' ? <CheckCircle className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
          {toast.message}
        </div>
      )}

      {/* Delete confirmation */}
      {confirmDelete && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-sm w-full">
            <h3 className="text-xl font-bold text-[#1C2A39] mb-3">Delete Post?</h3>
            <p className="text-gray-600 mb-6">This action cannot be undone.</p>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmDelete(null)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(confirmDelete)}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#1C2A39] mb-1">Blog Post Scheduler</h1>
              <p className="text-gray-600">Create, edit, and publish scheduled blog posts</p>
            </div>
            <button
              onClick={openAddForm}
              className="flex items-center gap-2 bg-[#FFC107] text-[#1C2A39] px-6 py-3 rounded-full font-bold hover:bg-[#FFD54F] transition-colors whitespace-nowrap"
            >
              <Plus className="h-5 w-5" />
              Add Post
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-700">Scheduled</h3>
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-[#1C2A39]">{scheduledPosts.length}</p>
              <p className="text-sm text-gray-600">Posts ready to publish</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-700">Published</h3>
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-3xl font-bold text-[#1C2A39]">{publishedPosts.length}</p>
              <p className="text-sm text-gray-600">Live blog posts</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-700">Drafts</h3>
                <Edit2 className="h-6 w-6 text-gray-600" />
              </div>
              <p className="text-3xl font-bold text-[#1C2A39]">{draftPosts.length}</p>
              <p className="text-sm text-gray-600">Work in progress</p>
            </div>
          </div>

          {/* Add / Edit Form */}
          {showForm && (
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#1C2A39]">
                  {editingPost ? 'Edit Blog Post' : 'Schedule New Blog Post'}
                </h2>
                <button onClick={closeForm} className="text-gray-400 hover:text-gray-600 transition-colors">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Title *</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={e => handleTitleChange(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent"
                      placeholder="e.g., How to Know If You Need Roof Repair or Replacement"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">URL Slug *</label>
                    <input
                      type="text"
                      value={formData.slug}
                      onChange={e => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent"
                      placeholder="auto-generated-from-title"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Topic Description</label>
                  <textarea
                    value={formData.topic}
                    onChange={e => setFormData(prev => ({ ...prev, topic: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent"
                    rows={3}
                    placeholder="Describe what this blog post should cover"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Target Keywords (comma-separated)</label>
                  <input
                    type="text"
                    value={formData.keywords}
                    onChange={e => setFormData(prev => ({ ...prev, keywords: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent"
                    placeholder="roof repair, hail damage, DFW roofing"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Short Excerpt</label>
                  <textarea
                    value={formData.excerpt}
                    onChange={e => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent"
                    rows={2}
                    placeholder="Brief description shown on the blog listing page"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Scheduled Date *</label>
                    <input
                      type="date"
                      value={formData.scheduled_date}
                      onChange={e => setFormData(prev => ({ ...prev, scheduled_date: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Status</label>
                    <select
                      value={formData.status}
                      onChange={e => setFormData(prev => ({ ...prev, status: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent"
                    >
                      <option value="draft">Draft</option>
                      <option value="scheduled">Scheduled</option>
                      <option value="published">Published</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Image URL</label>
                  <input
                    type="url"
                    value={formData.image_url}
                    onChange={e => setFormData(prev => ({ ...prev, image_url: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={closeForm}
                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-6 py-2 bg-[#FFC107] text-[#1C2A39] rounded-lg font-bold hover:bg-[#FFD54F] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {saving ? 'Saving…' : editingPost ? 'Save Changes' : 'Schedule Post'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Post Lists */}
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#FFC107] mx-auto mb-3"></div>
              <p className="text-gray-600">Loading posts…</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl shadow">
              <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-xl font-semibold text-gray-500 mb-2">No posts yet</p>
              <p className="text-gray-400 mb-6">Click "Add Post" to schedule your first blog post.</p>
              <button
                onClick={openAddForm}
                className="inline-flex items-center gap-2 bg-[#FFC107] text-[#1C2A39] px-6 py-3 rounded-full font-bold hover:bg-[#FFD54F] transition-colors"
              >
                <Plus className="h-5 w-5" />
                Add Post
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {scheduledPosts.length > 0 && (
                <PostGroup title="Upcoming / Scheduled" posts={scheduledPosts} onEdit={openEditForm} onDelete={id => setConfirmDelete(id)} onPublish={handlePublish} formatDate={formatDate} getStatusColor={getStatusColor} showPublish />
              )}
              {draftPosts.length > 0 && (
                <PostGroup title="Drafts" posts={draftPosts} onEdit={openEditForm} onDelete={id => setConfirmDelete(id)} onPublish={handlePublish} formatDate={formatDate} getStatusColor={getStatusColor} showPublish />
              )}
              {publishedPosts.length > 0 && (
                <PostGroup title="Published" posts={publishedPosts} onEdit={openEditForm} onDelete={id => setConfirmDelete(id)} onPublish={handlePublish} formatDate={formatDate} getStatusColor={getStatusColor} />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

interface PostGroupProps {
  title: string;
  posts: ScheduledPost[];
  onEdit: (post: ScheduledPost) => void;
  onDelete: (id: string) => void;
  onPublish: (id: string) => void;
  formatDate: (d: string) => string;
  getStatusColor: (s: string) => string;
  showPublish?: boolean;
}

function PostGroup({ title, posts, onEdit, onDelete, onPublish, formatDate, getStatusColor, showPublish }: PostGroupProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#1C2A39] mb-4">{title}</h2>
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded-xl shadow p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(post.status)}`}>
                    {post.status}
                  </span>
                  <span className="text-sm text-gray-500">
                    {post.status === 'published'
                      ? `Published ${formatDate(post.published_date || post.scheduled_date)}`
                      : `Scheduled for ${formatDate(post.scheduled_date)}`}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1C2A39] mb-1 truncate">{post.title}</h3>
                {post.excerpt && <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>}
                {post.keywords.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {post.keywords.map((kw, i) => (
                      <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">{kw}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-1 flex-shrink-0">
                {showPublish && post.status !== 'published' && (
                  <button
                    onClick={() => onPublish(post.id)}
                    title="Publish now"
                    className="p-2 text-gray-500 hover:text-green-600 transition-colors"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                )}
                <button
                  onClick={() => onEdit(post)}
                  title="Edit"
                  className="p-2 text-gray-500 hover:text-[#FFC107] transition-colors"
                >
                  <Edit2 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => onDelete(post.id)}
                  title="Delete"
                  className="p-2 text-gray-500 hover:text-red-600 transition-colors"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
