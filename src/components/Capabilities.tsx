import type { ComponentType } from "react";
import Reveal from "./Reveal";
import { CAPABILITIES } from "../data/site";
import {
  IconEngine,
  IconPayments,
  IconProduct,
  IconAuth,
  IconRealtime,
  IconDelivery,
} from "./Icons";

const ICONS: Record<string, ComponentType<{ size?: number }>> = {
  engine: IconEngine,
  payments: IconPayments,
  product: IconProduct,
  auth: IconAuth,
  realtime: IconRealtime,
  delivery: IconDelivery,
};

export default function Capabilities() {
  return (
    <section className="section" id="capabilities" aria-labelledby="cap-title">
      <div className="container">
        <Reveal>
          <>
            <h2 id="cap-title" style={{ fontSize: "clamp(30px, 4.6vw, 52px)", maxWidth: "20ch" }}>
              What I bring to a build.
            </h2>
            <p className="lede" style={{ marginTop: 18, maxWidth: "56ch" }}>
              The work spans the whole stack — but it starts where mistakes are
              expensive.
            </p>
          </>
        </Reveal>

        <Reveal delay={80}>
          <div className="caps" style={{ marginTop: "clamp(40px, 5vw, 60px)" }}>
            {CAPABILITIES.map((c) => {
              const Icon = ICONS[c.icon];
              return (
                <div className="cap" key={c.label}>
                  <div className="cap__icon">
                    <Icon size={20} />
                  </div>
                  <span className="cap__label">{c.label}</span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
