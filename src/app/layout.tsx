import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { Nav } from "@/components/Nav";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.tagline,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("dark antialiased", inter.variable, GeistMono.variable)}>
      <body className="min-h-screen font-sans">
        {/* soft glow behind the page header, tinted with the theme's primary color */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-130 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklch,var(--primary)_18%,transparent),transparent_65%)]"
        />
        <Nav />

        <main id="top" className="mx-auto max-w-4xl px-6">
          {children}
        </main>

        <footer className="mx-auto max-w-4xl px-6 py-10 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Built with Next.js, Tailwind CSS &amp; shadcn/ui.
        </footer>
      </body>
    </html>
  );
}
