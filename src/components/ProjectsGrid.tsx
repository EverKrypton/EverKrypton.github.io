"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import type { ProjectJSON } from "@/lib/models/Project";

export function ProjectsGrid() {
  const [projects, setProjects] = useState<ProjectJSON[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/projects", { cache: "no-store" });
        const data = await res.json();
        if (!cancelled) {
          setProjects(data.projects || []);
          if (!res.ok) setError(data.error || "Could not load projects");
        }
      } catch {
        if (!cancelled) {
          setProjects([]);
          setError("Could not load projects");
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="work" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12 max-w-2xl"
        >
          <div className="mb-3 google-dots" aria-hidden>
            <span />
            <span />
            <span />
            <span />
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight text-ink sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-3 text-base text-ink-secondary sm:text-lg">
            Live projects and experiments — each card pulls real metadata from
            the product itself.
          </p>
        </motion.div>

        {projects === null ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="chrome-card overflow-hidden">
                <div className="skeleton aspect-[16/10]" />
                <div className="space-y-3 p-5">
                  <div className="skeleton h-3 w-24" />
                  <div className="skeleton h-5 w-3/4" />
                  <div className="skeleton h-12 w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : projects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl border border-dashed border-border bg-white/70 px-8 py-16 text-center"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-chrome-blue-soft">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M12 5v14M5 12h14"
                  stroke="#1a73e8"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-ink">Projects coming soon</h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-ink-secondary">
              {error
                ? "We could not reach the project library right now. Check back shortly."
                : "New work will appear here as soon as it is published."}
            </p>
          </motion.div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
