import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://arianna9912.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/portfolio-arianna/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}