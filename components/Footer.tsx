import Link from "next/link";
import { SERVICES, SITE } from "@/lib/nav-data";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-paper-high border-t border-outline/30">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="col-span-1 md:col-span-2">
          <p className="font-display text-xl font-bold text-navy mb-4">{SITE.name}</p>
          <p className="text-sm text-slate max-w-sm mb-6 leading-relaxed">
            Delivering precision, transparency, and strategic financial foresight for
            institutional and corporate clients across audit, tax, and advisory.
          </p>
          <p className="text-sm text-slate">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.1em] uppercase font-semibold text-navy mb-4">Services</h4>
          <ul className="space-y-3 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-slate hover:text-navy hover:underline decoration-olive underline-offset-4 transition-all"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.1em] uppercase font-semibold text-navy mb-4">Contact &amp; Legal</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/contact" className="text-slate hover:text-navy hover:underline decoration-olive underline-offset-4 transition-all">
                Mumbai Office
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-slate hover:text-navy hover:underline decoration-olive underline-offset-4 transition-all">
                Surat Office
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-slate hover:text-navy hover:underline decoration-olive underline-offset-4 transition-all">
                About the Firm
              </Link>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="text-slate hover:text-navy hover:underline decoration-olive underline-offset-4 transition-all">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
