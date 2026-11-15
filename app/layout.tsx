import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/MotionProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { AgentBrowsingProvider } from "@/components/AgentBrowsingProvider";
import {
  buildOrganizationGraph,
  CORE_KEYWORDS,
  DEFAULT_OG_IMAGE,
  serializeJsonLd,
  SITE_NAME,
  SITE_URL,
} from "@/data/seo";
import { COMPANY_INFO } from "@/data/devrious";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F92C53",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Devrious | Custom Software, Web & AI Development in Sri Lanka",
    template: "%s | Devrious",
  },
  description:
    "Devrious is a software engineering studio in Colombo, Sri Lanka. We design, build, and secure custom websites, business operations software, REST APIs, AI tools, penetration tests, and 10 ready-to-deploy POS & ERP systems.",
  applicationName: SITE_NAME,
  keywords: CORE_KEYWORDS,
  authors: COMPANY_INFO.founders.map((f) => ({
    name: f.name,
    url: `${SITE_URL}/about`,
  })),
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Technology & Software Engineering",
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-LK": SITE_URL,
      en: SITE_URL,
      "x-default": SITE_URL,
    },
    types: {
      "text/markdown": `${SITE_URL}/llms.txt`,
      "application/json": `${SITE_URL}/.well-known/ai-catalog.json`,
    },
  },
  openGraph: {
    title: "Devrious | Custom Software, Web & AI Development in Sri Lanka",
    description:
      "Devrious designs, builds, and secures custom websites, business software, REST APIs, and AI tools in Colombo, Sri Lanka — plus 10 ready-to-deploy POS, ERP, and management systems.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_LK",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Devrious — Software Engineering Studio in Colombo, Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devrious | Custom Software, Web & AI Development in Sri Lanka",
    description:
      "Custom websites, business operations software, REST APIs, AI assistants, cybersecurity pen-testing, and 10 ready-to-deploy POS & ERP systems in Sri Lanka.",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/logo.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationJsonLd = buildOrganizationGraph();

  return (
    <html
      lang="en-LK"
      className={`${inter.variable} ${jakarta.variable} ${mono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="alternate"
          type="text/markdown"
          href="/llms.txt"
          title="Devrious LLM Summary (llms.txt)"
        />
        <link
          rel="alternate"
          type="text/markdown"
          href="/llms-full.txt"
          title="Devrious Complete LLM Knowledge Base (llms-full.txt)"
        />
        <link
          rel="alternate"
          type="application/json"
          href="/.well-known/ai-catalog.json"
          title="Devrious AI Service & Product Catalog"
        />
        <link
          rel="alternate"
          type="application/json"
          href="/.well-known/ard.json"
          title="Devrious Agent Resource Discovery (ARD)"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(organizationJsonLd),
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-white text-[#3A352D]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-[#F92C53] focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        <MotionProvider>
          <AgentBrowsingProvider />
          <Navbar />
          <div id="main-content" className="flex flex-1 flex-col">
            <PageTransition>{children}</PageTransition>
          </div>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
