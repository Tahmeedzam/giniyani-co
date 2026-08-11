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
  return { title: service ? `${service.title} | ${SITE.name}` : SITE.name };
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
    <>
      <section className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/services" className="text-olive-light text-xs tracking-[0.3em] uppercase mb-4 inline-block">
            ← All Services
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-light text-paper max-w-2xl">
            {service.title}
          </h1>
          <p className="mt-6 text-paper/70 max-w-xl leading-relaxed">{service.short}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-slate leading-relaxed">
          Our {service.title.toLowerCase()} engagements are handled by a dedicated
          team led by a Partner, kept current with the latest regulatory changes
          through regular internal review. Get in touch to discuss scope, timelines
          and fees suited to your business.
        </p>
        <Link href="/contact" className="inline-block mt-8 bg-olive text-white px-6 py-3 text-sm tracking-wide">
          Book a Consultation
        </Link>
      </section>

      <section className="bg-white border-t border-navy/10 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-olive text-xs tracking-[0.3em] uppercase mb-6">Other services</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {others.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="text-sm text-navy border-b border-navy/10 pb-2">
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
