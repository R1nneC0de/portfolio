# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page personal portfolio for Sree Yashas Kuchi. React 19 + Vite SPA, Tailwind for styling, Framer Motion for animation. Deployed to GitHub Pages.

The actual app lives in the `my-portfolio/` subdirectory (this folder). The parent `portfolio/` directory is a separate git repo and holds the `.env` — see the EmailJS note below.

## Commands

All commands run from `my-portfolio/`:

- `npm run dev` — Vite dev server (HMR)
- `npm run build` — production build to `dist/`
- `npm run lint` — ESLint over the repo (flat config in `eslint.config.js`)
- `npm run preview` — serve the built `dist/` locally
- `npm run deploy` — `predeploy` builds, then `gh-pages -d dist` publishes `dist/` to GitHub Pages

There is no test framework configured.

## Deployment

- Deployed to GitHub Pages at the `homepage` in `package.json` (`https://R1nneC0de.github.io/portfolio/`).
- `vite.config.js` sets `base: '/portfolio/'` — this must match the GitHub Pages subpath. Asset URLs and the resume link depend on it. Changing the repo/Pages path means changing `base` too.
- `npm run deploy` builds locally and pushes `dist/` via `gh-pages`. Because the build happens on the developer's machine, environment variables (EmailJS keys) are baked into the bundle at build time.

## Architecture

- Entry: `src/main.jsx` → `src/App.jsx`. `App.jsx` renders persistent UI (`ParticleBackground`, `CustomCursor`, `Navbar`, `BackToTop`) plus the page sections in fixed order: `Landing` → `About` → `Experience` → `Projects` → `Contact`.
- Sections live in `src/sections/`, reusable UI in `src/components/`. Each section is a self-contained component; content (experience bullets, project cards, contact links) is hard-coded as arrays inside the component — there is no CMS or data layer. To update résumé content, edit the relevant array in the section file.
- Navigation is single-page scroll: `Navbar` tracks the active section via a scroll listener and `getBoundingClientRect`, and navigates with `scrollIntoView`. Section `id`s in the sections must stay in sync with `navItems` in `src/components/Navbar.jsx`.
- Animation: Framer Motion `whileInView` with `viewport={{ once: true }}` is the standard reveal pattern across sections.

## Styling

- Tailwind with a custom Spotify-inspired palette defined in `tailwind.config.js`: `spotify-*` (black, darkGray, gray, lightGray, green) and `lilac` (with `lilac-light`/`lilac-dark`). Use these tokens rather than hard-coding hex.

## EmailJS contact form (important)

- `src/sections/Contact.jsx` sends mail client-side via `@emailjs/browser`, reading `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` from `import.meta.env`.
- Vite only loads `.env` from its project root (`my-portfolio/`). The keys must be in `my-portfolio/.env` for the form to work in dev or in a build. `.env` is gitignored.
- The EmailJS template is expected to use the variables `from_name`, `from_email`, and `message`.

## Known gotchas

- `react-icons` is imported across components (`react-icons/fa`) — keep it in `package.json` dependencies or the build fails to resolve the import.
- `react-ga4` is a dependency but is not currently wired up anywhere.
