"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { site } from "@/data/site";

const items = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          aria-label={`${site.name}, home`}
          className="font-semibold tracking-tight text-foreground"
        >
          {site.name.split(" ").map((w) => w[0]).join("")}
          <span aria-hidden className="text-primary">.</span>
        </Link>
        <NavigationMenu aria-label="Main" className="flex-none">
          <NavigationMenuList className="gap-4 sm:gap-6">
            {items.map((item) => (
              <NavigationMenuItem key={item.href}>
                {/* `active` sets aria-current="page" and data-active */}
                <NavigationMenuLink
                  active={pathname === item.href}
                  className="rounded-none p-0 font-normal text-muted-foreground transition-colors hover:bg-transparent hover:text-foreground focus:bg-transparent focus-visible:text-foreground data-[active=true]:bg-transparent data-[active=true]:text-foreground data-[active=true]:hover:bg-transparent data-[active=true]:focus:bg-transparent"
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
