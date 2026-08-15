import type { Metadata } from "next";
import Link from "next/link";
import { getServices } from "@/lib/services";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { ServiceIcon } from "@/components/services/ServiceIcon";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Páginas web con IA, automatización por WhatsApp y desarrollo a medida para pequeños negocios.",
};

export default function ServicesPage() {
  const services = getServices();

  return (
    <Section className="pt-24 sm:pt-32">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Servicios
      </h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Tres formas de potenciar tu negocio con tecnología. Si no estás
        seguro de cuál te sirve, escribinos y lo vemos juntos.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {services.map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`}>
            <Card className="h-full transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lg">
              <ServiceIcon slug={service.slug} />
              <h2 className="mt-4 font-medium">{service.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {service.shortDescription}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
