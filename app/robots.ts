import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/llms.txt",
          "/llms-full.txt",
          "/ai-catalog.json",
          "/ard.json",
          "/.well-known/ai-catalog.json",
          "/.well-known/ard.json",
          "/.well-known/ai-plugin.json",
          "/.well-known/security.txt",
        ],
        disallow: ["/api/private/", "/_next/static/development/"],
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Applebot",
          "Applebot-Extended",
          "Google-Extended",
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Meta-ExternalAgent",
          "DuckAssistBot",
          "YouBot",
          "cohere-ai",
        ],
        allow: ["/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
