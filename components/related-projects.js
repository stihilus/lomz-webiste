// Related-projects, project-tags, project-nav web components.
// All three consume the shared project catalog from /data/projects.js.

import { PROJECTS, shuffle } from '../data/projects.js';

// Derive the current project slug from the URL's last path segment.
// Works at any subpath (e.g. /lomz-webiste/dithercam.html on GitHub Pages) and
// at the custom-domain root (/dithercam.html on lomz.net).
function currentSlug() {
  return (location.pathname.split('/').pop() || '').replace(/\.html$/, '');
}

class RelatedProjects extends HTMLElement {
  connectedCallback() {
    const slug = currentSlug();
    const current = PROJECTS.find(p => p.slug === slug) || null;
    const others = PROJECTS.filter(p => p.slug !== slug);

    const sameCat = current ? shuffle(others.filter(p => p.category === current.category)) : [];
    const rest = shuffle(others.filter(p => !current || p.category !== current.category));
    const picks = [...sameCat, ...rest].slice(0, 3);

    const label = current
      ? `More ${current.category[0].toUpperCase() + current.category.slice(1)}`
      : 'More work';

    this.innerHTML = `
      <aside class="related" aria-label="Related projects">
        <div class="container">
          <div class="related-head">
            <h2 class="related-title">Related projects</h2>
            <span class="caption">${label}</span>
          </div>
          <div class="related-grid">
            ${picks.map(p => `
              <a class="related-card" href="${p.slug}.html">
                <div class="related-thumb"><img src="${p.cover}" alt="${p.name} cover" loading="lazy" /></div>
                <span class="related-name">${p.name}</span>
                <span class="related-cat caption">${p.meta}</span>
              </a>
            `).join('')}
          </div>
        </div>
      </aside>
    `;
  }
}

customElements.define('related-projects', RelatedProjects);

// --- Project tags ---------------------------------------------------------
class ProjectTags extends HTMLElement {
  connectedCallback() {
    const slug = currentSlug();
    const p = PROJECTS.find(x => x.slug === slug);
    if (!p || !p.tags || !p.tags.length) { this.style.display = 'none'; return; }
    this.innerHTML = `
      <div class="project-tags container">
        ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
      </div>
    `;
  }
}
customElements.define('project-tags', ProjectTags);

// --- Project page nav (Prev · All work · Next) ----------------------------
class ProjectNav extends HTMLElement {
  connectedCallback() {
    const slug = currentSlug();
    const idx = PROJECTS.findIndex(p => p.slug === slug);
    if (idx === -1) { this.style.display = 'none'; return; }
    const prev = idx > 0 ? PROJECTS[idx - 1] : PROJECTS[PROJECTS.length - 1];
    const next = idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : PROJECTS[0];
    this.innerHTML = `
      <nav class="project-nav container" aria-label="Project navigation">
        <span class="project-nav-pair">
          <a class="project-nav-link" href="${prev.slug}.html" rel="prev">&lt; ${prev.name}</a>
          <span class="project-nav-sep" aria-hidden="true">·</span>
          <a class="project-nav-link" href="${next.slug}.html" rel="next">${next.name} &gt;</a>
        </span>
      </nav>
    `;
  }
}
customElements.define('project-nav', ProjectNav);
