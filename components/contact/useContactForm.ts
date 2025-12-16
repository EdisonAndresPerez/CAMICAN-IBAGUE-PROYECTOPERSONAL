"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export function useContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot: si el campo oculto tiene valor, es bot
    const honeypot = (
      formRef.current?.elements.namedItem("website") as HTMLInputElement | null
    )?.value;
    if (honeypot) {
      return;
    }

    setIsLoading(true);
    setError(false);

    try {
      const form = formRef.current;
      if (!form) throw new Error("Form ref not found");

      const data = new FormData(form);
      const payload = {
        nombre: String(data.get("nombre") ?? ""),
        telefono: String(data.get("telefono") ?? ""),
        email: String(data.get("email") ?? ""),
        direccion: String(data.get("direccion") ?? ""),
        servicio: String(data.get("servicio") ?? ""),
        mensaje: String(data.get("mensaje") ?? ""),
        website: String(data.get("website") ?? ""),
        pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
        userAgent:
          typeof navigator !== "undefined" ? navigator.userAgent : undefined,
      };

      // 1) Guardar lead en Supabase (server)
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const txt = await res.text().catch(() => "");
        throw new Error(txt || "Failed to save lead");
      }

      // 2) Notificar por EmailJS (cliente)
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitted(true);
      form.reset();

      // Oculta el estado de éxito tras 5s
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("Error al enviar:", err);
      setError(true);
      setTimeout(() => setError(false), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return { formRef, isLoading, submitted, error, handleSubmit };
}

export type UseContactFormReturn = ReturnType<typeof useContactForm>;
