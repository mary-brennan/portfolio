import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { ExternalLink } from "@/components/ExternalLink";
import { Nav } from "@/components/Nav";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    type: "website",
  },
};

const footerLink = "rounded-sm transition-colors hover:text-foreground";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("dark antialiased", inter.variable, GeistMono.variable)}>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#main"
          className="sr-only rounded-2xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
        >
          Skip to content
        </a>

        {/* soft glow behind the page header, tinted with the theme's primary color */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-130 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklch,var(--primary)_18%,transparent),transparent_65%)]"
        />
        <Nav />

        {/* tabIndex lets the skip link move focus here */}
        <main id="main" tabIndex={-1} className="mx-auto w-full max-w-4xl flex-1 px-6 pb-8 outline-none">
          {children}
        </main>

        <footer className="border-t">
          <div className="mx-auto flex max-w-4xl flex-col-reverse gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs">
              © {new Date().getFullYear()} {site.name}. Built with Next.js, Tailwind CSS &amp; shadcn/ui.
            </p>
            <ul className="flex gap-5">
              <li>
                <a href={`mailto:${site.links.email}`} className={footerLink}>
                  Email
                </a>
              </li>
              <li>
                <ExternalLink href={site.links.github} className={footerLink}>
                  GitHub
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href={site.links.linkedin} className={footerLink}>
                  LinkedIn
                </ExternalLink>
              </li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
