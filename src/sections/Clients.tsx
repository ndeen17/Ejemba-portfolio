import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { clientTypes } from '../data/clients';

export default function Clients() {
  return (
    <section id="clients" className="container-x mt-20 sm:mt-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl border border-hairline bg-white p-6 sm:p-12"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Types of clients</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Who I work with.
        </h2>

        <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
          {clientTypes.map((client) => (
            <li key={client} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/15 text-accent">
                <Check size={12} />
              </span>
              <span className="text-[15px] leading-relaxed text-muted">{client}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
