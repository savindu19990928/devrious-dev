import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, HelpCircle, ShieldCheck } from "lucide-react";
import {
  DELIVERY_PROCESS,
  PRE_BUILDS,
  SERVICE_FAQS,
  SERVICES,
} from "@/data/devrious";
import {
  buildPageMetadata,
  buildServicesPageSchema,
  serializeJsonLd,
} from "@/data/seo";
import { Reveal } from "@/components/Reveal";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = buildPageMetadata({
  title: "Custom Web, Software, API & AI Development Services",
  description:
    "Explore Devrious engineering services in Colombo, Sri Lanka: Custom Web Development (from LKR 85,000), Custom Software (from LKR 75,000), REST APIs (from LKR 55,000), AI Assistants, and End-to-End AI Systems.",
  path: "/services",
  image: "/images/banners/banner-services.jpg",
  imageAlt: "Devrious software engineers reviewing a system architecture diagram",
  keywords: [
    "custom web development Sri Lanka",
    "custom software development Colombo",
    "REST API development Sri Lanka",
    "AI chatbot development Sri Lanka",
    "AI automation Sri Lanka",
    "Django React developers Sri Lanka",
  ],
});

export default function ServicesPage() {
  const servicesSchema = buildServicesPageSchema();

  return (
    <main className="flex flex-col bg-[#f7f7f8] pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(servicesSchema) }}
      />
      {/* Photo Banner */}
      <PageBanner
        image="/images/banners/banner-services.jpg"
        imageAlt="Devrious software engineers reviewing a system architecture diagram"
      >
        <div className="max-w-2xl lg:max-w-[50%]">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-3.5 py-1 font-mono text-xs font-semibold text-[#99f3e4] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00C9A7]" />
            Services · 01 — 05
          </span>
          <h1 className="mt-5 font-display text-3xl font-extrabold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Engineering for every stage of your business.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:mt-5 sm:text-lg">
            Custom web and software development, APIs and AI — designed around
            your process, tested thoroughly and hosted on GCP, OCI or AWS.
          </p>
        </div>
      </PageBanner>

      {/* Services List */}
      <section className="mt-12 sm:mt-14">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          {SERVICES.map((service, idx) => (
            <Reveal key={service.slug} delay={idx * 0.05}>
              <article className="group overflow-hidden rounded-3xl border border-black/8 bg-white transition-all duration-300 hover:border-[#F92C53]/40 hover:shadow-[0_24px_60px_-24px_rgba(249,44,83,0.18)]">
                <div className="grid lg:grid-cols-12">
                  {/* Editorial Visual Column */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#2E0308] sm:aspect-[16/9] lg:col-span-5 lg:aspect-auto lg:min-h-[320px]">
                    <img
                      src={service.editorialImage}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-black/45 px-3 py-1 font-mono text-xs font-bold text-white backdrop-blur-md">
                      SERVICE {service.number}
                    </span>
                  </div>

                  {/* Content Column */}
                  <div className="p-6 sm:p-10 lg:col-span-7">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h2 className="font-display text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl">
                        {service.title}
                      </h2>
                      <div className="rounded-xl border border-black/10 bg-[#f7f7f8] px-3.5 py-1.5 text-right">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#3A352D]/60">
                          Starting from{" "}
                        </span>
                        <span className="font-display text-base font-extrabold text-[#111827]">
                          LKR {service.priceLkr.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[#3A352D]/80 sm:text-base">
                      {service.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-black/10 bg-[#f7f7f8] px-2.5 py-1 font-mono text-xs text-[#3A352D]/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 grid gap-5 sm:grid-cols-2">
                      <div className="rounded-2xl border border-black/8 bg-[#f7f7f8] p-5">
                        <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#F92C53]">
                          Key Features
                        </h3>
                        <ul className="mt-3 space-y-2.5">
                          {service.features.map((f) => (
                            <li
                              key={f}
                              className="flex items-start gap-2.5 text-sm text-[#3A352D]/85"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#00C9A7]" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-2xl border border-black/8 bg-[#f7f7f8] p-5">
                        <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#079669]">
                          Business Benefits
                        </h3>
                        <ul className="mt-3 space-y-2.5">
                          {service.benefits.map((b) => (
                            <li
                              key={b}
                              className="flex items-start gap-2.5 text-sm text-[#3A352D]/85"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F92C53]" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#F92C53]"
                      >
                        <span>Full Service Details</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-black/15 bg-[#f7f7f8] px-5 py-3 text-sm font-semibold text-[#111827] transition-colors hover:border-[#F92C53] hover:text-[#F92C53]"
                      >
                        <span>Discuss Your Project</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5-Step Delivery Process & Pre-Built Cross-Link */}
      <section className="mx-auto mt-14 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#030303] p-6 text-white sm:p-12">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#00C9A7]">
            Our Engineering Process
          </span>
          <h2 className="mt-2 font-display text-2xl font-extrabold sm:text-4xl">
            How every project goes from idea to production
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {DELIVERY_PROCESS.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <span className="font-mono text-xs font-bold text-[#F92C53]">
                  STEP {item.step}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-white">
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

      {/* Systems available for custom development + Cybersecurity Check */}
      <section className="mx-auto mt-12 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="rounded-3xl border border-black/8 bg-white p-6 shadow-sm sm:p-10 lg:col-span-8">
            <h2 className="font-display text-2xl font-extrabold text-[#111827] sm:text-3xl">
              Systems available for custom development
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#3A352D]/80 sm:text-base">
              Every one of these is also available as a pre-built system. Start
              from ours and we’ll tailor it — or we’ll build one from scratch
              around your exact workflow.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {PRE_BUILDS.slice(0, 8).map((pb) => (
                <Link
                  key={pb.slug}
                  href={`/pre-builts/${pb.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-black/8 bg-[#f7f7f8] px-4 py-3 text-sm font-semibold text-[#111827] transition-colors hover:border-[#F92C53]/40 hover:text-[#F92C53]"
                >
                  <span>{pb.name}</span>
                  <ArrowRight className="h-4 w-4 text-[#3A352D]/40 group-hover:text-[#F92C53]" />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl bg-[#030303] p-6 text-white sm:p-10 lg:col-span-4">
            <div>
              <ShieldCheck className="h-8 w-8 text-[#00C9A7]" />
              <h3 className="mt-4 font-display text-2xl font-extrabold">
                Need a security check?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Penetration testing, API security assessments, and secure code
                review, with packages starting from LKR 45,000.
              </p>
            </div>
            <Link
              href="/cybersecurity-services"
              className="mt-6 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-[#F92C53] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#D91C40]"
            >
              <span>Cybersecurity Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="mx-auto mt-12 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/8 bg-white p-6 shadow-sm sm:p-10">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-[#F92C53]" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#F92C53]">
              Engineering FAQs
            </span>
          </div>
          <h2 className="mt-2 font-display text-2xl font-extrabold text-[#111827] sm:text-3xl">
            Common questions about custom projects
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {SERVICE_FAQS.map((faq) => (
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

      {/* Bottom Contact CTA */}
      <section className="mt-16 px-3 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-3xl bg-[#030303] p-8 text-white sm:flex-row sm:items-center sm:p-12">
          <div>
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
              Need a tailored architecture or technical scope?
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              Share your requirements and our engineering leads will scope the
              right build with zero upselling.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#F92C53] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#D91C40]"
          >
            <span>Start a project</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
