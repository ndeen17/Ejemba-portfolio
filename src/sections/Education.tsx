import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="container-x mt-20 sm:mt-24">
      <div className="mb-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Education</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Educational background.
        </h2>
      </div>

      <ul className="divide-y divide-hairline border-y border-hairline">
        {education.map((item, i) => (
          <motion.li
            key={item.degree}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 py-6"
          >
            <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-accent/15 text-accent">
              <GraduationCap size={16} />
            </span>
            <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <div>
                <p className="font-medium text-ink">{item.degree}</p>
                <p className="text-sm text-muted">{item.institution}</p>
              </div>
              {item.status && (
                <span className="chip font-mono text-xs text-muted">{item.status}</span>
              )}
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
