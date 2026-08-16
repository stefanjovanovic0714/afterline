import type { MetadataRoute } from "next";
import { site } from "@/app/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/how-it-works",
    "/industries",
    "/pricing",
    "/contact",
    "/privacy",
    "/terms",
  ];
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.6,
  }));
}
