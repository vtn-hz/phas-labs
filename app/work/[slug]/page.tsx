import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllCaseStudySlugs,
  getCaseStudyBySlug,
} from "@/lib/case-studies";
import { CaseStudyBody } from "@/components/case-studies/CaseStudyBody";
import { Section } from "@/components/ui/Section";

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  return {
    title: caseStudy?.title,
    description: caseStudy?.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) notFound();

  return (
    <Section className="pt-24 sm:pt-32">
      <p className="text-sm text-muted-foreground">{caseStudy.client}</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        {caseStudy.title}
      </h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        {caseStudy.summary}
      </p>
      <CaseStudyBody blocks={caseStudy.body} />
    </Section>
  );
}
