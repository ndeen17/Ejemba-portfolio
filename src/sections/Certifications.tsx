import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { certifications } from '../data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="container-x mt-20 sm:mt-24">
      <div className="mb-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Certifications</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Certifications & training.
        </h2>
      </div>

      <ul className="divide-y divide-hairline border-y border-hairline">
        {certifications.map((cert, i) => (
          <motion.li
            key={cert.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-start gap-4 py-6"
          >
            <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-accent/15 text-accent">
              <Award size={16} />
            </span>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <p className="font-medium text-ink">{cert.title}</p>
                <span className="font-mono text-xs text-muted">· {cert.issuer}</span>
              </div>
              <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{cert.description}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
