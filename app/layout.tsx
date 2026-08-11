import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/nav-data";

export const metadata: Metadata = {
  title: `${SITE.name} | ${SITE.tagline}`,
  description:
    "Giniyani & Associates — Chartered Accountant firm in Jogeshwari, Mumbai. Concurrent Audits, GST, Taxation, Statutory & Stock Audits for 50+ clients across India.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
