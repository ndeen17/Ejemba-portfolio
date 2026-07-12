import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const links = [
  { to: '#expertise', label: 'What I Do' },
  { to: '#why-remote', label: 'Why Remote' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-3 z-50 px-4">
      <nav
        className={cn(
          'mx-auto flex w-full max-w-container items-center justify-between gap-3 rounded-pill border border-hairline bg-white/85 px-2 py-2 backdrop-blur transition-shadow',
          scrolled && 'shadow-[0_8px_24px_-12px_rgba(0,0,0,0.12)]'
        )}
      >
        <a href="#top" className="flex items-center gap-2 rounded-pill px-1 py-0.5 transition hover:bg-chip" aria-label="Home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-xs font-semibold text-accent">
            LE
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-ink">Lawretta E.</span>
            <span className="hidden text-xs text-muted sm:block">Support Specialist</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <a
              key={l.to}
              href={l.to}
              className="rounded-pill px-3 py-1.5 text-sm font-medium text-muted transition hover:bg-chip hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-dark hidden sm:inline-flex">
            Get in touch
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="btn-ghost h-10 w-10 p-0 sm:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 w-full max-w-container rounded-2xl border border-hairline bg-white/95 p-3 backdrop-blur sm:hidden">
          <div className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition hover:bg-chip hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-dark mt-2 justify-center"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
