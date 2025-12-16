"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Edison Perez",
    role: "Fundador",
    image: "/professional-latino-man-in-business-attire-confide.jpg",
    bio: "Desarrollador web y entusiasta de la seguridad",
    linkedin: "#",
  },
  {
    name: "Andres Camilo",
    role: "Director de Operaciones",
    image: "/professional-latina-woman-in-business-attire-confi.jpg",
    bio: "Experto en seguridad y gestión de proyectos",
    linkedin: "#",
  },
];

export function AboutTeam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Profesionales apasionados dedicados a tu seguridad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-cyan-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={member.linkedin}
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href={`mailto:${member.name
                      .toLowerCase()
                      .replace(" ", ".")}@secureviewpro.com`}
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Mail className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-cyan-500 font-semibold mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
