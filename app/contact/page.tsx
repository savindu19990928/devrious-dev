import { Suspense } from "react";
import type { Metadata } from "next";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/data/devrious";
import {
  buildContactPageSchema,
  buildPageMetadata,
  serializeJsonLd,
} from "@/data/seo";
import { ContactForm } from "@/components/ContactForm";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Us — Start a Project or Request a Live Demo",
  description:
    "Contact Devrious in Colombo, Sri Lanka (+94 70 661 1936, info@devrious.lk, 161/6 Old Kottawa Road, Navinna, Maharagama) for custom software, web development, cybersecurity, or Pre-Built POS & ERP demos.",
  path: "/contact",
  image: "/images/banners/banner-contact.jpg",
  imageAlt: "Contact Devrious software engineering team in Colombo, Sri Lanka",
  keywords: [
    "contact Devrious",
    "Devrious phone number",
    "Devrious Colombo address",
    "request POS demo Sri Lanka",
    "software development quote Sri Lanka",
  ],
});

export default function ContactPage() {
  const contactSchema = buildContactPageSchema();

  return (
    <main className="flex flex-col bg-[#f7f7f8] pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(contactSchema) }}
      />
      <PageBanner
        image="/images/banners/banner-contact.jpg"
        imageAlt="Contact Devrious software engineering team in Colombo, Sri Lanka"
      >
        <div className="max-w-2xl lg:max-w-[54%]">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3.5 py-1 font-mono text-xs font-semibold text-[#99f3e4] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00C9A7]" />
            Colombo Studio
          </span>
          <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Let’s build something meaningful.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:mt-5 sm:text-lg">
            Tell us about your idea. Let’s turn it into something real.
          </p>
        </div>
      </PageBanner>

      <section className="mx-auto mt-10 w-full max-w-7xl px-4 sm:mt-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="h-96 rounded-3xl border border-black/10 bg-white p-6 sm:p-8" />
              }
            >
              <ContactForm />
            </Suspense>
          </div>

          <aside className="space-y-6 lg:col-span-5">
            <div className="rounded-3xl border border-black/10 bg-[#030303] p-6 text-white sm:p-8">
              <h2 className="font-display text-xl font-bold">
                Direct Contact
              </h2>
              <p className="mt-2 text-sm text-white/70">
                Reach our Colombo engineering team directly by phone, WhatsApp,
                or email.
              </p>

              <ul className="mt-7 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#00C9A7]" />
                  <div>
                    <p className="font-mono text-[11px] uppercase text-white/50">
                      Phone
                    </p>
                    <a
                      href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                      className="font-semibold hover:text-[#99f3e4]"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#F92C53]" />
                  <div>
                    <p className="font-mono text-[11px] uppercase text-white/50">
                      Email
                    </p>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="font-semibold hover:text-[#ffd6de]"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#F92C53]" />
                  <div>
                    <p className="font-mono text-[11px] uppercase text-white/50">
                      Colombo Office
                    </p>
                    <p className="text-white/85">{COMPANY_INFO.address}</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#00C9A7]" />
                  <div>
                    <p className="font-mono text-[11px] uppercase text-white/50">
                      Working Hours
                    </p>
                    <p className="text-white/85">{COMPANY_INFO.hours}</p>
                  </div>
                </li>
              </ul>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#00C9A7] px-5 py-3 text-sm font-bold text-[#030303] transition-colors hover:bg-[#99f3e4]"
              >
                <span>Message on WhatsApp</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
