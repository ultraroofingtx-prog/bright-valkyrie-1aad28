# Ultra Roofing — Static Astro Site

Complete rebuild of ultraroofingtx.net as a fully static Astro site.
Every one of the 99 pages is a physical HTML file with all content, meta
tags, and JSON-LD schema baked in — readable by Google, Bing, and AI
crawlers (GPTBot, ClaudeBot, PerplexityBot) with zero JavaScript.

## What's preserved from the original
- All pages: home, about, services (6), maintenance, team, contact, blog
  (12 posts), commercial guides (5), service areas (30 cities), roofing
  city pages (27), Fort Worth / Rhome / Saginaw / Haslet area pages
- All branding: navy #1C2A39 / gold #FFC107, Montserrat, logos, photos
- Booking form (homepage) — same Supabase backend, same email function
- AI chatbot — same Supabase edge function
- Admin tools at /admin (leads, blog scheduler, SEO manager, Outlook
  calendar) — browser-rendered as before, noindexed
- Google Analytics tag, robots.txt (AI crawlers allowed), Roofr link

## What's fixed
- Content now exists in the raw HTML (the old build served an empty shell)
- Titles, descriptions, canonicals, and Open Graph are real HTML tags
  (previously injected by JavaScript, invisible to crawlers)
- JSON-LD schema server-rendered: organization on every page, city schema
  on service-area pages, NEW FAQPage schema on /roofing/* pages
- All canonicals/schema pointed at ultraroofing.com (a different company!)
  — corrected to ultraroofingtx.net
- City canonicals pointed at /cities/<slug>, a route that never existed —
  corrected to /service-areas/<slug>
- Sitemap auto-generated on every build (sitemap-index.xml), admin excluded

## Commands
    npm install
    npm run build     # outputs the complete site to dist/
    npm run dev       # local preview at localhost:4321

## Deploying (pick one)
1. NETLIFY DROP (fastest, no Bolt): run the build, then drag the dist/
   folder onto https://app.netlify.com/drop — then point
   ultraroofingtx.net at that site in Netlify's domain settings.
   The prebuilt dist/ zip I delivered can be dropped as-is.
2. BOLT: create a new project, import/upload this folder (everything
   except node_modules and dist), and publish. Build command: npm run
   build. Output directory: dist.
3. GITHUB + any host (Netlify/Vercel/Cloudflare Pages): push this folder,
   set build command `npm run build`, publish directory `dist`.

If your host serves /about as a 404 (rare), change `build.format` from
'file' to 'directory' in astro.config.mjs and rebuild.

## After deploying — verify (10 seconds)
Open view-source:https://ultraroofingtx.net and search for
"Trusted Roofing Contractor". If it's there, everything shipped.

## Notes
- .env holds the Supabase URL + anon key (safe for client use; same
  values as the original project). Keep this file when deploying via
  Git-based builds, or set the two VITE_ variables in the host's env.
- supabase/ contains your backend functions & migrations for reference —
  it isn't part of the website build.
- To edit page titles/descriptions: src/app/seo/routeMetadata.ts
- To edit city page content: src/app/data/roofingCityData.ts
- The SEO Manager admin tool still overrides meta in the browser at
  runtime; the crawlable HTML meta comes from routeMetadata.ts.
