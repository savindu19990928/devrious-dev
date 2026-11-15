import type { MetadataRoute } from "next";
import {
  POLICY_DOCS,
  PORTFOLIO_PROJECTS,
  PRE_BUILDS,
  SERVICES,
} from "@/data/devrious";
import { SITE_URL } from "@/data/seo";

const LAST_MODIFIED = new Date("2026-11-15T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${SITE_URL}/images/banners/hero-banner.jpg`,
        `${SITE_URL}/images/banners/showcase-banner-1.jpg`,
        `${SITE_URL}/images/banners/showcase-banner-2.jpg`,
      ],
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [`${SITE_URL}/images/banners/banner-services.jpg`],
    },
    {
      url: `${SITE_URL}/pre-builts`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [`${SITE_URL}/images/banners/banner-prebuilds.jpg`],
    },
    {
      url: `${SITE_URL}/portfolio`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${SITE_URL}/images/banners/banner-portfolio.jpg`],
    },
    {
      url: `${SITE_URL}/cybersecurity-services`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${SITE_URL}/images/banners/cybersecurity-banner.jpg`],
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.85,
      images: [
        `${SITE_URL}/images/banners/banner-about.jpg`,
        `${SITE_URL}/images/Savindu.jpg`,
        `${SITE_URL}/images/Rangana.jpg`,
      ],
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.85,
      images: [`${SITE_URL}/images/banners/banner-contact.jpg`],
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.88,
    images: [
      `${SITE_URL}${service.heroImage}`,
      `${SITE_URL}${service.editorialImage}`,
    ],
  }));

  const preBuildRoutes: MetadataRoute.Sitemap = PRE_BUILDS.map((product) => ({
    url: `${SITE_URL}/pre-builts/${product.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.88,
    images: [
      `${SITE_URL}${product.bannerImage}`,
      ...(product.screenshot ? [`${SITE_URL}${product.screenshot}`] : []),
    ],
  }));

  const portfolioRoutes: MetadataRoute.Sitemap = PORTFOLIO_PROJECTS.map(
    (project) => ({
      url: `${SITE_URL}/portfolio/${project.slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${SITE_URL}${project.screenshot ?? project.bannerImage ?? "/images/banners/banner-portfolio.jpg"}`,
      ],
    })
  );

  const policyRoutes: MetadataRoute.Sitemap = POLICY_DOCS.map((doc) => ({
    url: `${SITE_URL}/policies/${doc.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...preBuildRoutes,
    ...portfolioRoutes,
    ...policyRoutes,
  ];
}
