import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/visit", "/about", "/ministries", "/events", "/word", "/support-center", "/give", "/prayer", "/contact"].map((p) => ({
    url: `${siteUrl}${p}`,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.7,
  }));
}
