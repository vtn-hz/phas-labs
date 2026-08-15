import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function CTASection() {
  return (
    <Section className="border-t border-border text-center">
      <h2 className="text-2xl font-semibold tracking-tight">
        ¿Hablamos de tu negocio?
      </h2>
      <p className="mx-auto mt-4 max-w-md text-muted-foreground">
        Contanos a qué se dedica tu negocio y vemos juntos qué solución tiene
        más sentido para vos.
      </p>
      <div className="mt-8">
        <Button
          href={buildWhatsAppLink(
            "Hola! Quiero contarte sobre mi negocio a ver qué me recomendás.",
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
