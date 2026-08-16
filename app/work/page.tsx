import type { Metadata } from "next";
import { getCaseStudies } from "@/lib/case-studies";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Casos",
  description: "Proyectos que hicimos para negocios como el tuyo.",
};

export default function WorkPage() {
  const caseStudies = getCaseStudies();

  return (
    <Section className="pt-24 sm:pt-32">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Casos
      </h1>
      {caseStudies.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-border p-10 text-center">
          <p className="text-muted-foreground">
            Todavía estamos armando nuestros primeros casos.
          </p>
          <p className="mt-1 font-medium">
            Si querés ser el primero, escribinos por WhatsApp.
          </p>
          <div className="mt-6 flex justify-center">
            <Button
              href={buildWhatsAppLink(
                "Hola! Quiero ser uno de los primeros casos de Grayco.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              Escribinos por WhatsApp
            </Button>
          </div>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      )}
    </Section>
  );
}
