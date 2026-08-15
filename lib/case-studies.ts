import { caseStudies } from "@/content/case-studies";
import type { CaseStudy } from "@/content/types";

export function getCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((caseStudy) => caseStudy.slug);
}
