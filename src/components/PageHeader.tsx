import type { ReactNode } from "react";

export function PageHeader({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <header className="pt-24 sm:pt-32">
      <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-6xl">{title}</h1>
      {children && (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{children}</p>
      )}
    </header>
  );
}
