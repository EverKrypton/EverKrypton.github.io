import Reveal from "./Reveal";
import SitePreview from "./SitePreview";
import { PRODUCTS, type Product } from "../data/site";
import { IconCheck, IconArrowUpRight } from "./Icons";

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
            <a href={product.url} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              Open {product.name}
              <IconArrowUpRight size={17} />
            </a>
            <a href={product.repo} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
              GitHub
            </a>
          </div>
        </>
      </Reveal>

      <Reveal className="product__art" delay={90}>
        <SitePreview
          base={product.preview}
          domain={product.domain}
          alt={`${product.name} — ${product.kicker.toLowerCase()} live on ${product.domain}`}
          href={product.url}
        />
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
              Two live products.
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
