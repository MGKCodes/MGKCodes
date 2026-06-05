# Design language

The visual reference for the MGKCodes site. This is the studio's own identity. It
is not an extension of any product the studio ships. For brand voice and copy
rules, see [CLAUDE.md](CLAUDE.md).

The seed is the brand board (`public/images/logo/BrandBoard.pdf`): black, blue,
and a framed mark. That kit is old and template-y, so the DNA has been evolved,
not copied. The original Bootstrap-blue (`#0074d9`) became a muted editorial blue.

## Principles

- **Dark only.** No light mode, no theme toggle. Backgrounds, surfaces, and
  borders all step through cool near-blacks.
- **One accent, used quietly.** The muted editorial blue appears in link
  underlines, focus rings, hover states, and small key accents. Never as a button
  fill or a large block of color.
- **The framed mark as a subtle signature.** The logo is a rectangular frame with
  the M breaking out of it (the "outside the box" idea). Carry this in quietly:
  thin frames, hairline borders that extend past their containers, intentional
  structure. Never loud.
- **Motion with a job.** Every animation reveals, emphasizes, or responds. No
  decorative drifting dots or lines. Good motion: staggered text reveals, frame
  strokes drawing on entry, responsive hover, scroll-triggered builds.
- **Architectural feel.** Sharp corners, thin borders, generous whitespace.

## Color tokens

Defined in [app/globals.css](app/globals.css) under `@theme inline`, consumed as
`var(--color-*)` and Tailwind color utilities.

| Token | Hex | Role |
|---|---|---|
| `--color-bg` | `#08090d` | Page background, near-black with a cool undertone |
| `--color-surface` | `#0f1115` | Cards, raised surfaces |
| `--color-surface-alt` | `#13161c` | Secondary surfaces, hover on bg |
| `--color-border` | `#1a1d24` | Hairlines, default borders |
| `--color-border-strong` | `#2a2e38` | Hover and active borders |
| `--color-text-strong` | `#ffffff` | Headlines, emphasis |
| `--color-text` | `#d4d6db` | Body copy |
| `--color-text-muted` | `#8a8e98` | Secondary copy, captions |
| `--color-text-quiet` | `#4a4e58` | Eyebrow tags, copyright, tertiary |
| `--color-accent` | `#4a7ab8` | The accent: links, focus, key accents |
| `--color-accent-strong` | `#5b8acb` | Accent hover |
| `--color-accent-quiet` | `#3a5d8a` | Less prominent accent uses |

## Typography

- **Family:** IBM Plex Sans, loaded with `next/font/google` in
  [app/layout.tsx](app/layout.tsx) and exposed as `--font-ibm-plex-sans`. Weights
  400, 500, 600, 700.
- **Headings:** bold, tight tracking (`tracking-tight`), tight leading.
- **Eyebrow tags:** uppercase, `text-[11px]`, `font-semibold`,
  `tracking-[1.5px]`, usually in `--color-text-quiet`.
- **Body:** roughly 16 to 17px, relaxed leading (`leading-relaxed` or
  `leading-[1.7]`).

## The framed-mark motif

The frame shows up as structure, not decoration:

- Hairline rules that draw on entry (the `draw-line` and `draw-vertical`
  keyframes in [app/globals.css](app/globals.css), and the animated strokes in
  the home hero).
- Borders set one level up from the background (`--color-border`), strengthening
  to `--color-border-strong` on hover.
- Small accent ticks that extend past a container edge.

The brand mark itself ships as `public/images/logo/svg/logo-white-elements.svg`,
used in the [Header](components/layout/Header.tsx) and
[Footer](components/layout/Footer.tsx).

## Motion

Framer Motion, applied lightly. Two patterns carry most of the site.

**Reduced motion is gated two ways.** `MotionConfig reducedMotion="user"` wraps
the app in [app/layout.tsx](app/layout.tsx), so Framer honors
`prefers-reduced-motion` globally. Where a component sets an `initial` opacity
that would otherwise hide content for reduced-motion users, it also checks
`useReducedMotion()` and passes `initial={false}` to skip the hidden state. See
[app/page.tsx](app/page.tsx) and [app/projects/page.tsx](app/projects/page.tsx).

**The hero slides, it does not fade (LCP).** The home `<h1>` lines animate `y`
only, never opacity. The text is painted at full opacity on first frame, so it
counts as the Largest Contentful Paint immediately instead of waiting out a fade.
Use this for any above-the-fold text: animate position, not visibility.

**Scroll reveals.** Below-the-fold sections use
`whileInView` with `viewport={{ once: true, margin: "-80px" }}` and a short
ease-out. The shared [Section](components/ui/Section.tsx) component bakes this in.

Shared easing is `[0.22, 1, 0.36, 1]`.

## Components

- Default to `FC<Props>` with an explicit interface. No `any`.
- Compose conditional classes with `cn()` from [lib/utils.ts](lib/utils.ts).
- Corners stay sharp (`rounded-none`, occasionally `rounded-sm`).
- Comments only when the *why* is not obvious.
- [Button](components/ui/Button.tsx): `primary`, `secondary`, `ghost`; renders an
  `a`, a `Link`, or a `button` depending on props.
- [Section](components/ui/Section.tsx): scroll-reveal wrapper with `narrow` and
  `wide` widths.
- [SitePreview](components/ui/SitePreview.tsx): scaled, sandboxed live preview of
  a product site. Desktop only; it does not mount below `md`.
