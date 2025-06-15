"use client";

import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref scroll={false}>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              onClick={(e) => {
                // Si ya estamos en la home, hacemos scroll suave
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  document.getElementById("home")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }
                // Si no, el Link navegará normalmente a "/"
              }}
            >
              Inicio
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/#about-section" legacyBehavior passHref scroll={false}>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              onClick={(e) => {
                // Si ya estamos en la home, hacemos scroll suave
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  document.getElementById("about-section")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }
                // Si no, el Link navegará normalmente a "/"
              }}
            >
              Acerca
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/#desbloqueos" legacyBehavior passHref scroll={false}>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              onClick={(e) => {
                // Si ya estamos en la home, hacemos scroll suave
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  document.getElementById("desbloqueos")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }
                // Si no, el Link navegará normalmente a "/"
              }}
            >
              Desbloqueos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/ofertas" legacyBehavior passHref scroll={false}>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              onClick={(e) => {
                // Si ya estamos en la home, hacemos scroll suave
                if (window.location.pathname === "/ofertas") {
                  e.preventDefault();
                  document.getElementById("ofertas")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }
                // Si no, el Link navegará normalmente a "/"
              }}
            >
              Ofertas
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/#Contact" legacyBehavior passHref scroll={false}>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              onClick={(e) => {
                // Si ya estamos en la home, hacemos scroll suave
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  document.getElementById("Contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }
                // Si no, el Link navegará normalmente a "/"
              }}
            >
              Contacto
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
