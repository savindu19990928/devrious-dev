"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Search, Sparkles } from "lucide-react";
import { PRE_BUILDS, type PreBuildProduct } from "@/data/devrious";

const CATEGORIES: Array<"All" | PreBuildProduct["category"]> = [
  "All",
  "Point of Sale",
  "Enterprise & Operations",
  "Hospitality & Fleet",
  "Digital & Commerce",
];

const LKR_PER_USD = 295;

export function PreBuildsMarketplace() {
  const [currency, setCurrency] = useState<"LKR" | "USD">("LKR");
  const [category, setCategory] = useState<"All" | PreBuildProduct["category"]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRE_BUILDS.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.modules.some((m) => m.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const formatPrice = (lkr: number) => {
    if (currency === "LKR") return `LKR ${lkr.toLocaleString()}`;
    const approxUsd = Math.round(lkr / LKR_PER_USD);
    return `~$${approxUsd.toLocaleString()} USD`;
  };

  return (
    <div>
      {/* Controls Bar */}
      <div className="flex flex-col gap-4 rounded-2xl border border-black/10 bg-white p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const active = category === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition-colors ${
                  active
                    ? "bg-[#111827] text-white"
                    : "bg-[#f7f7f8] text-[#3A352D]/75 hover:text-[#111827]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search + Currency Switcher */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#3A352D]/45" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search systems or modules..."
              aria-label="Search Pre Builds"
              className="w-full rounded-xl border border-black/12 bg-[#f7f7f8] py-2 pl-9 pr-4 text-sm text-[#111827] placeholder:text-[#3A352D]/45 focus:border-[#F92C53] focus:bg-white focus:outline-none sm:w-64"
            />
          </div>

          <div
            role="group"
            aria-label="Currency selector"
            className="inline-flex rounded-xl border border-black/10 bg-[#f7f7f8] p-1"
          >
            {(["LKR", "USD"] as const).map((curr) => (
              <button
                key={curr}
                type="button"
                onClick={() => setCurrency(curr)}
                className={`rounded-lg px-3 py-1.5 font-mono text-xs font-semibold transition-all ${
                  currency === curr
                    ? "bg-white text-[#111827] shadow-sm"
                    : "text-[#3A352D]/60 hover:text-[#111827]"
                }`}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>
      </div>

      {currency === "USD" && (
        <p className="mt-3 font-mono text-xs text-[#3A352D]/65">
          * Showing approximate USD conversion (~1 USD = {LKR_PER_USD} LKR) for
          reference; systems are billed in LKR.
        </p>
      )}

      {/* Product Grid */}
      {filtered.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-black/10 bg-white p-12 text-center">
          <p className="font-display text-lg font-bold text-[#111827]">
            No matching systems found
          </p>
          <p className="mt-2 text-sm text-[#3A352D]/65">
            Try clearing your search or switching categories.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, idx) => (
            <motion.article
              key={product.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className="group flex flex-col justify-between rounded-3xl border border-black/8 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F92C53]/45 hover:shadow-[0_24px_60px_-24px_rgba(249,44,83,0.18)]"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E6FAF6] px-3 py-1 font-mono text-[11px] font-semibold text-[#079669]">
                    <Sparkles className="h-3 w-3" />
                    {product.category}
                  </span>
                  <span className="font-mono text-[11px] text-[#3A352D]/45">
                    {product.highlights[0]?.value}
                  </span>
                </div>

                <div className="mt-4 overflow-hidden rounded-2xl border border-black/8 bg-[#2E0308]">
                  <img
                    src={product.bannerImage}
                    alt={`${product.name} preview`}
                    className="h-40 w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <h2 className="mt-5 font-display text-xl font-extrabold text-[#111827]">
                  {product.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#3A352D]/75">
                  {product.summary}
                </p>

                <ul className="mt-5 space-y-2 border-t border-black/8 pt-4">
                  {product.modules.slice(0, 3).map((m) => (
                    <li
                      key={m}
                      className="flex items-start gap-2 text-xs text-[#3A352D]/80"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#00C9A7]" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 border-t border-black/8 pt-5">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#3A352D]/50">
                    Starting Price
                  </span>
                  <span className="font-display text-2xl font-extrabold text-[#111827]">
                    {formatPrice(product.priceLkr)}
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  <Link
                    href={`/pre-builds/${product.slug}`}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#111827] px-3.5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#F92C53]"
                  >
                    <span>View Details</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href={`/contact?product=${encodeURIComponent(product.name)}&intent=demo`}
                    className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-[#f7f7f8] px-3.5 py-2.5 text-xs font-semibold text-[#111827] transition-colors hover:border-[#F92C53] hover:bg-[#FFF0F3] hover:text-[#F92C53]"
                  >
                    Request Demo
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </div>
  );
}
