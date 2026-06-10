# Dunston Business Village — Website

The marketing and tenant-directory website for **Dunston Business Village (DBV)**, an award-winning serviced and managed business park set in 25 acres of Staffordshire countryside, five minutes from the M6.

Heritage-meets-modern country-estate aesthetic: deep forest green, warm stone, cream, serif display (Cormorant Garamond) + clean sans (Outfit).

![DBV](assets/dbv-logo-stacked.png)

---

## What's in it

A single-page application (hash-routed) with ten pages:

| Page | Route | Notes |
| --- | --- | --- |
| Home | `#home` | Hero, awards, stats, office options, why-DBV, directory teaser, testimonials, news, CTA |
| Spaces | `#spaces` | 8 office types, features band, comparison table |
| Amenities | `#amenities` | Category accordion, Discount Club, green issues, ISO 9001 |
| Location | `#location` | Travel options, geographic coverage, illustrated map |
| About | `#about` | Heritage story blocks, awards timeline |
| Community | `#community` | Community grid, news, testimonials |
| Vision | `#vision` | Editorial regeneration long-read |
| Contact | `#contact` | Validated enquiry form, details, quick links |
| Directory | `#directory` | Searchable/filterable business directory (90+ tenants) |
| Site map | `#sitemap` | Interactive SVG estate plan with building search |

---

## Tech & architecture

- **No build step.** Plain static site. React 18 is loaded from a CDN and JSX is transpiled in the browser by Babel Standalone.
- **Entry point:** `index.html` at the project root.
- **Components** live in `src/*.jsx`, loaded as `<script type="text/babel">`. Each file attaches its exports to `window`, so files share scope without a bundler.
- **Styling** is plain CSS in `css/` using the DBV design tokens (`colors_and_type.css`).
- **Data:** the full tenant list is in `src/data/businesses.js`.
- **All asset paths are relative**, so the site works from any sub-path (e.g. a GitHub Pages project URL).

### File structure

```
.
├── index.html                 ← homepage / entry point
├── .nojekyll                  ← tells GitHub Pages to serve files as-is
├── css/
│   ├── colors_and_type.css    ← design tokens (colours, type) + Google Fonts import
│   ├── kit.css                ← shared layout styles
│   └── animations.css         ← scroll-reveal + hover/motion layer
├── assets/
│   ├── dbv-logo.png           ← horizontal logo
│   └── dbv-logo-stacked.png   ← stacked logo (footer)
└── src/
    ├── Icons.jsx              ← Lucide-style icon set
    ├── Router.jsx             ← hash router + page outlet
    ├── Shared.jsx             ← shared page primitives
    ├── Header.jsx / Footer.jsx
    ├── Animations.js          ← IntersectionObserver scroll reveals
    ├── data/businesses.js     ← tenant directory data
    ├── HomeSectionsA.jsx / HomeSectionsB.jsx / Homepage.jsx
    ├── SpacesPage.jsx / AmenitiesPage.jsx / LocationPage.jsx
    ├── AboutPage.jsx / CommunityPage.jsx / VisionPage.jsx
    ├── ContactPage.jsx / DirectoryPage.jsx
    └── SiteMapData.jsx / SiteMapSvg.jsx / SiteMapPage.jsx
```

---

## Run locally

Because the browser loads the JSX files over `fetch`, you must serve the folder over HTTP — opening `index.html` directly with `file://` will be blocked by the browser's CORS policy.

Any static server works. Pick one:

```bash
# Python 3 (no install needed on most machines)
python3 -m http.server 8000

# Node — npx, no global install
npx serve .
# or
npx http-server -p 8000

# VS Code: the "Live Server" extension → "Open with Live Server"
```

Then open <http://localhost:8000>.

---

## Build

**There is no build step.** This is intentional — the site is deployable as-is. Upload the files and serve them statically.

> **Optional production hardening.** The site currently loads React's *development* build and transpiles JSX in-browser, which is great for editing but adds ~1s of first-paint compile time and prints a dev-mode console notice. For a high-traffic production deploy you can later migrate to a bundler (Vite) and precompile the JSX — see "Migrating to a build" below. Not required for GitHub Pages.

---

## Deploy to GitHub Pages

1. Create a new GitHub repository and push these files to the `main` branch (the repo root must contain `index.html`).

   ```bash
   git init
   git add .
   git commit -m "DBV website"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```

2. In the repo: **Settings → Pages**.
3. Under **Build and deployment**, set **Source = "Deploy from a branch"**, **Branch = `main`**, **Folder = `/ (root)`**. Save.
4. Wait ~1 minute. Your site publishes at `https://<you>.github.io/<repo>/`.

The included **`.nojekyll`** file stops GitHub's Jekyll processor from interfering. All paths are relative, so the site works correctly under the `/<repo>/` sub-path without changes.

> Hash-based routing (`#home`, `#spaces`, …) means every page is served by `index.html`, so deep links and refreshes always work on GitHub Pages — no 404 fallback needed.

---

## Should this be static or built?

**Deploy it as a plain static site.** No build process is needed or recommended for GitHub Pages. Just upload the folder and enable Pages.

### Migrating to a build (optional, later)

If you outgrow the in-browser approach, migrate to **Vite + React**:

1. `npm create vite@latest dbv -- --template react`
2. Move each `src/*.jsx` file in, convert the `window.X = X` globals to real `import`/`export` statements, and import the CSS in `main.jsx`.
3. `npm run build` outputs a static `dist/` you can still host on GitHub Pages (set `base: '/<repo>/'` in `vite.config.js`).

This is a refactor, not a copy — budget a few hours. The current static site needs none of it to run.

---

## Credits & notes

- **Fonts:** Cormorant Garamond + Outfit, loaded from Google Fonts. Self-host for production privacy/performance if desired.
- **Imagery:** illustrated SVG placeholders throughout — replace with commissioned photography before a public launch.
- **Logo:** the trefoil retains its original red/blue/green; never recoloured.
- Company No. 4223216 · VAT 775 9676 54 · Woodland Lodge, Dunston Business Village, Dunston, ST18 9FJ.
