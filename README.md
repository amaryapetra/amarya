# Amarya Levy-Mazie — Portfolio

Personal portfolio site for Amarya Levy-Mazie, a Tulane University student pursuing a B.S. in Mathematics & Economics and a B.A. in Jewish Studies (Class of 2027).

**Live site:** https://amaryapetra.github.io/amarya/

## Pages

- `index.html` — Home: introduction, areas of study, and an overview of the site
- `about.html` — Background and interests
- `research.html` — Honors thesis
- `tutoring.html` — Tutoring and teaching experience
- `contact.html` — Email, LinkedIn, and résumé
- `404.html` — Custom "page not found" page

## Built with

- Hand-written HTML and CSS with a small amount of JavaScript for the mobile menu — no frameworks or build step
- Responsive layout with a collapsible menu on phones and tablets
- Automatic dark mode based on the visitor's system setting
- High-contrast mode: a footer toggle (remembered across pages) that also turns on automatically when a visitor's device requests more contrast
- Accessibility: skip-to-content link, visible keyboard focus, `aria-current` navigation, and descriptive alt text
- Meta descriptions, Open Graph tags, and a favicon on every page

## Updating CSS or JavaScript

Pages load `style.css` and `script.js` with a version number (for example `style.css?v=2`) so browsers do not keep an old cached copy. After changing either file, increase the number in every page.

## Running locally

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

Published with GitHub Pages from the `main` branch (root folder). Changes are made on a feature branch and merged through pull requests.
