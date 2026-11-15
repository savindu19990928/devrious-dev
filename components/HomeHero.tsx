"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Cpu,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/devrious";

const EASE_SLOW_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const HEADLINE_MAIN_WORDS = ["Software", "that", "runs", "your", "business,"];
const HEADLINE_ACCENT_WORDS = ["built", "properly."];

export function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  // Pointer-driven parallax & spotlight (desktop fine pointer)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotX = useMotionValue(70);
  const spotY = useMotionValue(35);

  const springX = useSpring(mouseX, { stiffness: 110, damping: 24, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 110, damping: 24, mass: 0.6 });
  const hudX = useTransform(springX, (v) => -v * 0.75);
  const hudY = useTransform(springY, (v) => -v * 0.75);

  const smoothSpotX = useSpring(spotX, { stiffness: 90, damping: 22 });
  const smoothSpotY = useSpring(spotY, { stiffness: 90, damping: 22 });
  const spotlightBg = useMotionTemplate`radial-gradient(560px circle at ${smoothSpotX}% ${smoothSpotY}%, rgba(255, 77, 106, 0.20), rgba(0, 201, 167, 0.06) 45%, transparent 72%)`;

  // Scroll-linked subtle parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const scrollY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["0%", "7%"]
  );
  const scrollScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [1, 1.05]
  );

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;
    mouseX.set((relX - 0.5) * -18);
    mouseY.set((relY - 0.5) * -14);
    spotX.set(relX * 100);
    spotY.set(relY * 100);
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    spotX.set(72);
    spotY.set(34);
  };

  return (
    <section ref={sectionRef} className="relative bg-[#f7f7f8] p-2.5 sm:p-4">
      <div
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="relative mx-auto flex max-w-[1800px] flex-col justify-between overflow-hidden rounded-2xl bg-[#3D030A] shadow-[0_24px_70px_-20px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.16)] ring-1 ring-black/10 sm:rounded-3xl lg:min-h-[86vh] xl:min-h-[88vh]"
      >
        {/* Mobile & Tablet Hero Visual (< lg): Dedicated focal-centered crop so core subject is 100% visible */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#2E0308] sm:aspect-[16/9] lg:hidden">
          <motion.picture
            initial={reduceMotion ? false : { scale: 1.08, opacity: 0.82 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.45, ease: EASE_SLOW_OUT }}
            className="block h-full w-full"
          >
            <source
              media="(max-width: 639px)"
              srcSet="/images/banners/hero-banner-mobile.jpg"
            />
            <source
              media="(max-width: 1023px)"
              srcSet="/images/banners/hero-banner-tablet.jpg"
            />
            <img
              src="/images/banners/hero-banner-mobile.jpg"
              alt="Devrious software engineering studio in Colombo, Sri Lanka"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover object-center"
            />
          </motion.picture>

          {/* Subtle bottom-only fade into the text container so the subject's visor & face stay 100% clear */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#3D030A] via-[#3D030A]/55 to-transparent sm:h-28" />

          {/* Mobile/Tablet Floating Live Telemetry Pill */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE_SLOW_OUT }}
            className="absolute left-3.5 top-3.5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/55 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-white/95 backdrop-blur-md sm:left-5 sm:top-5 sm:text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00C9A7] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00C9A7]" />
            </span>
            <span>Colombo Studio · Est. 2024</span>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: EASE_SLOW_OUT }}
            className="absolute bottom-3 right-3.5 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-black/60 px-3 py-1.5 font-mono text-[10px] font-medium text-[#99f3e4] backdrop-blur-md sm:bottom-4 sm:right-5 sm:text-xs"
          >
            <Activity className="h-3.5 w-3.5 text-[#F92C53]" />
            <span>10 Ready-to-Deploy Systems</span>
          </motion.div>
        </div>

        {/* Desktop Full-Bleed Crimson Tech Editorial Portrait (lg+) */}
        <motion.div
          style={{
            x: springX,
            y: scrollY,
            scale: scrollScale,
          }}
          className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
        >
          <motion.img
            initial={reduceMotion ? false : { scale: 1.08, opacity: 0.82 }}
            animate={{ scale: 1.02, opacity: 1 }}
            transition={{ duration: 1.55, ease: EASE_SLOW_OUT }}
            src="/images/banners/hero-banner.jpg"
            alt="Devrious software engineering studio in Colombo, Sri Lanka"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-[74%_22%] xl:object-[70%_20%]"
          />
        </motion.div>

        {/* Interactive Cursor Spotlight (Desktop) */}
        <motion.div
          style={{ background: spotlightBg }}
          className="pointer-events-none absolute inset-0 z-[1] hidden lg:block"
        />

        {/* Desktop Editorial Scrims: Left-confined so right 46% VR Visor Portrait is 100% clear */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] hidden lg:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,1,3,0.88) 0%, rgba(46,3,8,0.68) 38%, rgba(46,3,8,0.18) 56%, rgba(0,0,0,0) 72%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] hidden lg:block"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.04) 50%, rgba(10,1,3,0.68) 100%)",
          }}
        />

        {/* Desktop Floating HUD Telemetry Badges framing the right visual zone */}
        <motion.div
          style={{ x: hudX, y: hudY }}
          className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-[46%] lg:block"
        >
          {/* Top-right floating status pill */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.95 }}
            animate={
              reduceMotion
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 1, y: [0, -7, 0], scale: 1 }
            }
            transition={{
              opacity: { duration: 0.9, delay: 0.65, ease: EASE_SLOW_OUT },
              scale: { duration: 0.9, delay: 0.65, ease: EASE_SLOW_OUT },
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute right-8 top-24 flex items-center gap-3 rounded-2xl border border-white/20 bg-black/50 px-4 py-2.5 text-xs text-white shadow-2xl backdrop-blur-xl xl:right-12"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00C9A7] opacity-80" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#00C9A7]" />
            </span>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#99f3e4]">
                Production Grade
              </p>
              <p className="font-semibold text-white">
                Zero Vendor Lock-In · Full Code Handover
              </p>
            </div>
          </motion.div>

          {/* Bottom-right floating telemetry card */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.95 }}
            animate={
              reduceMotion
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 1, y: [0, 7, 0], scale: 1 }
            }
            transition={{
              opacity: { duration: 0.9, delay: 0.85, ease: EASE_SLOW_OUT },
              scale: { duration: 0.9, delay: 0.85, ease: EASE_SLOW_OUT },
              y: { duration: 5.2, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute bottom-20 left-4 flex items-center gap-3.5 rounded-2xl border border-white/20 bg-black/55 px-4 py-3 text-xs text-white shadow-2xl backdrop-blur-xl xl:left-8"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F92C53]/25 text-[#FF6B88] ring-1 ring-[#F92C53]/40">
              <Cpu className="h-4 w-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/65">
                  Rapid Deployment
                </span>
                <span className="rounded-full bg-[#00C9A7]/20 px-2 py-0.5 font-mono text-[10px] font-bold text-[#99f3e4]">
                  1–4 Weeks
                </span>
              </div>
              <p className="mt-0.5 font-semibold text-white">
                Custom Web, AI &amp; 10 Pre-Built Suites
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Top Bar inside Hero (Desktop lg+) */}
        <div className="relative z-10 mx-auto hidden w-full max-w-7xl items-center justify-between px-6 pt-8 sm:px-10 lg:flex lg:px-14">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.05, ease: EASE_SLOW_OUT }}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 text-xs font-medium text-white/95 backdrop-blur-md"
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

          <motion.span
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: EASE_SLOW_OUT }}
            className="rounded-full border border-white/15 bg-black/35 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-md"
          >
            Est. 2024 · Colombo
          </motion.span>
        </div>

        {/* Main Editorial Headline & CTAs (Slow Staggered Text Sequence < 2.0s) */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-7 sm:px-10 sm:py-10 lg:py-16 lg:px-14">
          <div className="max-w-2xl lg:max-w-[52%] xl:max-w-[54%]">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.05, ease: EASE_SLOW_OUT }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[11px] font-medium text-white/95 lg:hidden"
            >
              <Sparkles className="h-3 w-3 text-[#00C9A7]" />
              <span>{COMPANY_INFO.tagline}</span>
            </motion.div>

            {/* Word-by-word slow editorial reveal: 7 words * 0.075s + 0.12s + 0.88s = 1.525s (< 2s) */}
            <h1
              aria-label="Software that runs your business, built properly."
              className="font-display text-3xl font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.5rem] xl:text-[4.15rem]"
            >
              {HEADLINE_MAIN_WORDS.map((word, idx) => (
                <motion.span
                  key={word}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, y: 26, filter: "blur(6px)" }
                  }
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.88,
                    delay: 0.12 + idx * 0.075,
                    ease: EASE_SLOW_OUT,
                  }}
                  className="mr-[0.26em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
              <span className="relative inline-block text-[#FFD6DE]">
                {HEADLINE_ACCENT_WORDS.map((word, idx) => {
                  const wordIndex = HEADLINE_MAIN_WORDS.length + idx;
                  return (
                    <motion.span
                      key={word}
                      initial={
                        reduceMotion
                          ? false
                          : { opacity: 0, y: 26, filter: "blur(6px)" }
                      }
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.88,
                        delay: 0.12 + wordIndex * 0.075,
                        ease: EASE_SLOW_OUT,
                      }}
                      className={
                        idx === 0 ? "mr-[0.26em] inline-block" : "inline-block"
                      }
                    >
                      {word}
                    </motion.span>
                  );
                })}
                <motion.span
                  initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{
                    duration: 0.95,
                    delay: 0.72,
                    ease: EASE_SLOW_OUT,
                  }}
                  className="absolute -bottom-1 left-0 right-0 hidden h-1 origin-left rounded-full bg-gradient-to-r from-[#F92C53] via-[#FF8DA1] to-[#00C9A7] sm:block"
                />
              </span>
            </h1>

            {/* Supporting paragraph: starts at 0.52s, duration 0.95s -> finishes at 1.47s */}
            <motion.p
              initial={
                reduceMotion ? false : { opacity: 0, y: 22, filter: "blur(4px)" }
              }
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.95, delay: 0.52, ease: EASE_SLOW_OUT }}
              className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:mt-5 sm:text-lg"
            >
              Devrious designs, builds and secures custom websites, business
              software and AI tools — and offers ready-made POS, ERP and
              management systems you can deploy in weeks, not months.
            </motion.p>

            {/* Animated Quick Metrics Pills: finishes by 1.75s */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Custom Web & Software",
                "10 Pre-Built POS & ERP Systems",
                "OWASP Security Audits",
              ].map((pill, idx) => (
                <motion.span
                  key={pill}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.7 + idx * 0.09,
                    ease: EASE_SLOW_OUT,
                  }}
                  className="rounded-lg border border-white/15 bg-black/30 px-2.5 py-1 font-mono text-[11px] text-white/85 backdrop-blur-sm"
                >
                  {pill}
                </motion.span>
              ))}
            </div>

            {/* Primary & Secondary CTAs: starts at 0.88s, duration 0.95s -> finishes at 1.83s (< 2s) */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.88, ease: EASE_SLOW_OUT }}
              className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap"
            >
              <motion.div
                whileHover={reduceMotion ? undefined : { y: -2, scale: 1.015 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                transition={{ duration: 0.16, ease: EASE_SLOW_OUT }}
              >
                <Link
                  href="/contact"
                  className="group flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#111827] shadow-[0_14px_34px_-10px_rgba(0,0,0,0.45)] transition-colors duration-200 hover:bg-[#F92C53] hover:text-white"
                >
                  <span>Start a project</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={reduceMotion ? undefined : { y: -2, scale: 1.015 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                transition={{ duration: 0.16, ease: EASE_SLOW_OUT }}
              >
                <Link
                  href="/pre-builts"
                  className="group flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/30 bg-black/35 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors duration-200 hover:border-white hover:bg-white/15"
                >
                  <span>Explore Pre Builts</span>
                  <ArrowUpRight className="h-4 w-4 text-[#00C9A7] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Editorial Strip: starts at 0.95s, duration 0.9s -> finishes at 1.85s */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95, ease: EASE_SLOW_OUT }}
          className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between border-t border-white/15 px-5 py-4 text-xs text-white/80 sm:px-10 lg:px-14"
        >
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <span className="inline-flex items-center gap-1.5 font-medium text-white">
              <ShieldCheck className="h-4 w-4 text-[#00C9A7]" />
              OWASP &amp; Cloudflare Hardened
            </span>
            <span className="hidden font-mono text-[11px] text-white/65 md:inline">
              React · Next.js · Django DRF · PostgreSQL
            </span>
          </div>
          <a
            href="#services-showcase"
            className="group inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-white/85 transition-colors hover:text-white"
          >
            <span>Explore</span>
            <motion.span
              animate={reduceMotion ? undefined : { y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex"
            >
              <ArrowDown className="h-3.5 w-3.5 text-[#00C9A7]" />
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
