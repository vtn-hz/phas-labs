import type { Metadata } from "next";
import { getCaseStudies } from "@/lib/case-studies";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Casos",
  description: "Proyectos que hicimos para negocios como el tuyo.",
};

export default function WorkPage() {
  const caseStudies = getCaseStudies();

  return (
    <Section className="pt-24 sm:pt-32">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Casos
      </h1>
      {caseStudies.length === 0 ? (
        <p className="mt-6 max-w-xl text-muted-foreground">
          Todavía estamos armando nuestros primeros casos. Si querés ser el
          primero, escribinos por WhatsApp.
        </p>
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
