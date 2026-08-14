import Link from "next/link";
import {
  SERVICES,
  BANKS,
  WHY_US,
  TESTIMONIALS,
  PROCESS,
  SITE,
} from "@/lib/nav-data";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[640px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/95 to-paper/50 z-10" />
          <img
            src="https://images.unsplash.com/photo-1560264280-88b68371db39?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
          <Reveal className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-paper-high text-navy text-xs tracking-[0.1em] uppercase font-semibold rounded-full mb-6 border border-outline/40">
              Est. Practice · Mumbai
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[1.1] text-navy mb-6">
              Quality service, built on trust, integrity &amp; knowledge.
            </h1>
            <p className="text-lg text-slate mb-8 max-w-xl leading-relaxed">
              Led by CA. Mohmad Soheb Giniyani, our firm delivers meticulous
              audit, taxation and advisory work for 50+ clients across India —
              combining institutional rigour with the clarity of a firm that
              still picks up the phone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-navy text-paper px-8 py-4 rounded text-xs tracking-[0.1em] uppercase font-semibold hover:bg-olive transition-colors flex items-center justify-center gap-2"
              >
                Book a Consultation →
              </Link>
              <Link
                href="/services"
                className="bg-transparent border border-navy text-navy px-8 py-4 rounded text-xs tracking-[0.1em] uppercase font-semibold hover:bg-paper-dim transition-colors text-center"
              >
                Explore Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="py-6 sm:py-8 bg-paper-dim border-y border-outline/30">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-outline/40">
          <Reveal>
            <AnimatedCounter target={50} suffix="+" label="Corporate Clients" />
          </Reveal>
          <Reveal delay={100}>
            <AnimatedCounter target={17} label="Expert Team Members" />
          </Reveal>
          <Reveal delay={200}>
            <AnimatedCounter target={3} label="Banks Empanelled" />
          </Reveal>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-24 grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
        <Reveal>
          <p className="text-olive text-xs tracking-[0.2em] uppercase font-semibold mb-3">
            About the firm
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-navy mb-5 sm:mb-6">
            A practice built on values, not just billable hours
          </h2>
          <p className="text-slate leading-relaxed mb-4">
            GINIYANI &amp; ASSOCIATES is a multi-faceted Chartered Accountant
            firm providing services across Internal Audits, Concurrent Audits,
            Stock Audits, GST Audits, Taxation and Statutory Audits — for
            private limited companies, partnerships and sole proprietorships
            alike.
          </p>
          <p className="text-slate leading-relaxed mb-8">
            The clearest evidence of our reputation is simple: the majority of
            our original clients are still with us today.
          </p>
          <Link
            href="/about"
            className="text-olive text-sm font-semibold border-b border-olive pb-0.5"
          >
            Read our story →
          </Link>
        </Reveal>
        <Reveal delay={100}>
          <div className="glass-card rounded-xl p-6 sm:p-8 shadow-sm">
            <div className="space-y-6">
              {PROCESS.map((p, i) => (
                <div key={p.step} className="flex gap-4">
                  <span className="font-display text-2xl text-olive/60 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-semibold text-navy text-sm">{p.step}</p>
                    <p className="text-sm text-slate mt-1">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* SERVICES */}
      <section className="py-16 sm:py-24 bg-white border-y border-outline/30">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <Reveal className="mb-10 sm:mb-14 max-w-xl">
            <p className="text-olive text-[10px] sm:text-xs tracking-[0.18em] uppercase font-semibold">
              What we do
            </p>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold mt-2 sm:mt-3 text-navy">
              Services, in depth
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <Link
                  href={`/services/${s.slug}`}
                  className="border border-outline/40 rounded-lg p-4 sm:p-6 hover:border-olive hover:shadow-md transition-all block h-full bg-paper"
                >
                  <h3 className="font-display text-base sm:text-xl text-navy mb-2 leading-snug">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {s.short}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-24">
        <Reveal className="mb-14 max-w-xl">
          <p className="text-olive text-xs tracking-[0.2em] uppercase font-semibold">
            Why choose us
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold mt-2 sm:mt-3 text-navy">
            What working with us actually looks like
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {WHY_US.map((w, i) => (
            <Reveal
              key={w.title}
              delay={i * 80}
              className="border-l-2 border-olive pl-5"
            >
              <h3 className="font-semibold text-navy mb-2">{w.title}</h3>
              <p className="text-sm text-slate leading-relaxed">{w.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="py-16 sm:py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <Reveal>
            <p className="text-olive-pale text-xs tracking-[0.2em] uppercase font-semibold">
              Trusted by
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold mt-2 sm:mt-3 mb-8 sm:mb-12 text-paper">
              Banking partners &amp; long-standing clients
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {BANKS.map((b, i) => (
              <Reveal key={b.name} delay={i * 80}>
                <div className="bg-white/5 border border-white/10 rounded-lg p-5 sm:p-6 hover:bg-white/10 transition-colors">
                  <p className="font-display text-lg text-paper">{b.name}</p>
                  <p className="text-sm text-paper/60 mt-1">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 sm:py-24 bg-paper-dim">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <Reveal className="mb-14 max-w-xl">
            <p className="text-olive text-xs tracking-[0.2em] uppercase font-semibold">
              In their words
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold mt-2 sm:mt-3 text-navy">
              What clients say
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="bg-white rounded-lg p-5 sm:p-7 border border-outline/30 h-full flex flex-col">
                  <p className="text-slate text-sm leading-relaxed mb-6 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-navy text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-slate">{t.org}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 text-center bg-white">
        <Reveal>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-navy max-w-xl mx-auto">
            Let&apos;s talk about your audit &amp; compliance needs
          </h2>
          <p className="text-sm sm:text-base text-slate mt-4 max-w-md mx-auto">
            Reach out for a consultation — we&apos;ll walk through where your
            finances stand today and where they need to be.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-olive text-white px-6 sm:px-8 py-3.5 rounded text-[11px] sm:text-xs tracking-[0.08em] uppercase font-semibold hover:bg-navy transition-colors"
            >
              Get in Touch
            </Link>
            <a
              href={`tel:${SITE.phone.replace(/\\s/g, "")}`}
              className="w-full sm:w-auto border border-navy text-navy px-6 sm:px-8 py-3.5 rounded text-[11px] sm:text-xs tracking-[0.08em] uppercase font-semibold hover:bg-paper-dim transition-colors"
            >
              {SITE.phone}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
