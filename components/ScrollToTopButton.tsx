"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let footerInView = false;

    const evaluateVisibility = () => {
      const scrolledDown = window.scrollY > 300;
      const footerEl =
        document.getElementById("site-footer") ??
        document.querySelector("footer");

      if (footerEl) {
        const rect = footerEl.getBoundingClientRect();
        footerInView = rect.top <= window.innerHeight && rect.bottom >= 0;
      }

      setVisible(scrolledDown && !footerInView);
    };

    evaluateVisibility();

    const footerEl =
      document.getElementById("site-footer") ??
      document.querySelector("footer");

    let observer: IntersectionObserver | null = null;
    if (footerEl && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            footerInView = entry.isIntersecting;
          }
          evaluateVisibility();
        },
        { threshold: 0 }
      );
      observer.observe(footerEl);
    }

    window.addEventListener("scroll", evaluateVisibility, { passive: true });
    window.addEventListener("resize", evaluateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", evaluateVisibility);
      window.removeEventListener("resize", evaluateVisibility);
      observer?.disconnect();
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-to-top"
          type="button"
          onClick={handleScrollToTop}
          aria-label="Scroll to top"
          title="Back to top"
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 16, scale: 0.86 }
          }
          animate={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 1, y: 0, scale: 1 }
          }
          exit={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 16, scale: 0.86 }
          }
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 right-4 z-40 mb-[env(safe-area-inset-bottom)] flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-[#111827]/90 text-white shadow-[0_14px_34px_-6px_rgba(249,44,83,0.45)] ring-1 ring-black/10 backdrop-blur-md transition-colors duration-200 hover:border-[#F92C53] hover:bg-[#F92C53] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F92C53] sm:bottom-6 sm:right-6 sm:h-12 sm:w-12"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
