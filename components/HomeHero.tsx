"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/devrious";

export function HomeHero() {
  return (
    <section className="relative bg-[#f7f7f8] p-3">
      <div className="relative mx-auto flex max-w-[1800px] flex-col justify-between overflow-hidden rounded-2xl bg-[#3D030A] shadow-[0_24px_70px_-20px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.16)] ring-1 ring-black/10 md:min-h-[88vh]">
        {/* Mobile Hero Visual (ensures core subject is 100% visible on mobile) */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#3D030A] md:hidden">
          <img
            src="/images/banners/hero-banner.jpg"
            alt="Devrious futuristic creative technology portrait"
            className="h-full w-full object-cover object-[70%_20%]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3D030A] via-transparent to-black/20" />
        </div>

        {/* Desktop Full-bleed Crimson Tech Editorial Portrait */}
        <motion.img
          initial={{ scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          src="/images/banners/hero-banner.jpg"
          alt="Devrious futuristic creative technology portrait"
          className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full object-cover object-right md:block"
        />

        {/* Desktop Editorial Scrims */}
        <div className="pointer-events-none absolute inset-0 z-[1] hidden bg-gradient-to-r from-black/80 via-[#2E0308]/45 to-transparent md:block" />
        <div
          className="pointer-events-none absolute inset-0 z-[1] hidden md:block"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 52%, rgba(0,0,0,0.62) 100%)",
          }}
        />

        {/* Top Bar inside Hero (Desktop) */}
        <div className="relative z-10 mx-auto hidden w-full max-w-7xl items-center justify-between px-6 pt-8 sm:px-10 md:flex lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-black/35 px-3.5 py-1.5 text-xs font-medium text-white/95 backdrop-blur-md"
          >
            <img
              src="/logo.ico"
              alt="Devrious"
              width={16}
              height={16}
              className="h-4 w-4 rounded-sm object-contain"
            />
            <span className="h-1.5 w-1.5 rounded-full bg-[#00C9A7]" />
            <span>{COMPANY_INFO.tagline}</span>
          </motion.div>

          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">
            Est. 2024 · Colombo
          </span>
        </div>

        {/* Main Editorial Headline & CTAs */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-8 sm:px-10 md:py-16 lg:px-14">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[11px] font-medium text-white/95 md:hidden">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00C9A7]" />
              <span>{COMPANY_INFO.tagline}</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-3xl font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:text-5xl lg:text-[4.25rem]"
            >
              Software that runs your business,{" "}
              <span className="text-[#FFD6DE]">built properly.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-xl text-sm leading-relaxed text-white/85 sm:text-lg"
            >
              Devrious designs, builds and secures custom websites, business
              software and AI tools — and offers ready-made POS, ERP and
              management systems you can deploy in weeks, not months.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#111827] shadow-[0_14px_34px_-10px_rgba(0,0,0,0.45)] transition-all duration-200 hover:bg-[#F92C53] hover:text-white"
              >
                <span>Start a project</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/pre-builds"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-black/30 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:border-white hover:bg-white/15"
              >
                <span>Explore Pre Builds</span>
                <ArrowUpRight className="h-4 w-4 text-[#00C9A7] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Editorial Strip */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between border-t border-white/15 px-6 py-4 text-xs text-white/75 sm:px-10 lg:px-14">
          <div className="flex flex-wrap items-center gap-5">
            <span className="inline-flex items-center gap-1.5 font-medium text-white">
              <ShieldCheck className="h-4 w-4 text-[#00C9A7]" />
              OWASP &amp; Cloudflare Hardened
            </span>
            <span className="hidden font-mono text-[11px] text-white/65 sm:inline">
              React · Next.js · Django DRF · PostgreSQL
            </span>
          </div>
          <a
            href="#services-showcase"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-white/80 transition-colors hover:text-white"
          >
            <span>Explore</span>
            <ArrowDown className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
