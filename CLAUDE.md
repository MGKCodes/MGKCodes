# MGKCodes — Project Instructions

## What MGKCodes is

MGKCodes is a **product-led software studio** run by a solo founder (Matthew Kay).
It exists primarily to ship its own apps and products — Liftio (live on the iOS App Store) is the first; more are planned. Client work is welcome but is **partnership-style, not transactional** — the site is a passive surface for collaborators / investors / interesting conversations to find their way in.

This is **not** a small-business web-dev shop. There are no service tiers, no £99 landing pages, no pricing, no sales funnel. The contact page has a single minimal message form (Resend), framed as "open to conversations", not lead capture. Anything in older files suggesting otherwise is wrong and should be removed.

## Brand model

**Holding model.** MGKCodes is the studio entity; products (Liftio, future apps) live as their own brands and are only visibly tied back to MGKCodes if you go looking. The MGKCodes site itself is where the studio identity lives.

## Voice

Honest, indie solo-founder. **Show the work**, don't narrate the journey. Voice stays implicit. No "I'm Matthew, I build…" intros. State facts. Let the work speak.

Twitter (@mattykay2002) is the conversational channel. The site is the professional face.

### What MGKCodes does (the through-line for every page)

MGKCodes is an **independent software studio that takes products from idea to launched product**. Sketch, design, build, ship, market — all done in-house, by the same hands. Apps, web, whatever the product needs. Liftio is the current shipping product, not the studio's identity. The studio is bigger than any one app.

The site exists to communicate **what the studio does**, not to advertise Liftio. Liftio belongs in the "currently building" callout and the projects list. It does **not** belong in any hero, headline, or top-of-page summary.

### Hard rules — voice and copy

These rules apply to every word of user-facing copy on the site. Treat them as non-negotiable.

- **No em dashes.** Not `—`, not `&mdash;`, not `--`. Use periods, commas, colons, parentheses, or restructure the sentence. Em dashes are the strongest tell of AI-generated text.
- **No marketing-template phrases.** Banned: "considered design", "no roadmap by committee", "ship when right not when sprint closes", "small surface area by choice", "scope flexes; quality doesn't", "ideas worth building", "honest performance", "no shortcuts", "in build" (use "in development" or "currently building"), "revised in public", "end-to-end" as adjective filler, "thinking outside the box" as a literal phrase (the brand DNA inspires it but don't *say* it).
- **No hedging.** "When the fit is genuinely there", "happens to also", "where it matters", "that just works" — cut them or replace with what you actually mean.
- **Specific over generic.** Instead of "modern stacks" say "Next.js" or "Swift" if it's true. Instead of "considered design" describe what's considered.
- **Show, don't claim.** Don't say "we ship quality" — show it by being precise. Don't say "we're independent" three times — say it once and move on.
- **Liftio reference rules.** Liftio appears: in the "Currently" callout on home, in the projects list, in /connect's link list. Liftio does **not** appear: in any hero subhead, in studio's hero or first About paragraph, anywhere as a synecdoche for what MGKCodes is.
- **No fake plurality avoidance.** "We" is fine when it reads as the studio. "I" is fine when it reads honest. Don't get tangled up.
- **Punctuation:** prefer periods over conjunctions. Short sentences land harder. Two short sentences > one long balanced sentence with a clause and an em dash.

## Design language

MGKCodes has its **own** distinct visual identity. It is *not* an extension of Liftio (or any project). Liftio happens to also be dark, but the two should not feel related — MGKCodes is the studio, Liftio is a project the studio ships, they live in different visual worlds.

The MGKCodes identity is built from the brand board (`public/images/logo/BrandBoard.pdf`) — that brand kit is old and template-y, but the DNA (black + blue + framed mark) is the seed for the current design language. The blue in the brand board (`#0074d9`) was too Bootstrap-corporate for a considered studio, so it has been evolved to a muted editorial blue.

### Design principles

- **Dark-only.** No light mode, no theme toggle. Backgrounds, surfaces, borders all step through cool near-blacks (see palette below).
- **Muted editorial blue as the single accent.** Used quietly — link underlines, focus rings, hover states, key small accents. Never as a button fill or large block of color.
- **The framed-logo motif as a subtle visual signature.** The MGKCodes logo is built around a rectangular frame (with the M intentionally breaking out of it — "outside the box"). Carry this *subtly* into the site: thin framed elements, hairline borders that extend past their containers, intentional structure. Never loud, always considered.
- **Animated and dynamic, but purposeful.** Every motion has a job — reveal, emphasize, respond, signal hierarchy. No decorative animated dots/lines/brackets scattered for atmosphere. Examples of good motion: staggered text reveals, frame strokes drawing on entry, magnetic/responsive hover states, scroll-triggered builds. The site should feel like the work of a developer who builds polished, considered things.
- **Typography:** IBM Plex Sans (we override the brand board's Source Sans Pro spec; the brand board is outdated). Bold tight-tracked headings. Uppercase eyebrow tags with wide tracking (`tracking-[1.5px]`).
- **Sharp corners** (`rounded-none` or `rounded-sm` only), thin borders, generous whitespace. Architectural, structural, considered.
- **Logo wherever MGKCodes appears.** Use `logo-white-elements.svg` in the header (and footer where relevant). The actual brand mark in the chrome, not just text.

### Color palette (canonical)

| Role | Hex | Usage |
|---|---|---|
| BG | `#08090d` | Page background — near-black with subtle cool undertone |
| Surface | `#0f1115` | Cards, raised surfaces |
| Surface alt | `#13161c` | Secondary surfaces, hover states on bg |
| Border subtle | `#1a1d24` | Hairlines, default borders |
| Border emphasis | `#2a2e38` | Hover/active borders |
| Text strong | `#ffffff` | Headlines, emphasis |
| Text body | `#d4d6db` | Body copy |
| Text muted | `#8a8e98` | Secondary copy, captions |
| Text quiet | `#4a4e58` | Eyebrow tags, copyright, tertiary |
| Accent | `#4a7ab8` | Muted editorial blue — links, focus, key accents |
| Accent strong | `#5b8acb` | Hover state for accent |
| Accent quiet | `#3a5d8a` | Less prominent accent uses |

## Information architecture

| Route | Purpose | In nav? |
|---|---|---|
| `/` | Studio intro, current focus, project strip, hand-picked tweets | Yes |
| `/projects` | All apps/products on one page, each in its own visual treatment inside the MGKCodes shell. Architecture must equally accommodate future apps — no app should dominate. | Yes |
| `/studio` | Studio story, how MGKCodes operates, philosophy. Replaces the old `/about`. | Yes |
| `/contact` | A minimal message form (Resend) plus email-as-text and the company LinkedIn. "Open to conversations" framing, not a sales funnel. | Yes |
| `/connect` | Conference QR landing page. Ruthlessly simple — name, one-line focus, link list. Inherits site design. **Hidden from nav.** | No |
| `/privacy/liftio`, `/terms/liftio`, `/support/liftio` | Liftio legal — required by App Store. Already correct; do not touch. | No |
| `/privacy`, `/terms` | MGKCodes legal. Out of scope for the reshape unless explicitly asked. | No |

## Tech stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (config lives in `app/globals.css` via `@theme inline`)
- **Animation:** Framer Motion — used sparingly, scroll fade-ins only
- **Icons:** Lucide React
- **Font:** IBM Plex Sans via `next/font/google`

Email sending uses **Resend**: the `/contact` form posts to `app/api/contact/route.ts` (EmailJS was removed in favour of it). Set `RESEND_API_KEY` (see `.env.example`). **Vercel Analytics** is enabled. Do **not** add: heavy form libraries (the contact form is a plain form posting to a Route Handler), other analytics SDKs without asking.

## External links / channels — strict separation

The MGKCodes brand and the founder's personal accounts are **separate identities**. The site enforces this separation:

### MGKCodes (the company / studio)
Only **active** MGKCodes-branded channels appear on the main site (Footer, Contact, Studio "Reach out"). Inactive MGKCodes channels (X, TikTok, Instagram, LinkedIn) are **not** linked anywhere — empty profiles read as abandoned and damage the brand. They get added in batch when content is being posted.

- **Email:** hello@mgkcodes.com (currently the only active MGKCodes channel)

### Personal — Matthew Kay
These appear **only on `/connect`** (the personal QR-code landing page). They must **not** appear in Footer, Contact, Studio, or any MGKCodes-branded surface.

- **Personal site:** https://mattkay02.github.io/
- **GitHub:** https://github.com/MattKay02
- **LinkedIn:** https://www.linkedin.com/in/matthew-kay-/
- **X / Twitter:** https://x.com/mattykay2002

### Products (Liftio)
Linked from `/projects` (project block) and `/connect` (link list). Not in Footer or main nav.

- **Liftio:** https://www.getliftio.com/
- **Liftio App Store:** https://apps.apple.com/gb/app/liftio/id6759969740

## Conventions

- **File naming:** Components PascalCase, pages lowercase per Next.js App Router.
- **Components:** Default to `FC<Props>` with explicit interfaces. No `any`.
- **Tailwind:** Group utility classes by function. Use `cn()` from `lib/utils.ts` for conditional classes.
- **Comments:** Default to none. Only when *why* is non-obvious.
- **No emojis** in code or copy unless explicitly requested.

## What lives where

```
app/
  layout.tsx          # Root layout, fonts, no providers
  globals.css         # Tailwind import, design tokens (dark only)
  page.tsx            # Home
  projects/page.tsx   # All projects, one page
  studio/page.tsx     # Studio story
  contact/page.tsx    # Message form (Resend) + direct links
  connect/page.tsx    # Conference QR landing
  privacy/liftio/     # Liftio legal — leave alone
  terms/liftio/
  support/liftio/
components/
  ui/                 # Button, Card, Section
  layout/             # Header, Footer
lib/utils.ts          # cn() helper
```

## When in doubt

- Match the look and tone of `app/support/liftio/page.tsx`. That page is the visual north star.
- Show the work, don't narrate it.
- If a feature's purpose is to drive sales, it doesn't belong on this site.
