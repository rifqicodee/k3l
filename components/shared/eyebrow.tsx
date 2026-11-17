import { Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

/** Badge pill kecil bergaya eyebrow (gaya Aeline) */
export function Eyebrow({
  children,
  className,
  icon: Icon = Leaf,
  tone = "default",
}: {
  children: React.ReactNode;
  className?: string;
  icon?: React.ComponentType<{ className?: string }> | null;
  tone?: "default" | "lime" | "dark";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
        tone === "default" &&
          "border border-olive/25 bg-secondary text-olive-dark",
        tone === "lime" && "bg-lime-accent text-olive-dark",
        tone === "dark" && "bg-olive text-white",
        className
      )}
    >
      {Icon ? <Icon className="size-3" aria-hidden /> : null}
      {children}
    </span>
  );
}
