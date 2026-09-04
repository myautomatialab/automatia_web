import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contacto" className="border-b border-border bg-grid">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="font-mono text-[12px] uppercase tracking-widest text-accent">
            Contacto
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Hablemos de tu operación.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Cuéntanos en qué proceso pierdes más tiempo hoy. Respondemos en
            menos de 24 horas hábiles con los primeros puntos de mejora.
          </p>

          <div className="mt-10 space-y-4 border-t border-border pt-8 font-mono text-[13px]">
            <p className="text-muted">
              Email{" "}
              <a href="mailto:hola@automatialab.com" className="text-fg">
                hola@automatialab.com
              </a>
            </p>
            <p className="text-muted">
              Respuesta <span className="text-fg">&lt; 24h hábiles</span>
            </p>
          </div>
        </div>

        <div className="rounded-md border border-border bg-surface p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
