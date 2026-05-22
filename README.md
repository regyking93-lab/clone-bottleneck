# Emma's Rogers Pomeranians

Mobile-first landing page for Facebook/Instagram ads. Every CTA opens Messenger — no checkout, no cart.

## Stack

- Next.js 16 (App Router)
- Tailwind CSS v4 + shadcn/ui
- Framer Motion
- Lucide icons
- Sanity CMS (`/studio`)

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_MESSENGER_URL` | Facebook Messenger link (e.g. `https://m.me/YourPage`) |
| `NEXT_PUBLIC_SITE_URL` | Production URL for SEO/sitemap |
| `SANITY_PROJECT_ID` | Sanity project ID (optional until CMS is connected) |
| `SANITY_DATASET` | Usually `production` |

Without Sanity credentials, the site uses built-in fallback puppy and testimonial data.

## Sanity CMS

1. Create a project at [sanity.io](https://www.sanity.io)
2. Add credentials to `.env.local`
3. Visit `/studio` to manage puppies, testimonials, and site settings

**Puppy fields:** gender, personality, photo, availability, sort order.

## Media

Source folders (originals) live at the project root. Optimized copies are in `public/media/`:

- `hero/` — hero video + poster
- `trust/delivery/` — handoff photos
- `trust/videos/` — delivery videos
- `showcase/` — additional puppy clips

### Compress videos (recommended before deploy)

```bash
brew install handbrake   # or: brew install ffmpeg
npm run compress-videos
```

Outputs go to `public/media/optimized/`. Update paths in `lib/media.ts` if you switch to optimized files.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run compress-videos` | Compress MP4s with HandBrake/ffmpeg |

## SEO

- Metadata + Open Graph in `app/layout.tsx`
- JSON-LD (`LocalBusiness` + `FAQPage`) in `components/seo/JsonLd.tsx`
- `app/sitemap.ts`, `app/robots.ts`, dynamic `app/icon.tsx`, `app/opengraph-image.tsx`
- Descriptive `alt` text on all images via `lib/media.ts`

## Deploy

Deploy to Vercel (or similar). Set env vars in the dashboard. Run video compression locally before pushing large media.
