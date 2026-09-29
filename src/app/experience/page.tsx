import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { experience, pageIntros, skills } from "@/data/site";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader title="Experience">{pageIntros.experience}</PageHeader>

      {/* recruiters look for work history first, so it leads */}
      <Section id="experience" title="Work & education">
        <ol className="space-y-8 border-l pl-6">
          {experience.map((e) => (
            <li key={e.role + e.company} className="relative">
              {/* dot sits outside the Card since Card clips overflow */}
              <span
                aria-hidden
                className="absolute -left-7.25 top-5.5 size-2.5 rounded-full border-2 border-primary bg-background"
              />
              <Card size="sm" className="bg-transparent shadow-none ring-0">
                <CardHeader>
                  <CardTitle>
                    <h3>{e.role}</h3>
                  </CardTitle>
                  <CardDescription>{e.company}</CardDescription>
                  <CardAction>
                    <Badge variant="ghost" className="font-mono text-muted-foreground">
                      {e.period}
                    </Badge>
                  </CardAction>
                </CardHeader>
                {e.points && e.points.length > 0 && (
                  <CardContent>
                    <Points points={e.points} />
                  </CardContent>
                )}
                {e.clients && (
                  <CardContent>
                    <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold">
                      Clients
                    </h4>
                    <ul className="space-y-4">
                      {e.clients.map((c) => (
                        <li key={c.client}>
                          <Card size="sm">
                            <CardHeader>
                              <CardTitle>
                                <h5>{c.client}</h5>
                              </CardTitle>
                              <CardDescription>{c.description}</CardDescription>
                              <CardAction>
                                <Badge variant="ghost" className="font-mono text-muted-foreground">
                                  {c.period}
                                </Badge>
                              </CardAction>
                            </CardHeader>
                            <CardContent>
                              <Points points={c.points} />
                            </CardContent>
                          </Card>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                )}
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="skills" title=" Technical Skills">
        <ul className="grid gap-8 sm:grid-cols-2">
          {Object.entries(skills).map(([group, items]) => (
            <li key={group}>
              <h3 className="mb-3 text-sm font-medium">{group}</h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <li key={s}>
                    <Badge  className="h-7 bg-primary/15 text-primary px-3 font-mono">
                      {s}
                    </Badge>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

function Points({ points }: { points: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
      {points.map((pt) => (
        <li key={pt}>{pt}</li>
      ))}
    </ul>
  );
}
