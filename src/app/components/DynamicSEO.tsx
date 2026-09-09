import { useEffect } from 'react';
import { useDatabaseSEO } from '../hooks/useDatabaseSEO';
import { useLocation } from 'react-router-dom';

interface DynamicSEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  useDatabase?: boolean;
}

export default function DynamicSEO({
  title: staticTitle,
  description: staticDescription,
  keywords: staticKeywords,
  ogTitle: staticOgTitle,
  ogDescription: staticOgDescription,
  ogImage: staticOgImage,
  useDatabase = true,
}: DynamicSEOProps) {
  const location = useLocation();
  const dbSEO = useDatabaseSEO(location.pathname);

  const seoData = useDatabase && dbSEO ? dbSEO : {
    title: staticTitle || 'Ultra Roofing - Professional Roofing Services in Dallas-Fort Worth',
    description: staticDescription || 'Expert roofing services in DFW. Licensed, insured, and locally trusted.',
    keywords: staticKeywords || [],
    ogTitle: staticOgTitle,
    ogDescription: staticOgDescription,
    ogImage: staticOgImage,
  };

  const finalTitle = seoData.title;
  const finalDescription = seoData.description;
  const finalKeywords = seoData.keywords?.join(', ') || '';
  const finalOgTitle = seoData.ogTitle || seoData.title;
  const finalOgDescription = seoData.ogDescription || seoData.description;
  const finalOgImage = seoData.ogImage || 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200';

  const siteUrl = 'https://ultraroofingtx.com';
  const canonicalUrl = `${siteUrl}${location.pathname}`;

  useEffect(() => {
    document.title = finalTitle;

    const updateOrCreateMeta = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      const selector = `meta[${attribute}="${name}"]`;
      let meta = document.querySelector(selector);

      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    updateOrCreateMeta('description', finalDescription);

    if (finalKeywords) {
      updateOrCreateMeta('keywords', finalKeywords);
    }

    updateOrCreateMeta('og:title', finalOgTitle, true);
    updateOrCreateMeta('og:description', finalOgDescription, true);
    updateOrCreateMeta('og:type', 'website', true);
    updateOrCreateMeta('og:url', canonicalUrl, true);

    if (finalOgImage) {
      updateOrCreateMeta('og:image', finalOgImage, true);
    }

    updateOrCreateMeta('twitter:card', 'summary_large_image');
    updateOrCreateMeta('twitter:title', finalOgTitle);
    updateOrCreateMeta('twitter:description', finalOgDescription);

    if (finalOgImage) {
      updateOrCreateMeta('twitter:image', finalOgImage);
    }

    let link = document.querySelector('link[rel="canonical"]');
    if (link) {
      link.setAttribute('href', canonicalUrl);
    } else {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', canonicalUrl);
      document.head.appendChild(link);
    }
  }, [finalTitle, finalDescription, finalKeywords, finalOgTitle, finalOgDescription, finalOgImage, canonicalUrl]);

  return null;
}
