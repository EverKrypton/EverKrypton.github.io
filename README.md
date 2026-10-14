# EverKrypton — Portfolio

Chrome-inspired portfolio. React + TypeScript + Vite, deployed to GitHub Pages
at <https://everkrypton.github.io/> via GitHub Actions.

## Dev
```bash
npm install
npm run dev        # local dev server
npm run build      # type-check + production build -> dist/
npm run preview    # preview the build
```

## Edit the projects
Open `src/data/projects.ts` and edit the `PROJECTS` array:

```ts
{
  id: "volt",
  name: "VOLT",
  tag: "crypto exchange",
  badge: "Live product",
  desc: "...",
  chips: ["Next.js 15", "TypeScript", "MongoDB"],
  url: "",                 // paste the live URL to enable "Open project"
  repo: "https://github.com/EverKrypton/exchange",
  featured: true,
}
```

- `url: ""` shows a disabled **Live soon** label.
- `repo: ""` hides the **Source** link.

## Deploy
Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and
publishes to GitHub Pages. Pages must use the **GitHub Actions** source
(Settings → Pages → Build and deployment → Source: GitHub Actions).

## Structure
```
src/
  App.tsx            page layout
  main.tsx           entry
  index.css          design system (Chrome-store tokens, violet/emerald palette)
  data/projects.ts   projects + contact links
  components/        Nav, Hero, ProjectsGrid, ProjectCard, About, Contact, Footer, Reveal, Background
  hooks/useReveal.ts scroll reveal
public/              favicon.svg, og.svg, robots.txt
```
