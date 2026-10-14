export type Project = {
  id: string;
  name: string;
  tag: string;
  badge: string;
  desc: string;
  chips: string[];
  url: string;
  repo: string;
  featured?: boolean;
};

/* ============================================================
   Projects — edit here.
   url: ""  ->  shows a disabled "Live soon" button.
   Paste the real deployment URL to turn it into a live link.
   repo: "" hides the "Source" button.
   ============================================================ */
export const PROJECTS: Project[] = [
  {
    id: "volt",
    name: "VOLT",
    tag: "crypto exchange",
    badge: "Live product",
    desc: "A pro-grade spot exchange: its own central limit order book with price-time priority, escrow on both sides, configurable maker/taker fees, and live depth over SSE with candlestick charts.",
    chips: ["Next.js 15", "TypeScript", "MongoDB", "SSE", "viem", "SIWE"],
    url: "",
    repo: "https://github.com/EverKrypton/exchange",
    featured: true,
  },
  {
    id: "oddsly",
    name: "Oddsly",
    tag: "crypto sportsbook",
    badge: "Live product",
    desc: "A self-hosted fixed-odds crypto sportsbook. Real fixtures, transparent odds, parlays and cash-out, USDT (BEP20) deposits and payouts via OxaPay, instant settlement and an operator panel.",
    chips: ["Next.js 15", "TypeScript", "MongoDB", "OxaPay", "2FA / TOTP", "PWA"],
    url: "",
    repo: "https://github.com/EverKrypton/oddsly",
    featured: true,
  },
];

export const CONTACT = {
  name: "EverKrypton",
  github: "https://github.com/EverKrypton",
  telegram: "https://t.me/ograinhard",
  itch: "https://everkrypton.itch.io",
  repos: "https://github.com/EverKrypton?tab=repositories",
};
