import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Cloud,
  HelpCircle,
  Layers,
  PackageCheck,
} from "lucide-react";
import { PRE_BUILDS, PREBUILD_FAQS } from "@/data/devrious";
import {
  buildPageMetadata,
  buildPreBuildDetailSchema,
  LKR_PER_USD,
  serializeJsonLd,
} from "@/data/seo";
import { PageBanner } from "@/components/PageBanner";

export function generateStaticParams() {
  return PRE_BUILDS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRE_BUILDS.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };
  return buildPageMetadata({
    title: `${product.name} (${product.category} Software in Sri Lanka)`,
    description: `${product.tagline} ${product.summary} One-time setup & license LKR ${product.priceLkr.toLocaleString()} by Devrious in Sri Lanka.`,
    path: `/pre-builts/${product.slug}`,
    image: product.screenshot ?? product.bannerImage,
    imageAlt: `${product.name} — Ready-to-Deploy ${product.category} System`,
    keywords: [
      product.name,
      `${product.name} Sri Lanka`,
      `${product.category} software Sri Lanka`,
      ...product.idealFor,
    ],
  });
}

export default function PreBuildDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <main className="mx-auto max-w-7xl px-4 py-8 pb-24 sm:px-6">
          <div className="h-[420px] animate-pulse rounded-3xl bg-[#030303]" />
        </main>
      }
    >
      <PreBuildDetailContent params={params} />
    </Suspense>
  );
}

async function PreBuildDetailContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRE_BUILDS.find((p) => p.slug === slug);
  if (!product) notFound();

  const approxUsd = Math.round(product.priceLkr / LKR_PER_USD);
  const related = PRE_BUILDS.filter((p) => p.slug !== slug).slice(0, 3);
  const productSchema = buildPreBuildDetailSchema(product);

  return (
    <main className="flex flex-col bg-[#f7f7f8] pb-20 sm:pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(productSchema) }}
      />
      {/* Flagship Product Hero */}
      <PageBanner
        image={product.bannerImage}
        imageAlt={`${product.name} — ready-to-deploy software banner`}
        mobileFocus="object-center"
      >
        <div className="max-w-3xl lg:max-w-[58%]">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/pre-builts"
              className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-1.5 text-xs font-semibold text-white/85 backdrop-blur-md transition-colors hover:border-[#F92C53] hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>All 10 Pre-Builts</span>
            </Link>

            <span className="inline-flex items-center gap-2 rounded-full border border-[#00C9A7]/35 bg-[#00C9A7]/15 px-3.5 py-1 font-mono text-xs font-semibold text-[#99f3e4]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00C9A7]" />
              {product.category}
            </span>
          </div>

          <h1 className="mt-6 font-display text-3xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {product.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            {product.tagline}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}&intent=demo`}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#F92C53] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#F92C53]/30 transition-colors hover:bg-[#D91C40]"
            >
              <span>Request a Live Demo</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}&intent=quote`}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/25 bg-black/40 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <span>Get Deployment Quote</span>
            </Link>
            {product.liveUrl && (
              <a
                href={product.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-1.5 rounded-xl border border-[#00C9A7]/40 bg-[#00C9A7]/15 px-5 py-3.5 text-sm font-semibold text-[#99f3e4] backdrop-blur-md transition-colors hover:bg-[#00C9A7]/25"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* Pricing Bar kept inside left column so right visual subject stays 100% unobstructed */}
          <div className="mt-7 flex flex-col justify-between gap-4 rounded-2xl border border-white/15 bg-black/55 p-4 backdrop-blur-md sm:flex-row sm:items-center sm:p-5">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/60">
                One-Time License &amp; Setup
              </p>
              <p className="mt-1 font-display text-2xl font-extrabold text-white sm:text-3xl">
                LKR {product.priceLkr.toLocaleString()}
              </p>
              <p className="mt-0.5 font-mono text-xs text-[#99f3e4]">
                ≈ ${approxUsd.toLocaleString()} USD · Customisable to your workflow
              </p>
            </div>
            <div className="grid grid-cols-1 gap-2 border-t border-white/10 pt-3 min-[460px]:grid-cols-3 min-[460px]:gap-3 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
              {product.highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex items-center justify-between gap-2 min-[460px]:block"
                >
                  <p className="font-mono text-[10px] uppercase tracking-wider text-white/50">
                    {h.label}
                  </p>
                  <p className=" text-xs font-bold text-white min-[460px]:mt-0.5">
                    {h.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageBanner>

      {/* Screenshot Showcase (when available, e.g., FlexCore) */}
      {product.screenshot && (
        <section className="mx-auto mt-8 w-full max-w-7xl px-4 sm:mt-10 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-[#0d0e12] shadow-xl sm:rounded-3xl">
            <div className="flex items-center justify-between gap-2 border-b border-white/10 bg-[#14161c] px-4 py-3 sm:px-5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F92C53] sm:h-3 sm:w-3" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80 sm:h-3 sm:w-3" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#00C9A7] sm:h-3 sm:w-3" />
              </div>
              <span className="truncate font-mono text-[11px] text-white/55 sm:text-xs">
                {product.liveUrl ?? product.name}
              </span>
              <span className="hidden font-mono text-[11px] uppercase tracking-wider text-[#99f3e4] sm:inline">
                Storefront Preview
              </span>
            </div>
            <img
              src={product.screenshot}
              alt={`${product.name} screenshot`}
              className="block h-auto w-full object-contain"
            />
          </div>
        </section>
      )}

      {/* Overview & Ideal For */}
      <section className="mx-auto mt-8 w-full max-w-7xl px-4 sm:mt-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-3xl border border-black/8 bg-white p-6 shadow-sm sm:p-12 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-7">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#F92C53]">
              01 · System Overview
            </span>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">
              Built around how your business actually operates.
            </h2>
            {product.overview.map((p) => (
              <p
                key={p}
                className="text-base leading-relaxed text-[#3A352D]/85 sm:text-lg"
              >
                {p}
              </p>
            ))}
            {product.stack && (
              <div className="flex flex-wrap gap-2 pt-3">
                {product.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-black/10 bg-[#f7f7f8] px-3 py-1.5 font-mono text-xs font-semibold text-[#111827]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-black/8 bg-[#f7f7f8] p-6 sm:p-8 lg:col-span-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#079669]">
                Ideal For
              </span>
              <Building2 className="h-4 w-4 text-[#079669]" />
            </div>
            <h3 className="mt-2 font-display text-xl font-bold text-[#111827]">
              Who gets the most value
            </h3>
            <ul className="mt-5 space-y-3">
              {product.idealFor.map((target) => (
                <li
                  key={target}
                  className="flex items-center gap-3 rounded-xl border border-black/6 bg-white px-4 py-3 text-sm font-medium text-[#111827]"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#00C9A7]" />
                  <span>{target}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6-Card Detailed Modules Grid */}
      <section className="mx-auto mt-10 w-full max-w-7xl px-4 sm:mt-12 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#F92C53]">
              02 · Core Modules
            </span>
            <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">
              Everything included out of the box.
            </h2>
          </div>
          <Layers className="hidden h-6 w-6 text-[#3A352D]/35 sm:block" />
        </div>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {product.moduleDetails.map((mod, idx) => (
            <div
              key={mod.title}
              className="rounded-3xl border border-black/8 bg-white p-6 shadow-sm transition-all hover:border-[#F92C53]/35 hover:shadow-md sm:p-7"
            >
              <span className="font-mono text-xs font-bold text-[#F92C53]">
                MODULE 0{idx + 1}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-[#111827] sm:text-xl">
                {mod.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#3A352D]/80">
                {mod.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4-Step Operational Workflow */}
      <section className="mx-auto mt-10 w-full max-w-7xl px-4 sm:mt-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-[#030303] p-6 text-white sm:p-12 lg:p-14">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#00C9A7]">
            03 · Daily Workflow
          </span>
          <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight sm:text-4xl">
            How your team uses {product.name} every day
          </h2>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {product.workflow.map((step, idx) => (
              <div
                key={step.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6"
              >
                <span className="font-mono text-xs font-bold text-[#F92C53]">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included & Deployment Options */}
      <section className="mx-auto mt-10 w-full max-w-7xl px-4 sm:mt-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-black/8 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#F92C53]">
                Package Scope
              </span>
              <PackageCheck className="h-5 w-5 text-[#F92C53]" />
            </div>
            <h3 className="mt-2 font-display text-2xl font-bold text-[#111827]">
              What’s Included
            </h3>
            <ul className="mt-5 space-y-3.5">
              {product.included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-[#3A352D]/85 sm:text-base"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00C9A7]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-black/8 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#079669]">
                Infrastructure
              </span>
              <Cloud className="h-5 w-5 text-[#079669]" />
            </div>
            <h3 className="mt-2 font-display text-2xl font-bold text-[#111827]">
              Deployment Options
            </h3>
            <ul className="mt-5 space-y-3.5">
              {product.deployment.map((opt) => (
                <li
                  key={opt}
                  className="flex items-start gap-3 text-sm text-[#3A352D]/85 sm:text-base"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F92C53]" />
                  <span>{opt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pre-Built FAQs */}
      <section className="mx-auto mt-10 w-full max-w-7xl px-4 sm:mt-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/8 bg-white p-6 shadow-sm sm:p-10">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-[#F92C53]" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#F92C53]">
              04 · Deployment & Support FAQs
            </span>
          </div>
          <h2 className="mt-2 font-display text-2xl font-extrabold text-[#111827] sm:text-3xl">
            Common questions about Pre-Builts
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

      {/* Related Pre-Builts */}
      <section className="mx-auto mt-10 w-full max-w-7xl px-4 sm:mt-12 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#3A352D]/55">
              More Ready-to-Deploy Systems
            </span>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-[#111827] sm:text-3xl">
              Explore other Pre-Builts
            </h2>
          </div>
          <Link
            href="/pre-builts"
            className="text-sm font-semibold text-[#F92C53] hover:underline"
          >
            View all 10
          </Link>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {related.map((other) => (
            <Link
              key={other.slug}
              href={`/pre-builts/${other.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-black/8 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#F92C53]/40 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-[#E6FAF6] px-2.5 py-1 font-mono text-[11px] font-semibold text-[#079669]">
                    {other.category}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#111827]">
                    LKR {other.priceLkr.toLocaleString()}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-[#111827] group-hover:text-[#F92C53]">
                  {other.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#3A352D]/75">
                  {other.summary}
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#111827]">
                <span>View System</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="mx-auto mt-10 w-full max-w-7xl px-4 sm:mt-12 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#F92C53] to-[#9E0E2A] p-6 text-white shadow-xl sm:p-12 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-white/80">
              Deploy in Days, Not Months
            </p>
            <h2 className="mt-2 font-display text-2xl font-extrabold sm:text-4xl">
              Want to see {product.name} in action?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-white/85 sm:text-base">
              Book a walkthrough with our Colombo team and tell us what custom
              workflows or hardware integrations you need.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 lg:mt-0">
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}&intent=demo`}
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#111827] transition-transform hover:scale-[1.02] sm:w-auto"
            >
              <span>Request Demo</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
