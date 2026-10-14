# EverKrypton — Portfolio

Crypto-product portfolio. React + TypeScript + Vite, deployed to GitHub Pages
at the account root <https://everkrypton.github.io/> via GitHub Actions.

## Dev
```bash
npm install
npm run dev        # local dev server
npm run build      # type-check + production build -> dist/
npm run preview    # preview the build
```

## Edit content
- `src/data/site.ts` — brand links, hero copy, products (`PRODUCTS`),
  capabilities, process, FAQ. Add a live URL to a product's `url` field to turn
  its primary button into "Open product"; leave it empty and the button links to
  the source instead.

## Deploy
Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and
publishes to GitHub Pages. Pages must use the **GitHub Actions** source
(Settings → Pages → Build and deployment → Source: GitHub Actions).

## Structure
```
src/
  App.tsx            page layout
  main.tsx           entry
  index.css          design system (violet / emerald / amber on near-black)
  data/site.ts       all copy and links
  components/        Nav, Hero, Showcase, ExchangeTerminal, BetSlip,
                     Capabilities, Process, Faq, Contact, Footer, Reveal, Icons
  hooks/useReveal.ts scroll reveal + word rotator
public/              favicon.svg, og.png, robots.txt
PRODUCT.md           product truth
```
