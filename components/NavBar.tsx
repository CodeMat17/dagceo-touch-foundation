"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HamburgerMenu from "./HamburgerMenu";
import LogoComponent from "./LogoComponent";
import ThemeToggleButton from "./ThemeToggleButton";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/our-programme", label: "Programme" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact Us" },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-gray-200/60 shadow-sm dark:bg-gray-950/70 dark:border-gray-800/50">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3">
        <LogoComponent classnames="w-16 h-16 animate-animation" />

        <div className="flex items-center gap-3">
          <ThemeToggleButton />
          <div className="md:hidden">
            <HamburgerMenu />
          </div>
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition-all duration-200 ${
                  pathname === href
                    ? "bg-gradient-to-r from-violet-600 to-pink-600 text-white shadow-md shadow-violet-600/30"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                }`}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
