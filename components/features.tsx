'use client'

import { Shield, Eye, Smartphone, Headphones, Video, HardDrive } from 'lucide-react'
import { FEATURES } from '@/lib/constants'
import { useEffect, useRef, useState } from 'react'

export function Features() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const iconMap = {
    Eye,
    Shield,
    Smartphone,
    Headphones,
    Video,
    HardDrive,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.05, rootMargin: '50px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-white py-24 overflow-hidden" id="caracteristicas">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-grid-slate-200/30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-slate-950/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div 
          className="mb-16 text-center"
          style={{
            animation: isVisible ? 'fadeInDown 0.6s ease-out both' : 'none'
          }}
        >
     
          <h2 className="mb-4 text-4xl font-bold text-slate-950 text-balance lg:text-5xl">
            ¿Por qué elegir CamiCan?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 text-pretty">
            Tecnología de punta respaldada por años de experiencia
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]
            return (
              <div 
                key={feature.id} 
                className="group text-center"
                style={{
                  animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.08}s both` : 'none',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <div className="relative inline-block mb-4">
                  {/* Animated rings */}
                  <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping opacity-0 group-hover:opacity-75" style={{ animationDuration: '2s' }} />
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-400 scale-100 group-hover:scale-125 transition-transform duration-500 opacity-0 group-hover:opacity-50" />
                  
                  {/* Icon container */}
                  <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/30 transition-all duration-500 group-active:scale-110 group-active:rotate-12 md:group-hover:scale-110 md:group-hover:rotate-12 md:group-hover:shadow-xl md:group-hover:shadow-cyan-400/50">
                    <Icon className="h-8 w-8 transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-xl scale-0 group-hover:scale-150 transition-transform duration-500" />
                </div>

                <h3 className="mb-2 text-xl font-bold text-slate-950 transition-all duration-300 group-hover:text-cyan-600 group-hover:scale-105">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed transition-colors duration-300 group-hover:text-slate-700">
                  {feature.description}
                </p>

                {/* Bottom indicator */}
                <div className="mx-auto mt-4 h-1 w-0 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full group-hover:w-16 transition-all duration-500" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
