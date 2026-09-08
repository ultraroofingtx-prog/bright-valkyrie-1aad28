import { routes, allRoutePaths } from './routeMetadata';

export function generateSitemap(): string {
  const urls = allRoutePaths
    .filter(path => !routes[path]?.noindex)
    .map(path => {
      const meta = routes[path];
      const loc = meta.canonicalUrl || `https://ultraroofingtx.net${path}`;

      let priority = '0.7';
      let changefreq = 'monthly';

      if (path === '/') { priority = '1.0'; changefreq = 'weekly'; }
      else if (path === '/blog' || path === '/blog') { priority = '0.8'; changefreq = 'weekly'; }
      else if (path === '/services' || path === '/contact') { priority = '0.9'; }
      else if (path.startsWith('/commercial-') || path.startsWith('/dfw-') || path.startsWith('/how-to-choose-commercial')) { priority = '0.9'; }
      else if (path === '/service-areas') { priority = '0.8'; }
      else if (path.startsWith('/service-areas/dallas') || path.startsWith('/service-areas/fort-worth')) { priority = '0.9'; }
      else if (path.startsWith('/service-areas/')) { priority = '0.7'; }
      else if (path.startsWith('/blog/')) { priority = '0.7'; changefreq = 'yearly'; }
      else if (path === '/about' || path === '/maintenance') { priority = '0.7'; }
      else if (path === '/team') { priority = '0.6'; }

      return `  <url><loc>${loc}</loc><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}
