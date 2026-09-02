import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const url = new URL(req.url);
    const action = url.searchParams.get('action') || 'list';

    if (action === 'list') {
      const { data: pages, error } = await supabase
        .from('seo_pages')
        .select('*')
        .eq('status', 'active')
        .order('page_path', { ascending: true });

      if (error) throw error;

      return new Response(
        JSON.stringify({ pages }),
        {
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    if (action === 'get-page') {
      const pagePath = url.searchParams.get('path');
      if (!pagePath) {
        return new Response(
          JSON.stringify({ error: 'Missing path parameter' }),
          {
            status: 400,
            headers: {
              ...corsHeaders,
              'Content-Type': 'application/json',
            },
          }
        );
      }

      const { data: page, error } = await supabase
        .from('seo_pages')
        .select('*')
        .eq('page_path', pagePath)
        .maybeSingle();

      if (error) throw error;

      return new Response(
        JSON.stringify({ page }),
        {
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    if (action === 'keywords') {
      const { data: keywords, error } = await supabase
        .from('seo_keyword_tracking')
        .select('*')
        .eq('status', 'active')
        .order('priority', { ascending: false });

      if (error) throw error;

      const highPriority = keywords?.filter(k => k.priority === 'high') || [];
      const mediumPriority = keywords?.filter(k => k.priority === 'medium') || [];
      const lowPriority = keywords?.filter(k => k.priority === 'low') || [];

      return new Response(
        JSON.stringify({
          keywords,
          summary: {
            total: keywords?.length || 0,
            high: highPriority.length,
            medium: mediumPriority.length,
            low: lowPriority.length
          }
        }),
        {
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    if (action === 'update-page' && req.method === 'POST') {
      const body = await req.json();
      const { page_path, updates } = body;

      if (!page_path || !updates) {
        return new Response(
          JSON.stringify({ error: 'Missing required fields' }),
          {
            status: 400,
            headers: {
              ...corsHeaders,
              'Content-Type': 'application/json',
            },
          }
        );
      }

      const { data: currentPage } = await supabase
        .from('seo_pages')
        .select('*')
        .eq('page_path', page_path)
        .maybeSingle();

      const { data, error } = await supabase
        .from('seo_pages')
        .update({
          ...updates,
          last_updated: new Date().toISOString()
        })
        .eq('page_path', page_path)
        .select()
        .single();

      if (error) throw error;

      for (const [field, newValue] of Object.entries(updates)) {
        const oldValue = currentPage ? currentPage[field] : null;

        if (oldValue !== newValue) {
          await supabase.from('seo_update_history').insert({
            page_path,
            field_updated: field,
            old_value: typeof oldValue === 'object' ? JSON.stringify(oldValue) : String(oldValue),
            new_value: typeof newValue === 'object' ? JSON.stringify(newValue) : String(newValue),
            update_type: 'manual',
            updated_by: 'admin'
          });
        }
      }

      return new Response(
        JSON.stringify({ success: true, page: data }),
        {
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    if (action === 'generate-report') {
      const reportMonth = new Date();
      reportMonth.setDate(1);
      reportMonth.setHours(0, 0, 0, 0);

      const { data: pages } = await supabase
        .from('seo_pages')
        .select('*')
        .eq('status', 'active');

      const { data: keywords } = await supabase
        .from('seo_keyword_tracking')
        .select('*')
        .eq('status', 'active')
        .order('search_volume', { ascending: false })
        .limit(10);

      const startOfMonth = new Date(reportMonth);
      const { data: updates } = await supabase
        .from('seo_update_history')
        .select('page_path')
        .gte('created_at', startOfMonth.toISOString());

      const uniqueUpdatedPages = new Set(updates?.map(u => u.page_path) || []);

      const recommendations = generateRecommendations(pages, keywords);

      const { data: report, error } = await supabase
        .from('seo_monthly_reports')
        .upsert({
          report_month: reportMonth.toISOString().split('T')[0],
          total_pages: pages?.length || 0,
          pages_updated: uniqueUpdatedPages.size,
          top_keywords: keywords || [],
          recommendations,
          status: 'finalized'
        }, {
          onConflict: 'report_month'
        })
        .select()
        .single();

      if (error) throw error;

      return new Response(
        JSON.stringify({ report }),
        {
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    if (action === 'history') {
      const pagePath = url.searchParams.get('path');
      const limit = parseInt(url.searchParams.get('limit') || '50');

      let query = supabase
        .from('seo_update_history')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(limit);

      if (pagePath) {
        query = query.eq('page_path', pagePath);
      }

      const { data: history, error } = await query;

      if (error) throw error;

      return new Response(
        JSON.stringify({ history }),
        {
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    if (action === 'reports') {
      const { data: reports, error } = await supabase
        .from('seo_monthly_reports')
        .select('*')
        .order('report_month', { ascending: false })
        .limit(12);

      if (error) throw error;

      return new Response(
        JSON.stringify({ reports }),
        {
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        error: 'Invalid action. Available: list, get-page, keywords, update-page, generate-report, history, reports'
      }),
      {
        status: 400,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error.message
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});

function generateRecommendations(pages: any[], keywords: any[]): string {
  const recommendations: string[] = [];

  if (pages && pages.length > 0) {
    const pagesWithShortDescriptions = pages.filter(p =>
      p.description && p.description.length < 120
    );
    if (pagesWithShortDescriptions.length > 0) {
      recommendations.push(
        `${pagesWithShortDescriptions.length} page(s) have meta descriptions under 120 characters. Consider expanding for better CTR.`
      );
    }

    const pagesWithFewKeywords = pages.filter(p =>
      !p.keywords || p.keywords.length < 3
    );
    if (pagesWithFewKeywords.length > 0) {
      recommendations.push(
        `${pagesWithFewKeywords.length} page(s) have fewer than 3 target keywords. Add more relevant keywords.`
      );
    }
  }

  if (keywords && keywords.length > 0) {
    const highVolumeKeywords = keywords.filter(k => k.search_volume > 1000);
    if (highVolumeKeywords.length > 3) {
      recommendations.push(
        `You have ${highVolumeKeywords.length} high-volume keywords (1000+ searches/month). Focus content creation on these.`
      );
    }

    const lowDifficultyKeywords = keywords.filter(k => k.difficulty < 40);
    if (lowDifficultyKeywords.length > 0) {
      recommendations.push(
        `${lowDifficultyKeywords.length} keyword(s) have low difficulty. These are quick-win opportunities for ranking.`
      );
    }
  }

  recommendations.push(
    'Continue monthly updates to meta descriptions and titles to match seasonal trends and search patterns.'
  );

  recommendations.push(
    'Monitor Google Search Console for emerging keywords and add them to tracking.'
  );

  return recommendations.join('\n\n');
}
