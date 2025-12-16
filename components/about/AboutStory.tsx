"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AboutStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Nuestra Historia
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                En 2025, fundamos{" "}
                <span className="font-semibold text-foreground">
                  CamiCan
                </span>{" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur amet, non, iusto voluptatum sequi quod hic expedita
                consequuntur placeat et, ullam tempora! Dolore, ullam pariatur
                deleniti officiis dignissimos voluptas aperiam?
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sapiente, porro odio. Soluta rem cum vitae blanditiis officiis
                totam nihil, deleniti fuga assumenda molestias, ullam unde modi
                cumque, fugiat odio eaque.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                maiores provident delectus eos commodi similique illum in harum
                sed, sapiente nesciunt recusandae ea impedit animi eum facere
                voluptatem! Iure, a.
              </p>
              <p className="font-semibold text-foreground">
                No solo instalamos cámaras, construimos tranquilidad.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/modern-security-operations-center-with-monitors-sh.jpg"
                alt="CamiCan"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-lg font-semibold">
                  Lider Tecnico
                </p>
                <p className="text-slate-300 text-sm"></p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
