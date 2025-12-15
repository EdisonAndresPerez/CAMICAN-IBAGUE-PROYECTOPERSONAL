import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";



type SubmitButtonProps = {
  isLoading: boolean;
  submitted: boolean;
};

export function SubmitButton({ isLoading, submitted }: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      size="lg"
      className="group relative w-full bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-300 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/50 active:scale-95 overflow-hidden"
      disabled={isLoading || submitted}
    >
      {/* Shine effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Enviando tu solicitud...
        </>
      ) : (
        <span className="relative flex items-center justify-center gap-2">
          Solicitar Cotización Gratis
          <svg
            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      )}
    </Button>
  );
}
