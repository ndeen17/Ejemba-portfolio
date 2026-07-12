import { motion } from 'framer-motion';

export default function WhyRemote() {
  return (
    <section id="why-remote" className="container-x mt-20 sm:mt-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl border border-hairline bg-white p-6 sm:p-12"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Why remote</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Why I switched to a home-based job
        </h2>
        <div className="mt-5 max-w-[600px] space-y-4 text-[15px] leading-relaxed text-muted sm:text-lg">
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
      </motion.div>
    </section>
  );
}
