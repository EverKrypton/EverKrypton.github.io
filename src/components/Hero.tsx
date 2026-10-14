import Reveal from "./Reveal";
import { HERO } from "../data/site";
import { useRotator } from "../hooks/useReveal";
import { IconArrowDown } from "./Icons";

export default function Hero() {
  const word = useRotator(HERO.rotate);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <Reveal as="h1" className="hero__title" delay={0}>
          <>
            I build crypto products that{" "}
            <span className="sr-only">{HERO.rotate.join(", ")}.</span>
            <span className="hero__rotator" aria-hidden="true">
              <span className="hero__word" key={word}>
                {word}
              </span>
            </span>
          </>
        </Reveal>

        <Reveal delay={90}>
          <p className="hero__lede lede">{HERO.lede}</p>
        </Reveal>

        <Reveal className="hero__actions" delay={150}>
          <>
            <a href={HERO.primaryCta.href} className="btn btn--primary">
              {HERO.primaryCta.label}
              <IconArrowDown size={16} />
            </a>
            <a href={HERO.secondaryCta.href} className="btn btn--secondary">
              {HERO.secondaryCta.label}
            </a>
          </>
        </Reveal>

        <Reveal className="hero__meta" delay={200}>
          <>
            {HERO.meta.map((m) => (
              <span key={m.label}>
                <i className={`i-${m.tone}`} />
                {m.label}
              </span>
            ))}
          </>
        </Reveal>
      </div>
    </section>
  );
}
