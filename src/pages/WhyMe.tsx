import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { EMAIL } from '../lib/contact';

export default function WhyMe() {
  return (
    <section className="container-x pt-12 sm:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Why remote</p>
        <h1 className="mt-3 text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
          Why I switched to a home-based job.
        </h1>

        <div className="mt-8 max-w-[640px] space-y-5 text-lg leading-[1.6] text-muted">
          <p>
            I transitioned to a home-based career because I wanted the opportunity to support
            businesses from anywhere while maintaining the same high level of professionalism and
            service. Working remotely allows me to be more productive, organized, and focused,
            especially in customer support and administrative roles.
          </p>
          <p>
            I've found that remote work enables me to build strong relationships with clients,
            manage tasks efficiently, and contribute meaningfully to teams across different
            locations. It's a work environment where I can do my best work while continuing to
            grow professionally.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href={`mailto:${EMAIL}`} className="btn-dark">
            Email me <ArrowUpRight size={16} className="ml-1" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
