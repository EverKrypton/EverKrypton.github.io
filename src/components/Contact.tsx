"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="px-5 py-20 sm:px-8 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border-soft bg-white px-8 py-14 text-center sm:px-16"
        style={{ boxShadow: "var(--shadow-md)" }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 50% 0%, rgba(26,115,232,0.12), transparent 60%)",
          }}
        />
        <div className="relative">
          <div className="mb-4 flex justify-center">
            <span className="google-dots" aria-hidden>
              <span />
              <span />
              <span />
              <span />
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight text-ink sm:text-4xl">
            Let&apos;s build something great
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-ink-secondary">
            Open to collaborations, product builds, and interesting problems.
            Reach out on GitHub.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/EverKrypton"
              target="_blank"
              rel="noopener noreferrer"
              className="chrome-btn chrome-btn-primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://github.com/EverKrypton"
              target="_blank"
              rel="noopener noreferrer"
              className="chrome-btn chrome-btn-secondary"
            >
              View profile
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
