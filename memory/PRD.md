# Shashank Saurav — Portfolio Site PRD

## Original Problem Statement
Highly interactive personal portfolio for Shashank Saurav (Independent Strategy Consultant, Brand Strategist, Design Thinker, Storyteller). Feels like a strategic case-study showcase + comic-book origin story + modern design portfolio. Personality: curious, intelligent, playful, slightly rebellious, human. Core positioning: *"Building disruptive brand strategies with unobvious insights."*

## Design System
- Colors: Steel `#6B88B3`, Powder `#DDE6F5`, Sun `#F6D34B`, Ink `#1A1A24`
- Fonts: Cabinet Grotesk (display), Inter (body), Space Mono (labels/nav), Caveat (handwriting)
- Visual: Swiss editorial + neo-brutalist (thick 2px black borders, hard offset shadows), hand-drawn SVG doodles, sticky-note accents

## Architecture
- Frontend: React 19 + CRACO + Tailwind + framer-motion + sonner (toasts), single-page scrolling site.
- Backend: FastAPI + Motor (MongoDB). `/api/` root, `/api/status` (legacy), `/api/contact` (POST/GET).
- DB collections: `status_checks`, `contact_submissions`.

## Implemented (2026-12)
- Navbar with smooth-scroll + mobile menu toggle
- Hero with floating doodles, animated CTA, B&W silhouette portrait
- About section with engineer-with-helmet silhouette + origin story + tag chips
- Journey: 7-milestone alternating timeline with sun checkpoints, handwritten title, super badge
- Collections: 3 hero project cards (Dammn Kombucha, Sound of Home, D'Janaé) with custom SVG covers, hover lift, Read More links (placeholder `#`)
- FAQ: 3-item accordion with framer-motion AnimatePresence
- Thank You editorial section with B&W portrait + downward arrow
- Contact: 4 click-to-copy cards (Email/Phone/LinkedIn/Calendly) + working form posting to `/api/contact`
- Backend `POST /api/contact` + `GET /api/contact` storing in MongoDB, with validation (422 on empty)
- All interactive elements carry `data-testid`

## Test Status
- Backend: 100% (5/5 pytest cases)
- Frontend: 100% (all flows verified via testing agent)

## Known/Deferred (P1)
- Replace placeholder silhouette SVGs with real B&W photos (user will upload)
- Replace project `#` hrefs with real case study URLs
- Replace placeholder contact details (hello@…, +91 98…, linkedin/calendly slugs)
- Email notification on form submit (Resend/SendGrid integration)
- Auth-protect `GET /api/contact` (currently public)
- Migrate FastAPI deprecated `on_event` to lifespan handler
- Tighten CORS for production

## Next Tasks Backlog
- P0: None — site is launch-ready pending real assets/links
- P1: SendGrid/Resend email on form, real photo integration, project case-study external links
- P2: Light analytics (page views, form conversions), OG/Twitter meta tags, sitemap.xml, favicon update, Lighthouse a11y polish
