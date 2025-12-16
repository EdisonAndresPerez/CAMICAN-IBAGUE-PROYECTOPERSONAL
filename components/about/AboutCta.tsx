"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import { COMPANY_INFO } from "@/lib/constants"
import Link from "next/link"
import CustomPhoneButton from "../custom/CustomPhoneButton"

export function AboutCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-balance">
            ¿Listo para proteger lo que más te importa?
          </h2>
          <p className="text-xl text-slate-300 mb-8 text-balance leading-relaxed">
            Únete a más de 2,500 clientes que confían en nosotros para su seguridad. Agenda una consulta gratuita hoy
            mismo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg h-14 px-8">
              <Link href="/#contacto">
                Solicitar Cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <CustomPhoneButton/>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
