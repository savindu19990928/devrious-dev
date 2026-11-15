import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Layers,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import {
  DELIVERY_PROCESS,
  PRE_BUILDS,
  SERVICE_FAQS,
  SERVICES,
} from "@/data/devrious";

const LKR_PER_USD = 295;

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
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.tagline,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <main className="mx-auto max-w-7xl px-4 py-8 pb-24 sm:px-6">
          <div className="h-[420px] animate-pulse rounded-3xl bg-[#2E0308]" />
        </main>
      }
    >
      <ServiceDetailContent params={params} />
    </Suspense>
  );
}

async function ServiceDetailContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = SERVICES.findIndex((s) => s.slug === slug);
  if (idx === -1) notFound();

  const service = SERVICES[idx];
  const approxUsd = Math.round(service.priceLkr / LKR_PER_USD);
  const otherServices = SERVICES.filter((s) => s.slug !== slug);
  const featuredPreBuilds = PRE_BUILDS.slice(0, 4);

  return (
    <main className="flex flex-col bg-[#f7f7f8] pb-20 sm:pb-24">
      {/* Mobile-First Full-Bleed Obsidian + Crimson Editorial Hero */}
      <section className="px-3 pt-3 sm:px-6 sm:pt-4">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#2E0308] text-white shadow-[0_24px_80px_-24px_rgba(46,3,8,0.5)] sm:rounded-3xl">
          {/* Mobile top visual so core subject is never cropped */}
          <div className="relative aspect-[16/10] w-full overflow-hidden md:hidden">
            <img
              src={service.heroImage}
              alt={service.title}
              className="h-full w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#2E0308]/35 to-[#2E0308]" />
          </div>

          {/* Desktop background */}
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            <img
              src={service.heroImage}
              alt={service.title}
              className="h-full w-full object-cover object-right opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#090204] via-[#2E0308]/90 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090204]/80 via-transparent to-black/25" />
          </div>

          <div className="relative z-10 px-5 pb-10 pt-4 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <Link
              href="/services"
              className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-1.5 text-xs font-semibold text-white/85 backdrop-blur-md transition-colors hover:border-[#F92C53] hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>All Services</span>
            </Link>

            <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:mt-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F92C53]/40 bg-[#F92C53]/20 px-3.5 py-1 font-mono text-xs font-semibold text-[#ffd6de] backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F92C53]" />
                SERVICE {service.number}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-3.5 py-1 font-mono text-xs font-medium text-[#99f3e4]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#00C9A7]" />
                GCP · OCI · AWS · Cloudflare
              </span>
            </div>

            <div className="mt-5 grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <h1 className="font-display text-3xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-7xl">
                  {service.title}
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-xl">
                  {service.tagline}
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#F92C53] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#F92C53]/30 transition-colors hover:bg-[#D91C40]"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
                  >
                    <span>See Client Work</span>
                  </Link>
                </div>
              </div>

              {/* Starting Price Card */}
              <div className="rounded-2xl border border-white/15 bg-black/55 p-5 backdrop-blur-md sm:p-6 lg:col-span-4">
                <p className="font-mono text-xs uppercase tracking-widest text-white/60">
                  Starting From
                </p>
                <p className="mt-1.5 font-display text-3xl font-extrabold text-white sm:text-4xl">
                  LKR {service.priceLkr.toLocaleString()}
                </p>
                <p className="mt-1 font-mono text-xs text-[#99f3e4]">
                  ≈ ${approxUsd.toLocaleString()} USD · Final price depends on scope
                </p>
                <div className="mt-4 border-t border-white/10 pt-3 text-xs leading-relaxed text-white/75">
                  Includes written specification, weekly staging demos, PyTest &
                  Selenium QA, and cloud deployment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Overview & What's Included */}
      <section className="mx-auto mt-8 w-full max-w-7xl px-4 sm:mt-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-3xl border border-black/8 bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-12 lg:gap-10 lg:p-12">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#F92C53]">
              01 · What We Engineer
            </span>
            <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">
              Built for reliability, speed, and real-world teams.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#3A352D]/85 sm:text-lg">
              {service.description}
            </p>

            <div className="mt-7">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#111827]">
                Standard Engagement Includes
              </p>
              <ul className="mt-4 space-y-3">
                {service.includes.map((inc) => (
                  <li
                    key={inc}
                    className="flex items-start gap-3 text-sm leading-relaxed text-[#3A352D]/85 sm:text-base"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00C9A7]" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-black/8 bg-[#f7f7f8] p-6 sm:p-8 lg:col-span-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#111827]">
                Core Technology Stack
              </span>
              <Layers className="h-4 w-4 text-[#F92C53]" />
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl border border-black/10 bg-white px-3.5 py-2 font-mono text-xs font-semibold text-[#111827] shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 space-y-3 border-t border-black/8 pt-5 text-xs leading-relaxed text-[#3A352D]/75 sm:text-sm">
              <p>
                <strong className="text-[#111827]">Testing & QA:</strong>{" "}
                Automated PyTest API suites, Selenium end-to-end checks, and
                real-device mobile verification.
              </p>
              <p>
                <strong className="text-[#111827]">Security & Cloud:</strong>{" "}
                Hosted on GCP, OCI, or AWS behind Cloudflare WAF, SSL, and DDoS
                protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Column Deep-Dive Bento Grid */}
      <section className="mx-auto mt-8 w-full max-w-7xl px-4 sm:mt-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="rounded-3xl border border-black/8 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#F92C53]">
                Capabilities
              </span>
              <Sparkles className="h-4 w-4 text-[#F92C53]" />
            </div>
            <h3 className="mt-3 font-display text-xl font-bold text-[#111827] sm:text-2xl">
              Key Features
            </h3>
            <ul className="mt-5 space-y-3.5 text-sm leading-relaxed text-[#3A352D]/85">
              {service.features.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#00C9A7]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-black/8 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#079669]">
                Outcomes
              </span>
              <Zap className="h-4 w-4 text-[#00C9A7]" />
            </div>
            <h3 className="mt-3 font-display text-xl font-bold text-[#111827] sm:text-2xl">
              Business Benefits
            </h3>
            <ul className="mt-5 space-y-3.5 text-sm leading-relaxed text-[#3A352D]/85">
              {service.benefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#F92C53]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-black/8 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#111827]">
                Handover
              </span>
              <ShieldCheck className="h-4 w-4 text-[#111827]" />
            </div>
            <h3 className="mt-3 font-display text-xl font-bold text-[#111827] sm:text-2xl">
              Deliverables
            </h3>
            <ul className="mt-5 space-y-3.5 text-sm leading-relaxed text-[#3A352D]/85">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#F92C53]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5-Step Delivery Process Band */}
      <section className="mx-auto mt-10 w-full max-w-7xl px-4 sm:mt-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-[#030303] p-6 text-white sm:p-12 lg:p-14">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#00C9A7]">
              02 · How We Deliver
            </span>
            <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight sm:text-4xl">
              From discovery to launch in five clear stages.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-5">
            {DELIVERY_PROCESS.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <span className="font-mono text-xs font-bold text-[#F92C53]">
                  STEP {item.step}
                </span>
                <h3 className="mt-2.5 font-display text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQs + Pre-Built Shortcut */}
      <section className="mx-auto mt-10 w-full max-w-7xl px-4 sm:mt-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="rounded-3xl border border-black/8 bg-white p-6 shadow-sm sm:p-10 lg:col-span-7">
            <div className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-[#F92C53]" />
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#F92C53]">
                03 · Frequently Asked Questions
              </span>
            </div>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-[#111827] sm:text-3xl">
              Common questions before starting
            </h2>
            <div className="mt-6 space-y-5 divide-y divide-black/8">
              {SERVICE_FAQS.map((faq) => (
                <div key={faq.question} className="pt-5 first:pt-0">
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

          <div className="flex flex-col justify-between rounded-3xl border border-black/8 bg-white p-6 shadow-sm sm:p-10 lg:col-span-5">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#079669]">
                Faster Alternative
              </span>
              <h3 className="mt-2 font-display text-2xl font-extrabold text-[#111827]">
                Need to launch in 1–2 weeks?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#3A352D]/80">
                Start from one of our 10 ready-to-deploy Pre-Builts and let us
                tailor it around your exact workflow.
              </p>
              <ul className="mt-5 divide-y divide-black/8 border-y border-black/8">
                {featuredPreBuilds.map((pb) => (
                  <li key={pb.slug}>
                    <Link
                      href={`/pre-builts/${pb.slug}`}
                      className="group flex min-h-[48px] items-center justify-between py-3 text-sm font-semibold text-[#111827] hover:text-[#F92C53]"
                    >
                      <span>{pb.name}</span>
                      <span className="font-mono text-xs text-[#3A352D]/60 group-hover:text-[#F92C53]">
                        LKR {pb.priceLkr.toLocaleString()} →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/pre-builts"
              className="mt-6 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-black/15 bg-[#f7f7f8] px-4 py-3 text-sm font-semibold text-[#111827] transition-colors hover:border-[#F92C53] hover:text-[#F92C53]"
            >
              <span>Browse All 10 Pre-Builts</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Explore Other Services */}
      <section className="mx-auto mt-10 w-full max-w-7xl px-4 sm:mt-12 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#3A352D]/55">
              More Capabilities
            </span>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-[#111827] sm:text-3xl">
              Explore our other services
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden text-sm font-semibold text-[#F92C53] hover:underline sm:inline-flex sm:items-center sm:gap-1"
          >
            <span>View all</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {otherServices.map((other) => (
            <Link
              key={other.slug}
              href={`/services/${other.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-black/8 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#F92C53]/40 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-[#F92C53]">
                    {other.number}
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#111827]">
                    From LKR {other.priceLkr.toLocaleString()}
                  </span>
                </div>
                <h3 className="mt-2.5 font-display text-lg font-bold text-[#111827] group-hover:text-[#F92C53]">
                  {other.shortTitle}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#3A352D]/75">
                  {other.tagline}
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#111827]">
                <span>Explore</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto mt-10 w-full max-w-7xl px-4 sm:mt-12 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#F92C53] to-[#9E0E2A] p-6 text-white shadow-xl sm:p-12 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-white/80">
              Start a Conversation
            </p>
            <h2 className="mt-2 font-display text-2xl font-extrabold sm:text-4xl">
              Ready to scope {service.title}?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-white/85 sm:text-base">
              Speak directly with our Colombo engineering team for an honest
              timeline, architecture plan, and fixed written quote.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 lg:mt-0">
            <Link
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#111827] transition-transform hover:scale-[1.02] sm:w-auto"
            >
              <span>Request Proposal</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
