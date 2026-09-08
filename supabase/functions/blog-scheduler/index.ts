import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const url = new URL(req.url);
    const action = url.searchParams.get('action') || 'list';

    if (action === 'list') {
      const { data: posts, error } = await supabase
        .from('scheduled_blog_posts')
        .select('*')
        .order('scheduled_date', { ascending: true });

      if (error) throw error;

      return new Response(JSON.stringify({ posts }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (action === 'create') {
      const body = await req.json();
      const { title, slug, topic, keywords, scheduled_date, excerpt, image_url, status } = body;

      if (!title || !slug || !scheduled_date) {
        return new Response(
          JSON.stringify({ error: 'title, slug, and scheduled_date are required' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const keywordsArray = Array.isArray(keywords)
        ? keywords
        : (keywords || '').split(',').map((k: string) => k.trim()).filter(Boolean);

      const { data: post, error } = await supabase
        .from('scheduled_blog_posts')
        .insert({
          title,
          slug,
          topic: topic || '',
          keywords: keywordsArray,
          scheduled_date,
          excerpt: excerpt || '',
          image_url: image_url || 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
          status: status || 'scheduled',
        })
        .select()
        .single();

      if (error) throw error;

      return new Response(JSON.stringify({ post }), {
        status: 201,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (action === 'update') {
      const postId = url.searchParams.get('id');
      if (!postId) {
        return new Response(
          JSON.stringify({ error: 'id is required' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const body = await req.json();
      const { title, slug, topic, keywords, scheduled_date, excerpt, image_url, status } = body;

      const updates: Record<string, unknown> = { updated_at: new Date().toISOString() };
      if (title !== undefined) updates.title = title;
      if (slug !== undefined) updates.slug = slug;
      if (topic !== undefined) updates.topic = topic;
      if (keywords !== undefined) {
        updates.keywords = Array.isArray(keywords)
          ? keywords
          : keywords.split(',').map((k: string) => k.trim()).filter(Boolean);
      }
      if (scheduled_date !== undefined) updates.scheduled_date = scheduled_date;
      if (excerpt !== undefined) updates.excerpt = excerpt;
      if (image_url !== undefined) updates.image_url = image_url;
      if (status !== undefined) updates.status = status;

      const { data: post, error } = await supabase
        .from('scheduled_blog_posts')
        .update(updates)
        .eq('id', postId)
        .select()
        .single();

      if (error) throw error;

      return new Response(JSON.stringify({ post }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (action === 'publish') {
      const postId = url.searchParams.get('id');
      if (!postId) {
        return new Response(
          JSON.stringify({ error: 'id is required' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const { data: post, error } = await supabase
        .from('scheduled_blog_posts')
        .update({
          status: 'published',
          published_date: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
        .eq('id', postId)
        .select()
        .single();

      if (error) throw error;

      return new Response(JSON.stringify({ post }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (action === 'delete') {
      const postId = url.searchParams.get('id');
      if (!postId) {
        return new Response(
          JSON.stringify({ error: 'id is required' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const { error } = await supabase
        .from('scheduled_blog_posts')
        .delete()
        .eq('id', postId);

      if (error) throw error;

      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (action === 'due') {
      const today = new Date().toISOString().split('T')[0];
      const { data: posts, error } = await supabase
        .from('scheduled_blog_posts')
        .select('*')
        .eq('status', 'scheduled')
        .lte('scheduled_date', today);

      if (error) throw error;

      return new Response(
        JSON.stringify({ posts, message: `Found ${posts?.length || 0} posts ready to publish` }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Invalid action. Use: list, create, update, publish, delete, due' }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
