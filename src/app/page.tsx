import { Nav } from "@/components/Nav";
import { Section } from "@/components/Section";
import { about, experience, projects, site, skills } from "@/data/site";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  return (
    <>
      {/* soft gradient glow behind the hero */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-130 bg-[radial-gradient(ellipse_at_top,rgba(167,139,250,0.18),transparent_65%)]"
      />
      <Nav />

      <main id="top" className="mx-auto max-w-3xl px-6">
        {/* Hero */}
        <section className="pt-24 pb-12 sm:pt-32">
          {site.openToWork && (
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Open to new roles
            </p>
          )}
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-3 text-lg text-accent">{site.role}</p>
          <ul className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
            {about.map((text) => (
              <li key={text} className=" py-2">
                {text}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              View projects
            </a>
            <a
              href={site.links.github}
              {...external}
              className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-white/30"
            >
              GitHub
            </a>
            <a
              href={site.links.linkedin}
              {...external}
              className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-white/30"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <Section id="about" title="About">
          <ul className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <li
                key={s}
                className="rounded-md border border-white/10 bg-white/3 px-2.5 py-1 font-mono text-xs text-zinc-300"
              >
                {s}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((p) => {
              const card = (
                <>
                  <h3 className="font-medium text-white">
                    {p.title}
                    {p.href && <span className="ml-1 text-accent transition group-hover:translate-x-0.5">↗</span>}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <li key={t} className="rounded bg-accent/10 px-2 py-0.5 text-xs text-accent">
                        {t}
                      </li>
                    ))}
                  </ul>
                </>
              );
              const cls =
                "group block rounded-xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-accent/40 hover:bg-white/[0.04]";
              return p.href ? (
                <a key={p.title} href={p.href} {...external} className={cls}>
                  {card}
                </a>
              ) : (
                <div key={p.title} className={cls}>
                  {card}
                </div>
              );
            })}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="space-y-8 border-l border-white/10 pl-6">
            {experience.map((e) => (
              <li key={e.role + e.company} className="relative">
                <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-medium text-white">{e.role}</h3>
                  <span className="font-mono text-xs text-muted">{e.period}</span>
                </div>
                <p className="text-sm text-muted">{e.company}</p>
                {e.points.length > 0 && (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-400">
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
          <p className="max-w-xl text-2xl font-medium tracking-tight text-white">
            I&apos;m looking for my next role. The fastest way to reach me is email.
          </p>
          <a
            href={`mailto:${site.links.email}`}
            className="mt-6 inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-black transition hover:brightness-110"
          >
            Say hello
          </a>
        </Section>
      </main>

      <footer className="mx-auto max-w-3xl px-6 py-10 text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. Built with Next.js &amp; Tailwind CSS.
      </footer>
    </>
  );
}
