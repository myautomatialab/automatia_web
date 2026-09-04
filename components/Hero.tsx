import Link from "next/link";
import { FlowDiagram } from "./FlowDiagram";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border bg-grid"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 pb-20 pt-20 md:grid-cols-[1.1fr_0.9fr] md:pb-28 md:pt-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-mono text-[12px] uppercase tracking-widest text-muted">
              Automatización + IA aplicada
            </span>
          </div>

          <h1 className="text-balance font-display text-[2.75rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Tu operación, corriendo sola mientras tú creces el negocio.
          </h1>

          <p className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-muted">
            Diseñamos flujos de trabajo con n8n, integraciones a medida e IA
            aplicada que eliminan tareas repetitivas y conectan tus
            herramientas — sin depender de un equipo técnico interno.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="#contacto"
              className="rounded-sm bg-accent px-6 py-3 font-mono text-[13px] font-semibold text-bg transition-transform hover:-translate-y-0.5"
            >
              Diagnóstico gratuito
            </Link>
            <Link
              href="#servicios"
              className="rounded-sm border border-fg/15 px-6 py-3 font-mono text-[13px] font-medium text-fg transition-colors hover:border-accent hover:text-accent"
            >
              Ver servicios
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8">
            {[
              ["n8n", "Automatización visual"],
              ["APIs & Webhooks", "Integraciones a medida"],
              ["LLMs", "IA aplicada a procesos"],
            ].map(([label, desc]) => (
              <div key={label}>
                <p className="font-display text-sm font-semibold">{label}</p>
                <p className="font-mono text-[12px] text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <FlowDiagram />
        </div>
      </div>
    </section>
  );
}
