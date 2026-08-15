import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { CaseStudiesPreview } from "@/components/sections/CaseStudiesPreview";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <CaseStudiesPreview />
      <CTASection />
    </>
  );
}
