import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Features } from "@/components/features";
import { Stats } from "@/components/stats";
import { CTA } from "@/components/cta";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { ContactFormGmail } from "@/components/Contactformemailjs";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Services />
      <Features />
      <ContactFormGmail/>
      <CTA />
      <Footer />
    </main>
  );
}
