# Lomz — Art × Technology

Personal portfolio for **Vukasin (Lomz)** — a product designer and multimedia
artist working at the intersection of art and technology.

Live at [lomz.net](https://lomz.net).

## Structure

```
.
├── index.html                  # Homepage (intro, slider, project grid + index view)
├── about.html                  # About page (bio, contact, exhibitions, education, work)
├── <project>.html × 26         # Individual project detail pages
├── design.md                   # Design system spec (Google DESIGN.md format)
├── design-system.html          # Visual design system reference
├── css/
│   └── style.css               # Single stylesheet, all design tokens
├── components/                 # Vanilla Web Components (zero dependencies)
│   ├── header.js               #   <site-header> — top nav + theme toggle
│   ├── footer.js               #   <site-footer> — full-bleed contact footer
│   └── related-projects.js     #   <related-projects>, <project-nav>, <project-tags>
├── data/
│   └── projects.js             # Single source of truth for project metadata
└── assets/                     # Project images, logo
```

## Running locally

It's a static site — open `index.html` directly in a browser, or serve the
folder:

```bash
npx serve -l 4321 .
```

Then visit <http://localhost:4321>.

## Design system

The brand is documented in [`design.md`](./design.md), written in the
[Google Stitch DESIGN.md](https://stitch.withgoogle.com/docs/design-md/format/)
format.

- **Palette:** ink `#212124`, paper `#E9E8E5`, signal `#FF4C24` — solid only,
  no greys.
- **Typeface:** Inter (single family for everything).
- **Rules:** 1px solid ink dividers and borders.
- **Corners:** sharp (`border-radius: 0`).
- **Gutters:** 12px page padding, 8px on mobile.
- **Theme:** light / dark, toggle in the header, persisted in `localStorage`.

A visual reference of the system lives in
[`design-system.html`](./design-system.html).

## Stack

Pure HTML, CSS, and vanilla JavaScript Web Components. No build step. No
frameworks. No dependencies.

## Contact

`stihilus@gmail.com` · Belgrade
