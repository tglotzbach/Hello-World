"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/automations", label: "Automations" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-tight"
        >
          Tucker Glotzbach
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 text-sm tracking-wide sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  pathname.startsWith(link.href)
                    ? "text-ink font-medium"
                    : "text-ink/60 transition-colors hover:text-ink"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 sm:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-5 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-5 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-ink/10 px-6 pb-6 sm:hidden">
          <ul className="flex flex-col gap-4 pt-4 text-sm tracking-wide">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={
                    pathname.startsWith(link.href)
                      ? "text-ink font-medium"
                      : "text-ink/60 transition-colors hover:text-ink"
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <hr className="border-ink/10" />
    </header>
  );
}
