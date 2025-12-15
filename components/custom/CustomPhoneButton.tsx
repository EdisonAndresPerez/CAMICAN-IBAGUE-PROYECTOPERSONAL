import { Phone, Shield } from "lucide-react";
import Link from "next/link";
import { COMPANY_INFO } from "@/lib/constants";

const CustomPhoneButton = () => {
  return (
    <>
      <Link
        href={`https://wa.me/${COMPANY_INFO.phoneRaw}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex items-center gap-3 group relative"
      >
        {/* Glow effect background */}
        <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-500" />

        {/* Phone container */}
        <div className="relative flex items-center gap-2 px-4 py-2 rounded-full border-2 border-cyan-400/30 bg-cyan-400/10 backdrop-blur-sm transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-400/20 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-400/50">
          {/* Animated phone icon */}
          <div className="relative">
            <Phone className="h-5 w-5 text-cyan-400 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-0 group-hover:opacity-100 animate-ping" />
          </div>

          {/* Phone number */}
          <span className="text-sm font-semibold text-white tracking-wide group-hover:text-cyan-300 transition-colors duration-300">
            {COMPANY_INFO.phone}
          </span>

          {/* Animated arrow indicator */}
          <svg
            className="h-4 w-4 text-cyan-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>

        {/* Tooltip on hover */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-cyan-400 text-slate-950 text-xs font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          ¡Llámanos ahora!
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rotate-45" />
        </div>
      </Link>
    </>
  );
};

export default CustomPhoneButton;
