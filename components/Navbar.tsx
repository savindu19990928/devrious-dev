"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pre-builds", label: "Pre Builds" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/cybersecurity-services", label: "Cybersecurity" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6">
      <nav
        aria-label="Main navigation"
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border px-4 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "border-black/10 bg-white/90 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.12)] backdrop-blur-xl"
            : "border-black/8 bg-white/80 backdrop-blur-md"
        }`}
      >
        {/* Left: Devrious Logo (favicon.ico) */}
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="group flex items-center gap-2.5 rounded-lg py-1 pr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F92C53]"
        >
          <img
            src="/logo.ico"
            alt="Devrious logo"
            width={28}
            height={28}
            className="h-7 w-7 rounded-md object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-display text-lg font-extrabold tracking-tight text-[#111827]">
            Devrious
          </span>
          <span className="hidden h-1.5 w-1.5 rounded-full bg-[#F92C53] sm:inline-block" />
        </Link>

        {/* Center: Desktop Nav Links */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-xl px-3.5 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F92C53] ${
                  active
                    ? "text-[#111827]"
                    : "text-[#3A352D]/70 hover:text-[#111827]"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 -z-10 rounded-xl border border-[#F92C53]/25 bg-[#FFF0F3]"
                  />
                )}
                <span className="relative flex items-center gap-1.5">
                  {active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F92C53]" />
                  )}
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Right: Primary CTA + Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="group hidden items-center gap-2 rounded-xl bg-[#F92C53] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#D91C40] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F92C53] sm:inline-flex"
          >
            <span>Start a project</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-[#111827] transition-colors hover:bg-[#F7F7F8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F92C53] lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-4 shadow-xl backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      active
                        ? "bg-[#FFF0F3] font-semibold text-[#F92C53]"
                        : "text-[#3A352D]/80 hover:bg-[#F7F7F8] hover:text-[#111827]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && (
                      <span className="h-2 w-2 rounded-full bg-[#F92C53]" />
                    )}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#F92C53] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#D91C40]"
              >
                <span>Start a project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
