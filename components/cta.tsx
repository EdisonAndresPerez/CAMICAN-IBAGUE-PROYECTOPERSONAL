'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
        <h2 className="mb-6 text-4xl font-bold text-balance lg:text-5xl">
          ¿Listo para proteger tu propiedad?
        </h2>
        <p className="mb-8 text-xl text-slate-300 text-pretty">
          Obtén una cotización gratuita y sin compromiso. Nuestros expertos te asesorarán 
          en la mejor solución de seguridad para tus necesidades.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            onClick={() => {
              const el = document.getElementById("contactame");
              if (!el) return;

              const offset = 230;
              const y =
                el.getBoundingClientRect().top + window.scrollY - offset;

              window.scrollTo({ top: y, behavior: "smooth" });
            }}
            size="lg" 
            className="bg-cyan-400 text-slate-950 hover:bg-cyan-300 text-lg px-8"
          >
            Agenda una visita gratis
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
