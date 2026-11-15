import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Quote } from "lucide-react";
import {
  COMPANY_INFO,
  PORTFOLIO_PROJECTS,
  PRE_BUILDS,
  SECTORS,
  SERVICES,
  STATS,
  TECH_STACK,
  TESTIMONIALS,
  WHY_CHOOSE_US,
} from "@/data/devrious";
import {
  buildHomePageSchema,
  buildPageMetadata,
  serializeJsonLd,
} from "@/data/seo";
import { HomeHero } from "@/components/HomeHero";
import { Reveal } from "@/components/Reveal";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { ShowcaseBanner } from "@/components/ShowcaseBanner";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Custom Software, Web & AI Development in Sri Lanka",
    description:
      "Devrious is a software engineering studio in Colombo, Sri Lanka. We design, build, and secure custom websites, business operations software, REST APIs, AI tools, and 10 ready-to-deploy POS & ERP systems.",
    path: "/",
    image: "/images/banners/hero-banner.jpg",
    imageAlt:
      "Devrious — Custom Software, Web & AI Engineering Studio in Colombo, Sri Lanka",
    keywords: [
      "software company in Sri Lanka",
      "custom software development Colombo",
      "web development Sri Lanka",
      "POS software Sri Lanka",
      "ERP software Sri Lanka",
      "AI development company Sri Lanka",
    ],
  }),
  title: {
    absolute: "Devrious | Custom Software, Web & AI Development in Sri Lanka",
  },
};

export default function HomePage() {
  const homeSchema = buildHomePageSchema();

  return (
    <main className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(homeSchema) }}
      />
      {/* 1. Hero / Introduction */}
      <HomeHero />

      {/* Animated Infinite Capability & Stack Marquee */}
      <div className="overflow-hidden border-y border-black/8 bg-[#0a0103] py-3.5 text-white">
        <div className="animate-marquee flex items-center gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-white/80">
          {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
            <span key={`${tech.name}-${i}`} className="inline-flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F92C53]" />
              <span className="font-semibold text-white">{tech.name}</span>
              <span className="text-white/45">
                {"//"} {tech.category}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* 2. About Us Preview */}
      <section className="bg-[#f7f7f8] py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="grid gap-8 sm:gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#F92C53]">
                About Devrious
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.02em] text-[#111827] sm:text-4xl">
                Technology with purpose. Innovation with direction.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base leading-relaxed text-[#3A352D]/85 sm:text-lg">
                Founded in Colombo, Sri Lanka in {COMPANY_INFO.founded} by{" "}
                <strong className="font-semibold text-[#111827]">
                  Savindu Shiranjaya
                </strong>{" "}
                and{" "}
                <strong className="font-semibold text-[#111827]">
                  Rangana Munasinghe
                </strong>
                , Devrious builds dependable custom software, high-speed web
                experiences, and ready-to-deploy operational systems for growing
                businesses.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-5">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#111827] transition-colors hover:text-[#F92C53]"
                >
                  <span>Read our story &amp; approach</span>
                  <ArrowRight className="h-4 w-4 text-[#F92C53]" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Services Showcase (Loro-style Editorial Cards) */}
      <section
        id="services-showcase"
        className="border-y border-black/8 bg-white py-16 sm:py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#F92C53]">
                Capabilities
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.02em] text-[#111827] sm:text-5xl">
                Engineering the future of your business.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/12 bg-[#f7f7f8] px-4 py-2.5 text-sm font-semibold text-[#111827] transition-colors hover:border-[#F92C53] hover:text-[#F92C53] sm:w-auto"
            >
              <span>All 5 Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, idx) => (
              <Reveal key={service.slug} delay={idx * 0.05}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/8 bg-[#f7f7f8] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F92C53]/45 hover:bg-white hover:shadow-[0_28px_65px_-24px_rgba(249,44,83,0.22)]"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#2E0308] sm:aspect-[16/9] md:aspect-auto md:h-52">
                    <img
                      src={service.homeImage}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/45 px-3 py-1 font-mono text-[11px] font-semibold text-white backdrop-blur-md">
                      {service.number}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-7">
                    <div>
                      <h3 className="font-display text-xl font-bold tracking-tight text-[#111827]">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#3A352D]/75">
                        {service.tagline}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-black/8 pt-4 text-xs font-semibold text-[#111827] sm:mt-7">
                      <span>Explore service</span>
                      <ArrowUpRight className="h-4 w-4 text-[#F92C53] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Client Testimonials */}
      <section className="bg-[#f7f7f8] py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#00C9A7]">
              Client Perspectives
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.02em] text-[#111827] sm:text-4xl">
              Trusted by businesses running on our code.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {TESTIMONIALS.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.08}>
                <article className="flex h-full flex-col justify-between rounded-3xl border border-black/8 bg-white p-6 shadow-sm sm:p-8">
                  <div>
                    <Quote className="h-8 w-8 text-[#F92C53]" />
                    <p className="mt-5 text-base leading-relaxed text-[#3A352D]/90">
                      “{item.quote}”
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-black/8 pt-5">
                    <div>
                      <p className="font-display text-base font-bold text-[#111827]">
                        {item.name}
                      </p>
                      <p className="text-xs text-[#3A352D]/65">
                        {item.role}, {item.company}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.projects.map((p) => (
                        <span
                          key={p}
                          className="rounded-full bg-[#f7f7f8] px-2.5 py-1 font-mono text-[11px] text-[#3A352D]/75"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Company Statistics */}
      <section className="border-y border-black/8 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 min-[380px]:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {STATS.map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 0.05}>
                <div className="h-full rounded-2xl border border-black/8 bg-[#f7f7f8] p-5 sm:p-6">
                  <p className="gradient-text-brand font-display text-3xl font-extrabold sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-bold text-[#111827]">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-xs text-[#3A352D]/65">{stat.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Technology Stack / Built With */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#F92C53]">
              Built With
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.02em] text-[#111827] sm:text-4xl">
              A Modern, Production-Grade Stack
            </h2>
            <p className="mt-3 text-base text-[#3A352D]/75">
              Every project is built on proven, typed, and tested technologies
              deployed behind Cloudflare WAF &amp; modern cloud infrastructure.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:mt-10 sm:grid-cols-3 lg:grid-cols-4">
            {TECH_STACK.map((tech, idx) => (
              <Reveal key={tech.name} delay={idx * 0.025}>
                <div className="flex min-w-0 items-center justify-between gap-2 rounded-2xl border border-black/8 bg-[#f7f7f8] px-4 py-3.5 transition-colors hover:border-[#F92C53]/45 hover:bg-white">
                  <span className="truncate text-sm font-semibold text-[#111827]">
                    {tech.name}
                  </span>
                  <span className="shrink-0 font-mono text-[11px] text-[#3A352D]/55">
                    {tech.category}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed Loro-style Crimson Editorial Banner 1 */}
      <ShowcaseBanner
        image="/images/banners/showcase-banner-1.jpg"
        imageAlt="Devrious engineering precision visual"
        eyebrow="01 // Full Ownership"
        title="Engineered to Own."
        manifestoLines={[
          "EVERY DEVRIOUS SYSTEM",
          "IS DOCUMENTED,",
          "AUDITED, AND HANDED",
          "OFF YOURS TO KEEP.",
        ]}
      />

      {/* 7. Why Choose Us / The Difference */}
      <section className="bg-[#f7f7f8] py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#00C9A7]">
              The Difference
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.02em] text-[#111827] sm:text-4xl">
              Why It Matters for Your Business
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {WHY_CHOOSE_US.map((item, idx) => (
              <Reveal key={item.number} delay={idx * 0.05}>
                <div className="h-full rounded-3xl border border-black/8 bg-white p-6 transition-shadow duration-300 hover:shadow-md sm:p-7">
                  <span className="font-mono text-xs font-bold text-[#F92C53]">
                    {item.number}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-[#111827]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#3A352D]/75">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Industries & Pre-Builts Preview */}
      <section className="bg-[#fafafa] py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#F92C53]">
                Sectors &amp; Pre-Built Systems
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.02em] text-[#111827] sm:text-4xl">
                Ready-to-deploy software across industries.
              </h2>
            </div>
            <Link
              href="/pre-builts"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#F92C53] sm:w-auto"
            >
              <span>Browse All 10 Pre Builts</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-2">
            {SECTORS.map((sector) => (
              <span
                key={sector}
                className="rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-medium text-[#3A352D]/80"
              >
                {sector}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PRE_BUILDS.slice(0, 3).map((product, idx) => (
              <Reveal key={product.slug} delay={idx * 0.05}>
                <Link
                  href={`/pre-builts/${product.slug}`}
                  className="group flex h-full flex-col justify-between rounded-3xl border border-black/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F92C53]/45 hover:shadow-lg sm:p-7"
                >
                  <div>
                    <span className="inline-block rounded-full bg-[#E6FAF6] px-3 py-1 font-mono text-[11px] font-semibold text-[#079669]">
                      {product.category}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-bold text-[#111827]">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#3A352D]/75">
                      {product.summary}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-black/8 pt-4">
                    <span className="font-display text-lg font-extrabold text-[#111827]">
                      LKR {product.priceLkr.toLocaleString()}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#F92C53]">
                      Details
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Creative Portfolio / Visual Showcase (Dark Obsidian Band) */}
      <section className="bg-[#030303] py-16 text-white sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#F92C53]">
                Selected Work
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.02em] text-white sm:text-5xl">
                Digital experiences built to make an impact.
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15 sm:w-auto"
            >
              <span>View Portfolio</span>
              <ArrowRight className="h-4 w-4 text-[#00C9A7]" />
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-2">
            {PORTFOLIO_PROJECTS.map((project, idx) => (
              <Reveal key={project.slug} delay={idx * 0.08}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/12 bg-white/[0.04] transition-all duration-300 hover:border-[#F92C53]/55"
                >
                  <div className="overflow-hidden border-b border-white/10 bg-[#0d0e12] p-2.5 sm:p-4">
                    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#14161c]">
                      <img
                        src={project.screenshot ?? project.bannerImage}
                        alt={`${project.name} preview`}
                        loading="lazy"
                        decoding="async"
                        className="block h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.015]"
                      />
                    </div>
                  </div>
                  <div className="p-5 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-xs text-[#00C9A7]">
                        {project.category}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-white/60">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00C9A7]" />
                        {project.status}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-bold text-white sm:text-2xl">
                      {project.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/65">
                      {project.summary}
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#F92C53]">
                      <span>Explore case study</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed Loro-style Crimson Editorial Banner 2 */}
      <ShowcaseBanner
        image="/images/banners/showcase-banner-2.jpg"
        imageAlt="Devrious bespoke software visual"
        eyebrow="02 // Bespoke Craft"
        title="Built Without Shortcuts."
        manifestoLines={[
          "YOUR BRAND DESERVES",
          "TO STAND OUT. NOT",
          "BLEND IN WITH EVERY",
          "OTHER TEMPLATE.",
        ]}
      />

      {/* 10. Interactive Live Demo Section */}
      <section className="bg-white py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-8 max-w-2xl sm:mb-10">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#F92C53]">
              Live System Explorer
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.02em] text-[#111827] sm:text-4xl">
              Explore a working Devrious system.
            </h2>
            <p className="mt-3 text-base text-[#3A352D]/75">
              Switch between our ready-to-deploy business platforms to inspect
              included modules, deployment timelines, and pricing.
            </p>
          </Reveal>
          <InteractiveDemo />
        </div>
      </section>

      {/* 11. Final CTA / Contact Section */}
      <section className="bg-white px-3 pb-16 sm:px-6 md:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#030303] p-6 text-white shadow-[0_24px_70px_-20px_rgba(0,0,0,0.3)] sm:p-14 lg:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#F92C53]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-1/3 h-72 w-72 rounded-full bg-[#00C9A7]/15 blur-3xl" />

          <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#00C9A7]">
                <CheckCircle2 className="h-4 w-4" />
                Ready when you are
              </span>
              <h2 className="mt-4 font-display text-2xl font-extrabold tracking-[-0.02em] sm:text-5xl">
                When you are ready, let’s build something meaningful.
              </h2>
              <p className="mt-4 text-sm text-white/80 sm:text-base">
                Tell us about your workflow, custom software idea, or Pre-Built
                system needs. Direct engineering conversation, honest scoping.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F92C53] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#D91C40]"
              >
                <span>Start a project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                <span>WhatsApp {COMPANY_INFO.phone}</span>
                <ArrowUpRight className="h-4 w-4 text-[#00C9A7]" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
