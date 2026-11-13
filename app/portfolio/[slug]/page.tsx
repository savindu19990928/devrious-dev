import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Globe,
  Quote,
  ShieldAlert,
} from "lucide-react";
import { PORTFOLIO_PROJECTS, TESTIMONIALS } from "@/data/devrious";
import { PageBanner } from "@/components/PageBanner";

export function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.name,
    description: project.summary,
  };
}

export default function PortfolioDetailPage({
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
      <PortfolioDetailContent params={params} />
    </Suspense>
  );
}

async function PortfolioDetailContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const testimonial = project.testimonialId
    ? TESTIMONIALS.find((t) => t.id === project.testimonialId)
    : undefined;
  const moreProjects = PORTFOLIO_PROJECTS.filter((p) => p.slug !== slug).slice(
    0,
    3
  );

  return (
    <main className="flex flex-col bg-[#f7f7f8] pb-20 sm:pb-24">
      {/* Cinematic Case Study Hero Banner */}
      <PageBanner
        image={
          project.screenshot ??
          project.bannerImage ??
          "/images/banners/banner-portfolio.jpg"
        }
        imageAlt={`${project.name} banner`}
        mobileFocus={project.screenshot ? "object-top" : "object-center"}
      >
        <Link
          href="/portfolio"
          className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-1.5 text-xs font-semibold text-white/85 backdrop-blur-md transition-colors hover:border-[#F92C53] hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>All Case Studies</span>
        </Link>

        <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:mt-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#00C9A7]/35 bg-[#00C9A7]/15 px-3.5 py-1 font-mono text-xs font-semibold text-[#99f3e4]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00C9A7]" />
            {project.category}
          </span>
          <span className="rounded-full border border-white/15 bg-black/40 px-3.5 py-1 font-mono text-xs font-medium text-white/85 backdrop-blur-md">
            {project.status}
          </span>
        </div>

        <h1 className="mt-5 max-w-4xl font-display text-3xl font-extrabold leading-[1.06] tracking-tight text-white sm:mt-6 sm:text-6xl lg:text-7xl">
          {project.name}
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/85 sm:mt-5 sm:text-xl">
          {project.summary}
        </p>

        {/* Metadata + CTAs */}
        <div className="mt-8 flex flex-col justify-between gap-6 border-t border-white/15 pt-7 lg:flex-row lg:items-center">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-white/55">
                Client
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                {project.client}
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-white/55">
                Category
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                {project.category}
              </p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-mono text-[11px] uppercase tracking-wider text-white/55">
                Status
              </p>
              <p className="mt-1 text-sm font-semibold text-[#99f3e4]">
                {project.status}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#F92C53] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#F92C53]/30 transition-colors hover:bg-[#D91C40]"
              >
                <Globe className="h-4 w-4" />
                <span>Visit Live Site</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.internalLink && (
              <Link
                href={project.internalLink}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/20 bg-black/40 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                <span>Explore FlexCore Pre-Build</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
            <Link
              href={`/contact?project=${encodeURIComponent(project.name)}`}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/20 bg-black/30 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15"
            >
              <span>Build Similar System</span>
            </Link>
          </div>
        </div>
      </PageBanner>

      {/* Full-Width Visual Showcase */}
      <section className="mx-auto mt-8 w-full max-w-7xl px-4 sm:mt-10 sm:px-6 lg:px-8">
        {project.screenshot ? (
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-[#0d0e12] shadow-xl sm:rounded-3xl">
            <div className="flex items-center justify-between gap-2 border-b border-white/10 bg-[#14161c] px-4 py-3 sm:px-5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F92C53] sm:h-3 sm:w-3" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80 sm:h-3 sm:w-3" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#00C9A7] sm:h-3 sm:w-3" />
              </div>
              <span className="truncate font-mono text-[11px] text-white/55 sm:text-xs">
                {project.liveUrl ?? project.name}
              </span>
              <span className="hidden font-mono text-[11px] uppercase tracking-wider text-[#99f3e4] sm:inline">
                Production Preview
              </span>
            </div>
            <img
              src={project.screenshot}
              alt={`${project.name} full preview`}
              className="w-full object-cover object-top"
            />
          </div>
        ) : (
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-[#08090c] p-6 text-white shadow-xl sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#F92C53]/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 left-1/4 h-64 w-64 rounded-full bg-[#00C9A7]/15 blur-3xl" />
            <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-[#00C9A7]">
                  <Cpu className="h-4 w-4" />
                  Private / Embedded System
                </span>
                <h2 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">
                  Engineered for internal operations
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                  Because this platform runs inside {project.client}’s private
                  environment, public screenshots are withheld — here is the
                  production architecture we delivered.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
                {project.stack.map((tech, i) => (
                  <div
                    key={tech}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4"
                  >
                    <span className="font-mono text-sm font-semibold text-white">
                      {tech}
                    </span>
                    <span className="font-mono text-xs text-[#F92C53]">
                      0{i + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Tech Stack Strip */}
      <section className="mx-auto mt-8 w-full max-w-7xl px-4 sm:mt-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 rounded-2xl border border-black/8 bg-white px-5 py-5 shadow-sm sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:px-6">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#3A352D]/60">
            Technology Stack
          </span>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-black/10 bg-[#f7f7f8] px-3.5 py-1.5 font-mono text-xs font-semibold text-[#111827]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges vs Solutions */}
      {(project.challenges.length > 0 || project.solutions.length > 0) && (
        <section className="mx-auto mt-8 w-full max-w-7xl px-4 sm:mt-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-black/8 bg-white p-6 shadow-sm sm:p-10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#F92C53]">
                  01 · The Problem Space
                </span>
                <ShieldAlert className="h-4 w-4 text-[#F92C53]" />
              </div>
              <h2 className="mt-3 font-display text-2xl font-extrabold text-[#111827] sm:text-3xl">
                Challenges We Solved
              </h2>
              <ul className="mt-6 space-y-4">
                {project.challenges.map((c, idx) => (
                  <li
                    key={c}
                    className="flex items-start gap-3.5 rounded-2xl border border-black/6 bg-[#f7f7f8] p-4 sm:gap-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F92C53]/12 font-mono text-xs font-bold text-[#F92C53]">
                      0{idx + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-[#3A352D]/85 sm:text-base">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-black/8 bg-white p-6 shadow-sm sm:p-10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#079669]">
                  02 · Engineering Execution
                </span>
                <CheckCircle2 className="h-4 w-4 text-[#00C9A7]" />
              </div>
              <h2 className="mt-3 font-display text-2xl font-extrabold text-[#111827] sm:text-3xl">
                Solutions Delivered
              </h2>
              <ul className="mt-6 space-y-4">
                {project.solutions.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3.5 rounded-2xl border border-[#00C9A7]/20 bg-[#E6FAF6]/45 p-4 sm:gap-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#079669]" />
                    <span className="text-sm leading-relaxed text-[#3A352D]/90 sm:text-base">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Client Testimonial Spotlight */}
      {testimonial && (
        <section className="mx-auto mt-8 w-full max-w-7xl px-4 sm:mt-10 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#030303] p-6 text-white sm:p-12 lg:p-14">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#00C9A7]/20 blur-3xl" />
            <Quote className="h-8 w-8 text-[#F92C53]" />
            <blockquote className="mt-5 max-w-4xl text-base leading-relaxed text-white/90 sm:text-2xl">
              “{testimonial.quote}”
            </blockquote>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
              <div>
                <p className="font-display text-lg font-bold text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-white/65">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {testimonial.projects.map((proj) => (
                  <span
                    key={proj}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-xs text-[#99f3e4]"
                  >
                    {proj}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* More Case Studies */}
      <section className="mx-auto mt-10 w-full max-w-7xl px-4 sm:mt-12 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#3A352D]/55">
              More Client Work
            </span>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-[#111827] sm:text-3xl">
              Explore other case studies
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="text-sm font-semibold text-[#F92C53] hover:underline"
          >
            View all 7
          </Link>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {moreProjects.map((other) => (
            <Link
              key={other.slug}
              href={`/portfolio/${other.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-black/8 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#F92C53]/40 hover:shadow-md"
            >
              <div>
                <span className="rounded-full bg-[#E6FAF6] px-2.5 py-1 font-mono text-[11px] font-semibold text-[#079669]">
                  {other.category}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-[#111827] group-hover:text-[#F92C53]">
                  {other.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-[#3A352D]/55">
                  {other.client}
                </p>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#3A352D]/75">
                  {other.summary}
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#111827]">
                <span>Read Case Study</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
