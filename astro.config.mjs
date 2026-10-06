// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

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
        } else if (/^\/(services|insights|locations|projects|about)\/[^/]+\/$/.test(path)) {
          meta = { priority: 0.6, changefreq: 'monthly' };
        } else {
          meta = { priority: 0.3, changefreq: 'yearly' };
        }
        return /** @type {import('@astrojs/sitemap').SitemapItem} */ ({ ...item, ...meta });
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