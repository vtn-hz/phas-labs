import Link from "next/link";
import { getServices } from "@/lib/services";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { ServiceIcon } from "@/components/services/ServiceIcon";

export function ServicesOverview() {
  const services = getServices();

  return (
    <Section className="border-t border-border">
      <h2 className="text-3xl font-semibold tracking-tight">
        Qué podemos hacer por tu negocio
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {services.map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`}>
            <Card className="h-full transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lg">
              <ServiceIcon slug={service.slug} />
              <h3 className="mt-4 font-medium">{service.name}</h3>
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
