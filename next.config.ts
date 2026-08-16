import type { NextConfig } from "next";

const staticExport = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  ...(staticExport
    ? {
        output: "export" as const,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
