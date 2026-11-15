"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  COMPANY_INFO,
  CYBERSECURITY_PACKAGES,
  PORTFOLIO_PROJECTS,
  PRE_BUILDS,
  SERVICES,
  TECH_STACK,
  TESTIMONIALS,
} from "@/data/devrious";
import { LKR_PER_USD, SITE_URL } from "@/data/seo";

interface WebMcpToolDefinition {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  annotations?: {
    title?: string;
    readOnlyHint?: boolean;
    destructiveHint?: boolean;
    idempotentHint?: boolean;
    openWorldHint?: boolean;
  };
  execute: (params: Record<string, unknown>) => Promise<{
    content: Array<{ type: "text"; text: string }>;
  }>;
}

interface ModelContextNavigator {
  registerTool?: (tool: WebMcpToolDefinition) => void | (() => void);
  unregisterTool?: (name: string) => void;
  provideContext?: (options: { tools: WebMcpToolDefinition[] }) => void;
}

export function AgentBrowsingProvider() {
  const router = useRouter();

  useEffect(() => {
    const tools: WebMcpToolDefinition[] = [
      {
        name: "get_company_overview",
        description:
          "Retrieve Devrious company profile, founders, Colombo office address, contact channels (phone, WhatsApp, email), working hours, and core technology stack.",
        inputSchema: {
          type: "object",
          properties: {},
          additionalProperties: false,
        },
        annotations: {
          title: "Get Devrious Company Overview",
          readOnlyHint: true,
          idempotentHint: true,
          openWorldHint: false,
        },
        execute: async () => {
          const payload = {
            company: COMPANY_INFO,
            website: SITE_URL,
            techStack: TECH_STACK,
            testimonialsCount: TESTIMONIALS.length,
            discoveryEndpoints: {
              llmsTxt: `${SITE_URL}/llms.txt`,
              llmsFullTxt: `${SITE_URL}/llms-full.txt`,
              aiCatalog: `${SITE_URL}/.well-known/ai-catalog.json`,
              ard: `${SITE_URL}/.well-known/ard.json`,
              sitemap: `${SITE_URL}/sitemap.xml`,
            },
          };
          return {
            content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
          };
        },
      },
      {
        name: "search_prebuilt_systems",
        description:
          "Search and filter Devrious's 10 ready-to-deploy Pre-Built software systems (POS, ERP, Hotel, Fleet, Social Media, FlexCore E-Commerce) by keyword, category, or maximum budget in LKR.",
        inputSchema: {
          type: "object",
          properties: {
            query: {
              type: "string",
              description:
                "Optional keyword to match system name, summary, or modules (e.g., 'gym', 'pharmacy', 'erp', 'hotel', 'pos').",
            },
            category: {
              type: "string",
              enum: [
                "All",
                "Point of Sale",
                "Enterprise & Operations",
                "Hospitality & Fleet",
                "Digital & Commerce",
              ],
              description: "Optional category filter.",
            },
            maxPriceLkr: {
              type: "number",
              description: "Optional maximum price in Sri Lankan Rupees (LKR).",
            },
          },
          additionalProperties: false,
        },
        annotations: {
          title: "Search Pre-Built Software Systems",
          readOnlyHint: true,
          idempotentHint: true,
          openWorldHint: false,
        },
        execute: async (params) => {
          const q =
            typeof params.query === "string"
              ? params.query.trim().toLowerCase()
              : "";
          const cat =
            typeof params.category === "string" ? params.category : "All";
          const maxLkr =
            typeof params.maxPriceLkr === "number"
              ? params.maxPriceLkr
              : undefined;

          if (typeof window !== "undefined") {
            window.dispatchEvent(
              new CustomEvent("devrious:filter-prebuilts", {
                detail: { query: params.query ?? "", category: cat },
              })
            );
          }

          const matches = PRE_BUILDS.filter((p) => {
            const matchesCategory = cat === "All" || p.category === cat;
            const matchesQuery =
              !q ||
              p.name.toLowerCase().includes(q) ||
              p.summary.toLowerCase().includes(q) ||
              p.modules.some((m) => m.toLowerCase().includes(q));
            const matchesPrice =
              maxLkr === undefined || p.priceLkr <= maxLkr;
            return matchesCategory && matchesQuery && matchesPrice;
          }).map((p) => ({
            slug: p.slug,
            name: p.name,
            category: p.category,
            priceLkr: p.priceLkr,
            approxPriceUsd: Math.round(p.priceLkr / LKR_PER_USD),
            deployment: p.highlights[0]?.value,
            summary: p.summary,
            modules: p.modules,
            url: `${SITE_URL}/pre-builts/${p.slug}`,
            demoUrl: `${SITE_URL}/contact?product=${encodeURIComponent(p.name)}&intent=demo`,
          }));

          return {
            content: [
              {
                type: "text",
                text: JSON.stringify(
                  { count: matches.length, systems: matches },
                  null,
                  2
                ),
              },
            ],
          };
        },
      },
      {
        name: "list_services_and_pricing",
        description:
          "List all 5 Devrious software engineering services and 4 cybersecurity packages with LKR/USD starting prices, technologies, and deliverables.",
        inputSchema: {
          type: "object",
          properties: {
            includeCybersecurity: {
              type: "boolean",
              description: "Include cybersecurity & pen-testing packages (default true).",
            },
          },
          additionalProperties: false,
        },
        annotations: {
          title: "List Services & Pricing",
          readOnlyHint: true,
          idempotentHint: true,
          openWorldHint: false,
        },
        execute: async (params) => {
          const includeCyber = params.includeCybersecurity !== false;
          const payload = {
            services: SERVICES.map((s) => ({
              slug: s.slug,
              number: s.number,
              title: s.title,
              startingPriceLkr: s.priceLkr,
              approxPriceUsd: Math.round(s.priceLkr / LKR_PER_USD),
              tagline: s.tagline,
              technologies: s.technologies,
              deliverables: s.deliverables,
              url: `${SITE_URL}/services/${s.slug}`,
            })),
            ...(includeCyber
              ? {
                  cybersecurityPackages: CYBERSECURITY_PACKAGES.map((c) => ({
                    id: c.id,
                    name: c.name,
                    startingPriceLkr: c.priceLkr,
                    approxPriceUsd: Math.round(c.priceLkr / LKR_PER_USD),
                    featured: Boolean(c.featured),
                    includes: c.includes,
                    url: `${SITE_URL}/cybersecurity-services`,
                  })),
                }
              : {}),
          };
          return {
            content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
          };
        },
      },
      {
        name: "get_portfolio_case_studies",
        description:
          "Retrieve Devrious client portfolio case studies, challenges solved, technical stack, and verified client testimonials.",
        inputSchema: {
          type: "object",
          properties: {
            slug: {
              type: "string",
              description: "Optional project slug (e.g., 'avenor-apparel', 'zevora-custom', 'flexcore').",
            },
          },
          additionalProperties: false,
        },
        annotations: {
          title: "Get Portfolio Case Studies",
          readOnlyHint: true,
          idempotentHint: true,
          openWorldHint: false,
        },
        execute: async (params) => {
          const slug =
            typeof params.slug === "string" ? params.slug.trim() : "";
          const list = slug
            ? PORTFOLIO_PROJECTS.filter((p) => p.slug === slug)
            : PORTFOLIO_PROJECTS;
          return {
            content: [
              {
                type: "text",
                text: JSON.stringify(
                  {
                    count: list.length,
                    projects: list.map((p) => ({
                      ...p,
                      url: `${SITE_URL}/portfolio/${p.slug}`,
                    })),
                    testimonials: TESTIMONIALS,
                  },
                  null,
                  2
                ),
              },
            ],
          };
        },
      },
      {
        name: "prepare_project_inquiry",
        description:
          "Prepare a project or Pre-Built system inquiry for Devrious and generate ready-to-send Email (mailto) and WhatsApp deep-links.",
        inputSchema: {
          type: "object",
          properties: {
            fullName: {
              type: "string",
              description: "Client full name.",
            },
            email: {
              type: "string",
              description: "Client email address.",
            },
            phone: {
              type: "string",
              description: "Client phone number.",
            },
            company: {
              type: "string",
              description: "Optional company or organization name.",
            },
            serviceOrProduct: {
              type: "string",
              description: "Requested service or Pre-Built system name.",
            },
            budget: {
              type: "string",
              description: "Estimated project budget.",
            },
            description: {
              type: "string",
              description: "Project requirements, timeline, or demo request details.",
            },
            navigateToContact: {
              type: "boolean",
              description: "Navigate the browser to /contact with prefilled fields.",
            },
          },
          required: ["fullName", "email", "serviceOrProduct", "description"],
          additionalProperties: false,
        },
        annotations: {
          title: "Prepare Project Inquiry",
          readOnlyHint: false,
          destructiveHint: false,
          idempotentHint: true,
          openWorldHint: false,
        },
        execute: async (params) => {
          const fullName = String(params.fullName ?? "");
          const email = String(params.email ?? "");
          const phone = String(params.phone ?? "");
          const company = String(params.company ?? "");
          const service = String(params.serviceOrProduct ?? "Custom Software Development");
          const budget = String(params.budget ?? "LKR 100,000 – 250,000");
          const description = String(params.description ?? "");

          if (typeof window !== "undefined") {
            window.dispatchEvent(
              new CustomEvent("devrious:prefill-contact", {
                detail: {
                  fullName,
                  email,
                  phone,
                  company,
                  service,
                  budget,
                  description,
                },
              })
            );
          }

          if (params.navigateToContact) {
            router.push(
              `/contact?service=${encodeURIComponent(service)}`
            );
          }

          const mailtoUrl = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
            `Project Inquiry: ${service} — ${fullName}`
          )}&body=${encodeURIComponent(
            `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nService: ${service}\nBudget: ${budget}\n\nDetails:\n${description}`
          )}`;

          const whatsappUrl = `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(
            `Hi Devrious, I'm ${fullName}${company ? ` (${company})` : ""}. Inquiry about ${service} (${budget}): ${description}`
          )}`;

          return {
            content: [
              {
                type: "text",
                text: JSON.stringify(
                  {
                    status: "prepared",
                    recipientEmail: COMPANY_INFO.email,
                    recipientPhone: COMPANY_INFO.phone,
                    mailtoUrl,
                    whatsappUrl,
                  },
                  null,
                  2
                ),
              },
            ],
          };
        },
      },
    ];

    // Expose a deterministic global helper for agent inspection
    (
      window as unknown as {
        __DEVRIOUS_WEBMCP_TOOLS__?: WebMcpToolDefinition[];
      }
    ).__DEVRIOUS_WEBMCP_TOOLS__ = tools;

    const nav = navigator as unknown as {
      modelContext?: ModelContextNavigator;
    };
    const mc = nav.modelContext;
    if (!mc) return;

    const disposers: Array<() => void> = [];

    try {
      if (typeof mc.registerTool === "function") {
        for (const tool of tools) {
          try {
            const dispose = mc.registerTool(tool);
            if (typeof dispose === "function") {
              disposers.push(dispose);
            } else if (typeof mc.unregisterTool === "function") {
              disposers.push(() => mc.unregisterTool?.(tool.name));
            }
          } catch {
            // Ignore duplicate registration across soft navigations
          }
        }
      } else if (typeof mc.provideContext === "function") {
        mc.provideContext({ tools });
      }
    } catch {
      // Safe fallback if browser WebMCP flag is disabled
    }

    return () => {
      for (const dispose of disposers) {
        try {
          dispose();
        } catch {
          // Ignore cleanup errors
        }
      }
    };
  }, [router]);

  return null;
}
