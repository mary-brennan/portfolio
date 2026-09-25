import { site } from "@/data/site";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import Link from "next/link";

const items = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight text-foreground">
          {site.name.split(" ").map((w) => w[0]).join("")}
          <span className="text-primary">.</span>
        </Link>
        <NavigationMenu className="flex-none">
          <NavigationMenuList className="gap-5">
            {items.map((item) => (
              <NavigationMenuItem
                key={item.href}
                className={item.label === "Experience" ? "hidden sm:block" : ""}
              >
                <NavigationMenuLink
                  className="rounded-none p-0 font-normal text-muted-foreground transition-colors hover:bg-transparent hover:text-foreground focus:bg-transparent focus-visible:text-foreground"
                  render={<Link href={item.href} />}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
