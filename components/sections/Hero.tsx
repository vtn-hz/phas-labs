import { siteConfig } from "@/content/site-config";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="hero-glow pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      />
      <Section className="pt-28 sm:pt-40">
        <div className="max-w-2xl">
          <span className="animate-fade-in-up inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            Tecnología para empresas en crecimiento
          </span>
          <h1
            className="animate-fade-in-up mt-6 text-5xl font-semibold tracking-tight text-balance sm:text-7xl"
            style={{ animationDelay: "0.05s" }}
          >
            {siteConfig.tagline}
          </h1>
          <p
            className="animate-fade-in-up mt-6 max-w-lg text-lg text-muted-foreground"
            style={{ animationDelay: "0.1s" }}
          >
            {siteConfig.description}
          </p>
          <div
            className="animate-fade-in-up mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: "0.15s" }}
          >
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
          <p
            className="animate-fade-in-up mt-8 text-sm text-muted-foreground"
            style={{ animationDelay: "0.2s" }}
          >
            Sin permanencia. Hablás directo con quien hace el trabajo.
          </p>
        </div>
      </Section>
    </div>
  );
}
