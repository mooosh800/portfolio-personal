import { siteConfig } from '../config/site';
import { Reveal } from '../components/Reveal';

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="page-shell border-t border-white/10 py-28 sm:py-36"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-20">
        <Reveal>
          <p className="section-label">
            <span className="section-rule" aria-hidden="true" />
            02 — About
          </p>
          <h2
            id="about-title"
            className="mt-6 text-3xl font-medium tracking-tight text-paper sm:text-4xl"
          >
            {siteConfig.about.heading}
          </h2>
        </Reveal>

        <div className="space-y-7 text-lg leading-relaxed text-paper/90 sm:text-xl">
          {siteConfig.about.lines.map((line, index) => (
            <Reveal key={line} delay={index * 0.08}>
              <p>{line}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
