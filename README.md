# Aarany — Next.js + Sanity

Production build of the AARANY Jungle Resort & Adventure site. Next.js (App Router) on the front, Sanity as a headless CMS.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. All six pages work out of the box with the built-in fallback content — no Sanity account needed to develop.

**Pages**

- `/` — Home
- `/stay` — Pool villas + pricing example
- `/adventures` — Safari, treks, daily rhythm
- `/dine` — Restaurant menu + renovation notice
- `/pink-leaf` — Café (own palette via body class)
- `/gallery` — Masonry-ish photo grid

## Wire up Sanity (optional)

The site reads from Sanity when a project ID is configured, and falls back to the data in `src/lib/data.ts` otherwise.

```bash
cp .env.example .env
# Add PUBLIC_SANITY_PROJECT_ID and (optionally) SANITY_API_TOKEN
npm run studio       # http://localhost:3333
```

Schemas live in `schemas/` — Site Settings, Renovation Notice, Rooms, Adventures, Menu Items, Pink Leaf Beans, Café Hours, Gallery Photos, Testimonials.

## Deploy

- **Frontend** — Vercel reads `next.config.mjs` automatically. Add `PUBLIC_SANITY_PROJECT_ID` to its Environment Variables.
- **Studio** — `npx sanity deploy` hosts it at `<your-studio>.sanity.studio`.

## Project layout

```
src/
  app/
    layout.tsx                 # root <html>/<body>, Nav, Footer
    page.tsx                   # /
    stay/page.tsx              # /stay
    adventures/page.tsx        # /adventures
    dine/page.tsx              # /dine
    pink-leaf/
      layout.tsx               # adds body class for palette swap
      page.tsx                 # /pink-leaf
    gallery/page.tsx           # /gallery
  components/
    Nav.tsx
    Footer.tsx
    Placeholder.tsx
    SectionHead.tsx
  lib/
    sanity.ts                  # client + GROQ queries + fetchOrFallback
    data.ts                    # fallback content (used when no project ID)
  styles/global.css            # design tokens + utilities
schemas/                       # Sanity document types
sanity.config.ts               # studio config
```
