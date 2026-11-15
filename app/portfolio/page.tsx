import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_PROJECTS, TESTIMONIALS } from "@/data/devrious";
import { Reveal } from "@/components/Reveal";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected client work by Devrious — Avenor Apparel corporate website and Zevora Custom brand website & quote system.",
};

export default function PortfolioPage() {
  return (
    <main className="flex flex-col bg-[#f7f7f8] pb-24">
      <PageBanner
        image="/images/banners/banner-portfolio.jpg"
        imageAlt="Devrious portfolio showcase of production websites and software systems"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3.5 py-1 font-mono text-xs font-semibold text-[#99f3e4] backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00C9A7]" />
          Portfolio
        </span>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
          Real projects, real constraints
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          Every client brought a different problem. Here’s what we built, what
          made it hard, and how we solved it.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 border-t border-white/15 pt-6">
          <div className="rounded-xl border border-white/15 bg-black/40 px-4 py-2.5 backdrop-blur-md">
            <p className="font-mono text-[11px] uppercase tracking-wider text-white/55">
              Client projects
            </p>
            <p className="mt-0.5 font-display text-2xl font-extrabold text-white">
              6
            </p>
          </div>
          <div className="rounded-xl border border-white/15 bg-black/40 px-4 py-2.5 backdrop-blur-md">
            <p className="font-mono text-[11px] uppercase tracking-wider text-white/55">
              In-house product
            </p>
            <p className="mt-0.5 font-display text-2xl font-extrabold text-[#99f3e4]">
              1
            </p>
          </div>
        </div>
      </PageBanner>

      <section className="mx-auto mt-12 w-full max-w-7xl space-y-10 px-6 lg:px-8">
        {PORTFOLIO_PROJECTS.map((project, idx) => (
          <Reveal key={project.slug} delay={idx * 0.06}>
            <article className="group overflow-hidden rounded-3xl border border-black/8 bg-white shadow-sm transition-all duration-300 hover:border-[#F92C53]/40 hover:shadow-[0_24px_70px_-24px_rgba(249,44,83,0.18)]">
              <div className="grid lg:grid-cols-12">
                <div className="relative overflow-hidden bg-[#2E0308] lg:col-span-7">
                  <img
                    src={project.screenshot ?? project.bannerImage}
                    alt={`${project.name} preview`}
                    className={`h-72 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-96 lg:h-full ${
                      project.screenshot ? "object-top" : "object-center"
                    }`}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15" />
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/65 px-3 py-1 font-mono text-[11px] font-semibold text-white backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00C9A7]" />
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-between p-8 sm:p-10 lg:col-span-5">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full bg-[#E6FAF6] px-3 py-1 font-mono text-xs font-semibold text-[#079669]">
                        {project.category}
                      </span>
                      <span className="font-mono text-xs text-[#3A352D]/50">
                        {project.status}
                      </span>
                    </div>

                    <h2 className="mt-5 font-display text-3xl font-extrabold text-[#111827]">
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
      <section className="mx-auto mt-16 w-full max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl border border-black/8 bg-white p-8"
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
