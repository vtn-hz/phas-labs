import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/services";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import { AnimatedChatDemo } from "@/components/services/AnimatedChatDemo";

const SLUG = "whatsapp-automation";

export function generateMetadata(): Metadata {
  const service = getServiceBySlug(SLUG);
  return {
    title: service?.name,
    description: service?.shortDescription,
  };
}

const transcript: { from: "cliente" | "bot"; text: string }[] = [
  { from: "cliente", text: "Hola, ¿tienen turno para mañana a la tarde?" },
  {
    from: "bot",
    text: "¡Hola! Sí, tenemos turnos a las 15, 16 y 17:30. ¿Cuál te queda mejor?",
  },
  { from: "cliente", text: "El de las 16" },
  {
    from: "bot",
    text: "Listo, quedaste agendado para mañana a las 16. Te llega la confirmación por acá.",
  },
];

export default function WhatsappAutomationPage() {
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

      <Card className="mt-12 max-w-sm">
        <AnimatedChatDemo transcript={transcript} />
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Ejemplo de conversación automatizada
        </p>
      </Card>

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
            "Hola! Me interesa automatizar la atención por WhatsApp de mi negocio.",
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
