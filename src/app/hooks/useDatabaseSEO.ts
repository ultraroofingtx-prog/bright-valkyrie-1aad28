import { useState, useEffect } from 'react';

interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export function useDatabaseSEO(pagePath: string): SEOData | null {
  const [seoData, setSeoData] = useState<SEOData | null>(null);

  useEffect(() => {
    const fetchSEO = async () => {
      try {
        const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/seo-manager`;
        const response = await fetch(
          `${apiUrl}?action=get-page&path=${encodeURIComponent(pagePath)}`,
          {
            headers: {
              'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            },
          }
        );

        const result = await response.json();

        if (result.page) {
          setSeoData({
            title: result.page.title,
            description: result.page.description,
            keywords: result.page.keywords,
            ogTitle: result.page.og_title,
            ogDescription: result.page.og_description,
            ogImage: result.page.og_image,
          });
        }
      } catch (error) {
        console.error('Error fetching SEO data:', error);
      }
    };

    fetchSEO();
  }, [pagePath]);

  return seoData;
}
