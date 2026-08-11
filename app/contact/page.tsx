import type { Metadata } from "next";
import { SITE } from "@/lib/nav-data";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: `Contact Us | ${SITE.name}` };

function Building2Icon({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18" />
      <path d="M6 12h12" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
}

function MapPinIcon({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 21s-6-5.2-6-11a6 6 0 1 1 12 0c0 5.8-6 11-6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function PhoneIcon({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.6a2 2 0 0 1-.45 2.11L7.1 8.1a16 16 0 0 0 6 6l1.67-1.67a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.6.63A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MailIcon({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
      <path d="m22 7-10 7L2 7" />
    </svg>
  );
}

const OFFICES = [
  {
    title: "Mumbai Head Office",
    address: SITE.headOffice,
    phone: SITE.phone,
    email: SITE.email,
  },
  {
    title: "Surat Branch Office",
    address: SITE.branchOffice,
    phone: SITE.phone2,
    email: SITE.email2,
  },
];

export default function ContactPage() {
  return (
    <main className="pt-16 pb-24 max-w-6xl mx-auto px-6">
      <Reveal className="mb-16 pt-8">
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-navy mb-6">
          Contact Us
        </h1>
        <p className="text-lg text-slate max-w-3xl leading-relaxed">
          We are committed to providing meticulous fiscal transparency and
          strategic guidance. Reach out to our offices in Mumbai or Surat, or
          submit an inquiry below for specialised financial, auditing, and
          taxation services.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <Reveal className="lg:col-span-7">
          <ContactForm />
        </Reveal>

        <div className="lg:col-span-5 space-y-8">
          {OFFICES.map((o, i) => (
            <Reveal key={o.title} delay={i * 100}>
              <div className="bg-white border-t-2 border-t-olive border border-outline/40 rounded-lg p-6 shadow-sm">
                <h3 className="font-display text-xl text-navy mb-4 flex items-center gap-2">
                  <Building2Icon size={20} className="text-olive" />
                  {o.title}
                </h3>
                <div className="space-y-4 text-sm text-slate">
                  <div className="flex items-start gap-3">
                    <MapPinIcon
                      size={18}
                      className="text-slate/60 mt-0.5 shrink-0"
                    />
                    <p className="leading-relaxed">{o.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <PhoneIcon size={18} className="text-slate/60 shrink-0" />
                    <p>{o.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <MailIcon size={18} className="text-slate/60 shrink-0" />
                    <p>{o.email}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
