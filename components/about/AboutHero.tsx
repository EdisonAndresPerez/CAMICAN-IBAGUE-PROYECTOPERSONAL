"use client"

import { motion } from "framer-motion"
import { Shield, Eye, Lock } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />

      {/* Floating icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute top-20 left-20 text-cyan-400"
      >
        <Shield size={60} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute bottom-32 right-32 text-cyan-400"
      >
        <Eye size={80} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute top-1/2 right-20 text-cyan-400"
      >
        <Lock size={50} />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
             <strong>CamiCan</strong> Protege lo que más
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              te importa
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto text-balance leading-relaxed"
        >
          Somos expertos en soluciones de seguridad con más de 10 años de experiencia protegiendo hogares y empresas con
          tecnología de vanguardia
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-wrap gap-8 justify-center"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-cyan-400">10+</div>
            <div className="text-slate-400 mt-2">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-cyan-400">2,500+</div>
            <div className="text-slate-400 mt-2">Clientes Protegidos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-cyan-400">99%</div>
            <div className="text-slate-400 mt-2">Satisfacción</div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
