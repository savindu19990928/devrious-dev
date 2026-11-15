import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bug, FileSearch, ShieldCheck } from "lucide-react";
import { CYBERSECURITY_STEPS, CYBERSECURITY_TESTS } from "@/data/devrious";
import {
  buildCybersecurityPageSchema,
  buildPageMetadata,
  serializeJsonLd,
} from "@/data/seo";
import { CybersecurityPackages } from "@/components/CybersecurityPackages";
import { Reveal } from "@/components/Reveal";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = buildPageMetadata({
  title: "Cybersecurity, Penetration Testing & Secure Code Review in Sri Lanka",
  description:
    "OWASP-aligned web application penetration testing, REST API security assessments, secure code reviews, and cloud/WAF security audits by Devrious in Colombo, Sri Lanka. Packages from LKR 45,000.",
  path: "/cybersecurity-services",
  image: "/images/banners/cybersecurity-banner.jpg",
  imageAlt: "Devrious cybersecurity and penetration testing services in Sri Lanka",
  keywords: [
    "penetration testing Sri Lanka",
    "cybersecurity company Sri Lanka",
    "web application penetration testing Colombo",
    "API security testing Sri Lanka",
    "secure code review Sri Lanka",
    "OWASP security audit Sri Lanka",
  ],
});

const HIGHLIGHTS = [
  { icon: Bug, text: "Penetration testing for web apps and APIs" },
  { icon: FileSearch, text: "Manual and automated secure code review" },
  { icon: ShieldCheck, text: "Clear reports, remediation help and retesting" },
];

export default function CybersecurityServicesPage() {
  const cyberSchema = buildCybersecurityPageSchema();

  return (
    <main className="flex flex-col bg-[#f7f7f8] pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(cyberSchema) }}
      />
      {/* Hero Banner with Mobile/Tablet/Desktop Responsive Framing */}
      <PageBanner
        image="/images/banners/cybersecurity-banner.jpg"
        imageAlt="Devrious cybersecurity shield editorial visual"
      >
        <div className="max-w-2xl lg:max-w-[54%]">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-3.5 py-1 font-mono text-xs font-semibold text-[#99f3e4] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00C9A7]" />
            Cybersecurity services
          </span>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            Find the weaknesses before attackers do
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Penetration testing and secure code review for websites, APIs and
            business systems — delivered by engineers who build production
            software every day.
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-3">
            {HIGHLIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.text}
                  className="flex items-start gap-2.5 rounded-2xl border border-white/15 bg-black/50 p-3.5 text-xs leading-snug text-white/90 backdrop-blur-md"
                >
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#00C9A7]" />
                  <span>{item.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </PageBanner>

      {/* Packages */}
      <section className="mx-auto mt-14 w-full max-w-7xl px-6 lg:px-8">
        <CybersecurityPackages />
      </section>

      {/* What We Test For */}
      <section className="mt-20 border-y border-black/8 bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <Reveal>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#F92C53]">
              OWASP Coverage
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#111827]">
              What we test for
            </h2>
            <p className="mt-3 text-base text-[#3A352D]/75 sm:text-lg">
              Testing is aligned with OWASP guidance and focused on the risks
              that matter to your business.
            </p>
          </Reveal>

          <ul className="grid gap-x-8 sm:grid-cols-2">
            {CYBERSECURITY_TESTS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border-b border-black/8 py-4 text-sm font-medium text-[#111827]"
              >
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#00C9A7]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <Reveal>
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#00C9A7]">
            Methodology
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#111827]">
            How an engagement works
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-8 md:grid-cols-5">
          {CYBERSECURITY_STEPS.map((step, idx) => (
            <Reveal key={step.title} delay={idx * 0.05}>
              <li className="h-full border-t-2 border-[#111827] pt-5">
                <span className="font-mono text-xs font-bold text-[#F92C53]">
                  Step {idx + 1}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-[#111827]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#3A352D]/75">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Bottom CTA */}
      <section className="px-3 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-3xl bg-[#030303] p-8 text-white sm:flex-row sm:items-center sm:p-12">
          <div>
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
              Get a custom security quote
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              Share what you’d like tested. We’ll schedule a short scoping call
              and send a fixed quote.
            </p>
          </div>
          <Link
            href="/contact?service=Cyber%20Security%20Services"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#F92C53] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#D91C40]"
          >
            <span>Request Security Scoping</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

