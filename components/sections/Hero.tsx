import { siteConfig } from "@/content/site-config";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function Hero() {
  return (
    <Section className="pt-24 sm:pt-32">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {siteConfig.tagline}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          {siteConfig.description}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button
            href={buildWhatsAppLink(
              "Hola! Quiero saber más sobre cómo pueden ayudar a mi negocio.",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribinos por WhatsApp
          </Button>
          <Button href="/services" variant="secondary">
            Ver servicios
          </Button>
        </div>
      </div>
    </Section>
  );
}
