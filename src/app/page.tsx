import { Nav } from "@/components/Nav";
import { Section } from "@/components/Section";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { about, experience, projects, site, skills } from "@/data/site";
import { cn } from "@/lib/utils";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  return (
    <>
      {/* soft glow behind the hero, tinted with the theme's primary color */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-130 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklch,var(--primary)_18%,transparent),transparent_65%)]"
      />
      <Nav />

      <main id="top" className="mx-auto max-w-4xl px-6">
        {/* Hero */}
        <section className="pt-24 pb-12 sm:pt-32">
          <div className="flex flex-col-reverse gap-8 md:flex-row md:items-start md:gap-12">
            <div className="flex-1">
              {site.openToWork && (
                <Badge
                  variant="outline"
                  className="mb-6 h-6 gap-2 border-emerald-400/20 bg-emerald-400/10 px-3 text-emerald-300"
                >
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  Open to new roles
                </Badge>
              )}
              <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
                {site.name}
              </h1>
              <p className="mt-3 text-lg text-primary">{site.role}</p>
              <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-muted-foreground">
                {about.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
            </div>

            {/* <Avatar className="size-36 ring-2 ring-primary/40 ring-offset-4 ring-offset-background sm:size-44 md:size-52">
              <AvatarImage src="/mary.jpg" alt="Mary Brennan holding a camera in a redwood forest" />
              <AvatarFallback className="text-2xl">MB</AvatarFallback>
            </Avatar> */}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={buttonVariants({ size: "lg" })}>
              View projects
            </a>
            <a href={site.links.github} {...external} className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-foreground/15")}>
              GitHub
            </a>
            <a href={site.links.linkedin} {...external} className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-foreground/15")}>
              LinkedIn
            </a>
          </div>
        </section>

        <Section id="about" title="Skills">
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

        <Section id="projects" title="Projects">
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

        <Section id="experience" title="Experience">
          <ol className="space-y-8 border-l pl-6">
            {experience.map((e) => (
              <li key={e.role + e.company} className="relative">
                <span className="absolute -left-[29px] top-1.5 size-2.5 rounded-full border-2 border-primary bg-background" />
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

        <Section id="contact" title="Contact">
          <p className="max-w-xl font-heading text-2xl font-medium tracking-tight">
            I&apos;m looking for my next role. The fastest way to reach me is email.
          </p>
          <a href={`mailto:${site.links.email}`} className={cn(buttonVariants({ size: "lg" }), "mt-6")}>
            Say hello
          </a>
        </Section>
      </main>

      <footer className="mx-auto max-w-4xl px-6 py-10 text-xs text-muted-foreground">
        © {new Date().getFullYear()} {site.name}. Built with Next.js, Tailwind CSS &amp; shadcn/ui.
      </footer>
    </>
  );
}
