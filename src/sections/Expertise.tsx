import { motion } from 'framer-motion';
import { expertiseCards } from '../data/expertise';

export default function Expertise() {
  return (
    <section id="expertise" className="container-x mt-20 sm:mt-24">
      <div className="mb-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">What I can do for you</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Support that keeps your business running smoothly.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {expertiseCards.map((card, i) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col rounded-2xl border border-hairline bg-white p-6"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
              <card.icon size={18} />
            </span>
            <h3 className="mt-4 text-lg font-medium leading-snug text-ink">{card.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{card.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
