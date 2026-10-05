import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { buttonVariants } from "@/components/ui/button";
import { about, site } from "@/data/site";
import { cn } from "@/lib/utils";
import profilePic from "../../public/profilepic.jpg";

const outlineButton = cn(buttonVariants({ variant: "outline", size: "lg" }), "border-foreground/15");
const secondaryButton = cn(buttonVariants({ variant: "secondary", size: "lg" }), "border-foreground/15");
// the first line of `about` ("Hi there!") is the greeting heading
const [greeting, ...aboutBody] = about;

export default function Home() {
  return (
    <>
      {/* the intro fills most of the first screen on larger displays so it's read first,
          capped so tall screens don't leave a big empty gap before About */}
      <section
        aria-labelledby="intro"
        className="flex flex-col justify-center pt-16 pb-8 sm:pt-24 md:min-h-[min(calc(100svh-3.5rem),40rem)] md:py-16"
      >
        <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:gap-12">
          <div className="flex-1">
            <h1 id="intro" className="font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
              {site.name}
            </h1>
            <p className="mt-3 text-lg">
              <span className="text-primary">{site.role}</span>
              <span className="text-muted-foreground"> · {site.location}</span>
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {site.tagline}
            </p>
          </div>

          <Image
            src={profilePic}
            alt={`${site.name} smiling in front of snowy mountains at dusk`}
            placeholder="blur"
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1024px) 240px, (min-width: 768px) 208px, 160px"
            className="size-40 shrink-0 rounded-full object-cover ring-2 ring-primary/40 ring-offset-4 ring-offset-background md:size-52 lg:size-60"
          />
        </div>
      </section>

      <RevealOnScroll>
        {/* no eyebrow title here: the greeting is the heading */}
        <section id="about" aria-label="About me" className="scroll-mt-24 pt-8 pb-16 sm:pt-12 sm:pb-20">
          <h2 className="font-heading text-2xl font-medium tracking-tight">{greeting}</h2>
          <div className="mt-4 max-w-2xl space-y-4 leading-relaxed text-muted-foreground">
            {aboutBody.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/experience" className={buttonVariants({ size: "lg" })}>
              See experience
            </Link>
              <Link href="/projects" className={secondaryButton}>
              View projects
            </Link>
            <Link href="/contact" className={outlineButton}>
              Get in touch
            </Link>
          </div>
        </section>
      </RevealOnScroll>
    </>
  );
}
