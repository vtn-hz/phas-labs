import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";
import { getServices } from "@/lib/services";
import { getCaseStudies } from "@/lib/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: "yearly", priority: 1 },
    { url: `${siteConfig.url}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/work`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteConfig.url}/about`, changeFrequency: "yearly", priority: 0.5 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = getServices().map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = getCaseStudies().map(
    (caseStudy) => ({
      url: `${siteConfig.url}/work/${caseStudy.slug}`,
      changeFrequency: "monthly",
      priority: 0.6,
    }),
  );

  return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes];
}
