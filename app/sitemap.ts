import type { MetadataRoute } from "next";
import { siteConfig, sitePageUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-24T00:00:00.000Z");

  return siteConfig.routes.map((route) => ({
    url: sitePageUrl(route),
    lastModified,
  }));
}
