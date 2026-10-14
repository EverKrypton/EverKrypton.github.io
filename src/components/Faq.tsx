import Reveal from "./Reveal";
import { FAQ } from "../data/site";

export default function Faq() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <Reveal>
          <h2 id="faq-title" style={{ fontSize: "clamp(30px, 4.6vw, 52px)", maxWidth: "18ch" }}>
            Questions, answered.
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="faq" style={{ marginTop: "clamp(36px, 5vw, 56px)" }}>
            {FAQ.map((item) => (
              <details className="faq__item" key={item.q}>
                <summary>
                  {item.q}
                  <span className="mark" aria-hidden="true" />
                </summary>
                <div className="faq__body">{item.a}</div>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
