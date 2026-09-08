import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';

// Fully static build: every route becomes a physical HTML file in dist/
// with all content, meta tags, and JSON-LD baked in.
export default defineConfig({
  site: 'https://ultraroofingtx.net',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/admin'),
    }),
  ],
  vite: {
    envPrefix: ['VITE_', 'PUBLIC_'],
    resolve: {
      alias: {
        // The original components import react-router-dom. In a static
        // multi-page site, Links become plain <a> tags and navigation is
        // full page loads — this shim provides that without touching the
        // original component code.
        'react-router-dom': fileURLToPath(
          new URL('./src/shims/react-router-dom.tsx', import.meta.url)
        ),
      },
    },
  },
});
