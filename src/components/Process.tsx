import Reveal from "./Reveal";
import { PROCESS } from "../data/site";

export default function Process() {
  return (
    <section className="section--tight" aria-labelledby="process-title">
      <div className="container">
        <Reveal>
          <>
            <h2 id="process-title" style={{ fontSize: "clamp(28px, 4vw, 44px)", maxWidth: "20ch" }}>
              How we'd work together.
            </h2>
          </>
        </Reveal>

        <div className="process" style={{ marginTop: "clamp(40px, 5vw, 60px)" }}>
          {PROCESS.map((s, i) => (
            <Reveal className="step" delay={i * 90} key={s.n}>
              <>
                <span className="step__n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="step__line" />
              </>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
