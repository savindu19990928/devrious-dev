"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

interface ShowcaseBannerProps {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  manifestoLines: string[];
}

const EASE_SLOW_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ShowcaseBanner({
  image,
  imageAlt,
  eyebrow,
  title,
  manifestoLines,
}: ShowcaseBannerProps) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const mobileSrc = image.replace(/\.jpg$/, "-mobile.jpg");
  const tabletSrc = image.replace(/\.jpg$/, "-tablet.jpg");
  const words = title.split(" ");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [1, 1, 1] : [1.08, 1.0, 1.05]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["-4%", "4%"]
  );

  return (
    <section
      ref={ref}
      className="relative aspect-[4/3] w-full overflow-hidden bg-[#2E0308] sm:aspect-[16/9] lg:aspect-auto lg:h-[78vh] xl:h-[84vh]"
    >
      <motion.div
        style={{ scale, y }}
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <picture className="block h-full w-full">
          <source media="(max-width: 639px)" srcSet={mobileSrc} />
          <source media="(max-width: 1023px)" srcSet={tabletSrc} />
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
        </picture>
      </motion.div>

      {/* Bottom-concentrated gradient so the core visual subject in the center/upper frame stays 100% clear */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(6,1,2,0.88) 0%, rgba(15,2,4,0.42) 34%, rgba(0,0,0,0.06) 65%, rgba(0,0,0,0.22) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-7 sm:px-10 sm:pb-12 md:px-12 md:pb-16">
        {/* Eyebrow: starts at 0.05s, duration 0.85s -> finishes at 0.90s */}
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 18, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, delay: 0.05, ease: EASE_SLOW_OUT }}
          className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#FF4D6A] sm:text-xs"
        >
          {eyebrow}
        </motion.p>

        {/* Word-by-word slow display title reveal: 3 words * 0.14s + 0.16s + 0.92s = 1.50s (< 2s) */}
        <h2
          aria-label={title}
          className="mt-2 max-w-2xl font-display text-2xl font-extrabold leading-[1.04] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl"
        >
          {words.map((word, idx) => (
            <motion.span
              key={`${word}-${idx}`}
              initial={
                reduceMotion ? false : { opacity: 0, y: 28, filter: "blur(6px)" }
              }
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.92,
                delay: 0.16 + idx * 0.14,
                ease: EASE_SLOW_OUT,
              }}
              className="mr-[0.26em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* Accent bar: starts at 0.55s, duration 0.95s -> finishes at 1.50s */}
        <motion.div
          initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.95, delay: 0.55, ease: EASE_SLOW_OUT }}
          className="mt-4 h-1 w-24 origin-left rounded-full bg-gradient-to-r from-[#F92C53] to-[#00C9A7]"
        />
      </div>

      {/* Manifesto lines: line-by-line slow reveal finishing at 0.35 + 3*0.14 + 0.88 = 1.65s (< 2s) */}
      <div className="absolute bottom-7 right-6 z-10 hidden max-w-[14rem] text-right font-mono text-[10px] font-medium uppercase leading-[1.7] tracking-wider text-white/85 sm:block md:bottom-12 md:right-12">
        {manifestoLines.map((line, idx) => (
          <motion.span
            key={line}
            initial={reduceMotion ? false : { opacity: 0, y: 14, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.88,
              delay: 0.35 + idx * 0.14,
              ease: EASE_SLOW_OUT,
            }}
            className="block"
          >
            {line}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
