import Link from "next/link";
import { navLinks } from "@/content/nav";
import { siteConfig } from "@/content/site-config";
import { Container } from "@/components/ui/Container";

export function Header() {
  return (
    <header className="border-b border-border">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
