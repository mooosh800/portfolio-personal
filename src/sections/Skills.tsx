import { motion, useReducedMotion } from 'motion/react';
import { siteConfig } from '../config/site';
import { Reveal } from '../components/Reveal';

export function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="page-shell border-t border-white/10 py-28 sm:py-36"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-20">
        <Reveal>
          <p className="section-label">
            <span className="section-rule" aria-hidden="true" />
            03 — Skills
          </p>
          <h2
            id="skills-title"
            className="mt-6 text-3xl font-medium tracking-tight text-paper sm:text-4xl"
          >
            {siteConfig.skills.heading}
          </h2>
        </Reveal>

        <ol className="border-y border-white/10">
          {siteConfig.skills.items.map((skill, index) => (
            <motion.li
              key={skill}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: 'easeOut' }}
              className="group flex items-baseline gap-5 border-b border-white/10 py-6 last:border-b-0 sm:gap-8 sm:py-8"
            >
              <span className="w-7 shrink-0 text-[11px] tracking-editorial text-muted">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-2xl font-medium tracking-tight text-paper transition-colors duration-300 group-hover:text-accent sm:text-4xl">
                {skill}
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
