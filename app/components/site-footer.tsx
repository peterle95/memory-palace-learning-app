const footerLinks = [
  { label: "Prototype", href: "#prototype" },
  { label: "Privacy", href: "#privacy" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/35 bg-white/20 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-5 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>Memory Palace Learning App</p>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-4">
          {footerLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-medium transition hover:text-zinc-950"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
