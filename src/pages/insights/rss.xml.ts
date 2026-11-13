import type { APIRoute } from 'astro';
import { ARTICLES } from '../../data/articles';
import { COMPANY_NAME, SITE_URL } from '../../data/site';

const escapeXml = (value: string) =>
  value.replace(
    /[<>&'"]/g,
    (char) =>
      ({
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        "'": '&apos;',
        '"': '&quot;',
      })[char] ?? char,
  );

export const GET: APIRoute = () => {
  const items = [...ARTICLES]
    .sort((a, b) => (b.updated ?? b.date).localeCompare(a.updated ?? a.date))
    .map((article) => {
      const url = `${SITE_URL}/insights/${article.slug}/`;
      return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(article.description)}</description>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <category>${escapeXml(article.category)}</category>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(COMPANY_NAME)} Insights</title>
    <link>${SITE_URL}/insights/</link>
    <atom:link href="${SITE_URL}/insights/rss.xml" rel="self" type="application/rss+xml" />
    <description>Analysis on Nigerian LPG infrastructure, local content on EPCI projects, gas flaring and commercial energy decisions.</description>
    <language>en-NG</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
};
