import { Mail } from "lucide-react";
import type { Metadata } from "next";
import { CopyEmail } from "@/components/CopyEmail";
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
const secondaryButton = cn(buttonVariants({ variant: "secondary", size: "lg" }));

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact">{pageIntros.contact}</PageHeader>

      <Section id="contact" title="Get in touch">
        <div className="flex flex-wrap gap-3">
          <a href={`mailto:${site.links.email}`} className={buttonVariants({ size: "lg" })}>
            <Mail aria-hidden />
            Email me
          </a>
          <ExternalLink href={site.links.linkedin} className={secondaryButton}>
            LinkedIn
          </ExternalLink>
          <ExternalLink href={site.links.github} className={outlineButton}>
            GitHub
          </ExternalLink>
        </div>

        <CopyEmail email={site.links.email} className="mt-6" />
        <p className="mt-2 text-sm text-muted-foreground">Based in {site.location}.</p>
      </Section>
    </>
  );
}
