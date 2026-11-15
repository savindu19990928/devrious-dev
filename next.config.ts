import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  outputFileTracingIncludes: {
    "/policies/*": ["./policies/**/*"],
  },
  async redirects() {
    return [
      {
        source: "/pre-builds",
        destination: "/pre-builts",
        permanent: true,
      },
      {
        source: "/pre-builds/:slug",
        destination: "/pre-builts/:slug",
        permanent: true,
      },
    ];
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
