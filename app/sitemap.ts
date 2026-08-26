import { MetadataRoute } from "next";
import { worksData } from "@/data/works";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const currentDate = new Date();

  const worksEntries = worksData.map((work) => ({
    url: `${baseUrl}/works/${work.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    ...worksEntries,
  ];
}
