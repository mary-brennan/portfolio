import Link from "next/link";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { about, site } from "@/data/site";
import { cn } from "@/lib/utils";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  return (
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
        <Link href="/projects" className={buttonVariants({ size: "lg" })}>
          View projects
        </Link>
        <a href={site.links.github} {...external} className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-foreground/15")}>
          GitHub
        </a>
        <a href={site.links.linkedin} {...external} className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-foreground/15")}>
          LinkedIn
        </a>
      </div>
    </section>
  );
}
