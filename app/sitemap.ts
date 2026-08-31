import type { MetadataRoute } from "next";
import { SITE_ROUTES, getAbsoluteUrl } from "@/lib/siteMetadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return SITE_ROUTES.map((route) => ({
    url: getAbsoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}
