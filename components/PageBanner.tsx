"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface PageBannerProps {
  image: string;
  imageAlt: string;
  /** Tailwind object-position override for mobile/tablet top visual if needed */
  mobileFocus?: string;
  /** Tailwind object-position override for desktop visual if needed */
  desktopFocus?: string;
  /** When true, renders the complete uncropped image (h-auto w-full object-contain) across all screen sizes */
  fullImage?: boolean;
  children: ReactNode;
  className?: string;
}

const EASE_SLOW_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const WAAPI_EASING = "cubic-bezier(0.16, 1, 0.3, 1)";

/**
 * Responsive multi-breakpoint photo banner with slow, graceful text choreography (< 2.0s total).
 * - Mobile (< 640px): 4:3 top frame serving `-mobile.jpg` focal crop so core subject is dead-center.
 * - Tablet (640px–1023px): 16:9 top frame serving `-tablet.jpg` focal crop so text never overlaps the subject.
 * - Desktop (lg: 1024px+): Anchored in the right visual zone with a smooth crimson studio fade on the left.
 * - Text Choreography: Animates eyebrow badges, word-by-word `<h1>` headline, `<p>` copy, and action/stat blocks
 *   with smooth 820ms–950ms curves finishing completely between 1.50s and 1.80s (< 2.0s).
 */
export function PageBanner({
  image,
  imageAlt,
  mobileFocus = "object-center",
  desktopFocus = "object-center",
  fullImage = false,
  children,
  className = "",
}: PageBannerProps) {
  const reduceMotion = useReducedMotion();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = contentRef.current;
    if (!root || reduceMotion) return;

    const animations: Animation[] = [];

    // 1. Word-by-word slow reveal on any <h1> inside the banner (finishes by ~1.50s)
    const h1 = root.querySelector("h1");
    if (h1 && !h1.dataset.wordsSplit) {
      const fullText = h1.textContent?.trim() ?? "";
      if (fullText && h1.children.length === 0) {
        h1.dataset.wordsSplit = "true";
        h1.setAttribute("aria-label", fullText);
        const words = fullText.split(/\s+/);
        h1.textContent = "";

        const stepMs = Math.min(68, Math.floor(480 / Math.max(1, words.length)));
        words.forEach((word, idx) => {
          const span = document.createElement("span");
          span.textContent = word;
          span.setAttribute("aria-hidden", "true");
          span.style.display = "inline-block";
          if (idx < words.length - 1) {
            span.style.marginRight = "0.26em";
          }
          h1.appendChild(span);

          const anim = span.animate(
            [
              {
                opacity: 0,
                transform: "translate3d(0, 26px, 0)",
                filter: "blur(6px)",
              },
              {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
                filter: "blur(0px)",
              },
            ],
            {
              duration: 880,
              delay: 140 + idx * stepMs,
              easing: WAAPI_EASING,
              fill: "both",
            }
          );
          animations.push(anim);
        });
      }
    }

    // 2. Staggered slow reveal for badges/links, paragraphs, and CTA/stat blocks (all finish < 1.80s)
    const innerContainer =
      root.firstElementChild &&
        root.firstElementChild.tagName === "DIV" &&
        root.children.length === 1
        ? (root.firstElementChild as HTMLElement)
        : root;

    const blocks = Array.from(innerContainer.children) as HTMLElement[];
    blocks.forEach((el, idx) => {
      if (el.tagName === "H1") return; // Already animated word-by-word above

      // Determine timing based on whether element is before or after H1
      const isBeforeH1 = h1
        ? Boolean(el.compareDocumentPosition(h1) & Node.DOCUMENT_POSITION_FOLLOWING)
        : idx === 0;

      const delayMs = isBeforeH1 ? 50 + idx * 90 : Math.min(820, 460 + idx * 140);
      const durationMs = isBeforeH1 ? 820 : 940;

      const anim = el.animate(
        [
          {
            opacity: 0,
            transform: "translate3d(0, 22px, 0)",
            filter: "blur(4px)",
          },
          {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
            filter: "blur(0px)",
          },
        ],
        {
          duration: durationMs,
          delay: delayMs,
          easing: WAAPI_EASING,
          fill: "both",
        }
      );
      animations.push(anim);
    });

    return () => {
      animations.forEach((a) => a.cancel());
    };
  }, [reduceMotion, image]);

  const hasResponsiveVariants =
    image.endsWith(".jpg") &&
    !image.endsWith("-mobile.jpg") &&
    !image.endsWith("-tablet.jpg");

  const mobileSrc = hasResponsiveVariants
    ? image.replace(/\.jpg$/, "-mobile.jpg")
    : image;
  const tabletSrc = hasResponsiveVariants
    ? image.replace(/\.jpg$/, "-tablet.jpg")
    : image;

  const isStudioRightComposed =
    image.includes("banner-services") ||
    image.includes("cybersecurity-banner") ||
    image.includes("hero-banner");

  const isScreenshot = image.endsWith(".png");

  return (
    <section className="px-3 pt-3 sm:px-6 sm:pt-4">
      <div
        className={`relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#1a0205] text-white shadow-[0_24px_80px_-24px_rgba(46,3,8,0.55)] ring-1 ring-white/10 sm:rounded-3xl ${className}`}
      >
        {fullImage ? (
          <>
            {/* Ambient Studio Glows */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#F92C53]/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#00C9A7]/12 blur-3xl" />

            <div className="relative z-10 grid grid-cols-1 gap-6 p-4 sm:gap-8 sm:p-8 lg:grid-cols-12 lg:items-center lg:gap-10 lg:p-12 xl:p-14">
              {/* Full-Visibility Project Image Frame (100% visible on mobile, tablet, and desktop) */}
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.95, ease: EASE_SLOW_OUT }}
                className="order-1 min-w-0 lg:order-2 lg:col-span-7"
              >
                <div className="overflow-hidden rounded-xl border border-white/15 bg-[#0d0e12] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.75)] sm:rounded-2xl">
                  <div className="flex items-center justify-between gap-2 border-b border-white/10 bg-[#14161c] px-3.5 py-2.5 sm:px-4">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#F92C53]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#00C9A7]" />
                    </div>
                    <span className="truncate font-mono text-[10px] text-white/60 sm:text-xs">
                      {imageAlt}
                    </span>
                    <span className="hidden font-mono text-[10px] uppercase tracking-wider text-[#99f3e4] sm:inline">
                      Project Preview
                    </span>
                  </div>
                  <img
                    src={image}
                    alt={imageAlt}
                    fetchPriority="high"
                    decoding="async"
                    className="block h-auto w-full object-contain"
                  />
                </div>
              </motion.div>

              {/* Animated Text Content Column */}
              <div
                ref={contentRef}
                className="order-2 min-w-0 lg:order-1 lg:col-span-5"
              >
                {children}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Mobile (< 640px) & Tablet (640px–1023px) Dedicated Top Visual Frame */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1a0205] sm:aspect-[16/9] lg:hidden">
              <motion.picture
                initial={reduceMotion ? false : { scale: 1.07, opacity: 0.82 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.4, ease: EASE_SLOW_OUT }}
                className="block h-full w-full"
              >
                {hasResponsiveVariants && (
                  <>
                    <source media="(max-width: 639px)" srcSet={mobileSrc} />
                    <source media="(max-width: 1023px)" srcSet={tabletSrc} />
                  </>
                )}
                <img
                  src={mobileSrc}
                  alt={imageAlt}
                  fetchPriority="high"
                  decoding="async"
                  className={`h-full w-full object-cover ${isScreenshot ? "object-top" : mobileFocus
                    }`}
                />
              </motion.picture>
              {/* Soft bottom-only transition so the core image subject stays 100% clear */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#1a0205] via-[#1a0205]/45 to-transparent sm:h-24" />
            </div>

            {/* Desktop (lg: 1024px+) Right-Aligned Visual Zone */}
            <div
              className={`pointer-events-none absolute inset-y-0 right-0 hidden overflow-hidden lg:block ${isStudioRightComposed ? "left-0 w-full" : "left-[30%] w-[70%]"
                }`}
            >
              <motion.img
                initial={reduceMotion ? false : { scale: 1.08, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: EASE_SLOW_OUT }}
                src={image}
                alt=""
                aria-hidden="true"
                fetchPriority="high"
                decoding="async"
                className={`h-full w-full object-cover ${isStudioRightComposed
                  ? "object-right"
                  : isScreenshot
                    ? "object-left-top opacity-90"
                    : desktopFocus
                  }`}
              />
              {/* Left-edge blend into #1a0205 so left text is crisp while right subject stays bright */}
              <div
                className="absolute inset-0"
                style={{
                  background: isStudioRightComposed
                    ? "linear-gradient(90deg, #1a0205 0%, rgba(26,2,5,0.82) 38%, rgba(26,2,5,0.22) 58%, rgba(26,2,5,0) 76%)"
                    : "linear-gradient(90deg, #1a0205 0%, rgba(26,2,5,0.86) 24%, rgba(26,2,5,0.32) 48%, rgba(26,2,5,0.08) 72%, rgba(26,2,5,0) 100%)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0103]/75 via-transparent to-black/20" />
            </div>

            {/* Subtle Ambient Studio Glow */}
            <div className="pointer-events-none absolute -left-24 -top-24 hidden h-80 w-80 rounded-full bg-[#F92C53]/15 blur-3xl lg:block" />

            {/* Animated Content Container */}
            <div
              ref={contentRef}
              className="relative z-10 px-5 pb-9 pt-4 sm:px-10 sm:pb-12 sm:pt-6 lg:px-14 lg:py-16 xl:px-16 xl:py-20"
            >
              {children}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
