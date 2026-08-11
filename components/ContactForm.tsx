"use client";

import { useState } from "react";
import { SERVICES, SITE } from "@/lib/nav-data";

function ArrowRightIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = `Phone: ${phone}%0AService: ${service}%0A%0A${message}`;
    window.location.href = `mailto:${SITE.email}?subject=Website Inquiry from ${encodeURIComponent(
      `${firstName} ${lastName}`,
    )}&body=${body}`;
  }

  const inputClass =
    "w-full bg-white border border-outline/40 focus:border-navy focus:ring-1 focus:ring-navy text-sm text-navy p-3 rounded outline-none transition-colors";
  const labelClass =
    "text-xs tracking-[0.08em] uppercase font-semibold text-slate block mb-2";

  return (
    <div className="bg-white border border-outline/40 rounded-lg p-8 shadow-sm">
      <h2 className="font-display text-2xl text-navy mb-8 border-b border-outline/30 pb-4">
        Direct Inquiry
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass} htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter first name"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter last name"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@company.com"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="phone">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 00000 00000"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor="service">
            Primary Service Interest
          </label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={inputClass}
          >
            <option value="">Select an area of expertise</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Other Inquiries</option>
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Provide details regarding your inquiry..."
            className={`${inputClass} resize-none`}
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="bg-navy text-paper text-xs tracking-[0.08em] uppercase font-semibold py-4 px-8 rounded hover:bg-olive transition-colors flex items-center justify-center gap-2 w-full md:w-auto"
          >
            Submit Inquiry <ArrowRightIcon size={16} />
          </button>
        </div>
      </form>
      <p className="text-xs text-slate mt-4">
        This opens your email app with the details pre-filled.
      </p>
    </div>
  );
}
