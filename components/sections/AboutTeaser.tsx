import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { Section } from "@/components/ui/Section";

export function AboutTeaser() {
  return (
    <Section id="nosotros" className="border-t border-border">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight">
          Sobre {siteConfig.name}
        </h2>
        <p className="mt-4 text-muted-foreground">
          Somos un estudio chico armado por Valentino Hernández Pascual,
          enfocado en una idea simple: los negocios chicos y las pymes no
          siempre tienen acceso a la misma tecnología que las empresas
          grandes, no porque no la necesiten, sino porque nadie se las
          ofrece de forma clara y a su medida.
        </p>
        <Link
          href="/about"
          className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
        >
          Conocé más sobre nosotros →
        </Link>
      </div>
    </Section>
  );
}
