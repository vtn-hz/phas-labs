import { siteConfig } from "@/content/site-config";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center gap-2 py-10 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <p>{siteConfig.tagline}</p>
      </Container>
    </footer>
  );
}
