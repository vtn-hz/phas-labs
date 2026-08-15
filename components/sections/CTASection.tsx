import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function CTASection() {
  return (
    <div className="border-t border-border bg-foreground text-background">
      <Section className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          ¿Hablamos de tu negocio?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-background/70">
          Contanos a qué se dedica tu negocio y vemos juntos qué solución
          tiene más sentido para vos.
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            href={buildWhatsAppLink(
              "Hola! Quiero contarte sobre mi negocio a ver qué me recomendás.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background text-foreground hover:opacity-90"
          >
            Escribinos por WhatsApp
          </Button>
        </div>
      </Section>
    </div>
  );
}
