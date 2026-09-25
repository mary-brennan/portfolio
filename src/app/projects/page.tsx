import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { projects, site } from "@/data/site";
import { cn } from "@/lib/utils";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export const metadata: Metadata = {
  title: `Projects — ${site.name}`,
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Projects" />

      <Section id="projects" title="Selected work">
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((p) => {
            const card = (
              <Card
                className={cn(
                  "h-full transition",
                  p.href && "group-hover:ring-primary/40 group-hover:bg-card/80",
                )}
              >
                <CardHeader>
                  <CardTitle>
                    {p.title}
                    {p.href && (
                      <span className="ml-1 inline-block text-primary transition group-hover:translate-x-0.5">
                        ↗
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">{p.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <ul className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <li key={t}>
                        <Badge className="bg-primary/15 text-primary">{t}</Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
            return p.href ? (
              <a key={p.title} href={p.href} {...external} className="group block">
                {card}
              </a>
            ) : (
              <div key={p.title}>{card}</div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
