import type { ReactNode } from "react";

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <h2 className="mb-8 font-mono text-sm uppercase tracking-[0.2em] text-primary">{title}</h2>
      {children}
    </section>
  );
}
