"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Layers, Sparkles } from "lucide-react";
import { PRE_BUILDS } from "@/data/devrious";

const DEMO_SLUGS = ["gym-pos", "pharmacy-pos", "erp-system", "flexcore-ecommerce"];

export function InteractiveDemo() {
  const demoProducts = PRE_BUILDS.filter((p) => DEMO_SLUGS.includes(p.slug));
  const [selectedSlug, setSelectedSlug] = useState(demoProducts[0].slug);
  const active = demoProducts.find((p) => p.slug === selectedSlug) ?? demoProducts[0];

  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white p-4 shadow-[0_24px_70px_-24px_rgba(0,0,0,0.12)] sm:rounded-3xl sm:p-6 md:p-8">
      {/* Top Tabs */}
      <div className="flex flex-col gap-3 border-b border-black/8 pb-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pb-6">
        <div className="grid grid-cols-1 gap-2 min-[420px]:grid-cols-2 sm:flex sm:flex-wrap">
          {demoProducts.map((item) => {
            const isSelected = item.slug === selectedSlug;
            return (
              <button
                key={item.slug}
                type="button"
                onClick={() => setSelectedSlug(item.slug)}
                className={`relative min-w-0 rounded-xl px-3.5 py-2.5 text-left text-xs font-semibold transition-colors sm:px-4 sm:py-2 sm:text-center sm:text-sm ${
                  isSelected
                    ? "text-white"
                    : "bg-[#f7f7f8] text-[#3A352D]/75 hover:text-[#111827]"
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="demo-tab-bg"
                    transition={{ type: "spring", stiffness: 360, damping: 30 }}
                    className="absolute inset-0 rounded-xl bg-[#111827]"
                  />
                )}
                <span className="relative z-10 block truncate">{item.name}</span>
              </button>
            );
          })}
        </div>

        <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full bg-[#E6FAF6] px-3 py-1 font-mono text-xs font-semibold text-[#079669] sm:self-auto">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00C9A7]" />
          Interactive Preview
        </span>
      </div>

      {/* Preview Body */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.slug}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 grid gap-6 sm:mt-8 sm:gap-8 lg:grid-cols-12"
        >
          {/* Left: System Info & Modules */}
          <div className="flex min-w-0 flex-col justify-between lg:col-span-5">
            <div>
              <span className="font-mono text-xs font-medium uppercase tracking-wider text-[#F92C53]">
                {active.category}
              </span>
              <h3 className="mt-2 font-display text-xl font-bold text-[#111827] sm:text-2xl">
                {active.name}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#3A352D]/75 sm:mt-3">
                {active.tagline}
              </p>

              <div className="mt-5 space-y-2.5 sm:mt-6">
                {active.modules.slice(0, 4).map((mod) => (
                  <div
                    key={mod}
                    className="flex min-w-0 items-start gap-2.5 text-sm text-[#3A352D]/85"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#00C9A7]" />
                    <span className="min-w-0 break-words leading-snug">{mod}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 border-t border-black/8 pt-5 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#3A352D]/50">
                  System Price
                </p>
                <p className="font-display text-2xl font-extrabold text-[#111827]">
                  LKR {active.priceLkr.toLocaleString()}
                </p>
              </div>
              <Link
                href={`/pre-builts/${active.slug}`}
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-[#F92C53] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#D91C40] sm:w-auto"
              >
                <span>Inspect System</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right: Simulated Live Workspace Panel */}
          <div className="min-w-0 lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-[#030303] p-4 text-white sm:p-6">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#F92C53]/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-[#00C9A7]/15 blur-3xl" />

              {/* Window Chrome */}
              <div className="relative flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3.5 sm:flex-nowrap sm:pb-4">
                <div className="flex min-w-0 flex-1 items-center gap-1.5 sm:gap-2">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#F92C53]" />
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-white/25" />
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#00C9A7]" />
                  <span className="ml-1 truncate font-mono text-[11px] text-white/60 sm:ml-2 sm:text-xs">
                    devrious.lk/pre-builts/{active.slug}
                  </span>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1 rounded-md bg-white/10 px-2 py-1 font-mono text-[10px] text-[#99f3e4] sm:text-[11px]">
                  <Sparkles className="h-3 w-3 shrink-0" /> Ready to deploy
                </span>
              </div>

              {/* Highlights Grid */}
              <div className="relative mt-4 grid grid-cols-1 gap-2.5 min-[480px]:grid-cols-3 sm:mt-5 sm:gap-3">
                {active.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 min-[480px]:block min-[480px]:p-3.5"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-wider text-white/50">
                      {h.label}
                    </p>
                    <p className="font-display text-xs font-bold text-white min-[480px]:mt-1 sm:text-base">
                      {h.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Screenshot or Module Architecture View */}
              {active.screenshot ? (
                <div className="relative mt-4 overflow-hidden rounded-xl border border-white/15 bg-black/40 sm:mt-5">
                  <img
                    src={active.screenshot}
                    alt={`${active.name} interface preview`}
                    className="block h-auto w-full object-contain"
                  />
                </div>
              ) : (
                <div className="relative mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-3.5 sm:mt-5 sm:p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-white/60">
                    <span className="inline-flex items-center gap-1.5 font-mono">
                      <Layers className="h-3.5 w-3.5 shrink-0 text-[#F92C53]" />
                      Core Operational Modules
                    </span>
                    <span className="font-mono text-[#00C9A7]">
                      {active.modules.length} included
                    </span>
                  </div>
                  <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {active.modules.map((m, i) => (
                      <div
                        key={m}
                        className="flex min-w-0 items-start gap-2 rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2 text-xs text-white/80 sm:items-center"
                      >
                        <span className="mt-0.5 shrink-0 font-mono text-[10px] text-[#00C9A7] sm:mt-0">
                          0{i + 1}
                        </span>
                        <span className="min-w-0 break-words leading-snug sm:truncate">
                          {m}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
