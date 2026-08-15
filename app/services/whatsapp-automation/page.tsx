import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/services";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const SLUG = "whatsapp-automation";

export function generateMetadata(): Metadata {
  const service = getServiceBySlug(SLUG);
  return {
    title: service?.name,
    description: service?.shortDescription,
  };
}

function ChatBubble({
  from,
  text,
}: {
  from: "cliente" | "bot";
  text: string;
}) {
  return (
    <div
      className={cn(
        "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
        from === "cliente"
          ? "self-start bg-muted text-foreground"
          : "self-end bg-accent text-accent-foreground",
      )}
    >
      {text}
    </div>
  );
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
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {service.name}
      </h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        {service.description}
      </p>

      <Card className="mt-12 max-w-sm">
        <div className="flex flex-col gap-3">
          {transcript.map((message, index) => (
            <ChatBubble key={index} {...message} />
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Ejemplo de conversación automatizada
        </p>
      </Card>

      <ul className="mt-12 grid gap-3 sm:grid-cols-2">
        {service.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2 text-sm">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
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
