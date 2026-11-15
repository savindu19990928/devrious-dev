import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_PROJECTS, TESTIMONIALS } from "@/data/devrious";
import {
  buildPageMetadata,
  buildPortfolioPageSchema,
  serializeJsonLd,
} from "@/data/seo";
import { Reveal } from "@/components/Reveal";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = buildPageMetadata({
  title: "Portfolio & Engineering Case Studies",
  description:
    "Selected client work and production software systems built by Devrious — Avenor Apparel, Zevora Custom, Clothing Production Management, Sunrise Apartments, Smart Metro Tech, Smart Park n Fly (UK), and FlexCore.",
  path: "/portfolio",
  image: "/images/banners/banner-portfolio.jpg",
  imageAlt: "Devrious portfolio showcase of production websites and software systems",
  keywords: [
    "Devrious portfolio",
    "software case studies Sri Lanka",
    "web development portfolio Sri Lanka",
    "Avenor Apparel website",
    "Zevora Custom website",
    "garment production management software Sri Lanka",
  ],
});

export default function PortfolioPage() {
  const portfolioSchema = buildPortfolioPageSchema();

  return (
    <main className="flex flex-col bg-[#f7f7f8] pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(portfolioSchema) }}
      />
      <PageBanner
        image="/images/banners/banner-portfolio.jpg"
        imageAlt="Devrious portfolio showcase of production websites and software systems"
      >
        <div className="max-w-2xl lg:max-w-[54%]">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3.5 py-1 font-mono text-xs font-semibold text-[#99f3e4] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00C9A7]" />
            Portfolio
          </span>
          <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Real projects, real constraints
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:mt-5 sm:text-lg">
            Every client brought a different problem. Here’s what we built, what
            made it hard, and how we solved it.
          </p>

          <div className="mt-7 flex flex-wrap gap-4 border-t border-white/15 pt-6">
            <div className="rounded-xl border border-white/15 bg-black/45 px-4 py-2.5 backdrop-blur-md">
              <p className="font-mono text-[11px] uppercase tracking-wider text-white/55">
                Client projects
              </p>
              <p className="mt-0.5 font-display text-2xl font-extrabold text-white">
                6
              </p>
            </div>
            <div className="rounded-xl border border-white/15 bg-black/45 px-4 py-2.5 backdrop-blur-md">
              <p className="font-mono text-[11px] uppercase tracking-wider text-white/55">
                In-house product
              </p>
              <p className="mt-0.5 font-display text-2xl font-extrabold text-[#99f3e4]">
                1
              </p>
            </div>
          </div>
        </div>
      </PageBanner>

      <section className="mx-auto mt-10 w-full max-w-7xl space-y-8 px-4 sm:mt-12 sm:space-y-10 sm:px-6 lg:px-8">
        {PORTFOLIO_PROJECTS.map((project, idx) => (
          <Reveal key={project.slug} delay={idx * 0.06}>
            <article className="group overflow-hidden rounded-3xl border border-black/8 bg-white shadow-sm transition-all duration-300 hover:border-[#F92C53]/40 hover:shadow-[0_24px_70px_-24px_rgba(249,44,83,0.18)]">
              <div className="grid lg:grid-cols-12 lg:items-center">
                <div className="relative flex flex-col justify-center overflow-hidden bg-[#0d0e12] p-3 sm:p-5 lg:col-span-7 lg:h-full lg:p-6">
                  <div className="overflow-hidden rounded-xl border border-white/12 bg-[#14161c] shadow-lg sm:rounded-2xl">
                    <div className="flex items-center justify-between gap-2 border-b border-white/10 px-3.5 py-2 sm:px-4">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#F92C53] sm:h-2.5 sm:w-2.5" />
                        <span className="h-2 w-2 rounded-full bg-amber-400/80 sm:h-2.5 sm:w-2.5" />
                        <span className="h-2 w-2 rounded-full bg-[#00C9A7] sm:h-2.5 sm:w-2.5" />
                      </div>
                      <span className="truncate font-mono text-[10px] text-white/55 sm:text-[11px]">
                        {project.liveUrl ?? project.name}
                      </span>
                      <span className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[10px] font-semibold text-[#99f3e4]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00C9A7]" />
                        {project.status}
                      </span>
                    </div>
                    <img
                      src={project.screenshot ?? project.bannerImage}
                      alt={`${project.name} preview`}
                      loading="lazy"
                      decoding="async"
                      className="block h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.015]"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-between p-5 sm:p-8 lg:col-span-5 lg:p-10">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full bg-[#E6FAF6] px-3 py-1 font-mono text-xs font-semibold text-[#079669]">
                        {project.category}
                      </span>
                      <span className="font-mono text-xs text-[#3A352D]/50">
                        {project.status}
                      </span>
                    </div>

                    <h2 className="mt-4 font-display text-2xl font-extrabold text-[#111827] sm:mt-5 sm:text-3xl">
                      {project.name}
                    </h2>
                    <p className="mt-1 text-xs font-medium text-[#3A352D]/60">
                      Client: {project.client}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-[#3A352D]/80 sm:text-base">
                      {project.summary}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-black/10 bg-[#f7f7f8] px-2.5 py-1 font-mono text-xs text-[#3A352D]/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-black/8 pt-6">
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#F92C53] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#D91C40]"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl border border-black/15 px-4 py-3 text-sm font-semibold text-[#111827] transition-colors hover:bg-[#f7f7f8]"
                      >
                        <span>Live Site</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                    {project.internalLink && (
                      <Link
                        href={project.internalLink}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-black/15 px-4 py-3 text-sm font-semibold text-[#111827] transition-colors hover:bg-[#f7f7f8]"
                      >
                        <span>View Pre-Built</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      {/* Client Testimonials */}
      <section className="mx-auto mt-14 w-full max-w-7xl px-4 sm:mt-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl border border-black/8 bg-white p-6 sm:p-8"
            >
              <p className="text-sm leading-relaxed text-[#3A352D]/85 sm:text-base">
                “{t.quote}”
              </p>
              <div className="mt-6 border-t border-black/8 pt-4">
                <p className="font-display text-sm font-bold text-[#111827]">
                  {t.name}
                </p>
                <p className="text-xs text-[#3A352D]/60">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
