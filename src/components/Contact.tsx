import Reveal from "./Reveal";
import { BRAND } from "../data/site";
import { IconGithub, IconTelegram, IconItch, IconArrowUpRight } from "./Icons";

export default function Contact() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <Reveal>
          <>
            <h2 className="contact__title" id="contact-title">
              Let's build something that holds.
            </h2>
            <p className="lede contact__lede">
              Tell me what you're building and where it's stuck. If it's a fit, we'll
              scope the first slice and start there.
            </p>
            <div className="contact__actions">
              <a href={BRAND.telegram} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                <IconTelegram size={18} />
                Message on Telegram
              </a>
              <a href={BRAND.github} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
                <IconGithub size={18} />
                GitHub
              </a>
            </div>
          </>
        </Reveal>

        <Reveal delay={100}>
          <div className="contact__card">
            <h3>Find me</h3>
            <div className="contact__links">
              <a href={BRAND.telegram} target="_blank" rel="noopener noreferrer">
                <IconTelegram size={20} className="ico" />
                <span className="lbl">Telegram</span>
                <span className="sub">{BRAND.telegramHandle}</span>
                <IconArrowUpRight size={18} className="arrow" />
              </a>
              <a href={BRAND.github} target="_blank" rel="noopener noreferrer">
                <IconGithub size={20} className="ico" />
                <span className="lbl">GitHub</span>
                <span className="sub">@EverKrypton</span>
                <IconArrowUpRight size={18} className="arrow" />
              </a>
              <a href={BRAND.itch} target="_blank" rel="noopener noreferrer">
                <IconItch size={20} className="ico" />
                <span className="lbl">itch.io</span>
                <span className="sub">games</span>
                <IconArrowUpRight size={18} className="arrow" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
