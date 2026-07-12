import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { employment } from '../data/employment';

export default function EmploymentHistory() {
  return (
    <section id="experience" className="container-x mt-20 sm:mt-24">
      <div className="mb-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Experience</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Employment history.
        </h2>
      </div>

      <ul className="divide-y divide-hairline border-y border-hairline">
        {employment.map((item, i) => (
          <motion.li
            key={item.role}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-start gap-4 py-6"
          >
            <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-accent/15 text-accent">
              <Briefcase size={16} />
            </span>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <p className="font-medium text-ink">{item.role}</p>
                <span className="font-mono text-xs text-muted">· {item.company}</span>
              </div>
              <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{item.description}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
