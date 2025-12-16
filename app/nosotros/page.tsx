import { AboutCTA } from "@/components/about/AboutCta";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutTeam } from "@/components/about/AboutTeam";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | SecureView Pro - Expertos en Seguridad",
  description:
    "Conoce nuestra historia, valores y equipo. Más de 15 años protegiendo lo que más te importa con tecnología de vanguardia.",
  openGraph: {
    title: "Nosotros | SecureView Pro",
    description:
      "Conoce nuestra historia, valores y equipo experto en seguridad",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutStory />

      <AboutTeam />

      <AboutCTA />
    </main>
  );
}
