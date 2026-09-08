import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://arianna9912.github.io";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/portfolio-arianna/sitemap.xml`,
  };
}