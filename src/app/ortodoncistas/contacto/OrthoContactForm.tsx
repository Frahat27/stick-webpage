'use client';

import { useState } from 'react';
import { z } from 'zod';

const schema = z.object({
  nombre: z.string().min(2, 'El nombre es requerido'),
  clinica: z.string().optional(),
  barrio: z.string().min(2, 'Indicá tu barrio o zona'),
  matricula: z.string().optional(),
  telefono: z.string().min(6, 'El teléfono es requerido'),
  email: z.string().email('Email inválido'),
  mensaje: z.string().optional(),
  // honeypot — debe quedar vacío
  website: z.string().max(0).optional(),
});

type FormData = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormData, string>>;

export default function OrthoContactForm() {
  const [form, setForm] = useState<FormData>({
    nombre: '',
    clinica: '',
    barrio: '',
    matricula: '',
    telefono: '',
    email: '',
    mensaje: '',
    website: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');

    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Errors = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as keyof FormData] = err.message;
      });
      setErrors(fieldErrors);
      setStatus('idle');
      return;
    }

    // Honeypot check
    if (form.website) {
      setStatus('success');
      return;
    }

    try {
      const res = await fetch('/api/ortho-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-lg font-bold text-green-900 mb-2">¡Mensaje enviado!</h3>
        <p className="text-green-700 text-sm">
          Te vamos a contactar a la brevedad. También podés escribirnos por WhatsApp si preferís una respuesta más rápida.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot field — hidden */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">No completar</label>
        <input
          type="text"
          id="website"
          name="website"
          value={form.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Nombre *" error={errors.nombre}>
          <input
            type="text"
            name="nombre"
            id="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            className={inputClass(!!errors.nombre)}
          />
        </Field>
        <Field label="Clínica / Consultorio" error={errors.clinica}>
          <input
            type="text"
            name="clinica"
            id="clinica"
            value={form.clinica}
            onChange={handleChange}
            placeholder="Nombre del consultorio (opcional)"
            className={inputClass(!!errors.clinica)}
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Barrio / Zona *" error={errors.barrio}>
          <input
            type="text"
            name="barrio"
            id="barrio"
            value={form.barrio}
            onChange={handleChange}
            placeholder="Ej: Belgrano, Palermo..."
            className={inputClass(!!errors.barrio)}
          />
        </Field>
        <Field label="Matrícula profesional" error={errors.matricula}>
          <input
            type="text"
            name="matricula"
            id="matricula"
            value={form.matricula}
            onChange={handleChange}
            placeholder="Número de matrícula (opcional)"
            className={inputClass(!!errors.matricula)}
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Teléfono *" error={errors.telefono}>
          <input
            type="tel"
            name="telefono"
            id="telefono"
            value={form.telefono}
            onChange={handleChange}
            placeholder="+54 9 11 xxxx xxxx"
            className={inputClass(!!errors.telefono)}
          />
        </Field>
        <Field label="Email *" error={errors.email}>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            className={inputClass(!!errors.email)}
          />
        </Field>
      </div>

      <Field label="Mensaje" error={errors.mensaje}>
        <textarea
          name="mensaje"
          id="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          rows={4}
          placeholder="Contanos sobre tu práctica o lo que querés saber..."
          className={inputClass(!!errors.mensaje)}
        />
      </Field>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-neutral-900 hover:bg-neutral-800 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-colors"
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar consulta'}
      </button>

      {status === 'error' && (
        <p className="text-red-600 text-sm text-center">
          Hubo un error al enviar. Por favor, intentá nuevamente o escribinos por WhatsApp.
        </p>
      )}
    </form>
  );
}

function inputClass(hasError: boolean) {
  return `w-full px-4 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-400 ${
    hasError
      ? 'border-red-300 bg-red-50 focus:border-red-400'
      : 'border-neutral-200 bg-neutral-50 hover:border-neutral-300 focus:border-brand-400'
  }`;
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-neutral-700 mb-1.5">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
