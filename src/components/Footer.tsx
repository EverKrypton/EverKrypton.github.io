export function Footer() {
  return (
    <footer className="border-t border-border-soft px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-ink-secondary">
          <span className="google-dots" aria-hidden>
            <span />
            <span />
            <span />
            <span />
          </span>
          <span>
            © {new Date().getFullYear()} EverKrypton — crafted with Chrome
            energy
          </span>
        </div>
        <p className="text-xs text-ink-muted">
          Built with Next.js · MongoDB · Framer Motion
        </p>
      </div>
    </footer>
  );
}
