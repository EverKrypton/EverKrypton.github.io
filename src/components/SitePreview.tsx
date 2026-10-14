import { IconArrowUpRight } from "./Icons";

type Props = {
  /** public asset base without extension, e.g. "/volt" -> /volt.webp + /volt.jpg */
  base: string;
  domain: string;
  alt: string;
  href: string;
  hero?: boolean;
};

export default function SitePreview({ base, domain, alt, href, hero }: Props) {
  return (
    <figure className={`preview ${hero ? "preview--hero" : ""}`}>
      <div className="preview__bar">
        <span className="preview__url">
          <i aria-hidden="true" />
          <span>{domain}</span>
        </span>
        <a className="preview__open" href={href} target="_blank" rel="noopener noreferrer">
          visit site
          <IconArrowUpRight size={13} />
        </a>
      </div>
      <div className="preview__media">
        <picture>
          <source srcSet={`${base}.webp`} type="image/webp" />
          <img
            className="preview__img"
            src={`${base}.jpg`}
            alt={alt}
            width={1200}
            height={750}
            loading={hero ? "eager" : "lazy"}
            decoding="async"
            {...(hero ? { fetchPriority: "high" as const } : {})}
          />
        </picture>
      </div>
      <span className="preview__glow" aria-hidden="true" />
    </figure>
  );
}
