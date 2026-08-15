import { services } from "@/content/services";
import type { Service } from "@/content/types";

export function getServices(): Service[] {
  return services;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
