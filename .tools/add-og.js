// One-off script: inject Open Graph / Twitter meta tags into every HTML page.
// Idempotent — skips files that already have og:title. Uses each page's title,
// description and first /assets/*.jpg as the OG image; falls back to a default.

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DOMAIN = 'https://lomz.net';
const DEFAULT_IMG = `${DOMAIN}/assets/home-screen-slider-01.jpg`;
const SITE_NAME = 'Lomz — Art × Technology';

const files = fs.readdirSync(ROOT).filter((f) => f.endsWith('.html'));
let patched = 0;

for (const f of files) {
  const full = path.join(ROOT, f);
  let html = fs.readFileSync(full, 'utf8');
  if (html.includes('property="og:title"')) continue;

  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/);
  const imgMatch = html.match(/\/assets\/[A-Za-z0-9._\/-]+\.(?:jpg|jpeg|png|webp)/);

  const title = titleMatch ? titleMatch[1] : 'Lomz';
  const desc = descMatch ? descMatch[1] : 'Vukasin aka Lomz — explorer focusing on the intersection of art and technology.';
  const img = imgMatch ? `${DOMAIN}${imgMatch[0]}` : DEFAULT_IMG;
  const url = `${DOMAIN}/${f === 'index.html' ? '' : f}`;
  const type = (f === 'index.html' || f === 'about.html') ? 'website' : 'article';

  const block = [
    '',
    '  <!-- Open Graph / Twitter -->',
    `  <meta property="og:title" content="${title}" />`,
    `  <meta property="og:description" content="${desc}" />`,
    `  <meta property="og:image" content="${img}" />`,
    `  <meta property="og:url" content="${url}" />`,
    `  <meta property="og:type" content="${type}" />`,
    `  <meta property="og:site_name" content="${SITE_NAME}" />`,
    `  <meta name="twitter:card" content="summary_large_image" />`,
    `  <meta name="twitter:title" content="${title}" />`,
    `  <meta name="twitter:description" content="${desc}" />`,
    `  <meta name="twitter:image" content="${img}" />`,
    '',
  ].join('\n');

  // Insert before </head>
  html = html.replace(/(\s*)<\/head>/, `${block}$1</head>`);
  fs.writeFileSync(full, html);
  patched++;
  console.log(`OG added: ${f}`);
}
console.log(`\nTotal: ${patched} files patched`);
