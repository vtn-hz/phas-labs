import Link from "next/link";
import { getServices } from "@/lib/services";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function ServicesOverview() {
  const services = getServices();

  return (
    <Section className="border-t border-border">
      <h2 className="text-2xl font-semibold tracking-tight">
        Qué podemos hacer por tu negocio
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {services.map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`}>
            <Card className="h-full transition-colors hover:border-accent">
              <h3 className="font-medium">{service.name}</h3>
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
