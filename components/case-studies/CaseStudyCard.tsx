import Link from "next/link";
import type { CaseStudy } from "@/content/types";
import { Card } from "@/components/ui/Card";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link href={`/work/${caseStudy.slug}`}>
      <Card className="h-full transition-colors hover:border-accent">
        <p className="text-sm text-muted-foreground">{caseStudy.client}</p>
        <h3 className="mt-1 font-medium">{caseStudy.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {caseStudy.summary}
        </p>
      </Card>
    </Link>
  );
}
