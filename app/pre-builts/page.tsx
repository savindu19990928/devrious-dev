import type { Metadata } from "next";
import { PreBuildsMarketplace } from "@/components/PreBuildsMarketplace";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Pre Builts",
  description:
    "Ready-to-deploy POS, ERP, Hotel, Fleet, Social Media, and FlexCore E-Commerce systems built by Devrious in Sri Lanka.",
};

export default function PreBuildsPage() {
  return (
    <main className="flex flex-col bg-[#f7f7f8] pb-24">
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
    </main>
  );
}
