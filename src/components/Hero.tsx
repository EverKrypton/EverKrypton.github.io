import Reveal from "./Reveal";

const FEATURES = [
  { t: "Speed", d: "Instant UI, zero friction", c: "var(--violet)" },
  { t: "Craft", d: "Details that feel premium", c: "var(--amber)" },
  { t: "Impact", d: "Products people love", c: "var(--emerald)" },
];

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div
        className="orb"
        style={{ width: 280, height: 280, background: "rgba(139,92,255,0.35)", top: -40, left: "8%" }}
      />
      <div
        className="orb"
        style={{ width: 220, height: 220, background: "rgba(46,230,166,0.22)", top: 80, right: "6%", animationDelay: "2s" }}
      />
      <div
        className="orb"
        style={{ width: 160, height: 160, background: "rgba(255,176,32,0.16)", bottom: 20, left: "40%", animationDelay: "4s" }}
      />

      <div className="wrap hero__inner">
        <Reveal>
          <span className="hero__badge">
            <span className="google-dots" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </span>
            Builder · Designer · Engineer
          </span>
        </Reveal>

        <Reveal as="h1" className="hero__title" delay={80}>
          <>
            The web, <span className="grad">faster</span>
            <br />
            and more beautiful
          </>
        </Reveal>

        <Reveal delay={160}>
          <p className="hero__lede">
            Hi, I&apos;m <strong>EverKrypton</strong> — I craft products that feel as
            polished as Chrome itself: clean, fast, and designed with care. Explore
            selected projects below.
          </p>
        </Reveal>

        <Reveal className="hero__actions" delay={220}>
          <>
            <a href="#work" className="chrome-btn chrome-btn-primary">
              Explore projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 5v14M5 12l7 7 7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#contact" className="chrome-btn chrome-btn-secondary">
              Get in touch
            </a>
          </>
        </Reveal>

        <Reveal className="browser" delay={280}>
          <div className="browser__frame">
            <div className="browser__bar">
              <div className="browser__lights" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="browser__url">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 2l2 4 4 .5-3 3 .8 4.5L12 12l-3.8 2 .8-4.5-3-3 4-.5L12 2z"
                    fill="currentColor"
                  />
                </svg>
                <span>everkrypton.github.io</span>
              </div>
            </div>
            <div className="browser__grid">
              {FEATURES.map((f) => (
                <div className="browser__cell" key={f.t}>
                  <i style={{ background: f.c }} />
                  <b>{f.t}</b>
                  <small>{f.d}</small>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
