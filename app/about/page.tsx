import type { Metadata } from "next";
import { STATS, TEAM, SITE } from "@/lib/nav-data";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: `About Us | ${SITE.name}` };

export default function AboutPage() {
  return (
    <main className="pb-24">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <Reveal className="md:col-span-6 space-y-6">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-navy leading-tight">
              A Practice Built on Trust &amp; Precision
            </h1>
            <p className="text-lg text-slate leading-relaxed">
              Founded on the principles of integrity, knowledge and personalised
              service, Giniyani &amp; Associates has grown into a multi-faceted
              Chartered Accountancy practice serving corporates, partnerships
              and sole proprietorships across Mumbai and beyond.
            </p>
          </Reveal>
          <Reveal delay={100} className="md:col-span-6">
            <div className="aspect-[4/3] bg-paper-high border border-outline/40 overflow-hidden rounded-lg">
              <img
                className="w-full h-full object-cover"
                alt="Modern accounting firm office"
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-paper-dim border-y border-outline/30 py-16 mb-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <p className="font-display text-4xl text-navy">{s.value}</p>
              <p className="text-xs tracking-[0.1em] uppercase font-semibold text-olive mt-2">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-3xl mx-auto px-6 mb-24 space-y-5 text-slate leading-relaxed">
        <Reveal>
          <p>
            CA. Mohmad Soheb Giniyani is a believer in building businesses on
            strong values of trust, integrity, knowledge and personalised
            service — principles that have carried the firm from strength to
            strength. The clearest evidence of that reputation is simple: the
            majority of our original clients are still with us today.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <p>
            GINIYANI &amp; ASSOCIATES is a multi-faceted Chartered Accountant
            firm providing services across Internal Audits, Concurrent Audits,
            Stock Audits, Goods and Service Tax Audits, Taxation and Statutory
            Audits — for Private Limited Companies, Partnership Concerns and
            Sole Proprietorship Concerns alike.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <p>
            Quality Service is the backbone of a successful practice, and that
            motto is reflected at every level of the firm. Staff are kept
            constantly current with the latest legislative changes through
            frequent internal meetings and group discussions. Every assignment
            is handled by a dedicated team, led by a Partner with the expertise
            suited to that client&apos;s needs.
          </p>
        </Reveal>
      </section>

      {/* LEADERSHIP */}
      <section className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <h2 className="font-display text-3xl font-semibold text-navy">
            Leadership
          </h2>
          <div className="w-12 h-1 bg-olive mx-auto mt-4" />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TEAM.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="bg-white border border-outline/40 rounded-lg p-8 h-full hover:shadow-md transition-shadow">
                <h3 className="font-display text-xl text-navy mb-1">
                  {t.name}
                </h3>
                <p className="text-xs tracking-[0.1em] uppercase font-semibold text-olive mb-4">
                  {t.cred}
                </p>
                <ul className="space-y-1 border-l-2 border-outline/40 pl-4">
                  {t.points.map((p) => (
                    <li key={p} className="text-sm text-slate">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
