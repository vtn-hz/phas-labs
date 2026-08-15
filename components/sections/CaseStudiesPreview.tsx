import Link from "next/link";
import { getCaseStudies } from "@/lib/case-studies";
import { Section } from "@/components/ui/Section";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function CaseStudiesPreview() {
  const caseStudies = getCaseStudies();

  return (
    <Section id="casos" className="border-t border-border">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-3xl font-semibold tracking-tight">Casos</h2>
        {caseStudies.length > 0 && (
          <Link
            href="/work"
            className="hidden shrink-0 text-sm text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            Ver todos los casos →
          </Link>
        )}
      </div>
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
                "Hola! Quiero ser uno de los primeros casos de Phascual Labs.",
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
