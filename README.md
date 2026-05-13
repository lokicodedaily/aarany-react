# Aarany — Next.js + Tailwind + shadcn/ui + Sanity

Production build of the AARANY Jungle Resort & Adventure site.

**Stack**
- **Next.js 15** (App Router, TypeScript, React Server Components)
- **Tailwind CSS** for styling — design tokens defined in `globals.css`, mapped to Tailwind utilities (`bg-bg`, `text-ink`, `text-moss`, etc.)
- **shadcn/ui** primitives — copied into `src/components/ui/`, fully editable
- **Sanity** as the headless CMS, with built-in fallback content so the site runs immediately

## Run locally

```bash
git clone https://github.com/lokicodedaily/aarany-react.git
cd aarany-react
npm install
npm run dev
```

Open <http://localhost:3000>.

**Pages**

| Route | What |
|-------|------|
| `/` | Home — hero, about, highlights, Pink Leaf feature, testimonial |
| `/stay` | Pool villas + worked pricing example |
| `/adventures` | Safari, treks, daily rhythm |
| `/dine` | Restaurant menu + renovation notice banner |
| `/pink-leaf` | Café sub-brand (swaps to a pink palette via body class) |
| `/gallery` | Masonry-ish photo grid |

## Tailwind theme

Design tokens live in two places that stay in sync:

1. **CSS variables** (`src/app/globals.css`) — HSL components for `--bg`, `--ink`, `--moss`, etc., plus a `.page-pinkleaf` scope that swaps them for the café.
2. **Tailwind config** (`tailwind.config.ts`) — exposes those variables as semantic utilities (`bg-bg`, `text-ink`, `border-line`) and as shadcn aliases (`bg-primary`, `text-foreground`).

Fonts are loaded via `next/font/google` in `src/app/layout.tsx`:
- **Cormorant Garamond** → `font-serif` (display)
- **DM Sans** → `font-sans` (body)
- **JetBrains Mono** → `font-mono` (labels, prices)
- **Caveat** → `font-hand` (signage)

## shadcn/ui

`components.json` is configured with `cssVariables: true` and the `new-york` style. Add more primitives:

```bash
npx shadcn@latest add dialog
```

The existing primitives (`Button`, `Card`) were authored to match the design's rounded-pill buttons and bordered cards rather than the shadcn defaults — feel free to swap them back for a stock look.

## Wire up Sanity (optional)

```bash
cp .env.example .env
# Add PUBLIC_SANITY_PROJECT_ID and (optionally) SANITY_API_TOKEN
npm run studio       # http://localhost:3333
```

Schemas in `schemas/` cover Site Settings, Renovation Notice, Rooms, Adventures, Menu Items, Pink Leaf Beans, Café Hours, Gallery Photos, Testimonials. Without a project ID, the site reads from `src/lib/data.ts`.

## Deploy

- **Frontend** — Vercel auto-detects Next.js. Add `PUBLIC_SANITY_PROJECT_ID` to its Environment Variables.
- **Studio** — `npx sanity deploy` hosts it at `<your-studio>.sanity.studio`.

## Layout

```
src/
  app/
    layout.tsx                 # <html>/<body>, fonts, Nav, Footer
    globals.css                # design tokens + tailwind directives
    page.tsx                   # /
    stay/page.tsx              # /stay
    adventures/page.tsx        # /adventures
    dine/page.tsx              # /dine
    pink-leaf/
      layout.tsx               # palette swap via body class
      page.tsx                 # /pink-leaf
    gallery/page.tsx           # /gallery
  components/
    ui/button.tsx              # shadcn — pill buttons (primary/ghost/pink/nav)
    ui/card.tsx                # shadcn — bordered card
    nav.tsx                    # sticky nav with active-link underline
    footer.tsx
    placeholder.tsx            # captioned image stand-in
    section-head.tsx           # numbered eyebrow + display headline
    leaf-mark.tsx              # brand mark SVG
  lib/
    utils.ts                   # cn() helper (clsx + tailwind-merge)
    sanity.ts                  # client + GROQ + fetchOrFallback
    data.ts                    # fallback content
schemas/                       # Sanity document types
sanity.config.ts
tailwind.config.ts
components.json                # shadcn config
```
