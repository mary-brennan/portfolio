import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  title,
  className,
  children,
}: {
  id: string;
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("scroll-mt-24 py-16 sm:py-20", className)}>
      <h2 id={`${id}-title`} className="mb-8 font-mono text-sm uppercase tracking-[0.2em] text-primary">
        {title}
      </h2>
      {children}
    </section>
  );
}
