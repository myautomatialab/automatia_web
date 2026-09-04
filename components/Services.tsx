const SERVICES = [
  {
    tag: "01",
    title: "Automatización de procesos",
    description:
      "Mapeamos tus procesos operativos y los convertimos en flujos automáticos con n8n: desde captura de leads hasta facturación y seguimiento post-venta.",
    points: [
      "Flujos multi-paso con lógica condicional",
      "Eliminación de tareas manuales repetitivas",
      "Monitoreo y alertas de errores",
    ],
  },
  {
    tag: "02",
    title: "Integraciones con IA",
    description:
      "Conectamos tus sistemas (CRM, ERP, WhatsApp, correo, hojas de cálculo) entre sí y con modelos de IA para clasificar, redactar y decidir en tiempo real.",
    points: [
      "APIs, webhooks y bases de datos",
      "Agentes de IA para atención y ventas",
      "Procesamiento de documentos y datos",
    ],
  },
  {
    tag: "03",
    title: "Consultoría & estrategia",
    description:
      "Auditamos tu operación, priorizamos qué automatizar primero según impacto y esfuerzo, y dejamos un roadmap claro para tu equipo.",
    points: [
      "Diagnóstico de oportunidades de IA",
      "Roadmap de automatización priorizado",
      "Capacitación a tu equipo interno",
    ],
  },
];

export function Services() {
  return (
    <section id="servicios" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 max-w-xl">
          <span className="font-mono text-[12px] uppercase tracking-widest text-accent">
            Servicios
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Todo lo que necesitas para dejar de operar a mano.
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
          {SERVICES.map((service) => (
            <div key={service.tag} className="bg-bg p-8">
              <span className="font-mono text-[12px] text-muted">
                {service.tag}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <ul className="mt-6 space-y-2 border-t border-border pt-6">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-fg/90"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
