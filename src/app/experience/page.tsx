import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { experience, site, skills } from "@/data/site";

export const metadata: Metadata = {
  title: `Experience — ${site.name}`,
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader title="Experience" />

      <Section id="skills" title="Skills">
        <ul className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <li key={s}>
              <Badge variant="secondary" className="h-7 px-3 font-mono">
                {s}
              </Badge>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="experience" title="Work">
        <ol className="space-y-8 border-l pl-6">
          {experience.map((e) => (
            <li key={e.role + e.company} className="relative">
              <span className="absolute -left-7.25 top-1.5 size-2.5 rounded-full border-2 border-primary bg-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-medium">{e.role}</h3>
                <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
              </div>
              <p className="text-sm text-muted-foreground">{e.company}</p>
              {e.points.length > 0 && (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
