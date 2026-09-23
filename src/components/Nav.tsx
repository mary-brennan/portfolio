import { site } from "@/data/site";

const items = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/5 bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold tracking-tight text-white">
          {site.name.split(" ").map((w) => w[0]).join("")}
          <span className="text-accent">.</span>
        </a>
        <ul className="flex gap-5 text-sm text-muted">
          {items.map((i) => (
            <li key={i.href} className={i.label === "Experience" ? "hidden sm:block" : ""}>
              <a href={i.href} className="transition-colors hover:text-white">
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
