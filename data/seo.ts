import type { Metadata } from "next";
import {
  COMPANY_INFO,
  COMPANY_MISSION,
  COMPANY_VISION,
  CYBERSECURITY_PACKAGES,
  CYBERSECURITY_STEPS,
  DELIVERY_PROCESS,
  POLICY_DOCS,
  PORTFOLIO_PROJECTS,
  PRE_BUILDS,
  PREBUILD_FAQS,
  SERVICE_FAQS,
  SERVICES,
  TECH_STACK,
  TESTIMONIALS,
  type PortfolioProject,
  type PreBuildProduct,
  type ServiceItem,
} from "@/data/devrious";

export const SITE_URL = "https://devrious.lk";
export const SITE_NAME = "Devrious";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/banners/hero-banner.jpg`;
export const LKR_PER_USD = 295;

export const CORE_KEYWORDS = [
  "Devrious",
  "software company Sri Lanka",
  "software engineering studio Colombo",
  "custom software development Sri Lanka",
  "web development company Colombo",
  "POS system Sri Lanka",
  "ERP system Sri Lanka",
  "AI development Sri Lanka",
  "REST API development Sri Lanka",
  "cybersecurity services Sri Lanka",
  "penetration testing Sri Lanka",
  "React Next.js Django developers Sri Lanka",
  "Savindu Shiranjaya",
  "Rangana Munasinghe",
];

interface PageSeoOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  type?: "website" | "article";
  noIndex?: boolean;
}

export function buildPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt = `${title} — ${SITE_NAME}`,
  keywords = [],
  type = "website",
  noIndex = false,
}: PageSeoOptions): Metadata {
  const canonicalUrl = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const ogImageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  const mergedKeywords = Array.from(new Set([...keywords, ...CORE_KEYWORDS]));

  return {
    title,
    description,
    keywords: mergedKeywords,
    authors: COMPANY_INFO.founders.map((f) => ({
      name: f.name,
      url: `${SITE_URL}/about`,
    })),
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "Technology & Software Engineering",
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-LK": canonicalUrl,
        en: canonicalUrl,
        "x-default": canonicalUrl,
      },
      types: {
        "text/markdown": `${SITE_URL}/llms.txt`,
        "application/json": `${SITE_URL}/.well-known/ai-catalog.json`,
      },
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "en_LK",
      type,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [ogImageUrl],
    },
    robots: noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          nocache: false,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

export function serializeJsonLd(data: Record<string, unknown> | Array<Record<string, unknown>>): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}${items[items.length - 1]?.path || "/"}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}

export function buildOrganizationGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
        "@id": `${SITE_URL}/#organization`,
        name: COMPANY_INFO.name,
        legalName: "Devrious",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          "@id": `${SITE_URL}/#logo`,
          url: `${SITE_URL}/logo.ico`,
          contentUrl: `${SITE_URL}/logo.ico`,
          caption: "Devrious Software Engineering Studio",
        },
        image: DEFAULT_OG_IMAGE,
        description:
          "Devrious is a software engineering studio in Colombo, Sri Lanka. We design, build, and secure custom websites, business operations software, REST APIs, AI tools, penetration tests, and ready-to-deploy POS & ERP systems.",
        slogan: "Technology with purpose. Innovation with direction.",
        foundingDate: String(COMPANY_INFO.founded),
        foundingLocation: {
          "@type": "Place",
          name: "Colombo, Sri Lanka",
        },
        founders: COMPANY_INFO.founders.map((f) => ({
          "@type": "Person",
          name: f.name,
          jobTitle: f.role,
          image: `${SITE_URL}${f.photo}`,
          description: f.bio,
          worksFor: { "@id": `${SITE_URL}/#organization` },
        })),
        address: {
          "@type": "PostalAddress",
          streetAddress: "161/6, Old Kottawa Road, Navinna, Maharagama",
          addressLocality: "Colombo",
          addressRegion: "Western Province",
          postalCode: "10280",
          addressCountry: "LK",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 6.848,
          longitude: 79.9265,
        },
        telephone: COMPANY_INFO.phone,
        email: COMPANY_INFO.email,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: COMPANY_INFO.phone,
            email: COMPANY_INFO.email,
            contactType: "sales",
            areaServed: ["LK", "GB", "US", "AU", "AE"],
            availableLanguage: ["English", "Sinhala"],
          },
          {
            "@type": "ContactPoint",
            telephone: COMPANY_INFO.phone,
            email: COMPANY_INFO.email,
            contactType: "customer support",
            url: COMPANY_INFO.whatsappUrl,
            availableLanguage: ["English", "Sinhala"],
          },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        priceRange: "LKR 45,000 - LKR 250,000+",
        currenciesAccepted: "LKR, USD, GBP",
        paymentAccepted: "Bank Transfer, Card, Online Payment",
        areaServed: [
          { "@type": "Country", name: "Sri Lanka" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Place", name: "Worldwide" },
        ],
        sameAs: [
          COMPANY_INFO.whatsappUrl,
          "https://flexcore.devrious.lk/",
        ],
        knowsAbout: [
          ...SERVICES.map((s) => s.title),
          "Penetration Testing & OWASP Security Audits",
          "Point of Sale (POS) Systems",
          "Enterprise Resource Planning (ERP) Software",
          ...TECH_STACK.map((t) => t.name),
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          bestRating: "5",
          worstRating: "1",
          reviewCount: String(TESTIMONIALS.length),
        },
        review: TESTIMONIALS.map((t) => ({
          "@type": "Review",
          author: {
            "@type": "Person",
            name: t.name,
            jobTitle: t.role,
            worksFor: { "@type": "Organization", name: t.company },
          },
          reviewBody: t.quote,
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: COMPANY_MISSION.statement,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-LK",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/pre-builts?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}

export function buildHomePageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "Devrious | Custom Software, Web & AI Development in Sri Lanka",
        description:
          "Devrious designs, builds, and secures custom websites, business software, REST APIs, and AI tools in Colombo, Sri Lanka — plus 10 ready-to-deploy POS, ERP, and management systems.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: DEFAULT_OG_IMAGE,
        },
        inLanguage: "en-LK",
      },
      buildBreadcrumbSchema([{ name: "Home", path: "/" }]),
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#services-list`,
        name: "Devrious Software Engineering Services",
        itemListElement: SERVICES.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            name: service.title,
            description: service.tagline,
            url: `${SITE_URL}/services/${service.slug}`,
            provider: { "@id": `${SITE_URL}/#organization` },
            offers: {
              "@type": "Offer",
              priceCurrency: "LKR",
              price: String(service.priceLkr),
              url: `${SITE_URL}/services/${service.slug}`,
            },
          },
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#prebuilts-list`,
        name: "Devrious Ready-to-Deploy Pre-Built Business Systems",
        itemListElement: PRE_BUILDS.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareApplication",
            name: product.name,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, Cloud, Windows, Android, iOS",
            description: product.summary,
            url: `${SITE_URL}/pre-builts/${product.slug}`,
            offers: {
              "@type": "Offer",
              priceCurrency: "LKR",
              price: String(product.priceLkr),
              availability: "https://schema.org/InStock",
              url: `${SITE_URL}/pre-builts/${product.slug}`,
            },
          },
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: [...SERVICE_FAQS, ...PREBUILD_FAQS.slice(0, 2)].map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
    ],
  };
}

export function buildServicesPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/services#webpage`,
        url: `${SITE_URL}/services`,
        name: "Custom Software, Web, API & AI Development Services | Devrious",
        description:
          "Explore Devrious engineering services in Colombo, Sri Lanka: Custom Web Development, Custom Software Development, REST APIs, AI Assistants, and End-to-End AI Systems.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
      ]),
      {
        "@type": "ItemList",
        name: "Devrious Core Engineering Services",
        itemListElement: SERVICES.map((service, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Service",
            "@id": `${SITE_URL}/services/${service.slug}#service`,
            name: service.title,
            description: service.description,
            url: `${SITE_URL}/services/${service.slug}`,
            image: `${SITE_URL}${service.editorialImage}`,
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: ["Sri Lanka", "United Kingdom", "Worldwide"],
            offers: {
              "@type": "Offer",
              priceCurrency: "LKR",
              price: String(service.priceLkr),
              availability: "https://schema.org/InStock",
              url: `${SITE_URL}/services/${service.slug}`,
            },
          },
        })),
      },
      {
        "@type": "HowTo",
        name: "How Devrious Takes Software Projects from Idea to Production",
        description:
          "Five-stage engineering delivery process used by Devrious on every custom web, software, API, and AI project.",
        step: DELIVERY_PROCESS.map((s, idx) => ({
          "@type": "HowToStep",
          position: idx + 1,
          name: s.title,
          text: s.description,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: SERVICE_FAQS.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
    ],
  };
}

export function buildServiceDetailSchema(service: ServiceItem) {
  const url = `${SITE_URL}/services/${service.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${service.title} in Sri Lanka | Devrious`,
        description: service.description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}${service.heroImage}`,
        },
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: service.title, path: `/services/${service.slug}` },
      ]),
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.title,
        serviceType: service.title,
        description: service.description,
        slogan: service.tagline,
        url,
        image: `${SITE_URL}${service.heroImage}`,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: [
          { "@type": "Country", name: "Sri Lanka" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Place", name: "Worldwide" },
        ],
        offers: {
          "@type": "Offer",
          priceCurrency: "LKR",
          price: String(service.priceLkr),
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "LKR",
            minPrice: String(service.priceLkr),
          },
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/contact?service=${encodeURIComponent(service.title)}`,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${service.title} Deliverables & Capabilities`,
          itemListElement: service.deliverables.map((d) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: d,
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: SERVICE_FAQS.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
    ],
  };
}

export function buildPreBuildsPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/pre-builts#webpage`,
        url: `${SITE_URL}/pre-builts`,
        name: "Ready-to-Deploy POS, ERP & Business Software Systems | Devrious Pre Builts",
        description:
          "Browse 10 ready-to-deploy POS, ERP, Hotel, Fleet, Social Media, and FlexCore E-Commerce software systems engineered by Devrious in Sri Lanka.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Pre Builts", path: "/pre-builts" },
      ]),
      {
        "@type": "ItemList",
        name: "Devrious Pre-Built Software Systems",
        numberOfItems: PRE_BUILDS.length,
        itemListElement: PRE_BUILDS.map((p, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          item: {
            "@type": ["SoftwareApplication", "Product"],
            name: p.name,
            description: p.summary,
            url: `${SITE_URL}/pre-builts/${p.slug}`,
            image: `${SITE_URL}${p.screenshot ?? p.bannerImage}`,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, Cloud, Windows, Android, iOS",
            brand: { "@type": "Brand", name: "Devrious" },
            offers: {
              "@type": "Offer",
              priceCurrency: "LKR",
              price: String(p.priceLkr),
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: `${SITE_URL}/pre-builts/${p.slug}`,
              seller: { "@id": `${SITE_URL}/#organization` },
            },
          },
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: PREBUILD_FAQS.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
    ],
  };
}

export function buildPreBuildDetailSchema(product: PreBuildProduct) {
  const url = `${SITE_URL}/pre-builts/${product.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemPage",
        "@id": `${url}#webpage`,
        url,
        name: `${product.name} — Ready-to-Deploy ${product.category} Software | Devrious`,
        description: product.summary,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}${product.screenshot ?? product.bannerImage}`,
        },
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Pre Builts", path: "/pre-builts" },
        { name: product.name, path: `/pre-builts/${product.slug}` },
      ]),
      {
        "@type": ["SoftwareApplication", "Product"],
        "@id": `${url}#software`,
        name: product.name,
        description: product.overview.join(" "),
        slogan: product.tagline,
        url,
        image: `${SITE_URL}${product.screenshot ?? product.bannerImage}`,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: product.category,
        operatingSystem: "Cloud, Web, Windows, macOS, Android, iOS",
        featureList: product.modules,
        brand: {
          "@type": "Brand",
          name: "Devrious",
        },
        manufacturer: { "@id": `${SITE_URL}/#organization` },
        offers: {
          "@type": "Offer",
          priceCurrency: "LKR",
          price: String(product.priceLkr),
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/contact?product=${encodeURIComponent(product.name)}&intent=quote`,
          seller: { "@id": `${SITE_URL}/#organization` },
        },
      },
      {
        "@type": "HowTo",
        name: `How Teams Use ${product.name} Every Day`,
        description: product.tagline,
        step: product.workflow.map((w, idx) => ({
          "@type": "HowToStep",
          position: idx + 1,
          name: w.title,
          text: w.description,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: PREBUILD_FAQS.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
    ],
  };
}

export function buildPortfolioPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/portfolio#webpage`,
        url: `${SITE_URL}/portfolio`,
        name: "Software & Web Engineering Portfolio | Devrious Case Studies",
        description:
          "Real client case studies by Devrious: corporate websites, e-commerce platforms, garment factory production systems, accommodation management, and bus ticketing software.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Portfolio", path: "/portfolio" },
      ]),
      {
        "@type": "ItemList",
        name: "Devrious Engineering Case Studies",
        itemListElement: PORTFOLIO_PROJECTS.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            name: project.name,
            description: project.summary,
            url: `${SITE_URL}/portfolio/${project.slug}`,
            image: `${SITE_URL}${project.screenshot ?? project.bannerImage ?? "/images/banners/banner-portfolio.jpg"}`,
            creator: { "@id": `${SITE_URL}/#organization` },
            keywords: project.stack.join(", "),
          },
        })),
      },
    ],
  };
}

export function buildPortfolioDetailSchema(project: PortfolioProject) {
  const url = `${SITE_URL}/portfolio/${project.slug}`;
  const testimonial = project.testimonialId
    ? TESTIMONIALS.find((t) => t.id === project.testimonialId)
    : undefined;
  const imageUrl = `${SITE_URL}${project.screenshot ?? project.bannerImage ?? "/images/banners/banner-portfolio.jpg"}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${project.name} Case Study (${project.client}) | Devrious Portfolio`,
        description: project.summary,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: imageUrl,
        },
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Portfolio", path: "/portfolio" },
        { name: project.name, path: `/portfolio/${project.slug}` },
      ]),
      {
        "@type": ["CreativeWork", "Article"],
        "@id": `${url}#casestudy`,
        headline: `${project.name} — ${project.category} for ${project.client}`,
        name: project.name,
        description: project.summary,
        image: imageUrl,
        url,
        author: { "@id": `${SITE_URL}/#organization` },
        creator: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        genre: project.category,
        keywords: project.stack.join(", "),
        ...(project.liveUrl ? { sameAs: project.liveUrl } : {}),
        ...(testimonial
          ? {
              review: {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: testimonial.name,
                  jobTitle: testimonial.role,
                },
                reviewBody: testimonial.quote,
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
              },
            }
          : {}),
      },
    ],
  };
}

export function buildCybersecurityPageSchema() {
  const url = `${SITE_URL}/cybersecurity-services`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: "Cybersecurity, Penetration Testing & Secure Code Review in Sri Lanka | Devrious",
        description:
          "OWASP-aligned web application penetration testing, API security assessments, secure code reviews, and full cloud security audits by Devrious in Colombo, Sri Lanka.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Cybersecurity Services", path: "/cybersecurity-services" },
      ]),
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Cybersecurity & Penetration Testing Services",
        serviceType: "Information Security & Penetration Testing",
        description:
          "Hands-on penetration testing, REST API security assessments, manual and automated secure code reviews, and cloud/WAF security audits aligned with OWASP Top 10.",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: ["Sri Lanka", "United Kingdom", "Worldwide"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Devrious Cybersecurity Packages",
          itemListElement: CYBERSECURITY_PACKAGES.map((pkg) => ({
            "@type": "Offer",
            name: pkg.name,
            description: pkg.description,
            priceCurrency: "LKR",
            price: String(pkg.priceLkr),
            url: `${SITE_URL}/contact?service=${encodeURIComponent(pkg.name)}`,
            itemOffered: {
              "@type": "Service",
              name: pkg.name,
              description: pkg.includes.join("; "),
            },
          })),
        },
      },
      {
        "@type": "HowTo",
        name: "How a Devrious Cybersecurity Engagement Works",
        step: CYBERSECURITY_STEPS.map((s, idx) => ({
          "@type": "HowToStep",
          position: idx + 1,
          name: s.title,
          text: s.description,
        })),
      },
    ],
  };
}

export function buildAboutPageSchema() {
  const url = `${SITE_URL}/about`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${url}#webpage`,
        url,
        name: "About Devrious | Software Engineering Studio in Colombo, Sri Lanka",
        description: `${COMPANY_VISION.statement} ${COMPANY_MISSION.statement}`,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: { "@id": `${SITE_URL}/#organization` },
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
    ],
  };
}

export function buildContactPageSchema() {
  const url = `${SITE_URL}/contact`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${url}#webpage`,
        url,
        name: "Contact Devrious | Start a Software, Web or POS Project in Colombo",
        description: `Reach Devrious in Colombo, Sri Lanka by phone (${COMPANY_INFO.phone}), WhatsApp, or email (${COMPANY_INFO.email}). Office at ${COMPANY_INFO.address}.`,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: { "@id": `${SITE_URL}/#organization` },
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ]),
    ],
  };
}

export function buildPolicyPageSchema(slug: string, title: string) {
  const url = `${SITE_URL}/policies/${slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${title} | Devrious Legal & Compliance`,
        description: `Official ${title} for Devrious software engineering services, pre-built software systems, and website usage.`,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: title, path: `/policies/${slug}` },
      ]),
    ],
  };
}

export { POLICY_DOCS };
