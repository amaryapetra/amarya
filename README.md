# Amarya Levy — Portfolio

A simple static portfolio site: `index.html`, `style.css`, `script.js`. No build step, no dependencies — just open `index.html` or serve the folder.

## Editing content

Sections to personalize (each has an HTML comment marking placeholder text):

- **Hero / About** (`index.html`, `#top` and `#about`) — intro blurb and bio
- **Education** (`#education`) — coursework, honors, activities
- **Honors Thesis & Research** (`#thesis`) — working title, advisor, description
- **Tutoring & Teaching** (`#tutoring`) — subjects and approach
- **Contact** (`#contact`) — LinkedIn URL, résumé link

## Adding your résumé

Drop a PDF named `resume.pdf` in this folder — the "Download résumé" links already point to it.

## Running locally

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying

This is a static site, so it works as-is on GitHub Pages, Netlify, or Vercel. For GitHub Pages: Settings → Pages → set source to the `main` branch, root folder.
