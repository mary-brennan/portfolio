import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" />

      <Section id="contact" title="Get in touch">
        <p className="max-w-xl font-heading text-2xl font-medium tracking-tight">
          I&apos;m looking for my next role. The fastest way to reach me is email.
        </p>
        <a href={`mailto:${site.links.email}`} className={cn(buttonVariants({ size: "lg" }), "mt-6")}>
          Say hello
        </a>
      </Section>
    </>
  );
}
