import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-accent text-[11px] font-bold text-bg">
            A
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">
            Automatialab
          </span>
        </div>

        <p className="font-mono text-[12px] text-muted">
          © {year} Automatialab. Automatización con IA para negocios.
        </p>

        <div className="flex gap-6">
          <Link
            href="#servicios"
            className="font-mono text-[12px] text-muted transition-colors hover:text-fg"
          >
            Servicios
          </Link>
          <Link
            href="#contacto"
            className="font-mono text-[12px] text-muted transition-colors hover:text-fg"
          >
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}
