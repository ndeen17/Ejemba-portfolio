import { motion } from 'framer-motion';
import { tools } from '../data/tools';

export default function Tools() {
  return (
    <section id="tools" className="container-x mt-20 sm:mt-24">
      <div className="mb-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Productivity apps I'm proficient in</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          My tools for online success.
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-wrap gap-2.5"
      >
        {tools.map((tool) => (
          <span
            key={tool}
            className="rounded-pill border border-hairline bg-white px-4 py-2 text-sm font-medium text-ink"
          >
            {tool}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
