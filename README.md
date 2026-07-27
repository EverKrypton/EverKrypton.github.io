# EverKrypton Portfolio

Chrome-inspired personal portfolio with MongoDB-backed projects and a hidden admin at `/master`.

**Public homepage:** no login icon — visitors only see Work / About / Contact.  
**Admin:** `yoursite.com/master` — upload projects by URL; site metadata (OG title, description, image, favicon) is fetched automatically.

## Why not pure GitHub Pages?

GitHub Pages only serves static files. This app needs **API routes + MongoDB**, so production hosting is **Vercel** (free) from this same repo (`EverKrypton.github.io`). You still keep the classic user-pages repo name.

Optional: after Vercel deploy, add custom domain or point DNS as you prefer.

## Setup

```bash
npm install
cp .env.example .env.local
# fill MONGODB_URI, ADMIN_PASSWORD, JWT_SECRET
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and [http://localhost:3000/master](http://localhost:3000/master).

## Wipe database

```bash
node --env-file=.env.local scripts/wipe-db.mjs
```

## Deploy (Vercel)

1. Import `EverKrypton/EverKrypton.github.io` on [vercel.com](https://vercel.com)
2. Add env vars: `MONGODB_URI`, `MONGODB_DB`, `ADMIN_PASSWORD`, `JWT_SECRET`, `NEXT_PUBLIC_SITE_URL`
3. Deploy — admin password stays only in Vercel env (never commit secrets)

## Stack

- Next.js 15 (App Router)
- MongoDB + Mongoose
- Framer Motion
- Tailwind CSS 4
- Cheerio (URL metadata)
- jose (admin session cookie)

## Design

Inspired by [Google Chrome](https://www.google.com/chrome/) — soft mesh backgrounds, Google multicolor accents, Material-like cards, pill buttons, glass nav.
