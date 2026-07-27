"use client";

import { motion } from "framer-motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="nav-glass sticky top-0 z-50"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-chrome-blue-soft transition group-hover:scale-105">
            <svg width="20" height="20" viewBox="0 0 48 48" fill="none" aria-hidden>
              <circle cx="24" cy="24" r="20" stroke="#1a73e8" strokeWidth="4" />
              <circle cx="24" cy="24" r="8" fill="#1a73e8" />
              <path
                d="M24 4a20 20 0 0 1 17.32 10H24V4z"
                fill="#ea4335"
              />
              <path
                d="M41.32 14A20 20 0 0 1 34 38.66L24 24h17.32z"
                fill="#fbbc04"
              />
              <path
                d="M34 38.66A20 20 0 0 1 8.68 34L24 24l10 14.66z"
                fill="#34a853"
              />
              <path
                d="M8.68 34A20 20 0 0 1 24 4v20L8.68 34z"
                fill="#4285f4"
              />
            </svg>
          </span>
          <span className="text-[15px] font-medium tracking-tight text-ink">
            Ever<span className="text-chrome-blue">Krypton</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 sm:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-secondary transition hover:bg-chrome-blue-soft hover:text-chrome-blue"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#work"
          className="chrome-btn chrome-btn-primary text-sm !px-4 !py-2"
        >
          View work
        </a>
      </div>
    </motion.header>
  );
}
