export const BRAND = {
  name: "EverKrypton",
  alias: "OG-Rainhard",
  github: "https://github.com/EverKrypton",
  repos: "https://github.com/EverKrypton?tab=repositories",
  telegram: "https://t.me/ograinhard",
  telegramHandle: "@ograinhard",
  itch: "https://everkrypton.itch.io",
  email: "hello@everkrypton.dev",
};

export const HERO = {
  rotate: ["trade", "settle", "scale", "ship"],
  lede:
    "I design and ship crypto products end to end — a spot exchange with its own matching engine, a payments-backed sportsbook, and the infrastructure underneath. From the database schema to the last pixel.",
  primaryCta: { label: "See the work", href: "#work" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
  meta: [
    { label: "Two live products", tone: "emerald" },
    { label: "Self-hosted, not templates", tone: "violet" },
    { label: "Open to new work", tone: "amber" },
  ],
};

export type Product = {
  id: string;
  kicker: string;
  name: string;
  desc: string;
  points: string[];
  repo: string;
  url: string;
  /** public asset base for the screenshot, e.g. "/volt" -> /volt.webp + /volt.jpg */
  preview: string;
  domain: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "volt",
    kicker: "Crypto exchange",
    name: "VOLT",
    desc:
      "A pro-grade spot exchange built around its own central limit order book. Price-time priority, escrow on both sides, and a fee model that accrues to the treasury — with live market data pushed to the terminal.",
    points: [
      "Matching engine with price-time priority and partial fills",
      "Escrowed orders on both sides — no naked orders",
      "Live depth and trades streamed over SSE, candles via Lightweight Charts",
      "API keys and Sign-In with Ethereum for market makers",
    ],
    repo: "https://github.com/EverKrypton/exchange",
    url: "https://volt-app-hq.vercel.app/",
    preview: "/volt",
    domain: "volt-app-hq.vercel.app",
  },
  {
    id: "oddsly",
    kicker: "Crypto sportsbook",
    name: "Oddsly",
    desc:
      "A self-hosted fixed-odds sportsbook that takes real fixtures, lets an operator set the odds and margin, and settles atomically. USDT deposits and payouts run through OxaPay with signed webhooks.",
    points: [
      "Fixed-odds bets, parlays, and early cash-out",
      "USDT (BEP20) deposits and withdrawals via OxaPay",
      "Atomic settlement in MongoDB transactions",
      "TOTP two-factor auth and an operator panel",
    ],
    repo: "https://github.com/EverKrypton/oddsly",
    url: "https://oddsly-app.vercel.app/",
    preview: "/oddsly",
    domain: "oddsly-app.vercel.app",
  },
];

export type Capability = { label: string; title: string; desc: string; icon: string };

export const CAPABILITIES: Capability[] = [
  {
    label: "Backend",
    title: "Engines that hold up",
    desc: "Order books, matching, settlement, and fee logic written to stay correct under load — with atomic writes where money moves.",
    icon: "engine",
  },
  {
    label: "Payments",
    title: "Money rails, wired",
    desc: "Crypto deposits and payouts through provider APIs and HMAC-signed webhooks, with reconciliation and an operator view.",
    icon: "payments",
  },
  {
    label: "Product",
    title: "Interfaces that read fast",
    desc: "Dense trading and betting surfaces that stay legible: clear hierarchy, real states, and no decoration where data should be.",
    icon: "product",
  },
  {
    label: "Auth & security",
    title: "Accounts done properly",
    desc: "Sessions, TOTP two-factor with recovery codes, rate limiting, and Sign-In with Ethereum where wallets are the identity.",
    icon: "auth",
  },
  {
    label: "Realtime",
    title: "Live without the jank",
    desc: "Server-sent events and streaming updates that keep charts, depth, and balances current without hammering the client.",
    icon: "realtime",
  },
  {
    label: "Delivery",
    title: "Shipped, not demoed",
    desc: "CI/CD, environment discipline, and deployments that survive contact with real users and real money.",
    icon: "delivery",
  },
];

export const PROCESS = [
  {
    n: "01",
    title: "Scope the first slice",
    desc: "We pick the smallest piece that proves the product works — usually the money path or the core mechanism — and define what done means before writing code.",
  },
  {
    n: "02",
    title: "Build and show",
    desc: "I build in the open against that slice, sharing working progress rather than status updates, so decisions stay grounded in something you can click.",
  },
  {
    n: "03",
    title: "Harden and hand over",
    desc: "Edge cases, states, and the last ten percent. You get the code, the deployment, and a system you or your team can keep building on.",
  },
];

export type Faq = { q: string; a: string };

export const FAQ: Faq[] = [
  {
    q: "What exactly do you build?",
    a: "Full-stack crypto products — exchanges, sportsbooks, payment flows, and the admin tooling around them. I work across Next.js, TypeScript, MongoDB, and the payment and market-data APIs a product needs to function.",
  },
  {
    q: "Are these products live?",
    a: "Yes — both are deployed and you can use them right now. VOLT runs the exchange terminal and Oddsly the sportsbook; each links to a live URL and to its source.",
  },
  {
    q: "Can you work with an existing codebase?",
    a: "Yes. I'm comfortable taking over a partially built product, tightening the parts that are load-bearing — money, auth, data integrity — and shipping the rest.",
  },
  {
    q: "How do we start?",
    a: "Send a short message on Telegram with what you're building and where it's stuck. If it's a fit, we'll scope the first slice and go from there.",
  },
];
