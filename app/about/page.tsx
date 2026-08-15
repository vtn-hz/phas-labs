import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Nosotros",
  description: `Quién está detrás de ${siteConfig.name} y por qué.`,
};

export default function AboutPage() {
  return (
    <Section className="pt-24 sm:pt-32">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Sobre {siteConfig.name}
      </h1>
      <div className="mt-8 max-w-2xl space-y-4 text-muted-foreground">
        <p>
          {siteConfig.name} es un estudio chico armado por Valentino Hernández
          Pascual, enfocado en una idea simple: los negocios chicos y las
          pymes no siempre tienen acceso a la misma tecnología que las
          empresas grandes, no porque no la necesiten, sino porque nadie se
          las ofrece de forma clara y a su medida.
        </p>
        <p>
          Antes de proponer una solución, nos tomamos el tiempo de entender a
          qué se dedica tu negocio y qué es lo que realmente te haría falta:
          una web nueva, un asistente que responda por WhatsApp mientras
          estás ocupado, o algo más específico que ninguna herramienta
          genérica resuelve.
        </p>
        <p>
          Si tenés un negocio y creés que la tecnología podría ayudarte a
          crecer, escribinos. Es gratis charlarlo.
        </p>
      </div>
    </Section>
  );
}
