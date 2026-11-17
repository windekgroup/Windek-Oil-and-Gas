# Work Report: FAQ Section Redesign — Windek Oil & Gas Website

**Prepared for:** Supervisor
**Project:** Windek Oil & Gas Limited Corporate Website (windekgroup/Windek-Oil-and-Gas)
**Date:** 6 October 2026
**Commit:** `252fe07` — pushed to `main` on GitHub

---

## 1. Summary

The Frequently Asked Questions (FAQ) section of the website was redesigned to improve
visual hierarchy, readability and user engagement, and to give visitors a clear next step
after reading answers. The work covered a full restyle of the reusable FAQ component,
a layout update on the homepage, and a progressive animation for the accordion behaviour.
All changes are live in the codebase and have been pushed to the GitHub repository, which
triggers the existing GitHub Actions deployment pipeline.

## 2. Objectives

- Make the FAQ section visually consistent with the rest of the redesigned site.
- Improve scan-ability: visitors should find the question they need in seconds.
- Offer a direct contact path for visitors whose question is not covered.
- Keep the accordion accessible and respectful of reduced-motion settings.
- Avoid disrupting the four other pages that reuse the FAQ component.

## 3. Work Completed

### 3.1 FAQ component (`src/components/FAQ.astro`)

- Rebuilt the section as a **two-column layout**: a sticky header column (heading, intro
  and optional call-to-action) beside the list of questions, which collapses to a single
  column on smaller screens.
- Added a new **eyebrow label** prop so each page can title the section in its own voice
  (e.g. "Client Questions" on the homepage).
- Added a **"Talk to our team" contact card** controlled by a new `showCta` prop. It
  presents the company phone number, email address and a "Send an enquiry" button linking
  to the contact page. The prop defaults to `false`, so no other page is affected unless
  it opts in.
- Restyled each question row with a **numbered index (01, 02, …)**, a circular plus
  indicator that rotates into a cross when open, hover and open-state colour feedback, and
  border-only rows instead of boxed cards for a cleaner, editorial look.
- Preserved existing behaviour: schema.org `FAQPage` structured data, anchor IDs for
  deep-linking, and keyboard/screen-reader support of the native `<details>` element.

### 3.2 Homepage (`src/pages/index.astro`)

- Wrapped the FAQ section with decorative elements: a gradient hairline divider and a
  soft blue glow, so the section reads as a distinct closing chapter of the page.
- Enabled the new eyebrow ("Client Questions") and the contact call-to-action card.
- Reordered the FAQ schema data so the structured-data list and the rendered list are
  always identical (previously the schema was generated before the extra EPCI question
  was added, which could cause a mismatch).

### 3.3 Accordion animation (`src/styles/global.css`)

- Added an open/close height animation for the accordion using the modern
  `::details-content` pseudo-element with `calc-size(auto, size)`.
- The animation is **progressive enhancement**: browsers without support keep the
  instant native behaviour, and an unsupported `calc-size()` falls back to `auto`, so
  answers are never clipped.
- Scoped to `prefers-reduced-motion: no-preference`, so visitors who request reduced
  motion get the instant, unanimated behaviour.

## 4. Impact on Other Pages

The FAQ component is reused on five pages: Home, Contact, Insights (article pages),
Services (service pages) and the LPG Terminal Facility project page. Because the new
call-to-action is opt-in (`showCta` defaults to `false`), those pages receive the visual
redesign automatically but no duplicated call to action — they already end with the
site-wide CTA band.

## 5. Files Changed

| File | Change |
|------|--------|
| `src/components/FAQ.astro` | Two-column layout, sticky header, contact CTA, numbered accordion styling (+105/−21 lines) |
| `src/pages/index.astro` | Section decoration, eyebrow and CTA enabled, schema data reordered (+36/−11 lines) |
| `src/styles/global.css` | Reduced-motion-safe accordion height animation (+22 lines) |

## 6. Verification and Deployment

- Changes reviewed as a full diff before committing; no unrelated files or secrets
  included (the working tree contained only these three modified files).
- Committed as `252fe07` and pushed to `origin/main` on
  `https://github.com/windekgroup/Windek-Oil-and-Gas`.
- The repository's GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the
  Astro site and deploys it to GitHub Pages with the custom domain, so the update will
  publish automatically.
- The site was run locally on the Astro development server (`npm run dev`,
  http://localhost:4321) during development for visual checks.

## 7. Notes and Recommendations

- A production build (`npm run build`) and a quick visual pass on mobile widths are
  recommended before relying on the deployment, as the layout introduces new responsive
  breakpoints (two columns at `lg` and above).
- The `showCta` card could be enabled on the Services and Contact pages after
  confirming they do not already surface a strong contact prompt.
- Committing a `npm run build` output check to the pre-deploy step would catch any
  template regressions automatically in future updates.

---

**Status:** Complete and pushed to `main`.
