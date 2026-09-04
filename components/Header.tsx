import Link from "next/link";

const NAV_ITEMS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#top" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-accent text-[13px] font-bold text-bg">
            A
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight">
            Automatialab
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[13px] text-muted transition-colors hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contacto"
          className="rounded-sm border border-fg/15 px-4 py-2 font-mono text-[13px] font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Agenda una llamada
        </Link>
      </div>
    </header>
  );
}
