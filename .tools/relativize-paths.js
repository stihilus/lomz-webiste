// One-off: convert all internal absolute paths to relative paths.
// Lets the site work at any subpath (e.g., GitHub Pages project URL) AND at a
// custom-domain root, without changes. External URLs (https://, mailto:) and
// OG meta absolute URLs are left untouched.

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

function patch(filepath, replacements) {
  let content = fs.readFileSync(filepath, 'utf8');
  const before = content;
  for (const [pattern, sub] of replacements) {
    content = content.replace(pattern, sub);
  }
  if (content !== before) {
    fs.writeFileSync(filepath, content);
    console.log('updated:', path.relative(ROOT, filepath));
  }
}

// --- HTML files at root ---
const htmlFiles = fs.readdirSync(ROOT).filter(f => f.endsWith('.html'));
const htmlReplacements = [
  // Anchors
  [/href="\/"/g, 'href="./"'],
  [/href="\/(\w[\w\-]*\.html)"/g, 'href="./$1"'],
  // Stylesheets and scripts
  [/href="\/css\//g, 'href="./css/'],
  [/src="\/css\//g, 'src="./css/'],
  [/src="\/components\//g, 'src="./components/'],
  // Images
  [/src="\/assets\//g, 'src="./assets/'],
  [/data-img="\/assets\//g, 'data-img="./assets/'],
  // ES module imports (in inline scripts)
  [/from '\/data\//g, "from './data/"],
  // JS template-string hrefs inside inline scripts (e.g. slider)
  [/href="\/\$\{([^}]+?)\}\.html"/g, 'href="${$1}.html"'],
];
for (const f of htmlFiles) patch(path.join(ROOT, f), htmlReplacements);

// --- components/related-projects.js ---
patch(path.join(ROOT, 'components', 'related-projects.js'), [
  [/from '\/data\/projects\.js'/g, "from '../data/projects.js'"],
  [/href="\/\$\{([^}]+?)\}\.html"/g, 'href="${$1}.html"'],
  [/href="\/"/g, 'href="./"'],
]);

// --- components/header.js ---
patch(path.join(ROOT, 'components', 'header.js'), [
  [/href="\/"/g, 'href="./"'],
  [/href="\/about\.html"/g, 'href="./about.html"'],
  [/href="\/index\.html"/g, 'href="./index.html"'],
]);

// --- data/projects.js — cover image paths ---
patch(path.join(ROOT, 'data', 'projects.js'), [
  [/cover: '\/assets\//g, "cover: 'assets/"],
]);

console.log('\nDone.');
