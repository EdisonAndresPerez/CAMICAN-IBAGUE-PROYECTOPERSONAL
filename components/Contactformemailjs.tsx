'use client'

import { Mail, Phone } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { ContactFormInner } from './contact/ContactFormInner'
import { useContactForm } from './contact/useContactForm'
import { COMPANY_INFO } from '@/lib/constants'
import { Card } from './ui/card'



export function ContactFormGmail() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { formRef, handleSubmit, isLoading, submitted, error } = useContactForm()

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
    <section ref={sectionRef} className="relative bg-slate-50 py-24 overflow-hidden" id="contacto">
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid-slate-200/30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div 
          className="mb-16 text-center"
          style={{
            animation: isVisible ? 'fadeInDown 0.6s ease-out both' : 'none'
          }}
        >
      
          <h2 className="mb-4 text-4xl font-bold text-slate-950 text-balance lg:text-5xl">
            Solicita tu cotización <span className="text-cyan-500">gratis</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 text-pretty">
            Completa el formulario y nos pondremos en contacto contigo en <span className="font-semibold text-cyan-600">menos de 24 horas</span>
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div 
            className="lg:col-span-2"
            style={{
              animation: isVisible ? 'fadeInUp 0.6s ease-out 0.2s both' : 'none',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <ContactFormInner
              formRef={formRef}
              handleSubmit={handleSubmit}
              isLoading={isLoading}
              submitted={submitted}
              error={error}
            />
          </div>

          <div 
            className="space-y-6"
            style={{
              animation: isVisible ? 'fadeInUp 0.6s ease-out 0.4s both' : 'none',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <Card className="group border-2 border-slate-200 bg-white p-6 transition-all duration-500 active:scale-95 md:hover:border-cyan-400 md:hover:shadow-xl md:hover:shadow-cyan-400/10 md:hover:-translate-y-2">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-cyan-400 transition-all duration-500 group-active:bg-cyan-400 group-active:text-slate-950 group-active:scale-110 group-active:rotate-6 md:group-hover:bg-cyan-400 md:group-hover:text-slate-950 md:group-hover:scale-110 md:group-hover:rotate-6 shadow-lg">
                <Phone className="h-6 w-6 transition-transform duration-500 md:group-hover:scale-110" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-950 transition-colors group-hover:text-cyan-600">Teléfono</h3>
              <p className="text-slate-600 transition-colors group-hover:text-slate-900 font-medium">{COMPANY_INFO.phone}</p>
              <p className="text-sm text-slate-500">Lun - Sáb: 8AM - 8PM</p>
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full group-hover:w-full transition-all duration-500" />
            </Card>

            <Card className="group border-2 border-slate-200 bg-white p-6 transition-all duration-500 active:scale-95 md:hover:border-cyan-400 md:hover:shadow-xl md:hover:shadow-cyan-400/10 md:hover:-translate-y-2">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-cyan-400 transition-all duration-500 group-active:bg-cyan-400 group-active:text-slate-950 group-active:scale-110 group-active:rotate-6 md:group-hover:bg-cyan-400 md:group-hover:text-slate-950 md:group-hover:scale-110 md:group-hover:rotate-6 shadow-lg">
                <Mail className="h-6 w-6 transition-transform duration-500 md:group-hover:scale-110" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-950 transition-colors group-hover:text-cyan-600">Email</h3>
              <p className="text-slate-600 transition-colors group-hover:text-slate-900 font-medium break-all">{COMPANY_INFO.email}</p>
              <p className="text-sm text-slate-500">Respuesta en 24 hrs</p>
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full group-hover:w-full transition-all duration-500" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
