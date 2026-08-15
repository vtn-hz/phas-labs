import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section className="pt-24 text-center sm:pt-32">
      <h1 className="text-3xl font-semibold tracking-tight">
        No encontramos esta página
      </h1>
      <p className="mt-4 text-muted-foreground">
        Puede que el link esté roto o que la página se haya movido.
      </p>
      <div className="mt-8 flex justify-center">
        <Button href="/">Volver al inicio</Button>
      </div>
    </Section>
  );
}
