import { Globe, MessageCircle, Wrench, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const iconsBySlug: Record<string, LucideIcon> = {
  "ai-websites": Globe,
  "whatsapp-automation": MessageCircle,
  "custom-development": Wrench,
};

export function ServiceIcon({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const Icon = iconsBySlug[slug] ?? Wrench;
  return (
    <div
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent",
        className,
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
    </div>
  );
}
