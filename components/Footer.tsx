import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { COMPANY_INFO, POLICY_DOCS, SERVICES } from "@/data/devrious";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030303] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <img
                src="/logo.ico"
                alt="Devrious logo"
                width={30}
                height={30}
                className="h-7 w-7 rounded-md object-contain"
              />
              <span className="font-display text-xl font-extrabold tracking-tight text-white">
                Devrious
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              Software engineering studio in Colombo, Sri Lanka. We design,
              build, and secure custom websites, business operations software,
              AI tools, and ready-to-deploy POS &amp; ERP systems.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#00C9A7]/30 bg-[#00C9A7]/10 px-3.5 py-1.5 text-xs font-medium text-[#99f3e4]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00C9A7]" />
              Founded {COMPANY_INFO.founded} · Colombo, Sri Lanka
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-white/60">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/pre-builts", label: "Pre Builts" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/cybersecurity-services", label: "Cybersecurity" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition-colors hover:text-[#F92C53]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-white/60">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white/70 transition-colors hover:text-[#F92C53]"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio & Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-white/60">
              Studio &amp; Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#F92C53]" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#00C9A7]" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#F92C53]" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:border-[#00C9A7]/50 hover:bg-[#00C9A7]/15"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#00C9A7]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Policies & Copyright Bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 lg:flex-row lg:items-center">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>© 2024–2026 Devrious. All rights reserved.</span>
            {POLICY_DOCS.map((policy) => (
              <Link
                key={policy.slug}
                href={`/policies/${policy.slug}`}
                className="text-white/65 transition-colors hover:text-[#F92C53]"
              >
                {policy.title}
              </Link>
            ))}
            <a
              href="/sitemap.xml"
              className="text-white/65 transition-colors hover:text-[#00C9A7]"
            >
              Sitemap
            </a>
            <a
              href="/llms.txt"
              className="text-white/65 transition-colors hover:text-[#00C9A7]"
            >
              LLMs.txt
            </a>
          </div>
          <p>{COMPANY_INFO.hours}</p>
        </div>
      </div>
    </footer>
  );
}
