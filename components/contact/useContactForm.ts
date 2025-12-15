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
    const honeypot = (formRef.current?.elements.namedItem("website") as HTMLInputElement | null)?.value;
    if (honeypot) {
      return;
    }

    setIsLoading(true);
    setError(false);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitted(true);
      formRef.current?.reset();

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
