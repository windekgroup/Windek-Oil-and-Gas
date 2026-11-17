# Work Report: SEO Improvement Pass — Windek Oil & Gas Website

**Prepared for:** Supervisor
**Project:** Windek Oil & Gas Limited Corporate Website (windekgroup/Windek-Oil-and-Gas)
**Date:** 13 November 2026
**Commit:** `cb41dcd` — "Improve SEO metadata, structured data and internal linking" (pushed to `main`)

---

## 1. Summary

A full technical and on-page SEO pass was carried out across the Astro website. The work
normalised page titles and meta descriptions, corrected and expanded schema.org structured
data, removed invalid and duplicate entities, strengthened internal linking, added an RSS
feed, refined sitemap priorities, and tightened crawl/indexation signals.

All 23 indexable pages now have unique titles within 60 characters and descriptions within
160 characters. The final production build succeeds, all JSON-LD parses, and no internal
links or asset references are broken.

## 2. Objectives

- Keep every page title concise and brand-consistent.
- Keep every meta description within Google's typical snippet length.
- Publish valid, non-conflicting schema.org structured data.
- Remove deprecated or invalid properties that could weaken trust in the markup.
- Strengthen internal links between articles, services and the project case study.
- Improve crawl and discovery signals through sitemap priorities and an RSS feed.
- Avoid regressions in accessibility, rendering or build output.

## 3. Work Completed

### 3.1 Site-wide metadata (`src/layouts/BaseLayout.astro`)

- Added an automatic brand suffix so every page title ends with `| Windek`, while pages that
  already name Windek are left untouched. This prevents duplicated brand names and keeps
  titles within the 60-character target.
- Made canonical links and `hreflang` alternates conditional: noindex pages no longer emit
  self-referencing canonical or hreflang tags.
- Added a site-wide RSS discovery link (`rel="alternate" type="application/rss+xml"`).
- Made Open Graph image MIME type dynamic based on the image extension, and restricted
  fixed width/height tags to the default 1200x630 PNG.
- Replaced the invalid `ICBM` placeholder text with the company's actual latitude and
  longitude.
- Added article metadata: `article:modified_time`, `article:section`, `article:tag` and a
  resolved `article:author` name.
- Added a preconnect hint for `googletagmanager.com`.
- Extended the page-level `WebPage` schema with `isAccessibleForFree`, a per-article author
  `@id`, and a `mainEntity` reference to the article entity.
- Hardened JSON-LD graph collection so nested `@context` values are stripped before nodes
  are merged into the page graph.

### 3.2 Structured data corrections

- **Organization / LocalBusiness**
  - Removed the invalid `EnergyCompany` type (not defined by schema.org).
  - Removed the invalid `vatID` usage for the CAC registration number.
  - Added a `companyRegistration` `Certification`, `foundingLocation`, `keywords`,
    `openingHoursSpecification`, and a `contactPoint.url`.
- **Project**
  - Removed invalid `dateCreated`, `creator` and `partner` properties.
  - Added `keywords`, `parentOrganization` and a partner represented through `member`.
  - Removed the duplicate Project JSON-LD from `ProjectSection.astro`; the canonical entity
    now exists only on the project detail page.
- **Article / Blog**
  - Added `inLanguage`, `isAccessibleForFree` and `articleBody` to each `BlogPosting`.
  - Removed the duplicate `BreadcrumbList` emitted by the article page.
  - Changed the insights index `blogPost` entries to `@id` references so each article is
    described once, on its own page.
  - Added `image` and `inLanguage` to the Blog entity.
- **FAQ**
  - Added `url` and `inLanguage` to each `FAQPage`.
  - Corrected the FAQ `url` derivation so it points at the page, not the fragment.
- **Services**
  - Added `mainEntityOfPage` and expanded `areaServed` to Nigeria, Rivers State and Akwa Ibom.
- **Locations**
  - Added `containedInPlace: Nigeria`, per-Place `url`, and `itemListOrder` on the index.
- **Other pages**
  - Added `inLanguage`, item-list ordering, `DefinedTerm.url` fragments, `breadcrumb` `@id`
    references on About and Contact, and `description` on the Contact page schema.

### 3.3 On-page content and internal linking

- Added a "Related capability" aside to article pages, linking each article to the most
  relevant service page and to the LPG Terminal case study.
- Added screen-reader-only context to repetitive link labels such as "Read", "Read Article",
  "Service Details" and "Location Details".
- Added a visible "Updated" date on revised articles, separate from the original publish date.
- Restored meaningful alt text for service images.
- Trimmed two article descriptions and several page descriptions to fit snippet limits.

### 3.4 Crawl and indexation

- Rebalanced sitemap priorities: contact, careers, glossary and leadership at 0.6; all
  detail pages raised to 0.7.
- Added `/insights/rss.xml` as a valid RSS 2.0 endpoint with escaped XML, sorted by update
  date, and the correct content type.
- Added a stable `id` to the web app manifest.
- Confirmed `robots.txt` points to `sitemap-index.xml` and that the sitemap excludes the
  thank-you page and the 404 page.

## 4. Files Changed

| File | Change | Lines |
|------|--------|-------|
| `astro.config.mjs` | Sitemap priority rules | +3 / −1 |
| `public/manifest.webmanifest` | Added manifest `id` | +1 / −0 |
| `src/components/FAQ.astro` | FAQ `url` and `inLanguage` | +2 / −0 |
| `src/components/ProjectSection.astro` | Removed duplicate Project schema | +3 / −18 |
| `src/components/ServicesSection.astro` | Restored service image alt text | +1 / −1 |
| `src/data/articles.ts` | Trimmed two article descriptions | +2 / −2 |
| `src/layouts/BaseLayout.astro` | Site-wide meta, schema and graph fixes | +79 / −16 |
| `src/pages/about/index.astro` | About schema and description | +3 / −1 |
| `src/pages/about/leadership.astro` | Item list ordering | +1 / −0 |
| `src/pages/careers/index.astro` | Trimmed description | +1 / −1 |
| `src/pages/contact/index.astro` | Contact schema and description | +5 / −1 |
| `src/pages/glossary.astro` | Term URLs and anchor IDs | +6 / −1 |
| `src/pages/index.astro` | Home FAQ schema | +2 / −0 |
| `src/pages/insights/[slug].astro` | Article schema, related links, updated date | +49 / −16 |
| `src/pages/insights/index.astro` | Blog schema references | +6 / −13 |
| `src/pages/insights/rss.xml.ts` | New RSS 2.0 feed | +52 / −0 |
| `src/pages/locations/[slug].astro` | `containedInPlace` | +1 / −0 |
| `src/pages/locations/index.astro` | Place URLs and list ordering | +4 / −2 |
| `src/pages/projects/index.astro` | Project list metadata | +4 / −1 |
| `src/pages/projects/lpg-terminal-facility.astro` | Valid Project schema | +9 / −3 |
| `src/pages/services/[slug].astro` | Service scope and `mainEntityOfPage` | +6 / −1 |
| `src/pages/services/index.astro` | Collection metadata | +4 / −2 |

**Total:** 22 files changed, 244 insertions, 80 deletions.

## 5. Verification

- `npm run check` — 0 errors, 0 warnings, 0 hints across 37 files.
- `npm run build` — completed successfully; 25 pages generated, including the RSS endpoint;
  `sitemap-index.xml` was also produced.
- Title and description audit — 24 HTML pages (23 indexable; thank-you is noindex), maximum
  title length 54 characters, maximum description length 160 characters, 0 over-limit pages.
- JSON-LD validation — every structured-data block on all 25 HTML pages parses successfully;
  no nested `@context` nodes remain.
- Internal link and asset scan — 0 broken internal links or asset references.
- Canonical and heading audit — every page has exactly one canonical link (excluding noindex
  pages) and at least one `h1`.
- Image audit — 58 images, 0 missing `alt` attributes; 4 empty `alt` values are intentional
  decorative author avatars.
- Sitemap audit — `/thank-you/` and the 404 page are excluded; assigned priorities match the
  new rules.
- `404` and `thank-you` pages emit `noindex, nofollow` and no longer emit canonical or
  hreflang links.

## 6. Expected Impact

- Cleaner, non-truncated search-result titles and snippets.
- More trustworthy structured data, with invalid or conflicting entities removed.
- Better eligibility for Organization, LocalBusiness, Breadcrumb, Article, Service and
  Project rich results where Google chooses to display them.
- Stronger internal link equity from articles to commercial service pages and the project
  case study.
- Improved discovery through the RSS feed and revised sitemap priorities.
- Reduced risk of duplicate entity descriptions across pages.

## 7. Notes and Recommendations

- Google no longer displays FAQ rich results for most commercial websites (government and
  health sites are the main exceptions). The `FAQPage` markup is retained because it still
  describes the content accurately, but an FAQ rich snippet should not be expected.
- `Project` is a valid schema.org type under `Organization`; the partner is represented with
  `member` rather than the invalid `partner` property.
- The sitemap does not yet include `lastmod` values. Article dates live in
  `src/data/articles.ts`; adding `lastmod` would require either importing that data into
  `astro.config.mjs` or duplicating the dates.
- After pushing, run the deployed pages through Google's Rich Results Test and submit the
  sitemap in Search Console to confirm the production URLs are indexed.
- Optional follow-ups: add a 192x192 PWA icon for stricter installability, and add visible
  breadcrumbs that match the existing breadcrumb schema.

## 8. Status

Complete and pushed to `origin/main` as part of the `252fe07..53ec8f3` push. The push
triggers the existing GitHub Actions build and GitHub Pages deployment.
