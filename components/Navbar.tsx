"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/nav-data";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-outline/30 shadow-[0_4px_20px_rgba(24,42,85,0.06)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="w-8 h-8 flex items-center justify-center bg-navy text-paper text-sm font-semibold font-display">
            {SITE.short}
          </span>
          <span className="text-navy font-display text-lg font-semibold tracking-wide hidden sm:inline">
            {SITE.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return link.label === "Services" ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`text-xs tracking-[0.08em] uppercase font-semibold pb-1 border-b-2 flex items-center gap-1 transition-colors ${
                    active
                      ? "text-navy border-olive"
                      : "text-slate border-transparent hover:text-navy"
                  }`}
                >
                  {link.label}
                  <span className="text-[10px]">▾</span>
                </Link>
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72">
                    <div className="bg-white border border-outline/40 shadow-xl p-2 rounded-lg">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="block px-4 py-3 hover:bg-paper-dim transition-colors rounded"
                        >
                          <p className="text-sm font-medium text-navy">
                            {s.title}
                          </p>
                          <p className="text-xs text-slate mt-0.5">{s.short}</p>
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        className="block px-4 py-3 text-sm text-olive font-medium border-t border-outline/30"
                      >
                        View all services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs tracking-[0.08em] uppercase font-semibold pb-1 border-b-2 transition-colors ${
                  active
                    ? "text-navy border-olive"
                    : "text-slate border-transparent hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="bg-olive text-white px-6 py-2.5 rounded text-xs tracking-[0.08em] uppercase font-semibold hover:bg-navy transition-colors"
          >
            Book Consultation
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-navy text-2xl leading-none"
          aria-label="Toggle menu"
        >
          {mobileOpen ? "×" : "≡"}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-paper border-t border-outline/30 px-6 pb-6 flex flex-col gap-1">
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return link.label === "Services" ? (
              <div key={link.href}>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`w-full text-left py-3 text-sm flex items-center justify-between ${
                    active ? "text-navy font-semibold" : "text-navy"
                  }`}
                >
                  Services <span>{mobileServicesOpen ? "−" : "+"}</span>
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 pb-2 flex flex-col gap-1">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="py-2 text-sm text-slate"
                        onClick={() => setMobileOpen(false)}
                      >
                        {s.title}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="py-2 text-sm text-olive"
                      onClick={() => setMobileOpen(false)}
                    >
                      View all services →
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 text-sm ${active ? "text-navy font-semibold" : "text-navy"}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
