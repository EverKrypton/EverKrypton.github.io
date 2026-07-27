"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24"
    >
      <div
        className="orb"
        style={{
          width: 280,
          height: 280,
          background: "rgba(66,133,244,0.35)",
          top: -40,
          left: "8%",
        }}
      />
      <div
        className="orb"
        style={{
          width: 220,
          height: 220,
          background: "rgba(52,168,83,0.22)",
          top: 80,
          right: "6%",
          animationDelay: "2s",
        }}
      />
      <div
        className="orb"
        style={{
          width: 160,
          height: 160,
          background: "rgba(234,67,53,0.18)",
          bottom: 20,
          left: "40%",
          animationDelay: "4s",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-4xl text-center"
      >
        <motion.div variants={item} className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-white/80 px-4 py-1.5 text-sm text-ink-secondary shadow-sm backdrop-blur">
            <span className="google-dots" aria-hidden>
              <span />
              <span />
              <span />
              <span />
            </span>
            Builder · Designer · Engineer
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-[family-name:var(--font-display)] text-4xl font-normal leading-[1.12] tracking-tight text-ink sm:text-6xl md:text-[4.25rem]"
        >
          The web,{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-[#4285f4] via-[#1a73e8] to-[#34a853] bg-clip-text text-transparent">
              faster
            </span>
          </span>
          <br />
          and more beautiful
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-secondary sm:text-lg"
        >
          Hi, I&apos;m <strong className="font-medium text-ink">EverKrypton</strong> —
          I craft products that feel as polished as Chrome itself: clean,
          fast, and designed with care. Explore selected projects below.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#work" className="chrome-btn chrome-btn-primary">
            Explore projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M12 5v14M5 12l7 7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#contact" className="chrome-btn chrome-btn-secondary">
            Get in touch
          </a>
        </motion.div>

        {/* Browser chrome mock */}
        <motion.div
          variants={item}
          className="mx-auto mt-16 max-w-3xl"
        >
          <div className="overflow-hidden rounded-2xl border border-border-soft bg-white" style={{ boxShadow: "var(--shadow-lg)" }}>
            <div className="flex items-center gap-2 border-b border-border-soft bg-surface-3 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-google-red" />
                <span className="h-3 w-3 rounded-full bg-google-yellow" />
                <span className="h-3 w-3 rounded-full bg-google-green" />
              </div>
              <div className="mx-2 flex flex-1 items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs text-ink-muted shadow-sm ring-1 ring-border-soft">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-google-green">
                  <path
                    d="M12 2l2 4 4 .5-3 3 .8 4.5L12 12l-3.8 2 0.8-4.5-3-3 4-.5L12 2z"
                    fill="currentColor"
                  />
                </svg>
                <span className="truncate">everkrypton.github.io</span>
              </div>
            </div>
            <div className="grid gap-0 sm:grid-cols-3">
              {[
                { t: "Speed", d: "Instant UI, zero friction", c: "#4285f4" },
                { t: "Craft", d: "Details that feel premium", c: "#ea4335" },
                { t: "Impact", d: "Products people love", c: "#34a853" },
              ].map((f, i) => (
                <div
                  key={f.t}
                  className={`p-6 text-left ${i < 2 ? "border-b sm:border-b-0 sm:border-r border-border-soft" : ""}`}
                >
                  <div
                    className="mb-3 h-1 w-10 rounded-full"
                    style={{ background: f.c }}
                  />
                  <div className="text-sm font-medium text-ink">{f.t}</div>
                  <div className="mt-1 text-sm text-ink-secondary">{f.d}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
