# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary:** founders, teams, and clients evaluating a full-stack builder for
  crypto products (exchanges, sportsbooks, payment rails). They land from a
  GitHub profile, a Telegram intro, or a shared link, on desktop and phone, and
  decide within seconds whether this person can ship something real.
- **Secondary:** technical peers and potential collaborators who want to see
  depth (matching engines, payment webhooks, auth) rather than a résumé.

## Product Purpose

A personal portfolio for **EverKrypton (OG-Rainhard)** that presents shipped,
self-hosted crypto products — **VOLT** (spot exchange) and **Oddsly** (crypto
sportsbook) — with enough real product detail that a visitor trusts the work,
and one obvious way to make contact. Success means: a visitor understands what
this person builds and reaches out.

## Positioning

Portfolio of *shipped, self-hosted* products built from the database up — a
central-limit-order-book exchange with its own matching engine, and a
payments-backed sportsbook — not template sites or mockups. The proof is the
product mechanics, shown on the page.

## Operating Context

- VOLT: central limit order book, price-time priority, escrow on both sides,
  configurable maker/taker fees, live depth over SSE, candlesticks, API keys,
  Sign-In with Ethereum.
- Oddsly: fixed-odds sportsbook, real fixtures, USDT (BEP20) deposits/payouts via
  OxaPay webhooks, parlays, cash-out, TOTP 2FA, operator panel, PWA.
- Contact channels: GitHub, Telegram (`@ograinhard`), itch.io.

## Capabilities and Constraints

- Static site. React + TypeScript + Vite, deployed to GitHub Pages at the
  account root (`everkrypton.github.io`) via GitHub Actions.
- Product live URLs are published and must stay accurate:
  VOLT — <https://volt-app-hq.vercel.app/>;
  Oddsly — <https://oddsly-app.vercel.app/>.
- Brand palette is fixed: violet / emerald / amber on a near-black ground.
- No fabricated testimonials, metrics, clients, or pricing.

## Brand Commitments

- Identity: **EverKrypton** (also writes as **OG-Rainhard**).
- Palette: violet `#8b5cff`, violet-light `#a78bfa`, emerald `#2ee6a6`,
  amber `#ffb020`, near-black ground.
- Voice: direct, technical, confident. No hype, no filler.

## Evidence on Hand

- Real product facts from the `exchange` and `oddsly` repositories
  (`PRODUCT.md`, `README.md`).
- Repositories: `github.com/EverKrypton/exchange`, `github.com/EverKrypton/oddsly`.
- Live deployments: `volt-app-hq.vercel.app` (VOLT), `oddsly-app.vercel.app` (Oddsly).
- Absent (must not be fabricated): customer counts, revenue, benchmarks, press,
  testimonials.

## Product Principles

1. Show the mechanism, not the adjective — prove it with the product's own detail.
2. Every claim is true and checkable.
3. The visitor reaches contact in one obvious step.
4. Craft over decoration: no filler that a template could generate.
5. Fast, legible, and solid on a phone.
