import type { MetadataRoute } from "next"
import { SITE_URL, serviceLinks, companyLinks } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...serviceLinks.map((l) => l.href), ...companyLinks.map((l) => l.href), "/privacidad", "/terminos"]
  return paths.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }))
}
