'use client'

import { Card } from '@/components/ui/card'
import { Camera, Zap, KeyRound, Lock, Shield, Bell } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { useEffect, useRef, useState } from 'react'

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [activeId, setActiveId] = useState<string | null>(null)
  const resetTimer = useRef<number | null>(null)
  const serviceIds = useRef(new Set(SERVICES.map((s) => s.id)))

  const iconMap = {
    Camera,
    Zap,
    KeyRound,
    Lock,
    Shield,
    Bell,
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

  useEffect(() => {
    const applyHashTarget = () => {
      const hash = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : ''
      if (!hash) return
      setActiveId(hash)
      if (resetTimer.current) {
        window.clearTimeout(resetTimer.current)
      }
      resetTimer.current = window.setTimeout(() => setActiveId(null), 4000)
    }

    applyHashTarget()
    window.addEventListener('hashchange', applyHashTarget)
    return () => {
      window.removeEventListener('hashchange', applyHashTarget)
      if (resetTimer.current) {
        window.clearTimeout(resetTimer.current)
      }
    }
  }, [])

  // Re-aplica la animación aunque el hash sea el mismo (clic repetido en el mismo link)
  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const anchor = target?.closest('a') as HTMLAnchorElement | null
      if (!anchor) return
      const href = anchor.getAttribute('href') || ''
      if (!href.startsWith('#')) return
      const id = href.slice(1)
      if (!serviceIds.current.has(id)) return

      setActiveId(id)
      if (resetTimer.current) {
        window.clearTimeout(resetTimer.current)
      }
      resetTimer.current = window.setTimeout(() => setActiveId(null), 4000)
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-slate-50 py-24 overflow-hidden" id="servicios">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-slate-200/40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl -translate-y-1/2 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div id='servicios' className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div 
          className="mb-16 text-center"
          style={{
            animation: isVisible ? 'fadeInDown 0.6s ease-out both' : 'none'
          }}
        >
          <h2 className="mb-4 text-4xl font-bold text-slate-950 text-balance lg:text-5xl">
            Nuestros Servicios
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 text-pretty">
            Soluciones completas de seguridad adaptadas a tus necesidades específicas
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            const isActive = activeId === service.id
            return (
              <Card 
                key={service.id}
                id={service.id}
                className={`group relative border-2 border-slate-200 bg-white p-6 sm:p-8 transition-all duration-500 active:scale-95 md:hover:border-cyan-400 md:hover:shadow-xl md:hover:shadow-cyan-400/10 md:hover:-translate-y-2 scroll-mt-32 ${isActive ? 'border-cyan-400 shadow-lg shadow-cyan-400/30 scale-[1.02]' : ''}`}
                style={{
                  animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                {/* Shine effect on hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-transparent via-cyan-400/5 to-transparent" />
                
                {/* Icon with animation */}
                <div className={`relative mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-slate-950 text-cyan-400 transition-all duration-500 group-active:bg-cyan-400 group-active:text-slate-950 group-active:rotate-6 group-active:scale-110 md:group-hover:bg-cyan-400 md:group-hover:text-slate-950 md:group-hover:rotate-6 md:group-hover:scale-110 shadow-lg shadow-slate-950/20 ${isActive ? 'bg-cyan-400 text-slate-950 rotate-6 scale-110 shadow-cyan-400/40' : ''}`}>
                  <Icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                  {/* Pulse ring */}
                  <div className={`absolute inset-0 rounded-lg border-2 border-cyan-400 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 ${isActive ? 'opacity-100 scale-125 animate-ping' : ''}`} />
                </div>

                <h3 className={`mb-3 text-2xl font-bold text-slate-950 transition-colors group-hover:text-cyan-600 ${isActive ? 'text-cyan-600' : ''}`}>
                  {service.title}
                </h3>
                
                <p className="mb-6 text-slate-600 leading-relaxed transition-colors group-hover:text-slate-700">
                  {service.description}
                </p>
                
                {/* Features list with staggered animation */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-center gap-3 text-sm text-slate-700 transition-all duration-300 group-hover:translate-x-1"
                      style={{
                        transitionDelay: `${idx * 50}ms`
                      }}
                    >
                      <div className="relative flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-cyan-400 transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-cyan-400/50" />
                        <div className="absolute inset-0 h-2 w-2 rounded-full bg-cyan-400 animate-ping opacity-0 group-hover:opacity-75" />
                      </div>
                      <span className="group-hover:text-slate-900 group-hover:font-medium transition-all duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-cyan-600 transition-all duration-500 group-hover:w-full rounded-b-lg ${isActive ? 'w-full' : ''}`} />
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
