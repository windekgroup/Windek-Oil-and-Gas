// @ts-check
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Article pages use their own editorial update date. Everything else falls
// back to the date of the last repository commit, which is a stable signal
// that does not churn on every build.
const articlesSource = readFileSync(new URL('./src/data/articles.ts', import.meta.url), 'utf8');
const articleDates = new Map(
  [...articlesSource.matchAll(/slug:\s*'([^']+)'[\s\S]*?updated:\s*'([^']+)'/g)].map((m) => [
    m[1],
    m[2],
  ]),
);

let lastCommitDate;
try {
  lastCommitDate = execFileSync('git', ['log', '-1', '--format=%cs'], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'ignore'],
  }).trim();
} catch {
  lastCommitDate = new Date().toISOString().slice(0, 10);
}

// https://astro.build/config
export default defineConfig({
  site: 'https://windekoilandgasltd.com',
  trailingSlash: 'always',
  // The dev toolbar overlay is dev-only and never reaches the production build.
  // Disabled so `npm run dev` matches what ships.
  devToolbar: {
    enabled: false,
  },
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      // Keep utility/noindex routes out of the sitemap (404 is excluded automatically)
      filter: (page) => !page.includes('/thank-you/'),
      serialize(item) {
        const path = item.url.replace('https://windekoilandgasltd.com', '');
        /** @type {{ priority: number, changefreq: import('@astrojs/sitemap').ChangeFreq }} */
        let meta;
        if (path === '/') {
          meta = { priority: 1.0, changefreq: 'weekly' };
        } else if (['/about/', '/services/', '/projects/', '/locations/', '/insights/'].includes(path)) {
          meta = { priority: 0.8, changefreq: 'monthly' };
        } else if (['/contact/', '/careers/', '/glossary/', '/about/leadership/'].includes(path)) {
          meta = { priority: 0.6, changefreq: 'monthly' };
        } else if (/^\/(services|insights|locations|projects|about)\/[^/]+\/$/.test(path)) {
          meta = { priority: 0.7, changefreq: 'monthly' };
        } else {
          meta = { priority: 0.3, changefreq: 'yearly' };
        }
        const articleMatch = path.match(/^\/insights\/([^/]+)\/$/);
        const lastmod =
          (articleMatch && articleDates.get(articleMatch[1])) || lastCommitDate;
        return /** @type {import('@astrojs/sitemap').SitemapItem} */ ({
          ...item,
          ...meta,
          lastmod,
        });
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 2048,
      cssMinify: true,
    },
  },
});