import { siteConfig } from '../config/site';
import { Reveal } from '../components/Reveal';
import { EmailLink } from '../components/EmailLink';

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="page-shell border-t border-white/10 py-28 sm:py-36"
    >
      <Reveal>
        <p className="section-label">
          <span className="section-rule" aria-hidden="true" />
          04 — Contact
        </p>
        <h2
          id="contact-title"
          className="mt-6 text-4xl font-medium tracking-tight text-paper sm:text-6xl"
        >
          {siteConfig.contact.heading}
        </h2>

        <EmailLink />

        <p className="mt-16 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {siteConfig.contact.closing}
        </p>
      </Reveal>
    </section>
  );
}
