import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/MotionProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Devrious | Custom Software, Web & AI Development in Sri Lanka",
    template: "%s | Devrious",
  },
  description:
    "Devrious is a software engineering studio in Colombo, Sri Lanka. We design, build, and secure custom websites, business operations software, AI tools, and ready-to-deploy POS & ERP systems.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-[#3A352D]">
        <MotionProvider>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
