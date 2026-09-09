import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDatabaseSEO } from '../hooks/useDatabaseSEO';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

export default function SEO({
  title: staticTitle,
  description: staticDescription,
  keywords: staticKeywords,
  ogTitle: staticOgTitle,
  ogDescription: staticOgDescription,
  ogImage: staticOgImage,
  canonicalUrl,
  noindex = false,
}: SEOProps) {
  const location = useLocation();
  const dbSEO = useDatabaseSEO(location.pathname);

  const title = dbSEO?.title || staticTitle;
  const description = dbSEO?.description || staticDescription;
  const keywords = dbSEO?.keywords?.join(', ') || staticKeywords;
  const ogTitle = dbSEO?.ogTitle || staticOgTitle;
  const ogDescription = dbSEO?.ogDescription || staticOgDescription;
  const ogImage = dbSEO?.ogImage || staticOgImage;

  useEffect(() => {
    document.title = title;

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

    updateOrCreateMeta('description', description);

    if (keywords) {
      updateOrCreateMeta('keywords', keywords);
    }

    // Robots
    updateOrCreateMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // Open Graph
    updateOrCreateMeta('og:title', ogTitle || title, true);
    updateOrCreateMeta('og:description', ogDescription || description, true);
    updateOrCreateMeta('og:type', 'website', true);
    updateOrCreateMeta('og:locale', 'en_US', true);
    updateOrCreateMeta('og:site_name', 'Ultra Roofing', true);
    if (canonicalUrl) {
      updateOrCreateMeta('og:url', canonicalUrl, true);
    }
    if (ogImage) {
      updateOrCreateMeta('og:image', ogImage, true);
    }

    // Twitter
    updateOrCreateMeta('twitter:card', 'summary_large_image');
    updateOrCreateMeta('twitter:title', ogTitle || title);
    updateOrCreateMeta('twitter:description', ogDescription || description);
    if (ogImage) {
      updateOrCreateMeta('twitter:image', ogImage);
    }

    // Canonical
    const resolvedCanonical = canonicalUrl || `https://ultraroofingtx.com${window.location.pathname}`;
    let link = document.querySelector('link[rel="canonical"]');
    if (link) {
      link.setAttribute('href', resolvedCanonical);
    } else {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', resolvedCanonical);
      document.head.appendChild(link);
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, canonicalUrl, noindex]);

  return null;
}
