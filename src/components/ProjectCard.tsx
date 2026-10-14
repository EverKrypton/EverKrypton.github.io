import type { Project } from "../data/projects";

function sparkPath(seed: number, w: number, h: number) {
  let s = seed * 9301 + 49297;
  const rnd = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const n = 22;
  const pts: [number, number][] = [];
  let y = h * 0.6;
  for (let i = 0; i < n; i++) {
    y += (rnd() - 0.45) * (h * 0.16);
    y = Math.max(h * 0.12, Math.min(h * 0.92, y));
    pts.push([(i / (n - 1)) * w, y]);
  }
  const d = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ");
  return { d, area: `${d} L ${w} ${h} L 0 ${h} Z` };
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { d, area } = sparkPath(index + 7, 400, 90);
  const stroke = project.id === "oddsly" ? "var(--emerald)" : "var(--violet-2)";
  const gid = `g-${project.id}`;
  const hasUrl = Boolean(project.url);

  return (
    <article className={`chrome-card pcard pcard--${project.id}`}>
      <div className="pcard__media">
        <span className="pcard__monogram">{project.name[0]}</span>
        {project.featured && <span className="pcard__featured">Featured</span>}
        <svg className="pcard__chart" viewBox="0 0 400 90" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={stroke} stopOpacity="0.35" />
              <stop offset="100%" stopColor={stroke} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={area} fill={`url(#${gid})`} />
          <path d={d} fill="none" stroke={stroke} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      </div>

      <div className="pcard__body">
        <div className="pcard__site">
          <span className="dot" />
          {project.tag}
        </div>
        <h3 className="pcard__title">{project.name}</h3>
        <p className="pcard__desc">{project.desc}</p>

        <div className="pcard__tags">
          {project.chips.slice(0, 4).map((c) => (
            <span className="pcard__tag" key={c}>
              {c}
            </span>
          ))}
        </div>

        <div className="pcard__open">
          {hasUrl ? (
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              Open project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7 17L17 7M17 7H9M17 7v8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ) : (
            <span className="pcard__soon">Live soon</span>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "auto", color: "var(--ink-muted)" }}
            >
              Source ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
