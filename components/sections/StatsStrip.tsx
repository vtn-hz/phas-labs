import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { value: "24/7", label: "Tu WhatsApp nunca duerme" },
  { value: "100%", label: "A medida de tu negocio" },
  { value: "3", label: "Servicios, una sola conversación" },
];

export function StatsStrip() {
  return (
    <div className="border-y border-border bg-muted">
      <Section className="py-10 sm:py-12">
        <Reveal className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>
      </Section>
    </div>
  );
}
