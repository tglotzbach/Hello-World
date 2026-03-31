import Link from "next/link";

const links = [
  { href: "/work", label: "Work" },
  { href: "/automations", label: "Automations" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-serif text-lg font-semibold tracking-tight">
          Tucker Ratcliff
        </Link>
        <ul className="hidden items-center gap-8 text-sm tracking-wide sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-ink/60 transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile: simple inline links */}
        <ul className="flex items-center gap-4 text-sm tracking-wide sm:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-ink/60 transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <hr className="border-ink/10" />
    </header>
  );
}
