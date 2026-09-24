import { site } from "@/data/site";

const items = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold tracking-tight text-foreground">
          {site.name.split(" ").map((w) => w[0]).join("")}
          <span className="text-primary">.</span>
        </a>
        <ul className="flex gap-5 text-sm text-muted-foreground">
          {items.map((i) => (
            <li key={i.href} className={i.label === "Experience" ? "hidden sm:block" : ""}>
              <a href={i.href} className="transition-colors hover:text-foreground">
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
