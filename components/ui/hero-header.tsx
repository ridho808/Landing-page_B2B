"use client";

import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full px-2 group"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5",
            !isScrolled &&
              "bg-background/80 backdrop-blur-lg rounded-2xl border lg:bg-transparent lg:border-transparent lg:backdrop-blur-none"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm items-center">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <ThemeToggle />
                </li>
              </ul>
            </div>

            <div className="bg-background/95 backdrop-blur-lg group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:gap-4">
                {/* Mobile Theme Toggle */}
                <div className="lg:hidden flex justify-center">
                  <ThemeToggle />
                </div>

                {/* Mobile Buttons - Centered */}
                <div className="lg:hidden flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="bg-background hover:bg-accent"
                  >
                    <Link href="#contact">
                      <span>Learn More</span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Link href="#contact">
                      <span>Contact Us</span>
                    </Link>
                  </Button>
                </div>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex items-center gap-3">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="bg-background hover:bg-accent"
                  >
                    <Link href="#contact">
                      <span>Learn More</span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Link href="#contact">
                      <span>Get Started</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const Logo = ({ className }: { className?: string }) => {
  return (
    <span
      className={cn(
        "text-xl font-semibold bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text ",
        className
      )}
    >
      CreativeFlow
    </span>
  );
};
