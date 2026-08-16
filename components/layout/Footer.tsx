import Image from "next/image";
import { siteConfig } from "@/content/site-config";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-[#0d1b2e]">
      <Container className="flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <Image
          src="/grayco-banner.png"
          alt={siteConfig.name}
          width={500}
          height={250}
          className="h-10 w-auto"
        />
        <div className="flex flex-col items-center gap-1 text-sm text-white/60 sm:items-end">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p>{siteConfig.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
