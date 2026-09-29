# Amarya Levy-Mazie — Portfolio

A simple static portfolio site with a home page and separate pages per section. No build step, no dependencies — just open `index.html` or serve the folder.

## Pages

- `index.html` — Home: intro, "What I Study" cards, and links into the other pages
- `about.html` — About / bio
- `education.html` — Education
- `experience.html` — Work & leadership experience
- `research.html` — Honors Thesis & Research
- `tutoring.html` — Tutoring & Teaching
- `contact.html` — Contact

Each page shares the same header/nav and footer (duplicated per file since there's no build step — if you add a new page, copy the header/nav/footer markup from an existing one and update the `active` class).

## Editing content

Content is filled in from `resume.pdf`. The headshot is `headshot.webp`.

## Adding your résumé

Drop a PDF named `resume.pdf` in this folder — the "Download résumé" links already point to it.

## Running locally

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying

This is a static site, so it works as-is on GitHub Pages, Netlify, or Vercel. For GitHub Pages: Settings → Pages → set source to the `main` branch, root folder.
