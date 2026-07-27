"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React / React Native", color: "#4285f4" },
  { name: "Expo & Mobile", color: "#34a853" },
  { name: "Next.js", color: "#ea4335" },
  { name: "TypeScript", color: "#1a73e8" },
  { name: "Node & APIs", color: "#fbbc04" },
  { name: "MongoDB", color: "#34a853" },
  { name: "UI / Motion", color: "#ea4335" },
  { name: "Product craft", color: "#4285f4" },
];

export function About() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-3 google-dots" aria-hidden>
            <span />
            <span />
            <span />
            <span />
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight text-ink sm:text-4xl">
            Designed like Chrome.
            <br />
            Built for people.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-secondary sm:text-lg">
            I care about the last 10% — the motion, the spacing, the way a
            button feels when you press it. From mobile apps to full-stack web,
            I ship experiences that are fast, clear, and memorable.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-secondary sm:text-lg">
            Currently exploring nutrition tech, crypto tooling, and polished
            product surfaces that feel native everywhere.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="chrome-card !transform-none p-7 sm:p-8"
        >
          <h3 className="text-sm font-medium uppercase tracking-wider text-ink-muted">
            Stack & strengths
          </h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <motion.span
                key={s.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface-2 px-3.5 py-2 text-sm text-ink"
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: s.color }}
                />
                {s.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
