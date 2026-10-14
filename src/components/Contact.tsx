import Reveal from "./Reveal";
import { CONTACT } from "../data/projects";

export default function Contact() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <Reveal className="contact__card">
          <>
            <div className="contact__glow" aria-hidden="true" />
            <div className="google-dots" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <h2 id="contact-title">Let&apos;s build something great</h2>
            <p>
              Open to collaborations, product builds, and interesting problems. Fastest
              reply on Telegram — usually within a day.
            </p>
            <div className="contact__links">
              <a
                href={CONTACT.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="chrome-btn chrome-btn-primary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
                </svg>
                Telegram @ograinhard
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="chrome-btn chrome-btn-secondary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
                </svg>
                GitHub
              </a>
              <a
                href={CONTACT.itch}
                target="_blank"
                rel="noopener noreferrer"
                className="chrome-btn chrome-btn-ghost"
              >
                itch.io
              </a>
            </div>
          </>
        </Reveal>
      </div>
    </section>
  );
}
