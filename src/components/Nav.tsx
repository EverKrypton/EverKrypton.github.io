const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function ChromeLogo() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="20" stroke="var(--violet)" strokeWidth="4" />
      <circle cx="24" cy="24" r="8" fill="var(--violet)" />
      <path d="M24 4a20 20 0 0 1 17.32 10H24V4z" fill="var(--emerald)" />
      <path d="M41.32 14A20 20 0 0 1 34 38.66L24 24h17.32z" fill="var(--amber)" />
      <path d="M34 38.66A20 20 0 0 1 8.68 34L24 24l10 14.66z" fill="var(--violet-2)" />
      <path d="M8.68 34A20 20 0 0 1 24 4v20L8.68 34z" fill="var(--violet)" />
    </svg>
  );
}

export default function Nav() {
  return (
    <header className="nav nav-glass" id="top">
      <div className="wrap nav__inner">
        <a href="#top" className="brand" aria-label="EverKrypton, home">
          <span className="brand__logo">
            <ChromeLogo />
          </span>
          <span className="brand__name">
            Ever<b>Krypton</b>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#work" className="chrome-btn chrome-btn-primary nav__cta">
          View work
        </a>
      </div>
    </header>
  );
}
