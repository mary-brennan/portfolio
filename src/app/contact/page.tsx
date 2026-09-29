import type { Metadata } from "next";
import { ExternalLink } from "@/components/ExternalLink";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { buttonVariants } from "@/components/ui/button";
import { pageIntros, site } from "@/data/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
};

const outlineButton = cn(buttonVariants({ variant: "outline", size: "lg" }), "border-foreground/15");

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact">{pageIntros.contact}</PageHeader>

      <Section id="contact" title="Get in touch">
        {/* address is visible so people can copy it without a mail client */}
        <a
          href={`mailto:${site.links.email}`}
          className="rounded-sm font-heading text-2xl font-medium tracking-tight break-all underline decoration-primary/40 underline-offset-8 transition-colors hover:decoration-primary sm:text-3xl"
        >
          {site.links.email}
        </a>
        <p className="mt-4 text-muted-foreground">Based in {site.location}.</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${site.links.email}`} className={buttonVariants({ size: "lg" })}>
            Say hello
          </a>
          <ExternalLink href={site.links.linkedin} className={outlineButton}>
            LinkedIn
          </ExternalLink>
          <ExternalLink href={site.links.github} className={outlineButton}>
            GitHub
          </ExternalLink>
        </div>
      </Section>
    </>
  );
}
