# MGKCodes

The website of MGKCodes, an independent software studio that takes products from
first sketch to launch. Live at [mgkcodes.com](https://mgkcodes.com).

The site is the studio's professional face: what the studio does, what it is
currently building, and a way to start a conversation. It is not a sales funnel.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, configured in [app/globals.css](app/globals.css)
  via `@theme inline` (dark only, no theme toggle)
- **Animation:** Framer Motion, used sparingly
- **Icons:** Lucide React
- **Font:** IBM Plex Sans via `next/font/google`
- **Email:** Resend, powering the `/contact` form
- **Analytics:** Vercel Analytics
- **Hosting:** Vercel (production auto-deploys from `main`)

## Develop

```bash
npm install
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

| Command | Does |
|---|---|
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve a production build locally |
| `npm run lint` | Run ESLint |

## Environment

The `/contact` form posts to [app/api/contact/route.ts](app/api/contact/route.ts),
which sends mail through Resend. Copy [.env.example](.env.example) to
`.env.local` and fill in:

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key. Without it the form returns a 503. |
| `RESEND_FROM` | Sender address. Defaults to `onboarding@resend.dev`. |
| `CONTACT_TO` | Where messages are delivered. Defaults to `hello@mgkcodes.com`. |

See [.env.example](.env.example) for the free-plan and verified-domain setups.
In the Vercel dashboard, paste raw values with no quotes.

## Deploy

Pushing to `main` triggers a Vercel production build automatically. There is no
manual deploy step. Security headers are set in
[next.config.ts](next.config.ts); image optimization runs on Vercel.

## Project structure

```
app/
  layout.tsx          Root layout: fonts, header/footer, JSON-LD, analytics
  globals.css         Tailwind import and design tokens (dark only)
  page.tsx            Home
  projects/           All products, one page
  studio/             Studio story and philosophy
  contact/            Message form (Resend) and direct links
  connect/            Conference QR landing page (hidden from nav)
  privacy|terms|support/liftio/   Liftio legal (App Store required)
  privacy|terms/      MGKCodes legal
  api/contact/        Resend route handler
  icon.tsx, apple-icon.tsx, *opengraph-image.tsx   Generated images (next/og)
  sitemap.ts, robots.ts, manifest.ts               Generated metadata
components/
  ui/                 Button, Section, SitePreview
  layout/             Header, Footer
  JsonLd.tsx          Structured-data injector
lib/
  schema.ts           JSON-LD graph and FAQ builders
  ogCard.tsx          Shared Open Graph card renderer
  utils.ts            cn() class helper
public/               Logos, app icons, llms.txt, brand board
```

## Conventions and design

Brand voice, information architecture, and hard copy rules live in
[CLAUDE.md](CLAUDE.md). The visual design language (palette, typography, motion,
the framed-mark motif) is documented in [DESIGN.md](DESIGN.md).
