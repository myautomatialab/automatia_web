"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-md border border-accent/30 bg-accent/5 p-8">
        <p className="font-display text-lg font-semibold text-accent">
          Mensaje enviado.
        </p>
        <p className="mt-2 text-sm text-muted">
          Gracias por escribirnos. Te contactaremos dentro de las próximas 24
          horas hábiles.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <Field label="Empresa" name="company" />
      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-mono text-[12px] uppercase tracking-widest text-muted"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Cuéntanos qué proceso te gustaría automatizar..."
          className="w-full resize-none rounded-sm border border-border bg-surface px-4 py-3 text-sm text-fg placeholder:text-muted/60 outline-none transition-colors focus:border-accent"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-sm bg-accent px-6 py-3 font-mono text-[13px] font-semibold text-bg transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {status === "submitting" ? "Enviando..." : "Enviar mensaje"}
      </button>

      {status === "error" && (
        <p className="font-mono text-[12px] text-red-400">
          Algo salió mal. Intenta de nuevo o escríbenos directo a
          hola@automatialab.com
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block font-mono text-[12px] uppercase tracking-widest text-muted"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-sm border border-border bg-surface px-4 py-3 text-sm text-fg placeholder:text-muted/60 outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}
