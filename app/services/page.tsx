import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, SITE } from "@/lib/nav-data";
import Reveal from "@/components/Reveal";
import { JSX } from "react/jsx-runtime";

export const metadata: Metadata = { title: `Our Services | ${SITE.name}` };

type IconProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
};

type LucideIcon = (props: IconProps) => JSX.Element;

const BaseIcon = ({ size = 22, strokeWidth = 1.75, className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v4l2 2" />
  </svg>
);

const ClipboardCheck: LucideIcon = BaseIcon;

const RefreshCw: LucideIcon = ({
  size = 22,
  strokeWidth = 1.75,
  className,
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
  >
    <path d="M21 12a9 9 0 1 1-2.64-6.36" />
    <path d="M21 3v6h-6" />
  </svg>
);

const Package: LucideIcon = ({
  size = 22,
  strokeWidth = 1.75,
  className,
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
  >
    <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
    <path d="M12 3v18" />
    <path d="m4 7 8 4 8-4" />
  </svg>
);

const Receipt: LucideIcon = ({
  size = 22,
  strokeWidth = 1.75,
  className,
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
  >
    <path d="M5 2h14" />
    <path d="M5 6h14" />
    <path d="M5 10h14" />
    <path d="M5 14h8" />
    <path d="M5 18h4" />
  </svg>
);

const Landmark: LucideIcon = ({
  size = 22,
  strokeWidth = 1.75,
  className,
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
  >
    <path d="M3 21h18" />
    <path d="M6 21V7l6-4 6 4v14" />
    <path d="M9 21v-5h6v5" />
  </svg>
);

const Gavel: LucideIcon = ({
  size = 22,
  strokeWidth = 1.75,
  className,
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
  >
    <path d="m13 3 8 8" />
    <path d="m13 3-8 8" />
    <path d="m13 3 4 4" />
    <path d="m3 15 6 6" />
    <path d="M11 11 5 17" />
  </svg>
);

const FileText: LucideIcon = ({
  size = 22,
  strokeWidth = 1.75,
  className,
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
    <path d="M14 2v6h6" />
    <path d="M8 13h8" />
    <path d="M8 17h5" />
  </svg>
);

const Stamp: LucideIcon = ({
  size = 22,
  strokeWidth = 1.75,
  className,
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
  >
    <path d="M5 4h14" />
    <path d="M5 8h14" />
    <path d="M8 12h8" />
    <path d="M6 16h12" />
    <rect x="5" y="18" width="14" height="3" rx="1" />
  </svg>
);

const FileSearch: LucideIcon = ({
  size = 22,
  strokeWidth = 1.75,
  className,
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
    <path d="M14 2v6h6" />
    <path d="m15 13 2 2" />
    <circle cx="11" cy="15" r="3" />
  </svg>
);

const ArrowRight: LucideIcon = ({
  size = 14,
  strokeWidth = 1.75,
  className,
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const ICONS: Record<string, LucideIcon> = {
  ClipboardCheck,
  RefreshCw,
  Package,
  Receipt,
  Landmark,
  Gavel,
  FileText,
  Stamp,
  FileSearch,
};

export default function ServicesPage() {
  return (
    <main className="pb-16 sm:pb-24">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 pt-14 sm:pt-20 pb-10 sm:pb-12">
        <Reveal className="max-w-2xl">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6">
            Our Services
          </h1>
          <p className="text-base sm:text-lg text-slate leading-relaxed">
            Delivering comprehensive financial and auditing services with
            precision and heritage. We partner with you to ensure transparency,
            compliance, and strategic growth.
          </p>
        </Reveal>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];

            return (
              <Reveal key={s.slug} delay={i * 80}>
                <Link
                  href={`/services/${s.slug}`}
                  className="bg-white border border-outline/40 border-t-2 border-t-olive rounded-xl p-4 sm:p-8 hover:bg-paper-dim hover:border-olive transition-colors group block h-full"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-paper-high rounded flex items-center justify-center mb-3 sm:mb-6 text-navy">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>

                  <h3 className="font-display text-base sm:text-xl text-navy mb-2 sm:mb-3 group-hover:text-olive transition-colors leading-snug">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate leading-relaxed mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                    {s.short}
                  </p>

                  <span className="text-[10px] sm:text-xs tracking-[0.08em] uppercase font-semibold text-navy group-hover:text-olive flex items-center gap-2 transition-colors">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}
