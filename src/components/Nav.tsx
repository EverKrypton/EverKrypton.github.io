import { useEffect, useState } from "react";
import { BRAND } from "../data/site";
import { Glyph } from "./Icons";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`} id="top">
      <div className="container nav__row">
        <a href="#top" className="brand" aria-label={`${BRAND.name}, home`} onClick={() => setOpen(false)}>
          <span className="brand__glyph">
            <Glyph size={30} />
          </span>
          <span>
            Ever<b>Krypton</b>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" />
        </button>

        <a href="#contact" className="btn btn--primary btn--sm nav__cta">
          Start a project
        </a>
      </div>

      {open && (
        <div className="container">
          <nav className="nav__sheet" id="mobile-menu" aria-label="Mobile">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
