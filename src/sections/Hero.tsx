import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const EMAIL = 'hello@lawrettaejemba.com';

const stats = [
  { value: '3', label: 'Years', detail: 'Virtual assistance & task management' },
  { value: '2+', label: 'Years', detail: 'Customer support & service' },
  { value: '2', label: 'Years', detail: 'Customer-focused solutions' },
];

export default function Hero() {
  return (
    <section id="top" className="container-x pt-12 sm:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Customer Support / Administrative Support Specialist
        </p>
        <h1 className="mt-3 break-words text-[32px] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-[56px]">
          Hi there, I'm Lawretta!
        </h1>

        <p className="mt-6 max-w-[640px] text-lg leading-[1.55] text-muted sm:text-xl">
          I bring 3 years of hands-on experience providing reliable virtual assistance, supporting
          businesses through efficient task management and clear, professional customer
          communication.
        </p>
        <p className="mt-4 max-w-[640px] text-lg leading-[1.55] text-muted sm:text-xl">
          With over 2 years in customer support and service, I consistently provide timely,
          accurate, and customer-focused solutions that keep operations running smoothly.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={`mailto:${EMAIL}`} className="btn-dark">
            Get in touch
            <ArrowUpRight size={16} className="ml-1" />
          </a>
          <a href="#expertise" className="btn-ghost">
            What I do
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="mt-14 grid grid-cols-3 divide-x divide-hairline rounded-2xl border border-hairline bg-white sm:mt-16"
      >
        {stats.map((s) => (
          <div key={s.detail} className="px-3 py-5 text-center sm:px-6 sm:py-6">
            <p className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {s.value}
              <span className="ml-1 text-sm font-medium text-muted">{s.label}</span>
            </p>
            <p className="mt-1 text-xs leading-snug text-muted sm:text-sm">{s.detail}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
