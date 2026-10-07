# Handoff: Abdo Elmasry — Portfolio Site

## Overview

Personal portfolio site for **Abdo Elmasry**, an AI Advertising Creative / AI Creative Producer. The site showcases 14 AI-crafted commercials, product films, and brand campaigns (with videos embedded from Google Drive), and provides a single CTA to his existing contact page at `bio.site/a.elmasry`.

It is a **static site** (single `index.html` + `style.css` + `script.js` + `data/projects.js`) intended for deployment on **GitHub Pages** — no build step, no framework.

---

## About the Design Files

The files in this bundle are **design references created in HTML**. They are a working static prototype showing the intended look, structure, and behavior — but they are **not necessarily the final production codebase**.

The task is to **recreate these HTML designs in the target codebase's environment** — using its established patterns, libraries, and design system. If no environment exists yet, the most appropriate choice for this project is the shipped stack: **plain HTML + CSS + Vanilla JS**, deployed on GitHub Pages (this is what the client asked for, and it is what this bundle already delivers). A React/Vue/Astro rewrite is unnecessary unless the destination codebase already uses one.

---

## Fidelity

**High-fidelity (hifi).** The bundled files are pixel-precise, final-copy, production-ready mocks with:

- Final typography (Bebas Neue for display, Inter for body, Georgia serif for italic accents).
- Final color palette (`#050505`, `#EDEBE7`, `#C8A978` accent, and the graded lines/mutes).
- Final spacing, grid, and section rhythm.
- Complete interaction states: hover, focus-visible, active-filter, modal open/close, keyboard nav, `prefers-reduced-motion`.
- Real content — no lorem ipsum. All 14 projects are wired to real Google Drive `FILE_ID`s.

A developer should recreate the UI pixel-perfectly.

---

## Screens / Views

The site is a single scrolling page with one modal overlay. The sections, in order, are:

### 1. Fixed Site Header

- **Purpose**: Persistent brand mark + primary navigation.
- **Layout**: `position: fixed; top: 0`, full-width, `padding: 22px 0` (shrinks to `14px` when scrolled).
- **Background**: transparent by default; on scroll (>40px) becomes `rgba(5,5,5,0.82)` with `backdrop-filter: blur(12px)` and a 1px bottom border of `rgba(237,235,231,0.14)`.
- **Left**: `.brand` = a 34×34 hairline-bordered square with the monogram **"AE"** (Bebas Neue, 18px, letter-spacing 0.06em), followed by the uppercase word mark **"Abdo Elmasry"** (Inter, 13px, letter-spacing 0.24em, weight 500).
- **Right (desktop ≥769px)**: `.nav` inline links — Work · About · Services · Process · Capabilities · Contact. Style: Inter 12px, letter-spacing 0.18em, uppercase, color `--fg-dim`. Hover animates an underline from left→right in 320ms.
- **Right (mobile ≤768px)**: 40×40 hamburger button, hairline border, animates into an X when open. Opens a full-width mobile drawer below the header (`.mobile-nav`) with Bebas Neue 28px links stacked and separated by hairlines.

### 2. Hero (`.hero`)

- **Purpose**: First impression + primary CTA.
- **Layout**: `min-height: 100svh`, `padding-top: 140px` (accounts for fixed header), content anchored to bottom.
- **Background layer** (`.hero-slides`): full-bleed slideshow that cross-fades between the 3 `featured: true` projects every 5.5s. Each slide is a background image with `background-size: cover`, fading in with a 1.6s opacity transition, and a slow 8s `scale(1.06) → scale(1)` Ken Burns motion. If the image fails to load, the slide falls back to a black card with the project title rendered in Bebas Neue at `clamp(80px, 22vw, 320px)` in `rgba(237,235,231,0.08)` — never a broken image.
- **Veil** (`.hero-veil`): four-stop vertical black gradient `0.55 → 0.20 → 0.55 → 0.95` for legibility.
- **Meta row** (top of content): `.eyebrow` on the left ("Portfolio — Selected Works" with a 6px accent dot in `#C8A978` and a soft rgba glow); `.hero-count` on the right (`01 / 14`, tabular numerals, Inter 11px letter-spacing 0.28em). Divider hairline underneath.
- **Title**: Bebas Neue `clamp(64px, 12vw, 200px)`, line-height 0.92, letter-spacing -0.01em, uppercase. Two lines: `AI Advertising` then `Creative & Producer.` — the word **Creative** uses Georgia italic (`.italic` class) at slightly tighter letter-spacing (-0.02em), text-transform: none.
- **Subhead**: Inter `clamp(16px, 1.4vw, 20px)`, color `--fg-dim`, max-width 640px. Copy: "Building cinematic commercials, product films, and brand campaigns with AI — from concept to final cut."
- **CTAs**: Two buttons — primary "View Selected Work →" (solid `#EDEBE7` on black text) + ghost "Contact" (outlined). Both hover-lift by 2px and invert colors in 300ms.
- **Scroll cue**: bottom-center, "Scroll" label with a 44px vertical line that stretches/collapses via a 2.4s CSS keyframe.

### 3. Marquee (`.marquee`)

- **Purpose**: Discipline strip — reinforces service list.
- **Layout**: full-width horizontal scroller, `padding: 22px 0`, bordered top and bottom with hairlines.
- **Content**: 8 service names repeated 2× (Bebas Neue `clamp(24px, 3.4vw, 44px)`, uppercase, letter-spacing 0.04em), separated by ◇ diamonds in the accent color at 18px.
- **Motion**: `translateX(0) → translateX(-50%)` in 42s linear infinite. Disabled under `prefers-reduced-motion`.

### 4. Selected Work (`#selected`)

- **Purpose**: Curated 3-project shortlist.
- **Section head**: 3-column grid `60px | 1fr | auto` — index `01`, title "Selected Work" (Bebas Neue `clamp(48px, 8vw, 120px)`, uppercase, letter-spacing -0.01em, line-height 0.92), and a right-aligned note.
- **Grid**: 2-column CSS grid, gap 32px. **The first card spans full width** (`.wide`, `grid-column: 1 / -1`) with a `21/9` aspect ratio. The other two are `16/9`.
- **Card structure**:
  - Full-bleed thumbnail (grayscaled at rest, becomes full color + scales to 1.05 on hover, both in ~900ms cubic-bezier(0.22,1,0.36,1)).
  - Bottom gradient (`0 → rgba(5,5,5,0.75)`) for legibility.
  - Top-right circular Play button (56×56, hairline border, `rgba(5,5,5,0.6)` + blur; inverts to `#EDEBE7` on hover).
  - Bottom-left metadata: project title (Bebas Neue, uppercase, `clamp(24px, 3.4vw, 42px)`) + right-aligned category chip (hairline-bordered, Inter 11px letter-spacing 0.22em, uppercase).
- **Cards below 1024px** collapse to a single column and the wide card loses its span.

### 5. All Work (`#work`)

- **Purpose**: Full 14-project catalogue with filtering.
- **Section head**: same pattern as Selected — index `02`, title "All Work", note reads dynamically as `NN projects · Filter by category` (padded with `pad(n)`).
- **Filters** (`.filters`): pill-container with a 1px outer border and 6px inner padding, 6 tabs — All / Automotive / Product / Campaign / Commercial / Brand Film. Inactive tabs are Inter 11px letter-spacing 0.2em, uppercase, color `--fg-dim`. The active tab flips to solid `#EDEBE7` bg + `#050505` fg. `role="tablist"` + `aria-selected` are wired.
- **Grid**: 3 columns × N rows, gap 28px. Responsive breakpoints: 2-col at ≤1024px, 1-col at ≤768px.
- **Card structure**:
  - 16/9 thumbnail (same grayscale→color hover treatment as Selected).
  - Small 40×40 Play button top-right (hairline, `rgba(5,5,5,0.55)` blurred; hovers into solid `#EDEBE7`).
  - **Below the thumb** (outside the media box): a metadata row split left/right:
    - Left: `card-num` (Inter 10px letter-spacing 0.28em, `--fg-mute`, format `NN / TOTAL`), then the Bebas Neue title (`clamp(20px, 2vw, 26px)`, uppercase), then an optional subtitle (Inter 12px, `--fg-dim`).
    - Right: category chip (Inter 10px letter-spacing 0.22em, uppercase, hairline border, hidden below 768px).
- **Filter behavior**: clicking a filter toggles `.is-hidden` on non-matching cards (`display: none`). No animation is required — the state change is instant + the section note is not updated per-filter (design decision: total stays visible so users always know the catalogue size).

### 6. About (`#about`)

- **Purpose**: One-paragraph personal positioning.
- **Layout**: 2-column grid `1fr | 2fr`, gap `clamp(40px, 8vw, 120px)`. Collapses to 1 column ≤768px.
- **Left**: section index `03` (block, 24px bottom margin) + title "About".
- **Right**:
  - Lead paragraph in **Georgia italic**, `clamp(20px, 2vw, 28px)`, line-height 1.4, color `--fg`.
  - Two follow-up paragraphs in Inter 16px, color `--fg-dim`, max-width 620px, `text-wrap: pretty`.
- **Copy** (final, do not paraphrase):
  > Lead: "I'm Abdo Elmasry — an AI Advertising Creative and Creative Producer. I build commercials, product films, and brand campaigns end-to-end with AI tools, keeping the craft close to how traditional film is made: concept, boards, frames, motion, sound, and a final grade."
  >
  > Body: "My focus is on giving brands a cinematic identity in a fraction of the time and cost of a traditional shoot — without giving up the taste and pacing that make an ad feel like a film."

### 7. Services (`#services`)

- **Purpose**: 8 services, presented editorially.
- **Layout**: unordered vertical list, hairline dividers, each row is a 3-column grid `80px | 1fr | auto`, gap 24px, padding `28px 0`.
- **Row**: numeric prefix (`01`–`08`, Inter 11px letter-spacing 0.3em, color `--fg-mute`) + big Bebas Neue name (`clamp(28px, 4.6vw, 60px)`, uppercase, letter-spacing 0.01em, line-height 1).
- **Hover**: row pads left by 24px in 400ms with a subtle `rgba(237,235,231,0.02)` background wash. At ≤768px the columns collapse to `40px | 1fr` and hover padding shrinks to 8px.
- **The 8 services (final, fixed order — do not add or remove)**:
  1. AI Commercials
  2. Automotive Advertising
  3. Product Films
  4. Brand Films
  5. Creative Direction
  6. AI Video Production
  7. Visual Development
  8. Motion & Post Production

### 8. Creative Process (`#process`)

- **Purpose**: 11 numbered production steps.
- **Layout**: CSS grid, 3 columns, 1px gap on a hairline background (creating a matrix). Each cell has `padding: 32px 28px; min-height: 200px`. Collapses to 2 cols ≤1024px, 1 col ≤768px.
- **Step content**: accent-colored number (`p-num`, `#C8A978`, Inter 11px letter-spacing 0.3em) + Bebas Neue title (`clamp(24px, 2.6vw, 32px)`, uppercase) + short description (Inter 14px, color `--fg-dim`).
- **Hover**: cell bg deepens from `--bg` (`#050505`) to `--bg-2` (`#0a0a0a`).
- **The 11 steps (final)**:
  01 Brief · 02 Idea / Angle · 03 Hook · 04 Character & Product Sheets · 05 Storyboard · 06 Static Frames · 07 Motion · 08 Start / End Frames · 09 Editing · 10 Sound / VO · 11 Final QA. Full descriptions are in `index.html`.

### 9. Capabilities (`#capabilities`)

- **Purpose**: Non-numbered service breakdown into 4 pillars.
- **Layout**: 4-column CSS grid, gap 32px. Collapses to 2 cols ≤1024px, 1 col ≤768px.
- **Card**: `padding: 32px 28px`, hairline border, `min-height: 220px`. On hover: border deepens to `--line-strong`, lifts 4px in 400ms.
- **4 pillars**: Creative · AI Production · Post · Delivery. Full copy in `index.html`.

### 10. Contact (`#contact`)

- **Purpose**: Single, unambiguous CTA to the bio.site page.
- **Layout**: centered, `max-width: 900px`.
- **Title**: Bebas Neue `clamp(64px, 10vw, 180px)`, "Let's build something cinematic." — with "something" in Georgia italic.
- **CTA**: **one button only**, larger variant (`btn-lg`, `padding: 22px 40px`), primary style, links to `https://bio.site/a.elmasry` with `target="_blank" rel="noopener"`.
- **No email address, no Instagram link, no phone.** Do not add any.

### 11. Footer (`.site-footer`)

- **Purpose**: Legal/attribution.
- **Layout**: 3-column flex row (wraps to stacked-center at ≤768px).
- **Left**: AE monogram + "Abdo Elmasry".
- **Middle**: `{currentYear} © All rights reserved.` (year populated via JS).
- **Right**: link back to `bio.site/a.elmasry` with an `↗` glyph.

### 12. Project Modal (`.modal`)

Overlay opened by clicking any Selected or All Work card.

- **Trigger**: card click, or Enter/Space when card has focus. `document.body` gets `.is-locked` (`overflow: hidden`) to lock scroll.
- **Structure**:
  - Full-screen veil `rgba(5,5,5,0.9)` with `backdrop-filter: blur(12px)`, fades in over 400ms.
  - Center panel: max-width 1100px, max-height 92vh, on `--bg-2` with a hairline border. Enters with a 500ms `translateY(24px) → 0` + fade.
  - Top bar: modal counter (`NN / TOTAL`, tabular) on the left, category label on the right; hairline divider below.
  - Player: 16/9 `<iframe>` pointing at `https://drive.google.com/file/d/FILE_ID/preview`.
  - Body: title (Bebas Neue `clamp(32px, 4.4vw, 52px)`, uppercase), optional EN/AR variant switcher (only appears when the project has `altDriveId`), subtitle (Inter 12px uppercase, `--fg-mute`), description (Inter 15px, `--fg-dim`, max-width 720px), Role row bordered top and bottom, and finally Prev / Next buttons.
- **Prev/Next**: navigate through `projects[]` in order. Both wrap-safe (do nothing at the ends). Resets `currentVariant = 'primary'` on nav.
- **Close mechanisms** (all fully required):
  - Click veil.
  - Click the top-right × button (40×40, hairline; inverts on hover).
  - Press `Escape`.
  - **On close**: set `iframe.src = ''` — this is the mechanism that actually stops the video. Then return focus to the previously focused element (the card that opened the modal).
- **Keyboard while open**:
  - `Escape` closes.
  - `ArrowLeft` = Prev, `ArrowRight` = Next.
  - `Tab` / `Shift+Tab` cycles inside the panel — implement as a true focus trap (all focusable descendants in DOM order).
- **Mobile (≤768px)**: modal becomes full-viewport with no border and no outer padding; nav buttons stack vertically.

---

## Interactions & Behavior

### Navigation & scrolling
- Anchor links on the header nav use native `scroll-behavior: smooth` on `<html>`. Disabled under `prefers-reduced-motion`.
- Mobile nav closes automatically after any link is clicked.

### Scroll-triggered reveal
- Every element with `.reveal` starts at `opacity: 0; translateY(28px)`. An `IntersectionObserver` (rootMargin `0 0 -60px 0`, threshold 0.06) adds `.is-in` when the element enters, which animates to `opacity: 1; translateY(0)` over 900ms. Elements only animate once (they are `unobserve`d).
- If `IntersectionObserver` isn't available, all `.reveal` elements are shown immediately (progressive enhancement, no broken layout).

### Hover transitions (all in `cubic-bezier(0.22, 1, 0.36, 1)`)
- Header links: underline sweeps left→right, 320ms.
- Buttons: `translateY(-2px)` + color/border inversion, 300ms.
- Nav underline (on desktop nav): same easing.
- Cards (thumbnails): `filter: grayscale(1) contrast(1.05) → grayscale(0) contrast(1)` in 700ms, `transform: scale(1.06)` in 900ms.
- Play buttons: `background: rgba(5,5,5,.55) → #EDEBE7`, icon inverts.
- Services rows: `padding-left` slides in.

### Filter interaction
- `.filter` buttons swap `.is-active` and update `aria-selected`.
- Cards toggle a `.is-hidden` class (`display: none`) — no cross-fade, no reflow animation.

### Responsive breakpoints
- **1024px**: work grid → 2 cols, selected grid → 1 col, process → 2 cols, capabilities → 2 cols.
- **768px**: desktop nav → mobile drawer, all grids → 1 col, category chips hidden on cards, hero CTAs stack full-width, modal goes full-viewport.

### Accessibility
- Every card is `role="button" tabindex="0" aria-label="{title} — {category} — open project"`.
- `Enter` / `Space` on a card opens the modal (preventDefault + call open handler).
- Modal has `role="dialog" aria-modal="true" aria-labelledby="modalTitle"` and hard-toggles `aria-hidden`.
- Focus is moved to the close button on open, and returned to the trigger card on close.
- `prefers-reduced-motion: reduce` disables all `animation-*` and shortens `transition-duration` to `0.001ms`, kills the marquee scroll, kills the hero Ken Burns motion, and disables the reveal transform.

---

## State Management

Only client-side, all in `script.js` (no framework, no external store):

| Variable | Purpose |
|---|---|
| `projects` | Array from `window.PROJECTS` (loaded via `<script src="data/projects.js">`). This is the single source of truth. |
| `currentIdx` | Index of the currently-open project in the modal. `-1` = closed. |
| `currentVariant` | `'primary'` or `'alt'` — which of `driveId` / `altDriveId` is being played. Reset to `'primary'` on Prev/Next. |
| `lastFocused` | The card that opened the modal, so focus can be restored on close. |
| Filter state | Read from the `.is-active` class on `.filter` buttons — no separate variable needed. |

### Data flow
1. `data/projects.js` sets `window.PROJECTS = [...]`.
2. On DOM ready, `script.js` runs and:
   - Renders the hero counter (`01 / TOTAL`).
   - Preloads hero slides (featured projects, falls back through: local `assets/thumbnails/{id}.jpg` → Drive thumbnail → dark placeholder).
   - Renders the Selected Work grid from `projects.filter(p => p.featured).slice(0, 3)`.
   - Renders the All Work grid from all `projects`.
   - Wires filter tabs, keyboard, and modal.
3. **No fetch, no async data.** Everything is synchronous on page load.

### Thumbnail fallback chain (mandatory, applies to hero + card + selected card thumbs)
1. Try `assets/thumbnails/{id}.jpg` — local high-quality copy.
2. On `error`, retry with `https://drive.google.com/thumbnail?id={driveId}&sz=w1920`.
3. On second `error`, remove the `<img>` — the DOM already has a `.fallback` sibling with the project number in Bebas Neue on `#0a0a0a` that becomes visible.

---

## Design Tokens

Copied verbatim from `style.css` `:root`. **Use these exact values.**

### Colors
```css
--bg:            #050505;   /* Page background */
--bg-2:          #0a0a0a;   /* Elevated surfaces (modal panel, hovered process cells) */
--fg:            #edebe7;   /* Primary text, primary button bg */
--fg-dim:        #b7b5b0;   /* Secondary text, descriptions */
--fg-mute:       #7a7874;   /* Tertiary text, counters, metadata */
--line:          rgba(237, 235, 231, 0.14);  /* Hairline borders */
--line-strong:   rgba(237, 235, 231, 0.32);  /* Emphasized borders (brand mark, primary btn) */
--accent:        #c8a978;   /* Warm gold — used ONLY for: eyebrow dot, marquee diamonds, process p-num */
```

### Typography
```css
--sans:    'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--display: 'Bebas Neue', Impact, 'Arial Narrow Bold', sans-serif;
--serif:   Georgia, 'Times New Roman', serif;   /* Used only for .italic accents in titles + About lead */
```

Loaded from Google Fonts via `<link rel="stylesheet">` with `preconnect` — **never `@import` inside `<style>`**.

Weights loaded: Inter 300, 400, 500, 600, 700; Bebas Neue single weight.

### Type scale (all clamped)
| Role | Value |
|---|---|
| Hero title | `clamp(64px, 12vw, 200px)`, line-height 0.92 |
| Section title | `clamp(48px, 8vw, 120px)`, line-height 0.92 |
| Section title (big — Contact) | `clamp(64px, 10vw, 180px)` |
| Service name | `clamp(28px, 4.6vw, 60px)` |
| Card / Selected card title | `clamp(20px, 2vw, 26px)` / `clamp(24px, 3.4vw, 42px)` |
| Modal title | `clamp(32px, 4.4vw, 52px)` |
| Hero sub | `clamp(16px, 1.4vw, 20px)` |
| About lead (Georgia italic) | `clamp(20px, 2vw, 28px)` |
| Body copy | 15–16px Inter |
| UI labels / eyebrows / counters | 10–12px Inter, letter-spacing 0.18em–0.30em, uppercase |

### Spacing / rhythm
- `--wrap: 1440px` — max content width.
- Section vertical padding: `clamp(80px, 12vw, 160px) 0`.
- Section-head bottom padding: 24px + hairline divider + 60px margin-bottom.
- Card grid gap: 28px (All), 32px (Selected + Capabilities).
- Header horizontal padding: `clamp(20px, 5vw, 64px)` (via `.wrap`).

### Borders & radii
- Hairlines everywhere: `1px solid var(--line)` or `var(--line-strong)`.
- **No border-radius** on any card, chip, button, or panel. Editorial hard edges. The only rounded elements are the play buttons and the eyebrow dot, both `border-radius: 50%`.

### Shadows
- **No box-shadows anywhere.** Depth comes from lift transforms and layered blur veils.

### Motion
- Global easing: `cubic-bezier(0.22, 1, 0.36, 1)` (variable `--ease`).
- Standard durations: 220ms (small UI), 300ms (buttons/borders), 400ms (bg/padding), 700–900ms (thumbnails and reveal), 1600ms (hero cross-fade), 8000ms (Ken Burns).
- Marquee: 42s linear infinite.

### Film grain overlay
- `.grain` — fixed-position full-viewport SVG turbulence, `opacity: 0.06`, `mix-blend-mode: overlay`, `z-index: 999`, `pointer-events: none`. Applies globally. **Do not remove** — it is a core part of the editorial feel.

---

## Assets

### Videos (embedded from Google Drive — 14 items)
Videos are **not** stored in the repo. They are streamed via `<iframe src="https://drive.google.com/file/d/{FILE_ID}/preview">`. Each project's `driveId` is in `data/projects.js`. See that file for the full mapping.

### Thumbnails
- **Not shipped.** The site is functional without them — it falls back to `https://drive.google.com/thumbnail?id={driveId}&sz=w1920`.
- If the developer wants to serve higher-quality thumbs, drop `1920×1080` JPGs at `assets/thumbnails/{id}.jpg` where `{id}` matches the `id` field in `data/projects.js`. The fallback logic will prefer them automatically.

### Icons
- No icon library. The two SVGs used inline are:
  - Play triangle (`M6 4l10 6-10 6V4z`) — filled with `#EDEBE7`, inverts to `#050505` on hover.
  - Close X (`M3 3l16 16M19 3L3 19`) — 1.4px stroke, `currentColor`.

### Favicon
- Inline data-URI SVG. Black square with white **A** in Georgia serif. Defined in `<link rel="icon">`.

### Fonts
- Google Fonts CDN. No local font files.

---

## Files

The full working prototype is in the repo root:

| File | Purpose |
|---|---|
| `index.html` | Semantic HTML5 markup for every section + modal skeleton. |
| `style.css` | All styles, tokens, responsive rules, motion. |
| `script.js` | All behavior: header scroll state, mobile nav, hero slideshow, card/grid rendering, filters, modal (open/close/nav/keyboard/focus trap), reveal observer, year stamp. |
| `data/projects.js` | **Single source of truth.** `window.PROJECTS = [...]` — 14 project objects. |
| `README.md` | User-facing docs (Arabic) on editing content and deploying to GitHub Pages. |
| `assets/thumbnails/.gitkeep` | Placeholder for optional local thumbs. |
| `assets/images/.gitkeep` | Placeholder for any helper images. |

Copies of the four primary source files are included alongside this README in the handoff bundle for reference.

---

## Deployment

Target: **GitHub Pages** (already scoped by the client).

1. Push all files to the repo root of a `github.io` repository.
2. Repo → Settings → Pages → Source: `main` / `root`.
3. Site publishes at `https://{username}.github.io/{repo}/`.

No build step. No CI. No dependencies to install.

---

## Not in scope (do NOT add without a new brief)

- Contact form, email addresses, or Instagram/social links (client explicitly said one CTA to `bio.site/a.elmasry` only).
- Blog, case-study long-form pages, testimonials, or client-logo strips.
- Analytics, cookie banners, or any tracking.
- The 35 unconfirmed videos from the "باقي الاعمال" Drive folder — see the "محتاج تأكيد" list in the source project's chat log. They are intentionally excluded until each is titled and categorized.
