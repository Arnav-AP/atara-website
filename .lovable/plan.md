# Atara — Cinematic NGO Website Plan

An Awwwards-caliber storytelling site for Atara, preserving the brochure's botanical green + cream identity and elevating it with cinematic scroll, WebGL botanicals, and layered motion.

## 1. Design System

**Palette** (oklch tokens in `src/styles.css`):

- #eafeeb
- #38b346
- #276c56
- #228548
- #91c4ad

**Typography**: Fraunces (display serif, editorial warmth) + Inter Tight (body). Loaded via `<link>` in `__root.tsx`.

**Motifs**: SVG leaf/frond corner ornaments (from brochure), organic blob shapes, hand-drawn ATARA lotus/hands logo recreated in SVG.

## 2. Interaction & Motion Stack

- **Lenis** — smooth scrolling
- **GSAP + ScrollTrigger** — scroll-driven storytelling, pins, section reveals, text splits (SplitText alt via custom span split)
- **Framer Motion** — page/section reveals, magnetic buttons, layout animations
- **@react-three/fiber + drei + postprocessing** — WebGL hero scene (floating 3D leaves with depth-of-field + subtle bloom), background particles
- **vanilla-tilt / custom** — 3D card tilt on team + cause cards
- **Custom cursor** — blended-mode dot + trailing ring, morphs on interactive elements
- **Loader** — first-visit only: leaf unfurl SVG + logo reveal (~1.2s max)
- Reduced-motion + mobile fallbacks: WebGL scene → static hero image, cursor off, scroll pinning simplified

## 3. Site Structure (v1)

Routes (TanStack Start file-based):

- `/` — Home (cinematic long-scroll narrative)
- `/about` — Story, founder, mission, vision, values
- `/impact` — Animated stats, timeline, success stories
- `/causes` — 5 causes with scroll-pinned reveal per cause
- `/causes/$slug` — cause detail
- `/events` — Fundraisers & Events grid + case studies
- `/events/$slug` — event detail (gallery, funds raised, beneficiaries)
- `/team` — Meet the team (tilt cards)
- `/donate` — Support Our Mission + Stripe checkout
- `/contact` — Form + info
- Placeholder-linked stubs for follow-ups (Archive, Gallery, News, Join, FAQ, Reports, Testimonials)

Shared: floating nav (glass), page-transition overlay (leaf sweep), footer with newsletter + socials.

## 4. Home Page Storyboard

1. **Preloader** — leaf line-draw + "ATARA — Inspire With Impact"
2. **Hero** — WebGL scene of drifting leaves, headline text reveal ("Small hands. Lasting impact."), magnetic CTAs (Join Us / Support), scroll cue
3. **Mission whisper** — pinned text-mask reveal over botanical parallax
4. **Live stats counter** — ₹5,000 donated, 90+ artists, 60+ speakers, 3 NGO partners (animate on view)
5. **Causes carousel** — horizontal scroll-pinned 5 cause cards
6. **Featured events** — Drawing + Public Speaking competition case cards
7. **Founder quote** — Aditya Sawargaonkar, portrait with parallax
8. **CTA band** — "Be part of the next chapter" → Join / Donate
9. **Footer**

## 5. Backend (Lovable Cloud + Stripe)

Enable Lovable Cloud, then Stripe Payments (via `recommend_payment_provider` → `enable_stripe_payments`).

**Tables** (with GRANTs + RLS):

- `contact_submissions` (name, email, message) — public insert, admin read
- `join_applications` (name, email, role, motivation) — same pattern
- `newsletter_subscribers` (email) — public insert
- `donations` (amount, stripe_session_id, email, status) — inserted by webhook
- `events`, `team_members`, `causes` — read public, admin write (v2 admin panel)

**Server functions** (`createServerFn`): `submitContact`, `submitJoin`, `createDonationCheckout`, `subscribeNewsletter`.

**Server routes** (`/api/public/*`): Stripe webhook to record donations.

## 6. Content

All content sourced directly from the 6 brochure images:

- About: mission, vision, founder Aditya Sawargaonkar, IB Service as Action programme, Fountainhead Wockhardt Global School
- Events: ATARA's Drawing Competition (90+ participants), ATARA's Public Speaking Competition (60 speakers)
- Impact: Education (Zilla Parishad Gokulwadi — digital writing tablets), Animal Welfare (APLA NGO — water stations), Healthcare (SSBB NGO — ₹5,000 for Thalassemia patients), Awareness reels on @atara.fwgs
- Team + partners will use placeholder cards labelled clearly so you can swap real names/photos later

## 7. Build Order

1. Design tokens + fonts + logo SVG + leaf ornament SVGs
2. Motion infra: Lenis provider, custom cursor, magnetic button, reveal hooks, page transition
3. Shared layout: nav, footer, preloader
4. Home page (all sections)
5. About, Impact, Causes (+ detail), Events (+ detail), Team, Contact
6. Enable Cloud → tables/migrations → contact/join/newsletter forms wired
7. Enable Stripe → donation checkout + webhook → `/donate` page
8. Accessibility + reduced-motion + mobile pass, SEO head() per route, favicon/OG

## 8. Performance & A11y Guardrails

- WebGL only on `md+` viewports with `prefers-reduced-motion: no-preference`
- Lazy-mount three.js scene, dispose on unmount
- All animations honor `prefers-reduced-motion`
- Semantic landmarks, focus rings preserved, cursor is decorative (native cursor stays functional)
- Images as WebP via generated assets, lazy loading, explicit dimensions

## 9. What's NOT in v1 (explicit stubs)

Impact Archive, full Gallery, News & Updates, Join application form logic (form UI only), FAQ, Annual Reports downloads, Testimonials, Partners detail — linked from nav/footer with "Coming soon" pages so the IA is complete.

---

Approve and I'll start with the design system + motion infra, then build the cinematic Home page first so you can feel the direction before I roll it across the rest.