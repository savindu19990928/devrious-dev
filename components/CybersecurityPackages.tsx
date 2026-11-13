"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { CYBERSECURITY_PACKAGES } from "@/data/devrious";

const LKR_PER_USD = 295;

export function CybersecurityPackages() {
  const [currency, setCurrency] = useState<"LKR" | "USD">("LKR");

  const formatPrice = (lkr: number) => {
    if (currency === "LKR") return `LKR ${lkr.toLocaleString()}`;
    return `~$${Math.round(lkr / LKR_PER_USD).toLocaleString()} USD`;
  };

  return (
    <div>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold tracking-[-0.02em] text-[#111827]">
            Packages
          </h2>
          <p className="mt-3 text-base text-[#3A352D]/75 sm:text-lg">
            All cybersecurity work is custom-priced. These packages are starting
            points — your final quote is confirmed after a free scoping call.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-[#3A352D]/65">
            Show prices in
          </span>
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
        <p className="mt-3 font-mono text-xs text-[#3A352D]/60">
          * Approximate USD conversion (~1 USD = {LKR_PER_USD} LKR) for
          reference; billed in LKR.
        </p>
      )}

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {CYBERSECURITY_PACKAGES.map((pkg) => (
          <article
            key={pkg.id}
            className={`relative flex flex-col rounded-3xl p-7 transition-all duration-300 ${
              pkg.featured
                ? "bg-[#030303] text-white ring-1 ring-[#F92C53]/50 shadow-[0_24px_60px_-20px_rgba(249,44,83,0.3)]"
                : "border border-black/10 bg-white text-[#111827] hover:border-[#F92C53]/40 hover:shadow-md"
            }`}
          >
            {pkg.featured && (
              <span className="absolute right-5 top-5 rounded-full bg-[#F92C53] px-2.5 py-0.5 font-mono text-[11px] font-semibold text-white">
                Most requested
              </span>
            )}

            <h3
              className={`pr-24 font-display text-lg font-bold ${
                pkg.featured ? "text-white" : "text-[#111827]"
              }`}
            >
              {pkg.name}
            </h3>
            <p
              className={`mt-2 min-h-[72px] text-sm leading-relaxed ${
                pkg.featured ? "text-white/70" : "text-[#3A352D]/75"
              }`}
            >
              {pkg.description}
            </p>

            <div className="mt-5">
              <p
                className={`font-mono text-[11px] uppercase tracking-wider ${
                  pkg.featured ? "text-white/50" : "text-[#3A352D]/55"
                }`}
              >
                Starting from
              </p>
              <p
                className={`mt-1 font-display text-2xl font-extrabold sm:text-3xl ${
                  pkg.featured ? "text-white" : "text-[#111827]"
                }`}
              >
                {formatPrice(pkg.priceLkr)}
              </p>
            </div>

            <ul
              className={`mt-6 space-y-2.5 border-t pt-6 text-sm ${
                pkg.featured
                  ? "border-white/10 text-white/85"
                  : "border-black/8 text-[#3A352D]/85"
              }`}
            >
              {pkg.includes.map((inc) => (
                <li key={inc} className="flex gap-2.5">
                  <Check
                    className={`mt-0.5 h-4 w-4 shrink-0 ${
                      pkg.featured ? "text-[#00C9A7]" : "text-[#F92C53]"
                    }`}
                  />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-7">
              <Link
                href={`/contact?service=${encodeURIComponent(pkg.name)}`}
                className={`block rounded-xl px-4 py-3 text-center text-sm font-semibold transition-colors ${
                  pkg.featured
                    ? "bg-[#F92C53] text-white hover:bg-[#D91C40]"
                    : "bg-[#111827] text-white hover:bg-[#F92C53]"
                }`}
              >
                Request a custom quote
              </Link>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-6 text-sm text-[#3A352D]/65">
        Prices are indicative starting points. Scope, number of targets and
        urgency affect the final quote.
      </p>
    </div>
  );
}

