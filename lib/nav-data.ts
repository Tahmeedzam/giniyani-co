export type ServiceLink = {
  slug: string;
  title: string;
  short: string;
  icon: string;
};

export const SERVICES: ServiceLink[] = [
  {
    slug: "internal-audits",
    title: "Internal Audits",
    short:
      "Process and control checks that catch gaps before they become losses.",
    icon: "ClipboardCheck",
  },
  {
    slug: "concurrent-audits",
    title: "Concurrent Audits",
    short:
      "Real-time transaction review for banks and NBFCs, empanelled with ICICI, IndusInd & RBL.",
    icon: "RefreshCw",
  },
  {
    slug: "stock-audits",
    title: "Stock Audits",
    short:
      "Physical verification and valuation of inventory pledged against working capital limits.",
    icon: "Package",
  },
  {
    slug: "gst-audits",
    title: "GST Audits",
    short:
      "Reconciliation and compliance review under Goods & Services Tax law.",
    icon: "Receipt",
  },
  {
    slug: "taxation",
    title: "Taxation",
    short: "Direct and indirect tax planning, filing and representation.",
    icon: "Landmark",
  },
  {
    slug: "statutory-audits",
    title: "Statutory Audits",
    short:
      "Independent audit of financial statements as mandated under the Companies Act.",
    icon: "Gavel",
  },
  {
    slug: "income-tax",
    title: "Income Tax",
    short:
      "Return filing, planning and assessment representation for individuals and businesses.",
    icon: "FileText",
  },
  {
    slug: "certification-attestation",
    title: "Certification & Attestation",
    short:
      "Net worth, turnover and other certificates required for banks, tenders and regulators.",
    icon: "Stamp",
  },
  {
    slug: "goods-service-tax-audit",
    title: "Goods and Service Tax Audit",
    short:
      "Detailed GSTR reconciliation and annual return audit for GST-registered entities.",
    icon: "FileSearch",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

export const SITE = {
  name: "Giniyani & Associates",
  short: "G&A",
  tagline: "Chartered Accountants, Mumbai",
  phone: "+91 98798 82346",
  phone2: "+91 99132 29252",
  email: "ca.sohebginiyani@gmail.com",
  email2: "giniyaniandassociates@gmail.com",
  headOffice:
    "A/403, Jaiswal Heights, Near McDonald's, S V Road, Jogeshwari (West), Mumbai, Maharashtra – 400102",
  branchOffice:
    "11/965, Sharifa Manzil, Near Jumma Masjid, Chowk Bazar Main Road, Surat, Gujarat – 395003",
};

export const STATS = [
  { value: "50+", label: "Satisfied clients served" },
  { value: "17", label: "Team members across roles" },
  { value: "3", label: "Banks empanelled with" },
];

export const TEAM = [
  {
    name: "CA. Mohmad Soheb Giniyani",
    cred: "ICAI Membership No. 134952 · FCA",
    points: [
      "B. Com · LLB · ACMA",
      "Certified Concurrent Auditor of Banks",
      "DISA Qualified",
    ],
  },
  {
    name: "CA. Anju Sharda",
    cred: "ICAI Membership No. 100366 · FCA",
    points: ["B. Com"],
  },
];

export const BANKS = [
  { name: "ICICI Bank", desc: "Concurrent & Co-sourcing" },
  { name: "IndusInd Bank", desc: "Concurrent & Co-sourcing" },
  { name: "RBL Bank", desc: "Concurrent Audits" },
];

export const WHY_US = [
  {
    title: "Dedicated engagement teams",
    body: "Every assignment is led by a Partner and staffed by a team suited to your specific industry and scale.",
  },
  {
    title: "Current on regulation",
    body: "Frequent internal reviews and group discussions keep the firm ahead of legislative change, not reacting to it.",
  },
  {
    title: "Bank-empanelled expertise",
    body: "Direct empanelment with ICICI, IndusInd and RBL means our audit standards are already tested against institutional benchmarks.",
  },
  {
    title: "Client retention that speaks for itself",
    body: "The majority of our original clients are still with us today — the clearest evidence of the relationship we build.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Their concurrent audit team catches issues in our branch transactions well before quarter-end review — it changes how we prepare.",
    name: "Operations Head",
    org: "Private Bank Branch, Mumbai",
  },
  {
    quote:
      "Straightforward, on time, and they explain the numbers instead of just handing over a report.",
    name: "Finance Director",
    org: "Manufacturing Concern, Surat",
  },
  {
    quote:
      "We've stayed with Giniyani & Associates through two rounds of expansion. That continuity matters more than people realise.",
    name: "Proprietor",
    org: "Trading Firm, Jogeshwari",
  },
];

export const PROCESS = [
  {
    step: "Initial review",
    body: "We understand your business, existing records, and compliance exposure.",
  },
  {
    step: "Scoping & proposal",
    body: "A clear engagement plan — scope, timeline, and fees, with no surprises later.",
  },
  {
    step: "Fieldwork",
    body: "A dedicated team executes the audit or filing, led by a Partner throughout.",
  },
  {
    step: "Reporting & follow-up",
    body: "Findings explained in plain terms, with support through implementation.",
  },
];
