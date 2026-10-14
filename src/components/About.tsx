import Reveal from "./Reveal";

const SKILLS = [
  { name: "React / React Native", color: "var(--violet)" },
  { name: "Expo & Mobile", color: "var(--emerald)" },
  { name: "Next.js", color: "var(--amber)" },
  { name: "TypeScript", color: "var(--violet-2)" },
  { name: "Node & APIs", color: "var(--emerald)" },
  { name: "MongoDB", color: "var(--violet)" },
  { name: "UI / Motion", color: "var(--amber)" },
  { name: "Product craft", color: "var(--violet-2)" },
];

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="wrap about__grid">
        <Reveal className="about__col">
          <>
            <div className="google-dots" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <h2 id="about-title">
              Designed like Chrome.
              <br />
              Built for people.
            </h2>
            <p>
              I care about the last 10% — the motion, the spacing, the way a button feels
              when you press it. From mobile apps to full-stack web, I ship experiences
              that are fast, clear, and memorable.
            </p>
            <p>
              Currently building crypto tooling: a matching-engine exchange and a
              payments-backed sportsbook, plus polished product surfaces that feel native
              everywhere.
            </p>
          </>
        </Reveal>

        <Reveal className="chrome-card about__card" delay={120}>
          <>
            <h3>Stack &amp; strengths</h3>
            <div className="about__pills">
              {SKILLS.map((s) => (
                <span className="pill" key={s.name}>
                  <i style={{ background: s.color }} />
                  {s.name}
                </span>
              ))}
            </div>
          </>
        </Reveal>
      </div>
    </section>
  );
}
