import { BRAND } from "../data/site";
import { Glyph } from "./Icons";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="container foot__row">
        <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
          <Glyph size={22} />
          © {new Date().getFullYear()} {BRAND.name}
        </span>
        <span>Built with React, TypeScript, and Vite.</span>
      </div>
    </footer>
  );
}
