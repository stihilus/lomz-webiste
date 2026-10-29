// Generates fxhash/<slug>/index.html (the page around each live piece) for every work in data/fxhash.js.
// Run from the repo root:  node scripts/build-works.mjs
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { FXHASH, PEOPLE } from '../data/fxhash.js';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const monthYear = (iso) => `${MONTHS[Number(iso.slice(5, 7)) - 1]} ${iso.slice(0, 4)}`;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function techOf(slug) {
  const dir = `fxhash/${slug}/piece`;
  const index = readFileSync(`${dir}/index.html`, 'utf8');
  if (/p5(\.min)?\.js|p5\.sound/i.test(index)) return 'p5.js';
  if (existsSync(`${dir}/bundle.js`) && /WebGLRenderer/.test(readFileSync(`${dir}/bundle.js`, 'utf8'))) return 'three.js';
  return 'JavaScript';
}

function render(w, prev, next) {
  const tech = techOf(w.slug);
  const meta = [monthYear(w.date), `${w.supply} editions`, tech].join(' · ');
  const person = (p) => `<strong>${esc(p.name)}</strong> (${p.links.map((l) => `<a href="${l.href}" target="_blank" rel="noopener noreferrer">${l.label}</a>`).join(', ')})`;
  const credit = w.with?.length
    ? `\n          <p>Made together with ${w.with.map((k) => person(PEOPLE[k])).join(' and ')}.</p>`
    : '';
  const title = `${w.name} — Generative art — Lomz`;
  const desc = `${w.name}, a generative artwork by Lomz made on fx(hash) in ${monthYear(w.date)}. It runs live in your browser and draws a new variation each time.`;
  const url = `https://lomz.net/fxhash/${w.slug}/`;
  const image = `https://lomz.net/assets/fxhash/${w.id}.jpg`;
  const more = w.page ? `\n          <p><a href="./${w.page}.html">More about this project</a></p>` : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <base href="../../" />
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}" />
  <script>
    (function () {
      var t = null;
      try { t = localStorage.getItem('theme'); } catch (e) {}
      if (!t) { t = 'light'; }
      document.documentElement.setAttribute('data-theme', t);
    })();
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="./css/style.css" />
  <!-- Open Graph / Twitter -->
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(desc)}" />
  <meta property="og:image" content="${image}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Lomz — Art × Technology" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(title)}" />
  <meta name="twitter:description" content="${esc(desc)}" />
  <meta name="twitter:image" content="${image}" />
</head>
<body>

  <site-header></site-header>

  <main>
    <nav class="project-nav container" aria-label="Work navigation">
      <span class="project-nav-pair">
        <a class="project-nav-link" href="./fxhash/${prev.slug}/" rel="prev">&lt; ${esc(prev.name)}</a>
        <span class="project-nav-sep" aria-hidden="true">·</span>
        <a class="project-nav-link" href="./fxhash/${next.slug}/" rel="next">${esc(next.name)} &gt;</a>
      </span>
    </nav>

    <section class="project container">
      <div class="split-head">
        <h1 class="about-lead display-md">${esc(w.name)}</h1>
        <div class="about-body body-lg">
          <p class="caption">${esc(meta)}</p>
          <p>A generative artwork that runs live right here. Every variation is drawn from a new random seed.</p>${credit}${more}
        </div>
      </div>
    </section>

    <section class="container work-section">
      <div class="work-frame">
        <div class="work-stage">
          <iframe id="piece" title="${esc(w.name)}" allow="autoplay"></iframe>
        </div>
        <div class="work-actions">
          <button type="button" id="reroll">New variation ↻</button>
          <a id="fullscreen" href="./fxhash/${w.slug}/piece/index.html" target="_blank" rel="noopener">Open full screen ↗</a>
        </div>
      </div>
    </section>
  </main>

  <site-footer></site-footer>

  <script src="./components/header.js" type="module"></script>
  <script src="./components/footer.js" type="module"></script>

  <!-- Run the piece with a fresh fx(hash) seed (or the one in ?fxhash=, so a variation can be shared) -->
  <script>
    (function () {
      var slug = '${w.slug}';
      var ALPHABET = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
      function newHash() {
        var h = 'oo';
        for (var i = 0; i < 49; i++) h += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
        return h;
      }
      var frame = document.getElementById('piece');
      var full = document.getElementById('fullscreen');
      var hash = new URLSearchParams(location.search).get('fxhash');
      if (!/^oo[1-9a-km-zA-HJ-NP-Z]{49}$/.test(hash || '')) hash = newHash();

      function load() {
        var url = 'fxhash/' + slug + '/piece/index.html?fxhash=' + hash;
        frame.src = url;
        full.href = url;
        history.replaceState(null, '', location.pathname + '?fxhash=' + hash);
      }
      document.getElementById('reroll').addEventListener('click', function () { hash = newHash(); load(); });
      load();
    })();
  </script>
</body>
</html>
`;
}

let count = 0;
FXHASH.forEach((w, i) => {
  if (!existsSync(`fxhash/${w.slug}/piece/index.html`)) throw new Error(`missing piece for ${w.slug}`);
  const prev = FXHASH[(i - 1 + FXHASH.length) % FXHASH.length];
  const next = FXHASH[(i + 1) % FXHASH.length];
  mkdirSync(`fxhash/${w.slug}`, { recursive: true });
  writeFileSync(`fxhash/${w.slug}/index.html`, render(w, prev, next));
  count++;
});
console.log(`wrote ${count} pages`);
