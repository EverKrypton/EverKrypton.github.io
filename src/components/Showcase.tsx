import Reveal from "./Reveal";
import BetSlip from "./BetSlip";
import { PRODUCTS, type Product } from "../data/site";
import { IconCheck, IconArrowUpRight } from "./Icons";

function ProductArt({ id }: { id: string }) {
  if (id === "oddsly") return <BetSlip />;
  return <TerminalArt />;
}

function TerminalArt() {
  return (
    <div className="art" role="img" aria-label="Preview of the VOLT order book and API access">
      <div className="mock__bar" style={{ border: "none", background: "transparent", padding: "0 0 16px" }}>
        <span className="mock__title">engine · order book</span>
        <span className="mock__pill">
          <i />
          matched
        </span>
      </div>
      <div style={{ display: "grid", gap: 8 }}>
        {[
          { side: "bid", p: "64,138.0", q: "0.940", d: 82 },
          { side: "ask", p: "64,149.2", q: "0.560", d: 52 },
          { side: "bid", p: "64,127.5", q: "1.560", d: 100 },
          { side: "ask", p: "64,160.7", q: "0.418", d: 40 },
        ].map((r) => (
          <div className={`book__row ${r.side}`} key={r.p + r.side}>
            <span className="fill" style={{ width: `${r.d}%` }} aria-hidden="true" />
            <span className="p">{r.p}</span>
            <span className="q">{r.q}</span>
          </div>
        ))}
      </div>
      <div className="slip__row" style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--line)" }}>
        <span>Maker / taker</span>
        <b>0.10% / 0.20%</b>
      </div>
      <div className="slip__row">
        <span>Settlement</span>
        <b>atomic</b>
      </div>
    </div>
  );
}

function ProductBlock({ product, index }: { product: Product; index: number }) {
  const flip = index % 2 === 1;
  return (
    <div className={`product product--${product.id} ${flip ? "product--flip" : ""}`}>
      <Reveal className="product__copy">
        <>
          <span className="product__kicker">
            <i />
            {product.kicker}
          </span>
          <h3 className="product__name">{product.name}</h3>
          <p className="product__desc">{product.desc}</p>
          <ul className="product__list">
            {product.points.map((pt) => (
              <li key={pt}>
                <IconCheck size={17} />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
          <div className="product__actions">
            {product.url ? (
              <a href={product.url} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                Open product
                <IconArrowUpRight size={17} />
              </a>
            ) : (
              <a href={product.repo} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                Read the source
                <IconArrowUpRight size={17} />
              </a>
            )}
            <a href={product.repo} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
              GitHub
            </a>
          </div>
          {!product.url && (
            <p style={{ marginTop: 14, fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-3)" }}>
              Public URL pending — source is live and public.
            </p>
          )}
        </>
      </Reveal>

      <Reveal className="product__art" delay={90}>
        <ProductArt id={product.id} />
      </Reveal>
    </div>
  );
}

export default function Showcase() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="container">
        <Reveal>
          <>
            <h2 id="work-title" style={{ fontSize: "clamp(30px, 4.6vw, 52px)", maxWidth: "18ch" }}>
              Two products, built from the database up.
            </h2>
            <p className="lede" style={{ marginTop: 18, maxWidth: "56ch" }}>
              Each one is self-hosted and carries its own engine, payment rails, and
              operator tooling. Here's what they actually do.
            </p>
          </>
        </Reveal>

        <div className="showcase" style={{ marginTop: "clamp(52px, 7vw, 84px)" }}>
          {PRODUCTS.map((p, i) => (
            <ProductBlock product={p} index={i} key={p.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
