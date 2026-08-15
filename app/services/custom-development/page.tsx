import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/services";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ServiceIcon } from "@/components/services/ServiceIcon";

const SLUG = "custom-development";

export function generateMetadata(): Metadata {
  const service = getServiceBySlug(SLUG);
  return {
    title: service?.name,
    description: service?.shortDescription,
  };
}

const steps = [
  { title: "Relevamiento", text: "Entendemos cómo trabaja tu negocio hoy." },
  { title: "Diseño", text: "Definimos juntos la solución más simple posible." },
  { title: "Desarrollo", text: "Construimos e iteramos con avances visibles." },
  { title: "Acompañamiento", text: "Seguimos disponibles después de la entrega." },
];

export default function CustomDevelopmentPage() {
  const service = getServiceBySlug(SLUG);
  if (!service) notFound();

  return (
    <Section className="pt-24 sm:pt-32">
      <ServiceIcon slug={SLUG} className="h-14 w-14 rounded-2xl" />
      <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
        {service.name}
      </h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        {service.description}
      </p>

      <ol className="mt-12 grid gap-6 sm:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.title}>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-medium text-accent-foreground">
              {index + 1}
            </span>
            <h2 className="mt-3 font-medium">{step.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
          </li>
        ))}
      </ol>

      <ul className="mt-12 grid gap-3 sm:grid-cols-2">
        {service.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />
            <span className="text-muted-foreground">{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-12">
        <Button
          href={buildWhatsAppLink(
            "Hola! Tengo una necesidad más específica y quiero contarles.",
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          Escribinos por WhatsApp
        </Button>
      </div>
    </Section>
  );
}
