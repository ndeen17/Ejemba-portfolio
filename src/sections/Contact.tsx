import { useState } from 'react';
import { Copy, Check, ArrowUpRight } from 'lucide-react';

const EMAIL = 'hello@lawrettaejemba.com';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  };

  return (
    <section id="contact" className="container-x mt-20 sm:mt-28">
      <div className="rounded-3xl border border-hairline bg-white p-6 sm:p-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Get in touch</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Let's take support off your plate.
        </h2>
        <p className="mt-3 max-w-[520px] text-muted">
          Need reliable virtual assistance, customer support, or day-to-day admin help? I'd love
          to hear about your business and how I can help it run more smoothly.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href={`mailto:${EMAIL}`} className="btn-dark">
            Email me
            <ArrowUpRight size={16} className="ml-1" />
          </a>
          <button type="button" onClick={copy} className="btn-ghost max-w-full break-all">
            {copied ? (
              <>
                <Check size={16} className="mr-1" /> Copied
              </>
            ) : (
              <>
                <Copy size={16} className="mr-1 flex-none" />
                <span className="truncate">{EMAIL}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
