import { siteConfig } from '../config/site';
import { Reveal } from '../components/Reveal';

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-labelledby="introduction-title"
      className="page-shell flex min-h-[100svh] items-center pb-20 pt-28"
    >
      <Reveal className="w-full" y={32}>
        <p className="section-label">
          <span className="section-rule" aria-hidden="true" />
          01 — Introduction
        </p>

        <h1
          id="introduction-title"
          className="mt-10 text-[clamp(3.75rem,15vw,13rem)] font-semibold uppercase leading-[0.82] tracking-[-0.06em] text-paper"
        >
          <span className="block">LAMA</span>
          <span className="block">ALHBABY</span>
        </h1>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-xs font-medium uppercase tracking-editorial text-paper sm:text-sm">
            {siteConfig.role}
          </p>
          <p className="text-base text-muted sm:text-lg">{siteConfig.tagline}</p>
        </div>
      </Reveal>
    </section>
  );
}
