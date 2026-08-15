import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { CaseStudiesPreview } from "@/components/sections/CaseStudiesPreview";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ServicesOverview />
      <CaseStudiesPreview />
      <AboutTeaser />
      <CTASection />
    </>
  );
}
