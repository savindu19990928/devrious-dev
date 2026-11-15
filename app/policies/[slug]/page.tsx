import fs from "fs";
import path from "path";
import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { POLICY_DOCS } from "@/data/devrious";
import {
  buildPageMetadata,
  buildPolicyPageSchema,
  serializeJsonLd,
} from "@/data/seo";
import { PageBanner } from "@/components/PageBanner";

export function generateStaticParams() {
  return POLICY_DOCS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = POLICY_DOCS.find((p) => p.slug === slug);
  if (!doc) return { title: "Policy Not Found" };
  return buildPageMetadata({
    title: `${doc.title} — Legal & Compliance`,
    description: `Official Devrious ${doc.title} governing custom software engineering, web development, Pre-Built systems, and website services in Sri Lanka.`,
    path: `/policies/${doc.slug}`,
    image: "/images/banners/banner-policies.jpg",
    imageAlt: `${doc.title} — Devrious Legal & Compliance`,
    keywords: [`Devrious ${doc.title}`, doc.title],
  });
}

function renderPolicyMarkdown(markdown: string) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: Array<{ type: string; content: string; items?: string[] }> = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      blocks.push({ type: "list", content: "", items: listItems });
      listItems = [];
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushList();
      continue;
    }
    if (line.startsWith("# ")) {
      flushList();
      blocks.push({ type: "h1", content: line.slice(2) });
    } else if (line.startsWith("## ")) {
      flushList();
      blocks.push({ type: "h2", content: line.slice(3) });
    } else if (line.startsWith("### ")) {
      flushList();
      blocks.push({ type: "h3", content: line.slice(4) });
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      listItems.push(line.slice(2));
    } else {
      flushList();
      blocks.push({ type: "p", content: line });
    }
  }
  flushList();
  return blocks;
}

function formatInline(text: string) {
  return text.replace(/\*\*(.*?)\*\*/g, "$1");
}

export default function PolicyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <main className="mx-auto max-w-4xl px-4 py-12 pb-24 sm:px-6 lg:px-8">
          <div className="h-96 animate-pulse rounded-3xl border border-black/8 bg-white" />
        </main>
      }
    >
      <PolicyContent params={params} />
    </Suspense>
  );
}

async function PolicyContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = POLICY_DOCS.find((p) => p.slug === slug);
  if (!doc) notFound();

  const filePath = path.join(process.cwd(), "policies", doc.file);
  const raw = fs.readFileSync(filePath, "utf8");
  const blocks = renderPolicyMarkdown(raw);
  const policySchema = buildPolicyPageSchema(doc.slug, doc.title);

  return (
    <main className="flex flex-col bg-[#f7f7f8] pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(policySchema) }}
      />
      <PageBanner
        image="/images/banners/banner-policies.jpg"
        imageAlt={`${doc.title} — Devrious legal and governance documentation`}
      >
        <Link
          href="/"
          className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-1.5 text-xs font-semibold text-white/85 backdrop-blur-md transition-colors hover:border-[#F92C53] hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to home</span>
        </Link>
        <p className="mt-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#99f3e4]">
          Devrious Legal & Compliance
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
          {doc.title}
        </h1>
      </PageBanner>

      <div className="mx-auto mt-10 w-full max-w-4xl px-4 sm:px-6 lg:px-8">
      <article className="rounded-3xl border border-black/8 bg-white p-8 shadow-sm sm:p-12">
        <div className="mb-8 flex flex-wrap gap-2 border-b border-black/8 pb-6">
          {POLICY_DOCS.map((p) => (
            <Link
              key={p.slug}
              href={`/policies/${p.slug}`}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                p.slug === slug
                  ? "bg-[#F92C53] text-white"
                  : "bg-[#f7f7f8] text-[#3A352D]/75 hover:text-[#111827]"
              }`}
            >
              {p.title}
            </Link>
          ))}
        </div>

        <div className="space-y-4">
          {blocks.map((block, i) => {
            if (block.type === "h1") {
              return (
                <h2
                  key={i}
                  className="font-display text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl"
                >
                  {formatInline(block.content)}
                </h2>
              );
            }
            if (block.type === "h2") {
              return (
                <h2
                  key={i}
                  className="pt-6 font-display text-xl font-bold text-[#111827]"
                >
                  {formatInline(block.content)}
                </h2>
              );
            }
            if (block.type === "h3") {
              return (
                <h3
                  key={i}
                  className="pt-3 font-display text-base font-bold text-[#111827]"
                >
                  {formatInline(block.content)}
                </h3>
              );
            }
            if (block.type === "list" && block.items) {
              return (
                <ul
                  key={i}
                  className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#3A352D]/85"
                >
                  {block.items.map((item, j) => (
                    <li key={j}>{formatInline(item)}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p
                key={i}
                className="text-sm leading-relaxed text-[#3A352D]/85 sm:text-base"
              >
                {formatInline(block.content)}
              </p>
            );
          })}
        </div>
      </article>
      </div>
    </main>
  );
}

