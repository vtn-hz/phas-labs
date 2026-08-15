import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/services";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { ServiceIcon } from "@/components/services/ServiceIcon";

const SLUG = "ai-websites";

export function generateMetadata(): Metadata {
  const service = getServiceBySlug(SLUG);
  return {
    title: service?.name,
    description: service?.shortDescription,
  };
}

function MockBrowser({
  label,
  tone,
}: {
  label: string;
  tone: "muted" | "accent";
}) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="flex items-center gap-1.5 border-b border-border bg-muted px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
      </div>
      <div className="space-y-3 p-6">
        <div
          className={`h-4 w-2/3 rounded ${
            tone === "accent" ? "bg-accent" : "bg-border"
          }`}
        />
        <div className="h-3 w-full rounded bg-border" />
        <div className="h-3 w-5/6 rounded bg-border" />
        <div
          className={`mt-4 h-9 w-32 rounded-full ${
            tone === "accent" ? "bg-accent" : "bg-border"
          }`}
        />
      </div>
      <p className="border-t border-border px-6 py-3 text-center text-xs text-muted-foreground">
        {label}
      </p>
    </Card>
  );
}

export default function AiWebsitesPage() {
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

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <MockBrowser label="Antes: sin web o una desactualizada" tone="muted" />
        <MockBrowser label="Después: web nueva, clara y a tu marca" tone="accent" />
      </div>

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
            "Hola! Me interesa una página web con IA para mi negocio.",
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
