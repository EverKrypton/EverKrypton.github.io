import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { CONTACT, PROJECTS } from "../data/projects";

export default function ProjectsGrid() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <Reveal className="section-head">
          <>
            <div className="google-dots" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <h2 id="work-title">Selected work</h2>
            <p>Live projects and experiments — each card pulls real detail from the product itself.</p>
          </>
        </Reveal>

        <div className="grid">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} className="grid__item" delay={i * 90}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p style={{ marginTop: 40, color: "var(--ink-secondary)" }}>
            More builds live on{" "}
            <a href={CONTACT.repos} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>{" "}
            and games on{" "}
            <a href={CONTACT.itch} target="_blank" rel="noopener noreferrer">
              itch.io
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
