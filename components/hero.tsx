"use client";

import { Button } from "@/components/ui/button";
import { Shield, Phone } from "lucide-react";
import Link from "next/link";
import { COMPANY_INFO, NAV_LINKS } from "@/lib/constants";
import { useEffect, useState } from "react";
import CustomNavigation from "./custom/CustomNavigation";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/security-camera-system-modern-building.jpg"
          alt="Security cameras"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />
      </div>

      {/* Navigation */}
      <CustomNavigation />

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <div
          className="max-w-3xl"
          style={{
            animation: mounted ? "fadeInUp 0.8s ease-out both" : "none",
          }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-400 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Protección 24/7 para tu seguridad
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-balance lg:text-7xl">
            Protege lo que más importa
          </h1>

          <p className="mb-8 text-xl text-slate-300 leading-relaxed text-pretty">
            Instalación profesional de cámaras de seguridad para casas,
            edificios y negocios. Tecnología de punta con monitoreo en tiempo
            real y Protección 24/7 con tecnología de última generación. <br />
            <strong>Camilo Andres Oviedo B</strong>
          </p>

          <div className="flex flex-col gap-10 sm:flex-row">

            {/* Botón Solicitar Cotización */}
            <div className="relative group">
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-cyan-400/30 rounded-lg blur-xl scale-0 group-hover:scale-150 transition-transform duration-500" />
              
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
                className="relative bg-cyan-400 text-slate-950 hover:bg-cyan-300 text-lg px-8 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-400/50"
              >
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-md border border-cyan-300 opacity-0 group-hover:opacity-50 animate-ping" />
                <span className="relative">Solicitar cotización gratis</span>
              </Button>

              {/* Tooltip "¡Vamos!" */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-cyan-400 text-slate-950 text-sm font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                ¡Vamos!
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rotate-45" />
              </div>
            </div>

            {/* Botón Ver Servicios */}
            <div className="relative group">
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-cyan-400/20 rounded-lg blur-xl scale-0 group-hover:scale-150 transition-transform duration-500" />
              
              <Button
                onClick={() => {
                  const el = document.getElementById("servicios");
                  if (!el) return;

                  const offset = 80;
                  const y =
                    el.getBoundingClientRect().top + window.scrollY - offset;

                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
                variant="outline"
                size="lg"
                className="relative border-cyan-400 text-cyan-950 text-lg hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-400/50"
              >
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-md border border-b-cyan-950 opacity-0 group-hover:opacity-50 group-hover:animate-ping pointer-events-none" />
                <span className="relative">Ver servicios</span>
              </Button>

              {/* Tooltip "¡Descubre más!" */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-cyan-400 text-slate-950 text-sm font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                ¡Descubre más! 🔍
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
