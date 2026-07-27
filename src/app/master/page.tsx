"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ProjectJSON } from "@/lib/models/Project";

type MetaPreview = {
  title: string;
  description: string;
  image: string;
  siteName: string;
  favicon: string;
  url: string;
};

export default function MasterPage() {
  const [checking, setChecking] = useState(true);
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginLoading, setLoginLoading] = useState(false);

  const [projects, setProjects] = useState<ProjectJSON[]>([]);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [featured, setFeatured] = useState(false);
  const [preview, setPreview] = useState<MetaPreview | null>(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadProjects = useCallback(async () => {
    const res = await fetch("/api/projects", { cache: "no-store" });
    const data = await res.json();
    setProjects(data.projects || []);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/auth/me", { cache: "no-store" });
        const data = await res.json();
        setAuthed(Boolean(data.authenticated));
        if (data.authenticated) await loadProjects();
      } catch {
        setAuthed(false);
      } finally {
        setChecking(false);
      }
    })();
  }, [loadProjects]);

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError(null);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        setLoginError("Wrong password");
        return;
      }
      setAuthed(true);
      setPassword("");
      await loadProjects();
    } catch {
      setLoginError("Login failed");
    } finally {
      setLoginLoading(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setAuthed(false);
    setProjects([]);
    setPreview(null);
  }

  async function fetchPreview() {
    if (!url.trim()) return;
    setBusy(true);
    setError(null);
    setMessage(null);
    try {
      const res = await fetch("/api/metadata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Preview failed");
      setPreview(data.metadata);
      if (!title) setTitle(data.metadata.title || "");
      if (!description) setDescription(data.metadata.description || "");
      setMessage("Metadata loaded");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Preview failed");
    } finally {
      setBusy(false);
    }
  }

  async function handleCreate(e: FormEvent) {
    e.preventDefault();
    if (!url.trim()) {
      setError("URL is required");
      return;
    }
    setBusy(true);
    setError(null);
    setMessage(null);
    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: url.trim(),
          title: title.trim() || undefined,
          description: description.trim() || undefined,
          tags: tags
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean),
          featured,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Create failed");
      setMessage(`Added “${data.project.title}”`);
      setUrl("");
      setTitle("");
      setDescription("");
      setTags("");
      setFeatured(false);
      setPreview(null);
      await loadProjects();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Create failed");
    } finally {
      setBusy(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this project?")) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/projects/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Delete failed");
      }
      await loadProjects();
      setMessage("Project deleted");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed");
    } finally {
      setBusy(false);
    }
  }

  async function toggleFeatured(p: ProjectJSON) {
    const res = await fetch(`/api/projects/${p.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ featured: !p.featured }),
    });
    if (res.ok) await loadProjects();
  }

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center chrome-mesh">
        <div className="skeleton h-10 w-40" />
      </div>
    );
  }

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center chrome-mesh px-5">
        <motion.form
          onSubmit={handleLogin}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md rounded-2xl border border-border-soft bg-white p-8"
          style={{ boxShadow: "var(--shadow-md)" }}
        >
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-chrome-blue-soft">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M12 2L4 6v6c0 5 3.4 9.4 8 10.5C16.6 21.4 20 17 20 12V6l-8-4z"
                  stroke="#1a73e8"
                  strokeWidth="1.8"
                  fill="none"
                />
              </svg>
            </div>
            <h1 className="text-xl font-medium text-ink">Master access</h1>
            <p className="mt-1 text-sm text-ink-secondary">
              Private admin — not linked from the public site
            </p>
          </div>
          <label className="mb-1.5 block text-sm font-medium text-ink">
            Password
          </label>
          <input
            type="password"
            className="chrome-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            placeholder="Enter master password"
          />
          {loginError && (
            <p className="mt-3 text-sm text-google-red">{loginError}</p>
          )}
          <button
            type="submit"
            disabled={loginLoading}
            className="chrome-btn chrome-btn-primary mt-5 w-full"
          >
            {loginLoading ? "Signing in…" : "Enter"}
          </button>
          <a
            href="/"
            className="mt-4 block text-center text-sm text-chrome-blue hover:underline"
          >
            ← Back to portfolio
          </a>
        </motion.form>
      </div>
    );
  }

  return (
    <div className="min-h-screen chrome-mesh">
      <header className="nav-glass sticky top-0 z-40">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5">
          <div className="flex items-center gap-2">
            <span className="google-dots" aria-hidden>
              <span />
              <span />
              <span />
              <span />
            </span>
            <span className="text-sm font-medium text-ink">Master · Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <a href="/" className="chrome-btn chrome-btn-ghost !py-1.5 !px-3 text-sm">
              View site
            </a>
            <button
              type="button"
              onClick={handleLogout}
              className="chrome-btn chrome-btn-secondary !py-1.5 !px-3 text-sm"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-10">
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-border-soft bg-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="text-lg font-medium text-ink">Add project by URL</h2>
          <p className="mt-1 text-sm text-ink-secondary">
            Paste a link — we fetch Open Graph title, description, image, and
            favicon for the homepage card.
          </p>

          <form onSubmit={handleCreate} className="mt-6 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">
                Project URL *
              </label>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  className="chrome-input"
                  type="url"
                  placeholder="https://…"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={fetchPreview}
                  disabled={busy || !url.trim()}
                  className="chrome-btn chrome-btn-secondary shrink-0"
                >
                  Fetch metadata
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink">
                  Title (optional override)
                </label>
                <input
                  className="chrome-input"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Auto from site"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink">
                  Tags (comma separated)
                </label>
                <input
                  className="chrome-input"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="React, Mobile, AI"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">
                Description (optional override)
              </label>
              <textarea
                className="chrome-input min-h-[96px] resize-y"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Auto from site"
              />
            </div>

            <label className="flex items-center gap-2 text-sm text-ink">
              <input
                type="checkbox"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="h-4 w-4 rounded border-border text-chrome-blue focus:ring-chrome-blue"
              />
              Featured project
            </label>

            <AnimatePresence>
              {preview && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden rounded-xl border border-border-soft bg-surface-2 p-4"
                >
                  <div className="flex gap-4">
                    {preview.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={preview.image}
                        alt=""
                        className="h-20 w-32 rounded-lg object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="flex h-20 w-32 items-center justify-center rounded-lg bg-chrome-blue-soft text-xs text-chrome-blue">
                        No image
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 text-xs text-ink-muted">
                        {preview.favicon ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={preview.favicon} alt="" className="h-3.5 w-3.5" referrerPolicy="no-referrer" />
                        ) : null}
                        {preview.siteName}
                      </div>
                      <div className="mt-0.5 truncate font-medium text-ink">
                        {preview.title}
                      </div>
                      <p className="mt-1 line-clamp-2 text-sm text-ink-secondary">
                        {preview.description || "—"}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {(message || error) && (
              <p
                className={`text-sm ${error ? "text-google-red" : "text-google-green"}`}
              >
                {error || message}
              </p>
            )}

            <button
              type="submit"
              disabled={busy}
              className="chrome-btn chrome-btn-primary"
            >
              {busy ? "Working…" : "Publish to homepage"}
            </button>
          </form>
        </motion.section>

        <section className="mt-10">
          <h2 className="mb-4 text-lg font-medium text-ink">
            Published ({projects.length})
          </h2>
          {projects.length === 0 ? (
            <p className="text-sm text-ink-secondary">No projects yet.</p>
          ) : (
            <ul className="space-y-3">
              {projects.map((p) => (
                <li
                  key={p.id}
                  className="flex flex-col gap-3 rounded-xl border border-border-soft bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      {p.favicon ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={p.favicon} alt="" className="h-4 w-4" referrerPolicy="no-referrer" />
                      ) : null}
                      <span className="truncate font-medium text-ink">{p.title}</span>
                      {p.featured && (
                        <span className="rounded-full bg-chrome-blue-soft px-2 py-0.5 text-[10px] font-medium text-chrome-blue">
                          Featured
                        </span>
                      )}
                    </div>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 block truncate text-xs text-chrome-blue hover:underline"
                    >
                      {p.url}
                    </a>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <button
                      type="button"
                      onClick={() => toggleFeatured(p)}
                      className="chrome-btn chrome-btn-ghost !py-1.5 !px-3 text-xs"
                    >
                      {p.featured ? "Unfeature" : "Feature"}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(p.id)}
                      className="chrome-btn !py-1.5 !px-3 text-xs !text-google-red"
                      style={{ background: "#fce8e6" }}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}
