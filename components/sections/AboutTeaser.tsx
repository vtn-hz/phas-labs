import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function AboutTeaser() {
  return (
    <Section id="nosotros" className="border-t border-border">
      <Reveal className="grid gap-10 sm:grid-cols-[1fr_1.2fr] sm:items-start">
        <div>
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-lg font-semibold text-accent-foreground">
            VH
          </div>
          <p className="mt-4 font-medium">Valentino Hernández Pascual</p>
          <p className="text-sm text-muted-foreground">
            Fundador de {siteConfig.name}
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">
            Sobre {siteConfig.name}
          </h2>
          <blockquote className="mt-4 border-l-2 border-accent pl-4 text-lg text-muted-foreground italic">
            &ldquo;Arranqué esto porque veía negocios buenísimos perdiendo
            clientes por cosas evitables: un mensaje sin contestar, una web
            que no existe. Quiero que dejes de perder ventas por no llegar a
            tiempo.&rdquo;
          </blockquote>
          <Link
            href="/about"
            className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
          >
            Conocé más sobre nosotros →
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
