import { getCaseStudies } from "@/lib/case-studies";
import { Section } from "@/components/ui/Section";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";

export function CaseStudiesPreview() {
  const caseStudies = getCaseStudies();

  return (
    <Section className="border-t border-border">
      <h2 className="text-2xl font-semibold tracking-tight">Casos</h2>
      {caseStudies.length === 0 ? (
        <p className="mt-6 text-muted-foreground">
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
