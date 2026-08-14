import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, SITE } from "@/lib/nav-data";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  return {
    title: service ? `${service.title} | ${SITE.name}` : SITE.name,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) notFound();

  const others = SERVICES.filter((s) => s.slug !== slug);

  return (
    <main>
      {/* HERO */}
      <section className="bg-navy py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <Link
            href="/services"
            className="text-olive-light text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.3em] uppercase mb-4 inline-block hover:text-paper transition-colors"
          >
            ← All Services
          </Link>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-paper max-w-2xl leading-tight">
            {service.title}
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-paper/75 max-w-xl leading-relaxed">
            {service.short}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-5 sm:px-6 py-12 sm:py-20">
        <p className="text-sm sm:text-base text-slate leading-relaxed">
          Our {service.title.toLowerCase()} engagements are handled by a
          dedicated team led by a Partner, kept current with the latest
          regulatory changes through regular internal review. Get in touch to
          discuss scope, timelines and fees suited to your business.
        </p>

        <Link
          href="/contact"
          className="inline-flex w-full sm:w-auto mt-8 bg-olive text-white px-6 py-3.5 rounded text-[11px] sm:text-sm tracking-[0.08em] uppercase font-semibold justify-center hover:bg-navy transition-colors"
        >
          Book a Consultation
        </Link>
      </section>

      {/* OTHER SERVICES */}
      <section className="bg-white border-t border-navy/10 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <p className="text-olive text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.3em] uppercase mb-6">
            Other Services
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="border border-outline/40 rounded-lg p-4 text-sm text-navy hover:border-olive hover:text-olive hover:bg-paper-dim transition-colors leading-snug"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
