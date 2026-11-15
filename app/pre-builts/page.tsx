import type { Metadata } from "next";
import { HelpCircle } from "lucide-react";
import { PREBUILD_FAQS } from "@/data/devrious";
import {
  buildPageMetadata,
  buildPreBuildsPageSchema,
  serializeJsonLd,
} from "@/data/seo";
import { PreBuildsMarketplace } from "@/components/PreBuildsMarketplace";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = buildPageMetadata({
  title: "Pre Builts — Ready-to-Deploy POS, ERP & Business Software Systems",
  description:
    "Deploy proven POS, ERP, Hotel, Fleet, Social Media, and FlexCore E-Commerce software systems in 1–4 weeks. Built by Devrious in Colombo, Sri Lanka with transparent LKR pricing.",
  path: "/pre-builts",
  image: "/images/banners/banner-prebuilds.jpg",
  imageAlt: "Ready-to-deploy POS, ERP, and business software systems by Devrious",
  keywords: [
    "POS system Sri Lanka",
    "Gym POS Sri Lanka",
    "Pharmacy POS Sri Lanka",
    "Supermarket POS Sri Lanka",
    "Grocery POS Sri Lanka",
    "Tuition institute management software Sri Lanka",
    "ERP system Sri Lanka",
    "Hotel management software Sri Lanka",
    "Fleet management software Sri Lanka",
    "E-commerce website template Sri Lanka",
  ],
});

export default function PreBuildsPage() {
  const preBuildsSchema = buildPreBuildsPageSchema();

  return (
    <main className="flex flex-col bg-[#f7f7f8] pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(preBuildsSchema) }}
      />
      <PageBanner
        image="/images/banners/banner-prebuilds.jpg"
        imageAlt="Ready-to-deploy POS and business software systems"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3.5 py-1 font-mono text-xs font-semibold text-[#99f3e4] backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00C9A7]" />
          10 Ready-to-Deploy Systems
        </span>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
          Powerful business systems. Ready when you are.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          Skip months of development. Deploy proven business management
          systems tailored to your workflow.
        </p>
      </PageBanner>

      <section className="mx-auto mt-10 w-full max-w-7xl px-6 lg:px-8">
        <PreBuildsMarketplace />
      </section>

      {/* Pre-Built FAQs */}
      <section className="mx-auto mt-14 w-full max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-black/8 bg-white p-6 shadow-sm sm:p-10">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-[#F92C53]" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#F92C53]">
              Pre-Built Systems FAQs
            </span>
          </div>
          <h2 className="mt-2 font-display text-2xl font-extrabold text-[#111827] sm:text-3xl">
            Common questions about deploying Pre-Builts
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {PREBUILD_FAQS.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-black/6 bg-[#f7f7f8] p-5"
              >
                <h3 className="font-display text-base font-bold text-[#111827] sm:text-lg">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#3A352D]/80">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
