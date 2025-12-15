"use client";

import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SERVICES } from "@/lib/constants";
import { StatusOverlay } from "./StatusOverlay";
import { SubmitButton } from "./SubmitButton";
import type { UseContactFormReturn } from "./useContactForm";

export type ContactFormInnerProps = Pick<
  UseContactFormReturn,
  "formRef" | "handleSubmit" | "isLoading" | "submitted" | "error"
>;

export function ContactFormInner({
  formRef,
  handleSubmit,
  isLoading,
  submitted,
  error,
}: ContactFormInnerProps) {
  const hasFired = useRef(false);

  
  useEffect(() => {
    if (!submitted) {
      hasFired.current = false;
    }
  }, [submitted]);

  return (
    <Card className="relative border-2 border-slate-200 bg-white p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-cyan-400">
      {submitted && (
        <StatusOverlay
          type="success"
          title="¡Mensaje enviado!"
          message="Te contactaremos pronto"
        />
      )}
      {error && (
        <StatusOverlay
          type="error"
          title="Error al enviar"
          message="Por favor, intenta de nuevo"
        />
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        id="contactame"
        className="space-y-6"
      >
        {/* Honeypot anti-bot field */}
        <input
          type="text"
          name="website"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2 group">
            <Label htmlFor="nombre" className="text-slate-700 font-semibold">
              Nombre completo <span className="text-red-500">*</span>
            </Label>
            <Input
              id="nombre"
              name="nombre"
              placeholder="Juan Pérez"
              required
              className="transition-all duration-300 focus:border-cyan-400 focus:ring-cyan-400/20 focus:scale-[1.02]"
            />
          </div>
          <div className="space-y-2 group">
            <Label htmlFor="telefono" className="text-slate-700 font-semibold">
              Teléfono <span className="text-red-500">*</span>
            </Label>
            <Input
              id="telefono"
              name="telefono"
              type="tel"
              placeholder="+57 300 123 4567"
              required
              className="transition-all duration-300 focus:border-cyan-400 focus:ring-cyan-400/20 focus:scale-[1.02]"
            />
          </div>
        </div>

        <div className="space-y-2 group">
          <Label htmlFor="email" className="text-slate-700 font-semibold">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="juan@ejemplo.com"
            required
            className="transition-all duration-300 focus:border-cyan-400 focus:ring-cyan-400/20 focus:scale-[1.02]"
          />
        </div>

        <div className="space-y-2 group">
          <Label htmlFor="direccion" className="text-slate-700 font-semibold">
            Dirección del servicio <span className="text-red-500">*</span>
          </Label>
          <Input
            id="direccion"
            name="direccion"
            placeholder="Calle 10 #5-20, Ibagué"
            required
            className="transition-all duration-300 focus:border-cyan-400 focus:ring-cyan-400/20 focus:scale-[1.02]"
          />
        </div>

        <div className="space-y-2 group">
          <Label htmlFor="servicio" className="text-slate-700 font-semibold">
            Servicio de interés <span className="text-red-500">*</span>
          </Label>
          <select
            id="servicio"
            name="servicio"
            className="flex h-11 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base transition-all duration-300 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 focus:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
            required
          >
            <option value="">Selecciona un servicio</option>
            {SERVICES.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2 group">
          <Label htmlFor="mensaje" className="text-slate-700 font-semibold">
            Mensaje <span className="text-slate-400">(opcional)</span>
          </Label>
          <Textarea
            id="mensaje"
            name="mensaje"
            placeholder="Cuéntanos más sobre tus necesidades de seguridad..."
            rows={4}
            className="transition-all duration-300 focus:border-cyan-400 focus:ring-cyan-400/20 resize-none"
          />
        </div>

        <SubmitButton isLoading={isLoading} submitted={submitted} />
      </form>
    </Card>
  );
}
