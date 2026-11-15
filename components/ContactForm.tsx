"use client";

import { useState, useEffect, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, CheckCircle2, Mail, Send } from "lucide-react";
import { COMPANY_INFO, SERVICES } from "@/data/devrious";

const BUDGET_OPTIONS = [
  "Under LKR 100,000",
  "LKR 100,000 – 250,000",
  "LKR 250,000 – 500,000",
  "LKR 500,000+",
  "Pre-Built System Inquiry",
];

export function ContactForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") ?? "";
  const initialProduct = searchParams.get("product") ?? "";
  const initialIntent = searchParams.get("intent") ?? "";

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState(
    initialService || (initialProduct ? "Pre-Built System" : SERVICES[0].title)
  );
  const [budget, setBudget] = useState(
    initialProduct ? "Pre-Built System Inquiry" : BUDGET_OPTIONS[1]
  );
  const [description, setDescription] = useState(
    initialProduct
      ? `Interested in ${initialIntent === "demo" ? "a demo of" : "a quote for"} ${initialProduct}.`
      : ""
  );
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onAgentPrefill = (e: Event) => {
      const detail = (
        e as CustomEvent<{
          fullName?: string;
          email?: string;
          phone?: string;
          company?: string;
          service?: string;
          budget?: string;
          description?: string;
        }>
      ).detail;
      if (!detail) return;
      if (detail.fullName) setFullName(detail.fullName);
      if (detail.email) setEmail(detail.email);
      if (detail.phone) setPhone(detail.phone);
      if (detail.company) setCompany(detail.company);
      if (detail.service) setService(detail.service);
      if (detail.budget) setBudget(detail.budget);
      if (detail.description) setDescription(detail.description);
    };

    window.addEventListener("devrious:prefill-contact", onAgentPrefill);
    return () =>
      window.removeEventListener("devrious:prefill-contact", onAgentPrefill);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const mailtoHref = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
    `Project Inquiry: ${service} — ${fullName}`
  )}&body=${encodeURIComponent(
    `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nService: ${service}\nBudget: ${budget}\n\nDetails:\n${description}`
  )}`;

  const whatsappHref = `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(
    `Hi Devrious, I'm ${fullName}${company ? ` (${company})` : ""}. Inquiry about ${service} (${budget}): ${description}`
  )}`;

  if (submitted) {
    return (
      <div className="rounded-3xl border border-[#00C9A7]/40 bg-white p-8 sm:p-10">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E6FAF6] text-[#079669]">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h2 className="mt-5 font-display text-2xl font-extrabold text-[#111827]">
          Inquiry Prepared for {fullName}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#3A352D]/80">
          Because this frontend does not use an automated background email
          server, please send your prepared inquiry directly via Email or
          WhatsApp below so our Colombo team receives it immediately.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={mailtoHref}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F92C53] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#D91C40]"
          >
            <Mail className="h-4 w-4" />
            <span>Send via Email</span>
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00C9A7] px-5 py-3 text-sm font-bold text-[#030303] transition-colors hover:bg-[#99f3e4]"
          >
            <span>Send via WhatsApp</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-xs font-semibold text-[#F92C53] hover:underline"
        >
          ← Edit inquiry details
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-black/8 bg-white p-7 sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-semibold uppercase tracking-wider text-[#3A352D]/70"
          >
            Full Name *
          </label>
          <input
            id="fullName"
            required
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Your full name"
            className="mt-2 w-full rounded-xl border border-black/15 bg-[#f7f7f8] px-4 py-3 text-sm text-[#111827] focus:border-[#F92C53] focus:bg-white focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wider text-[#3A352D]/70"
          >
            Email Address *
          </label>
          <input
            id="email"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.lk"
            className="mt-2 w-full rounded-xl border border-black/15 bg-[#f7f7f8] px-4 py-3 text-sm text-[#111827] focus:border-[#F92C53] focus:bg-white focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold uppercase tracking-wider text-[#3A352D]/70"
          >
            Phone Number *
          </label>
          <input
            id="phone"
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+94 7X XXX XXXX"
            className="mt-2 w-full rounded-xl border border-black/15 bg-[#f7f7f8] px-4 py-3 text-sm text-[#111827] focus:border-[#F92C53] focus:bg-white focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-xs font-semibold uppercase tracking-wider text-[#3A352D]/70"
          >
            Company Name
          </label>
          <input
            id="company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company or organization"
            className="mt-2 w-full rounded-xl border border-black/15 bg-[#f7f7f8] px-4 py-3 text-sm text-[#111827] focus:border-[#F92C53] focus:bg-white focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-xs font-semibold uppercase tracking-wider text-[#3A352D]/70"
          >
            Service Required
          </label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="mt-2 w-full rounded-xl border border-black/15 bg-[#f7f7f8] px-4 py-3 text-sm text-[#111827] focus:border-[#F92C53] focus:bg-white focus:outline-none"
          >
            <option value="Pre-Built System">Pre-Built System (POS / ERP / Web)</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="budget"
            className="block text-xs font-semibold uppercase tracking-wider text-[#3A352D]/70"
          >
            Project Budget
          </label>
          <select
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="mt-2 w-full rounded-xl border border-black/15 bg-[#f7f7f8] px-4 py-3 text-sm text-[#111827] focus:border-[#F92C53] focus:bg-white focus:outline-none"
          >
            {BUDGET_OPTIONS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="description"
          className="block text-xs font-semibold uppercase tracking-wider text-[#3A352D]/70"
        >
          Project Description *
        </label>
        <textarea
          id="description"
          required
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Tell us about your workflow, timeline, and goals..."
          className="mt-2 w-full rounded-xl border border-black/15 bg-[#f7f7f8] px-4 py-3 text-sm text-[#111827] focus:border-[#F92C53] focus:bg-white focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#F92C53] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#D91C40] sm:w-auto"
      >
        <span>Prepare Inquiry</span>
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
