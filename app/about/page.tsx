import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  COMPANY_INFO,
  COMPANY_MISSION,
  COMPANY_VISION,
  KEYS_TO_SUCCESS,
  STATS,
  TECH_STACK,
  TRUSTED_CLIENTS,
} from "@/data/devrious";
import {
  buildAboutPageSchema,
  buildPageMetadata,
  serializeJsonLd,
} from "@/data/seo";
import { Reveal } from "@/components/Reveal";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us — Software Engineering Studio in Colombo, Sri Lanka",
  description:
    "Devrious is an independent software engineering studio founded in Colombo, Sri Lanka in 2024 by Savindu Shiranjaya and Rangana Munasinghe. Learn our story, vision, mission, and engineering philosophy.",
  path: "/about",
  image: "/images/banners/banner-about.jpg",
  imageAlt: "Devrious software engineering studio in Colombo, Sri Lanka",
  keywords: [
    "about Devrious",
    "Savindu Shiranjaya",
    "Rangana Munasinghe",
    "Colombo software studio",
    "software engineering company Maharagama Colombo",
  ],
});

const TIMELINE = [
  {
    year: "2024",
    title: "Founded in Colombo, Sri Lanka",
    description:
      "Savindu Shiranjaya and Rangana Munasinghe founded Devrious in Maharagama, Colombo to build dependable, maintainable software without technical debt shortcuts.",
  },
  {
    year: "Production",
    title: "Custom Websites & Factory Systems",
    description:
      "Delivered corporate and brand platforms for Avenor Apparel and Zevora Custom alongside custom factory production and accommodation management systems.",
  },
  {
    year: "Pre Builts",
    title: "10 Ready-to-Deploy Business Systems",
    description:
      "Packaged proven POS, ERP, Hotel, Fleet, Social Media, and FlexCore e-commerce systems so Sri Lankan businesses can launch in weeks instead of months.",
  },
  {
    year: "Today",
    title: "Custom Software, APIs & AI Automation",
    description:
      "Partnering with businesses on custom web applications, secure Django REST APIs, and practical AI assistants backed by Cloudflare security.",
  },
];

export default function AboutPage() {
  const aboutSchema = buildAboutPageSchema();

  return (
    <main className="flex flex-col bg-[#f7f7f8] pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(aboutSchema) }}
      />
      {/* Loro-style Architectural Crimson Header */}
      <PageBanner
        image="/images/banners/banner-about.jpg"
        imageAlt="Devrious software engineering studio in Colombo, Sri Lanka"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3.5 py-1 font-mono text-xs font-semibold text-[#99f3e4] backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00C9A7]" />
          Founded 2024 · Colombo, Sri Lanka
        </span>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
          Technology with purpose. Innovation with direction.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          Devrious is a software company founded in Colombo, Sri Lanka in
          2024. We design, engineer, and secure software that solves real
          operational problems — whether built from scratch or deployed from
          our proven Pre-Built suite.
        </p>
      </PageBanner>

      {/* Philosophy & Approach */}
      <section className="mx-auto mt-14 w-full max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Who We Are & What We Do",
              body: "An independent software engineering studio in Colombo building custom web platforms, business operations software, secure APIs, AI assistants, and ready-to-deploy POS & ERP systems.",
            },
            {
              title: "Our Technology Philosophy",
              body: "Zero technical debt shortcuts. We pair typed React & Next.js frontends with Python 3.12, Django 5, PostgreSQL, automated PyTest/Selenium QA, and Cloudflare WAF protection.",
            },
            {
              title: "Quality & Vision",
              body: "Software should be fast on mid-range mobile devices, intuitive enough for staff to learn in a day, and backed by honest scoping and long-term support.",
            },
          ].map((card, idx) => (
            <Reveal key={card.title} delay={idx * 0.06}>
              <div className="h-full rounded-3xl border border-black/8 bg-white p-8">
                <span className="font-mono text-xs font-bold text-[#F92C53]">
                  0{idx + 1}
                </span>
                <h2 className="mt-3 font-display text-xl font-bold text-[#111827]">
                  {card.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#3A352D]/80">
                  {card.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="mx-auto mt-12 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl bg-[#030303] text-white lg:grid-cols-2">
          <div className="border-b border-white/10 p-6 sm:p-12 lg:border-b-0 lg:border-r">
            <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-[#F92C53]">
              <span className="h-2 w-2 rounded-sm bg-[#F92C53]" />
              Our Vision
            </span>
            <p className="mt-4 font-display text-xl font-bold leading-snug text-white sm:text-2xl">
              {COMPANY_VISION.statement}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
              {COMPANY_VISION.detail}
            </p>
          </div>
          <div className="p-6 sm:p-12">
            <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-[#00C9A7]">
              <span className="h-2 w-2 rounded-sm bg-[#00C9A7]" />
              Our Mission
            </span>
            <p className="mt-4 font-display text-xl font-bold leading-snug text-white sm:text-2xl">
              {COMPANY_MISSION.statement}
            </p>
            <ul className="mt-5 space-y-3">
              {COMPANY_MISSION.commitments.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 text-sm text-white/80 sm:text-base"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00C9A7]" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Our Keys to Success */}
      <section className="mx-auto mt-14 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#F92C53]">
            Our Keys to Success
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-[#111827] sm:text-4xl">
            Six habits we hold ourselves to on every project
          </h2>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {KEYS_TO_SUCCESS.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.05}>
              <div className="h-full rounded-3xl border border-black/8 bg-white p-7 shadow-sm">
                <span className="font-mono text-xs font-bold text-[#F92C53]">
                  {item.number}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-[#111827]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#3A352D]/80">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-black/8 bg-white px-6 py-5">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#3A352D]/60">
            Trusted By Businesses Across LK & UK
          </span>
          <div className="flex flex-wrap gap-3">
            {TRUSTED_CLIENTS.map((client) => (
              <span
                key={client}
                className="rounded-lg bg-[#f7f7f8] px-3 py-1.5 font-display text-xs font-bold text-[#111827]"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="mx-auto mt-16 w-full max-w-7xl px-6 lg:px-8">
        <Reveal>
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#F92C53]">
            Leadership
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-[#111827] sm:text-4xl">
            Co-Founders
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {COMPANY_INFO.founders.map((founder, idx) => (
            <Reveal key={founder.name} delay={idx * 0.08}>
              <article className="flex flex-col gap-6 rounded-3xl border border-black/8 bg-white p-7 sm:flex-row sm:items-center">
                <img
                  src={founder.photo}
                  alt={founder.name}
                  loading="lazy"
                  decoding="async"
                  className="h-28 w-28 shrink-0 rounded-2xl object-cover"
                />
                <div>
                  <h3 className="font-display text-xl font-bold text-[#111827]">
                    {founder.name}
                  </h3>
                  <p className="font-mono text-xs font-semibold text-[#079669]">
                    {founder.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#3A352D]/80">
                    {founder.bio}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Visual Timeline */}
      <section className="mx-auto mt-16 w-full max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-black/8 bg-white p-8 sm:p-12">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#00C9A7]">
            Journey
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-[#111827]">
            How Devrious Operates
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.06}>
                <div className="relative h-full rounded-2xl border border-black/8 bg-[#f7f7f8] p-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E6FAF6] px-3 py-1 font-mono text-xs font-bold text-[#079669]">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {item.year}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-[#111827]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#3A352D]/75">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Stack */}
      <section className="mx-auto mt-16 w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-black/8 bg-white p-6"
            >
              <p className="gradient-text-brand font-display text-3xl font-extrabold">
                {s.value}
              </p>
              <p className="mt-2 text-sm font-bold text-[#111827]">{s.label}</p>
              <p className="mt-1 text-xs text-[#3A352D]/65">{s.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-black/8 bg-white p-8">
          <h2 className="font-display text-xl font-bold text-[#111827]">
            Core Technology Stack
          </h2>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {TECH_STACK.map((t) => (
              <span
                key={t.name}
                className="rounded-xl border border-black/10 bg-[#f7f7f8] px-3.5 py-2 text-xs font-semibold text-[#111827]"
              >
                {t.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-end">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#F92C53] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#D91C40]"
          >
            <span>Work with Devrious</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
