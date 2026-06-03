---
version: alpha
name: State of AI Design — LOMZ
description: >-
  Editorial, high-contrast, type-driven design system inspired by
  stateofaidesign.com. Pure white surfaces, ink-black type, a single
  vivid orange for interaction. Sharp corners, big display type,
  uppercase tracked labels.
colors:
  primary: "#212124"
  on-primary: "#E9E8E5"
  surface: "#E9E8E5"
  on-surface: "#212124"
  accent: "#FF4C24"
  on-accent: "#E9E8E5"
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 7.5rem
    fontWeight: 500
    lineHeight: 0.95em
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Inter
    fontSize: 5rem
    fontWeight: 500
    lineHeight: 1em
    letterSpacing: -0.04em
  display-md:
    fontFamily: Inter
    fontSize: 3rem
    fontWeight: 500
    lineHeight: 1.05em
    letterSpacing: -0.03em
  h1:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: 500
    lineHeight: 1.1em
    letterSpacing: -0.03em
  h2:
    fontFamily: Inter
    fontSize: 2rem
    fontWeight: 500
    lineHeight: 1.1em
    letterSpacing: -0.03em
  h3:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: 500
    lineHeight: 1.2em
    letterSpacing: -0.02em
  h4:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: 500
    lineHeight: 1.2em
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.4em
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.4em
    letterSpacing: -0.01em
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.4em
    letterSpacing: -0.01em
  label-caps:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: 500
    lineHeight: 1em
    letterSpacing: 0.04em
  caption:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.2em
    letterSpacing: 0.02em
rounded:
  none: 0px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  3xl: 96px
  4xl: 160px
components:
  link:
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
  link-hover:
    textColor: "{colors.accent}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.none}"
    padding: 16px 24px
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.none}"
    padding: 16px 24px
  button-accent-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.none}"
    padding: 16px 24px
  button-ghost-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.none}"
    padding: 24px
  tag:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.none}"
    padding: 6px 12px
  filter:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-sm}"
    padding: 0px
  filter-hover:
    textColor: "{colors.primary}"
  filter-active:
    textColor: "{colors.accent}"
---

## Overview

**Editorial Minimalism meets Engineering Precision.** The UI reads like a
contemporary research report or a high-end broadsheet: enormous quiet white
space, oversized display type set tight, and a single saturated orange that
only ever appears on things you can interact with. It should feel confident,
spare, and a little technical — never decorative.

Three principles drive every decision:

1. **High contrast, low chroma.** The world is black on white. Color is a tool
   reserved for action and emphasis, not atmosphere.
2. **Type is the interface.** Hierarchy comes from scale and weight, not from
   boxes, borders, or shadows. Big things are big; small things are uppercase labels.
3. **Sharp, structural, honest.** Corners are square. Dividers are 1px hairlines.
   Nothing floats — the layout sits on a strict grid.

The reference look is [stateofaidesign.com](https://stateofaidesign.com): uppercase
eyebrow labels, numbered sections (`01 / 02 / 03`), and statistics rendered at
display scale.

## Colors

The palette is deliberately restricted to **three** values. There are no
greys in the token set — secondary and disabled states are expressed as the
ink color at reduced opacity, so the system never drifts off-brand.

- **Primary `#212124` (Ink):** All body copy, headlines, borders, and the
  default button fill. The backbone of the entire system.
- **Surface `#E9E8E5` (Paper):** The one and only background. Sections are
  separated by space and 1px ink hairlines, never by fills.
- **Accent `#FF4C24` (Signal Orange):** The sole driver of interaction and
  emphasis — primary CTAs, link hovers, active nav items, key statistics,
  underlines. If something is orange, it is interactive or it is the single
  most important thing on the screen. Use it sparingly; its power is its rarity.

**Derived ink opacities** (not separate tokens — always `#212124` with alpha):

| Use | Value |
|:----|:------|
| Body text | `rgba(33,33,36,1)` |
| Secondary / metadata | `rgba(33,33,36,0.6)` |
| Disabled / placeholder | `rgba(33,33,36,0.35)` |
| Rules & borders | `#212124` — **solid ink** (not an alpha) |

**All horizontal lines, dividers, and borders are solid ink** — full-weight
`#212124` (light) / `#E9E8E5` (dark), never a faint tint. The `hairline`
token resolves to the ink color in both themes.

**Dark mode** is a straight inversion of ink and paper: surface becomes
`#212124`, foreground/ink becomes `#E9E8E5`, and the text ramp is
re-expressed as **white** at the same alphas (`60% / 35%`). The
accent `#FF4C24` is unchanged in both themes — it remains the single signal
color. A sun/moon toggle in the header switches themes; the choice persists
and otherwise follows the OS `prefers-color-scheme`.

On an `#FF4C24` surface, text and icons are always `#E9E8E5` (on-accent).
Contrast: ink on paper ≈ 13:1, off-white on orange ≈ 2.7:1 (use orange backgrounds
only for short label-caps / button text, never long-form body copy).

## Typography

**One typeface does all the work: [Inter](https://fonts.google.com/specimen/Inter)**
(Google Fonts). There is no secondary or monospace face — every size, weight,
and role is Inter.

- **Voice & display.** Everything from 120px hero statements down to 14px body.
  Default weight is **500 (Medium)**; **400** for long-form body; **700/800**
  reserved for rare maximum-emphasis display moments.
- **Labels & captions.** What used to be the "mono" role (uppercase eyebrows,
  section numbers, captions, tags, button text) is now the same Inter,
  differentiated by **size, UPPERCASE, and slightly open tracking** (`+0.04em`)
  rather than a different family.

**Scale & roles**

| Token | Family | Size | Weight | Tracking | Typical use |
|:------|:-------|:-----|:-------|:---------|:------------|
| `display-xl` | Inter | 120px | 500 | -0.04em | Hero numbers, landing statement |
| `display-lg` | Inter | 80px | 500 | -0.04em | Section heroes, big stats |
| `display-md` | Inter | 48px | 500 | -0.03em | Chapter titles |
| `h1` | Inter | 40px | 500 | -0.03em | Page title |
| `h2` | Inter | 32px | 500 | -0.03em | Section heading |
| `h3` | Inter | 24px | 500 | -0.02em | Sub-heading, card title |
| `h4` | Inter | 20px | 500 | -0.02em | Small heading |
| `body-lg` | Inter | 18px | 400 | -0.01em | Lead paragraph |
| `body-md` | Inter | 16px | 400 | -0.01em | Default body |
| `body-sm` | Inter | 14px | 400 | -0.01em | Dense body, footnotes |
| `label-caps` | Inter | 13px | 500 | +0.04em | UPPERCASE eyebrows, buttons, nav |
| `caption` | Inter | 12px | 400 | +0.02em | Metadata, figure captions |

**Rules of thumb**

- Display sizes use line-height ≈ `1em` (or tighter, down to `0.95em`) so big
  type stacks densely. Body uses `1.4em` for readability.
- The bigger the type, the tighter the tracking. Negative tracking is what
  gives the brand its "set" editorial feel.
- The `label-caps` style is the connective tissue: an eyebrow above a heading,
  the text inside every button, the number on every section.

## Layout

The system is built on an **8px spacing scale** and a **12-column grid**.

| Token | Value | Use |
|:------|:------|:----|
| `xs` | 4px | Icon gaps, tight inline spacing |
| `sm` | 8px | Chip padding, small gaps |
| `md` | 16px | Default element gap, button padding-y |
| `lg` | 24px | Card padding, paragraph spacing |
| `xl` | 40px | Block spacing within a section |
| `2xl` | 64px | Inter-component spacing |
| `3xl` | 96px | Section padding (mobile→tablet) |
| `4xl` | 160px | Section padding (desktop), major vertical rhythm |

**Grid & containers**

- Content **max-width: 1280px**, centered, with `lg`–`xl` gutters.
- **Side gutters / page padding:** **12px** by default; on **mobile
  (≤640px) tighten to `sm` (8px)** on every page so content uses the full
  small-screen width.
- Long-form reading column caps at **~720px (≈45rem)** for measure.
- **12-column** grid, 24px column gap. Cards/tools commonly span 4 columns
  (3-up), 6 columns (2-up), or full width.
- **Breakpoints:** mobile `≤640`, tablet `641–1024`, desktop `1025–1440`,
  wide `≥1441`. The reference site authors at 1920 / 1440 / 810 / 390.

**Page-building pattern** (how to compose a page)

1. **Sticky top nav** — wordmark left, `label-caps` links right, 1px
   bottom hairline. Active link is `accent`.
2. **Hero** — uppercase eyebrow label → `display-lg`/`display-xl` statement →
   one `body-lg` lead → primary CTA. Lots of space above and below.
3. **Stacked content sections**, each introduced by a numbered uppercase eyebrow
   (`01 — SECTION NAME`) and separated by `4xl` vertical space and/or a 1px
   hairline. No section backgrounds — separation is whitespace + rule lines.
4. **Stat / pull-quote bands** — oversized `display` numerals with a small
   `caption` beneath.
5. **Card grids** — square-cornered, hairline-bordered cards in 2/3-up grids.
6. **Footer** — hairline top border, `label-caps` links, copyright in `caption`.

Vertical rhythm is the signature: be generous. When unsure, add more space,
not more decoration.

**Title ↔ text pairing (left / right).** Whenever a page or section pairs a
**title with a block of description or body copy** — an About-page header,
a project detail intro, any "heading + paragraph" opener — place the **title
in the left column and the text in the right column** on a two-column split
(this is the Pentagram about-page model). Defaults:

- Title pinned to the **left edge**, large and set tight (`display-md`/`h1`),
  allowed to wrap in a narrow measure (~`10–14ch`) so it stacks into 2–3 lines.
- Body/description in a **right-hand column**, capped at the `--measure`
  reading width (~46rem), `body-md`/`body-lg`. Any CTA or meta sits beneath it.
- A simple **two-column grid** (e.g. `1fr 1fr`, or title `5/12` + text `6/12`
  with a gap column), aligned at the top.
- **Responsive:** below ~768px the columns **stack** — title first, then text.

This left-title / right-text arrangement is the default for every title +
prose combination across the site; don't center them or stack them vertically
on desktop. (Tabular list sections like Exhibitions/Experience are the
exception — those use the title | sub | meta row pattern instead.)

## Elevation & Depth

This system is **flat by design**. There are essentially no drop shadows.

- Depth and grouping are communicated by **solid 1px ink rules**
  (`#212124` in light, `#E9E8E5` in dark — full weight, never faint) and
  whitespace, never by elevation.
- The only permitted shadow is a faint lift on the **sticky nav once scrolled**
  and on **hover for interactive cards**, and even then it must be barely
  perceptible: `0 1px 2px rgba(33,33,36,0.06)`.
- No layered/colored shadows, no glows. If you reach for a shadow to separate
  two things, use a hairline or more space instead.

## Shapes

- **Corners are square.** `rounded.none` (`0px`) is the default for buttons,
  cards, inputs, tags, and images. This sharpness is core to the brand.
- The single exception is `rounded.full` (`9999px`) for the occasional **pill
  tag** or **avatar** — used rarely and intentionally.
- **Borders & rules:** **1px solid ink** (`#212124` light / `#E9E8E5` dark) —
  every horizontal line, divider, and border is full-weight ink, not a faint
  tint. This is the structural backbone of the layout.
- **Dividers:** 1px full-bleed or column-width solid ink rules carry most of
  the structural weight.
- **Focus ring:** 2px solid `#FF4C24` offset 2px — accessible and on-brand.

## Components

**Buttons** — square corners, `label-caps` text, 16px×24px padding.

- `button-primary`: ink fill, white text → **hover swaps to orange fill**.
- `button-accent`: orange fill, white text → **hover swaps to ink fill**.
- `button-ghost`: transparent/paper with 1px ink border → **hover inverts to
  ink fill, white text**.
- Transitions: `background-color` / `color` over `150ms ease`. No scale, no
  rounded morphing.

**Links** — ink colored, no underline by default; on **hover** they turn
`accent` (`#FF4C24`) and may reveal an orange underline. Current/active nav
links are orange. Inline text links may carry a permanent 1px orange underline.

**Cards** — paper background, 1px hairline border, square corners, `lg` (24px)
padding. Card title in `h3`, supporting copy in `body-sm`, an optional
`label-caps` eyebrow. On hover: border goes solid ink + the optional faint lift
shadow.

**Tags / chips** — `label-caps`, square by default (pill only when
explicitly desired), 1px hairline border, `8px 12px` padding.

**Filters / tabs** — plain **text only**: no box, border, or background.
Set in `body-sm` Inter. Default state is ink (`#212124`) with **no underline**.
On **hover**, an underline appears (ink, `4px` offset). The **selected** filter
is `accent` (`#FF4C24`) **with an underline**. This is the inline,
text-as-navigation pattern used for the project category filters and any
tab-style switcher — distinct from `tag` chips, which keep their bordered box.

**Section eyebrow** — the recurring motif: a `label-caps` line, often
prefixed by a zero-padded number and an em dash: `01 — TOOLS`. Optionally the
number is `accent`.

**Stat block** — `display-lg`/`display-xl` numeral (optionally orange) with a
`caption` label beneath. Used for the report's percentages.

**Nav** — horizontal, wordmark + `label-caps` links, 1px bottom hairline, active = orange.

## Do's and Don'ts

**Do**

- Lean on whitespace and 1px hairlines to structure the page.
- Set display type tight (negative tracking) and let it be large.
- Reserve `#FF4C24` for interaction and the single most important emphasis.
- Use `label-caps` for every eyebrow, button, tag, and section number.
- Keep corners square and surfaces flat.
- Pair any title with its description as **title-left / text-right** two columns
  (stack on mobile) — never centered or vertically stacked on desktop.

**Don't**

- Don't introduce new colors, greys, or gradients — express secondary states
  as ink at lower opacity.
- Don't use orange for long-form text or large background fills (poor contrast,
  dilutes its signal).
- Don't add drop shadows, rounded cards, or decorative borders to create depth.
- Don't tighten body text or loosen display text — tracking goes the other way.
- Don't fill sections with background colors to separate them; use space.
