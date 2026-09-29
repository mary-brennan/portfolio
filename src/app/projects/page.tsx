import type { Metadata } from "next";
import { ExternalLink } from "@/components/ExternalLink";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { pageIntros, projects, type Project } from "@/data/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  const { side, work } = projects;
  return (
    <>
      <PageHeader title="Projects">{pageIntros.projects}</PageHeader>

      <Section id="work-projects" title="Work-Related">
        <ProjectGrid projects={work} />
      </Section>
      <Section id="side-projects" title="On the Side">
        <ProjectGrid projects={side} />
      </Section>
    </>
  );
}

function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {projects.map((p) => {
        const card = (
          <Card
            className={cn(
              "h-full transition",
              p.href && "group-hover:bg-card/80 group-hover:ring-primary/40",
            )}
          >
            <CardHeader>
              <CardTitle>
                <h3>
                  {p.title}
                  {p.href && (
                    <span
                      aria-hidden
                      className="ml-1 inline-block text-primary transition motion-safe:group-hover:translate-x-0.5"
                    >
                      ↗
                    </span>
                  )}
                </h3>
              </CardTitle>
              <CardDescription className="leading-relaxed">
                {p.description}
                {p.link && (
                  <>
                    {" "}
                    <ExternalLink
                      href={p.link.href}
                      className="group/link font-medium text-primary underline-offset-4 hover:underline"
                    >
                      {p.link.label}
                      <span
                        aria-hidden
                        className="ml-1 inline-block transition motion-safe:group-hover/link:translate-x-0.5"
                      >
                        ↗
                      </span>
                    </ExternalLink>
                  </>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <ul aria-label="Technologies" className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <li key={t}>
                    <Badge className="bg-primary/15 text-primary">{t}</Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        );
        return (
          <li key={p.title}>
            {p.href ? (
              <ExternalLink href={p.href} className="group block h-full rounded-[min(var(--radius-4xl),24px)]">
                {card}
              </ExternalLink>
            ) : (
              card
            )}
          </li>
        );
      })}
    </ul>
  );
}
