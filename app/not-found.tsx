"use client";

import Link from "next/link";
import { ROUTES } from "@/lib/routes";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white">
      <div className="text-center space-y-6">
        <h1 className="text-8xl font-bold text-cyan-400">404</h1>
        <h2 className="text-3xl font-bold">Página No Encontrada</h2>
        <p className="text-slate-300 text-lg max-w-md">
          Lo sentimos, la página que buscas no existe. Vuelve a la página principal y continúa explorando.
        </p>
        <Link
          href={ROUTES.HOME}
          className="inline-block mt-8 px-8 py-3 bg-cyan-400 text-slate-950 font-bold rounded-lg hover:bg-cyan-300 transition-colors duration-300"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
