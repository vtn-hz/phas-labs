import type { Metadata } from "next";
import Link from "next/link";
import { getServices } from "@/lib/services";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Páginas web con IA, automatización por WhatsApp y desarrollo a medida para pequeños negocios.",
};

export default function ServicesPage() {
  const services = getServices();

  return (
    <Section className="pt-24 sm:pt-32">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Servicios
      </h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Tres formas de potenciar tu negocio con tecnología. Si no estás
        seguro de cuál te sirve, escribinos y lo vemos juntos.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {services.map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`}>
            <Card className="h-full transition-colors hover:border-accent">
              <h2 className="font-medium">{service.name}</h2>
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
