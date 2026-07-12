import { Linkedin, Mail, Phone } from 'lucide-react';
import { EMAIL, PHONE_HREF } from '../lib/contact';

export default function Footer() {
  return (
    <footer className="container-x mt-24 pb-10 pt-12">
      <div className="hairline pt-8" />
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium text-ink">Lawretta Ejemba</p>
          <p className="text-sm text-muted">Customer Support &amp; Administrative Support Specialist · Remote</p>
        </div>
        <div className="flex items-center gap-3 text-muted">
          <a href={`mailto:${EMAIL}`} aria-label="Email" className="rounded-full border border-hairline bg-white p-2 transition hover:text-ink">
            <Mail size={16} />
          </a>
          <a href={`tel:${PHONE_HREF}`} aria-label="Phone" className="rounded-full border border-hairline bg-white p-2 transition hover:text-ink">
            <Phone size={16} />
          </a>
          <a href="https://linkedin.com/" aria-label="LinkedIn" className="rounded-full border border-hairline bg-white p-2 transition hover:text-ink">
            <Linkedin size={16} />
          </a>
        </div>
      </div>
      <p className="mt-6 text-xs text-muted">© {new Date().getFullYear()} Lawretta Ejemba. All rights reserved.</p>
    </footer>
  );
}
