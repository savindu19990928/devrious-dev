import type { ReactNode } from "react";

interface PageBannerProps {
  image: string;
  imageAlt: string;
  /** Tailwind object-position for the mobile top visual, e.g. "object-[70%_center]" */
  mobileFocus?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Mobile-first photo banner.
 * - Mobile: the photo sits on top in a 16:10 frame so its subject is never hidden behind text.
 * - md+: the photo becomes a full-bleed background with a crimson/obsidian gradient for text legibility.
 */
export function PageBanner({
  image,
  imageAlt,
  mobileFocus = "object-[72%_center]",
  children,
  className = "",
}: PageBannerProps) {
  return (
    <section className="px-3 pt-3 sm:px-6 sm:pt-4">
      <div
        className={`relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#1a0205] text-white shadow-[0_24px_80px_-24px_rgba(46,3,8,0.55)] sm:rounded-3xl ${className}`}
      >
        {/* Mobile top visual */}
        <div className="relative aspect-[16/10] w-full overflow-hidden md:hidden">
          <img
            src={image}
            alt={imageAlt}
            className={`h-full w-full object-cover ${mobileFocus}`}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#1a0205]/25 to-[#1a0205]" />
        </div>

        {/* Desktop full-bleed background */}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0103] via-[#1a0205]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0103]/70 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 px-5 pb-10 pt-3 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          {children}
        </div>
      </div>
    </section>
  );
}

