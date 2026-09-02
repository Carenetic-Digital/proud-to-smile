# Proud To Smile Dentistry — Design System

**The client-approved homepage (formerly Concept C / `homepage-v3`) is now
`src/pages/index.astro`, and its visual language is the standard for every page
on the site.** The two earlier concept pages (`homepage-v2`, the original
`index`) have been removed. Anything new should be built from the shared
components below rather than re-deriving section markup.

Structure and layout are cloned from the design reference (pdp.carenetic.digital);
colors, typography, and all content are Proud To Smile's own, per the client's
intake call decision (2026-07-15). See `.site-factory/state.json` → `pages.notes`
and `intake/INTAKE.md` for the full rationale.

## Colors

Brand palette extracted from proudtosmile.com, defined in `src/styles/global.css`
as OKLCH 50–950 scales generated from the client's brand hex values.

| Family | Brand hex | Anchors at | Usage |
|---|---|---|---|
| `primary` (blue) | `#1249E9` | 600 | Primary buttons, links, headings accents, focus ring |
| `secondary` (green) | `#1E7641` | 600 | Footer background, secondary buttons, dark section backgrounds |
| `accent` (cyan) | `#75E0FF` | 200 | Light tints for outline-button backgrounds, section washes — not for text |
| `neutral` (gray) | — | 900 ≈ `#0E0E0E` | Body text (900), muted text (700), borders (300) |

### Contrast (WCAG 2.2 AA — verified)

| Pairing | Ratio | Result |
|---|---|---|
| White on `primary-600` (buttons) | 6.66:1 | ✅ AA/AAA |
| `primary-700` on white (links) | 9.00:1 | ✅ AA/AAA |
| `neutral-900` on white (body text) | 19.3:1 | ✅ AA/AAA |
| `neutral-700` on white (muted text) | 10.7:1 | ✅ AA/AAA |
| White on `primary-700` (insurance strip, `.btn-bar`) | 9.06:1 | ✅ AA/AAA |
| White on `primary-800` (testimonial panel) | 12.55:1 | ✅ AA/AAA |
| White on `secondary-600` (secondary buttons) | 5.64:1 | ✅ AA |
| White on `secondary-700` (footer background) | 7.87:1 | ✅ AA/AAA |

Semantic tokens (`--color-background`, `--color-foreground`, `--color-muted`,
`--color-border`, `--color-ring`) are mapped in `global.css` — always prefer
these over raw palette steps in new components.

**Never use `accent` for text** — it's a pale tint (L ≈ 0.85) reserved for
button/section backgrounds only; it fails contrast as a foreground color.

## Typography

Single family for both headings and body, per `intake/branding/fonts.md`:

- **Font:** Inter (400, 500, 600, 700, 800), loaded via Google Fonts `display=swap`
- **Differentiation:** weight only (headings 600–700, body 400–500) — not a second family

### Fluid type scale (`--font-size-*`, clamp mobile → desktop)

| Token | Range | Usage |
|---|---|---|
| `text-xs` | 12–12.8px | Captions, legal fine print |
| `text-sm` | 12.8–14px | Secondary text, nav dropdown items |
| `text-base` | 16–17px | Body copy |
| `text-lg` | 18–20px | Lead paragraphs |
| `text-xl` | 20–24px | h4, card titles |
| `text-2xl` | 24–30px | h3 |
| `text-3xl` | 30–38px | Large stat/quote text |
| `text-4xl` | 36–48px | h2, section headlines |
| `text-5xl` | 44–64px | h1, hero headline |

### Heading hierarchy

- **h1** — `text-5xl`, weight 700, `tracking-tight`, `leading-tight`
- **h2** — `text-4xl`, weight 700, `tracking-tight`
- **h3** — `text-2xl`, weight 600
- **h4** — `text-xl`, weight 600
- **h5** — `text-lg`, weight 600
- **h6** — `text-base`, weight 600, uppercase, `tracking-wide` (eyebrow/label style)

## Spacing & Shape

Mirrors the reference site's section rhythm and flat card/pill-button language
(structure cloned; only the palette changed):

- **Large section padding:** `--spacing-section` = 7rem (112px) top/bottom
- **Small/band section padding:** `--spacing-section-sm` = 3.5rem (56px) — e.g. insurance strip
- **Container padding:** `--spacing-content` = 2rem horizontal
- **Radius:** `--radius-sm` 3px, `--radius-md` 10px (cards), `--radius-lg` 20px (feature panels), `--radius-pill` 999px (buttons)
- **Shadows:** none — flat design; borders (`--color-border`) do the separating work, not elevation

## Components

Build pages by composing these. Every one of them is already in the approved
homepage language — reuse them rather than hand-rolling equivalent markup.

### Section components

- **`Hero.astro`** — Homepage hero. Copy left, photograph bleeding to the band's
  right edge, phone + booking CTAs, Google rating. Splits at `xl` (not `lg`): the
  source photo is landscape 1420x700 and a two-column split below 1280px crops it
  into a blurry portrait while squeezing the h1 to five lines. The `<img>` (not a
  CSS background) is the LCP element — `loading="eager"`, `fetchpriority="high"`,
  `decoding="sync"`, and `object-[80%_top]` to keep both faces in the crop.
- **`InsuranceStrip.astro`** — Thin dark `primary-700` interruption band with a
  ghost button. Takes `text` / `href` / `label`; defaults to the insurance message.
- **`TestimonialPanel.astro`** — Large `primary-800` rounded panel with the
  decorative quote glyph. Takes a `quotes` array (`quote` / `author` / `context`).
  Only ever pass real reviews from `reference/content-proudtosmile.md` section 5.
  STAGING: the quote list currently renders an `EmbedPlaceholder` instead — the
  practice is standing up an ELFsight reviews widget. Same swap is in place on
  `/testimonials/` and the doctor template. The reviews are untouched in
  `src/data/testimonials.ts` and `src/data/doctors.ts`, so restoring the rendered
  quotes is a revert of those three blocks.
- **`EmbedPlaceholder.astro`** — Dashed placeholder box marking where a
  third-party widget lands. Takes `label`, `tone` (`light` / `dark` for the
  `primary-800` panels), and `minHeight`. Carries `data-embed-placeholder`, so
  `grep -rl data-embed-placeholder dist` lists every one still shipping.
- **`ServicesGrid.astro`** — The service grid: two columns, each block listing its
  sub-treatments over divider rules and closing with a full-width `.btn-bar`.
  Renders all 14 real services by default; pass `only={['crowns', ...]}` to show a
  subset in a given order. Reuse verbatim on `/services/`, doctor, and location pages.
- **`CtaSection.astro`** — Closing CTA: a white card floating on a
  `primary-700 → secondary-700` gradient band. **Every page ends with this.**
  Takes `heading` / `text` to tailor the message per page.

### Chrome

- **`Header.astro`** — Sticky nav. Desktop dropdowns/mega-menu use native
  `<details>/<summary>` (keyboard-accessible with no custom ARIA state management
  needed); the hamburger-toggled mobile panel (nested `<details>`) is used up
  through `lg` (1024px) and the full desktop nav + CTAs only appear at `xl`
  (1280px) — the full nav row + phone + booking CTA cluster doesn't fit in the
  1024px viewport, so the switch is deliberately later than the conventional `lg`
  breakpoint (verified with a 1024–1440px sweep during design review).
- **`Footer.astro`** — `secondary-700` ground. Practice info/hours, Patient Center
  links, Quick Links, social icons (Facebook/Instagram/YouTube — real URLs only;
  TikTok omitted until the client supplies the actual profile URL), and the full
  legal-page link row.
- **`PageHero.astro`** — Interior-page hero: H1 + intro on the tinted band, with an
  optional photo filling the right half and an optional phone/booking CTA pair.
  Every page except the homepage opens with this.
- **`Prose.astro`** — Typographic wrapper for rich-text bodies (blog, legal). The
  project has no Tailwind typography plugin; element styles are declared here once.
- **`FeatureCards.astro`** — 3/4-column card row with the mint accent rule on top.
- **`FaqAccordion.astro`** — Native `<details>` FAQ list, no JS, no ARIA to sync.
- **`LocationCard.astro`** — The practice card: address, hours, directions.
- **`PostCard.astro`** — Blog index card.
- **`Breadcrumbs.astro`** — Trail plus its BreadcrumbList JSON-LD.
- **`ArrowCircle.astro`** — The circular arrow glyph. Decorative (`aria-hidden`),
  inherits `currentColor`. See the rule below.

## Utility classes (`global.css` → `@layer components`)

| Class | Use |
|---|---|
| `.container-page` | The page gutter/measure — `max-w-7xl` + responsive padding. Use on every section's inner wrapper instead of retyping the utility chain. |
| `.btn` | Base pill button — 44px+ min-height, `gap-2` for the arrow glyph. |
| `.btn-primary` | Filled blue. The **phone number**, per client decision — not booking. |
| `.btn-outline` | White with blue border. Secondary action (ZocDoc booking). |
| `.btn-secondary` | Filled green. Rarely used; prefer primary/outline. |
| `.btn-on-dark` | Ghost button (white outline, transparent) for use **on dark bands** — insurance strip, testimonial panel. |
| `.btn-bar` | Full-width squared bar button closing a service block. Squared (`radius-sm`) on purpose: it reads as a block footer, not a floating action. Not a `.btn` variant. |
| `.link-arrow` | Inline text link that closes a copy block — small, semibold, `primary-700`. |
| `.arrow-circle` | The glyph itself; use the `ArrowCircle` component, not this class directly. |
| `.card` | Flat white card — `radius-md`, border, no elevation. |
| `.panel` | Large rounded surface (`radius-lg`) — testimonial panels, image bands, floating CTA cards. |

### The arrow rule

**Every CTA button and every text link that closes a copy block ends with an
`<ArrowCircle />`.** This is the single most recognisable detail of the approved
design — a link without it looks out of place.

```astro
<a href="/about/" class="link-arrow">Learn More About Us <ArrowCircle /></a>
<a href="tel:+19082211188" class="btn btn-primary">Call 908-221-1188 <ArrowCircle /></a>
```

Nav links, footer link columns, and legal links are the exception — they're lists,
not closing CTAs, and stay plain.

### Section rhythm

- Full sections: `py-[var(--spacing-section)]` (7rem).
- Where two sections stack under one visual grouping (testimonials → services), the
  first uses `pb-` only so they don't double up. The approved homepage does exactly
  this — follow the same pattern rather than adding a divider.
- Band/strip sections: `py-6`, or `pt-[var(--spacing-section-sm)]` for image bands.

### Dark-surface focus rings

The default blue focus ring falls below 3:1 on dark brand grounds, so `global.css`
swaps in `--color-ring-on-dark` (the light cyan) for anything focused inside
`bg-primary-600/700/800/900` and `bg-secondary-600/700/800/900`. Gradient bands
carry no `bg-*` class, so add `.on-dark` to those — **but only when the focusable
elements actually sit on the dark ground.** `CtaSection`'s buttons live inside a
white card, so that band is deliberately left without it.

## Navigation & sitemap coverage

The header and footer between them link every page in
`.site-factory/state.json` → `pages.planned`. Re-run the coverage check after
adding pages — an orphaned page is invisible to both patients and crawlers.

**Header** (top-level items capped at 7 — the nav row only clears the phone +
booking CTA cluster at `xl`/1280px, so a new page goes into an existing dropdown,
never a new top-level entry):

| Item | Contains |
|---|---|
| Home | — |
| About | About Us, Our Team, Careers, News & Press |
| Services | all 14 services + View All Services, Smile Gallery |
| Doctors | the 2 real providers + Meet the Whole Team |
| Patient Center | New Patients, Patient Forms, Insurance, Pricing, Financial Options, Offers & Promotions, Bill Pay, Resources, FAQs, + Patient Center Overview |
| Blog | — |
| Testimonials | — |

**Footer** carries the legal row, Refer a Patient, and everything above that
benefits from a second entry point. The address links to
`/locations/bernardsville/` — the client ruled out a "Find Location" nav item
(single practice), so this is how the location page stays reachable.

**Deliberately unlinked:** individual blog posts (reached via `/blog/`) and
`/appointment-thank-you/` (a form confirmation page).

## Page templates

Every page type is a clone of the corresponding template on the design reference
(`reference/screenshots/`). Build a new page by picking the closest template and
composing the shared components — don't invent a fourth layout.

| Template | Route | Reference screenshot |
|---|---|---|
| Homepage | `/` | `home.png` |
| Service | `service/[slug].astro` | `service-dental-implants.png` |
| Provider | `doctors/[slug].astro` | `provider-dr-robert-brown-dds.png` |
| Location | `locations/bernardsville.astro` | `location-downtown-dental-office.png` |
| Interior content | About, Patient Center | `patient-resources-new-patients.png` |
| Index / card grid | Services, Doctors, Blog | `services-index.png`, `blog-index.png` |
| Article | `blog/[slug].astro` | single-column prose |
| Legal | `[legal].astro` | single-column prose |

**Service page section order** — hero → why + benefits + photo → candidacy →
options grid → process + insurance → aftercare + photo → FAQs → CTA.
**Every optional section is conditional.** The real practice didn't publish a process, candidacy list, or FAQ set for all 14
services, so a service with no source data for a section simply doesn't render
it. Never fill a gap with invented copy to make the template look complete.

**Provider page** — name + credentials + bio + headshot → education |
affiliations → philosophy quotes → patient testimonial panel → services grid →
location → CTA. Karima West has no published bio (the live site literally says
"coming soon.."), so `bio: []` triggers the `bioPending` fallback.

## Content data modules

Page content lives in `src/data/`, not inline in templates, so the same facts
can't drift between pages:

| Module | Holds | Source |
|---|---|---|
| `site.ts` | Address, phone, hours, booking URLs, socials, rating | content section 1 |
| `services.ts` | All 14 services — copy, benefits, options, process, FAQs | content section 4 |
| `doctors.ts` | 2 provider profiles + the support team | content section 3 |
| `testimonials.ts` | 26 real reviews | content section 5 |
| `legal.ts` | 11 legal/compliance documents | boilerplate — needs counsel review |

Blog posts are an Astro content collection at `src/content/blog/` (62 markdown
files). `draft: true` marks the 20 whose body text was never captured from the
live site — they build as noindexed routes so old `/post/<slug>` links resolve,
show an honest "being migrated" notice, and stay out of the index listing.

**The content rule that matters most:** every fact on this site traces to
`reference/content-proudtosmile.md`. If the real practice didn't publish it,
don't write it — omit the section, or say plainly that the information is coming.
That applies to prices, insurance carrier names, financing partners, promotions,
staff, and reviews.

## Scoped-style trap in `Header.astro`

`.nav-link`, `.dropdown-link`, `.dropdown-panel`, and `.mobile-sublink` live in
Header's `<style>` block, so Astro scopes them (`.dropdown-link[data-astro-cid-…]`)
and they **outrank plain utility classes on the same element**. Writing
`class="dropdown-link text-primary-700 w-72"` silently does nothing. Add a variant
class inside that same `<style>` block instead — that's what
`.dropdown-link-strong`, `.mobile-sublink-strong`, and `.dropdown-panel-md` are for.

## Content & Brand Notes (do not deviate without client sign-off)

- **Clear Aligner Therapy**, not "Invisalign," is the on-page brand name throughout
  (finalized on intake call). The URL slug stays `/service/invisalign/` for SEO
  continuity — only the on-page copy changed.
- **Primary CTA is phone** (`908-221-1188`); ZocDoc online booking is secondary/promoted,
  not primary.
- **Single location** (Bernardsville, NJ) — no "Find Location" nav item or multi-location
  cards, unlike the design reference.
- All content — testimonials, provider bios, services, hours — is sourced verbatim from
  `reference/content-proudtosmile.md`. Do not fabricate reviews, stats, or staff.

## Images

All images live in `public/images/proudtosmile/` (sourced from the real
proudtosmile.com site during intake — see `reference/content-proudtosmile.md`
section 10). Favicon/app icons were generated from `practice-icon.webp` via
ImageMagick (`favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`,
`icon-512-maskable.png`).

Every `<img>` has explicit `width`/`height` to prevent CLS. Hero image is eager +
`fetchpriority="high"`; all others are `loading="lazy"`.
