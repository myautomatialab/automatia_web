const STEPS = [
  {
    number: "1",
    title: "Diagnóstico",
    description:
      "Revisamos tu operación actual e identificamos los procesos con mayor retorno al automatizar.",
  },
  {
    number: "2",
    title: "Diseño del flujo",
    description:
      "Definimos la arquitectura de automatización: herramientas, integraciones y puntos donde interviene la IA.",
  },
  {
    number: "3",
    title: "Implementación",
    description:
      "Construimos y probamos los flujos en tu entorno real, con manejo de errores y datos sensibles cuidado.",
  },
  {
    number: "4",
    title: "Optimización continua",
    description:
      "Monitoreamos resultados y ajustamos los flujos a medida que tu operación cambia y crece.",
  },
];

export function HowWeWork() {
  return (
    <section id="proceso" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 max-w-xl">
          <span className="font-mono text-[12px] uppercase tracking-widest text-accent">
            Cómo trabajamos
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Un proceso simple, sin fricción para tu equipo.
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative">
              <div className="flex items-center gap-3">
                <span className="font-display text-4xl font-semibold text-fg/15">
                  {step.number}
                </span>
                {i < STEPS.length - 1 && (
                  <span className="hidden h-px flex-1 bg-border lg:block" />
                )}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
