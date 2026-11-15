import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Devrious | Custom Software, Web & AI Development in Sri Lanka",
    short_name: "Devrious",
    description:
      "Software engineering studio in Colombo, Sri Lanka. Custom websites, business operations software, REST APIs, AI tools, cybersecurity pen-testing, and 10 ready-to-deploy POS & ERP systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#F92C53",
    lang: "en-LK",
    categories: ["business", "productivity", "developer", "security"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/logo.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
