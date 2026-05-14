import { Castle } from "lucide-react";
import Link from "next/link";

const navigationItems = [
  { label: "Palaces", href: "#palaces" },
  { label: "Lessons", href: "#lessons" },
  { label: "Account", href: "#account" },
];

export function SiteHeader() {
  return (
    <header className="relative z-10 border-b border-white/35 bg-white/20 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-zinc-950 text-white">
            <Castle className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="text-base font-semibold text-zinc-950">
              Memory Palace
            </span>
            <span className="text-xs text-zinc-500">Learning app</span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 text-sm font-medium text-zinc-600 sm:flex"
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-zinc-950"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
