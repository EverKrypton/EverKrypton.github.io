"use client";

import { motion } from "framer-motion";
import type { ProjectJSON } from "@/lib/models/Project";

type Props = {
  project: ProjectJSON;
  index: number;
};

export function ProjectCard({ project, index }: Props) {
  const hostname = (() => {
    try {
      return new URL(project.url).hostname.replace(/^www\./, "");
    } catch {
      return project.siteName || "project";
    }
  })();

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.06, 0.36),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="chrome-card group relative flex flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-3">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt=""
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-chrome-blue-soft via-white to-[#e6f4ea]">
            <div className="text-center">
              {project.favicon ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.favicon}
                  alt=""
                  className="mx-auto mb-2 h-10 w-10 rounded"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                  <span className="text-lg font-medium text-chrome-blue">
                    {(project.title || "P")[0]}
                  </span>
                </div>
              )}
              <span className="text-xs text-ink-muted">{hostname}</span>
            </div>
          </div>
        )}
        {project.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-medium text-chrome-blue shadow-sm ring-1 ring-border-soft">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2">
          {project.favicon ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.favicon}
              alt=""
              className="h-4 w-4 rounded-sm"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          ) : null}
          <span className="truncate text-xs font-medium uppercase tracking-wide text-ink-muted">
            {project.siteName || hostname}
          </span>
        </div>
        <h3 className="text-lg font-medium leading-snug text-ink transition group-hover:text-chrome-blue">
          {project.title}
        </h3>
        {project.description ? (
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-secondary">
            {project.description}
          </p>
        ) : null}
        {project.tags?.length ? (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-chrome-blue-soft px-2.5 py-0.5 text-[11px] font-medium text-chrome-blue"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
        <div className="mt-auto flex items-center gap-1 pt-4 text-sm font-medium text-chrome-blue opacity-0 transition group-hover:opacity-100">
          Open project
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M7 17L17 7M17 7H9M17 7v8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </motion.a>
  );
}
