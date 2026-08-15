import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors";

const variantStyles = {
  primary: "bg-accent text-accent-foreground hover:opacity-90",
  secondary:
    "border border-border text-foreground hover:bg-muted",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  target,
  rel,
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={cn(baseStyles, variantStyles[variant], className)}
    >
      {children}
    </Link>
  );
}
