'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { MapPin, Phone, Mail, Loader2, CheckCircle2, Shield } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { COMPANY_INFO, SERVICES } from '@/lib/constants'

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsLoading(false)
    setSubmitted(true)

    // Reset form
    formRef.current?.reset()

    // Ocultar mensaje de éxito después de 5 segundos
    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

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
            <Card className="relative border-2 border-slate-200 bg-white p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-cyan-400">
              {/* Success overlay */}
              {submitted && (
                <div className="absolute inset-0 z-50 flex items-center justify-center rounded-lg bg-white/95 backdrop-blur-sm animate-in fade-in duration-300">
                  <div className="text-center animate-in zoom-in duration-500">
                    <CheckCircle2 className="mx-auto h-16 w-16 text-green-500 mb-4 animate-bounce" />
                    <h3 className="text-2xl font-bold text-slate-950 mb-2">¡Mensaje enviado!</h3>
                    <p className="text-slate-600">Te contactaremos pronto</p>
                  </div>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} id='contactame' className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2 group">
                    <Label htmlFor="nombre" className="text-slate-700 font-semibold">
                      Nombre completo <span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      id="nombre" 
                      placeholder="Juan Pérez" 
                      required 
                      className="transition-all duration-300 focus:border-cyan-400 focus:ring-cyan-400/20 focus:scale-[1.02]"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <Label htmlFor="telefono" className="text-slate-700 font-semibold">
                      Teléfono <span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      id="telefono" 
                      type="tel" 
                      placeholder="+57 300 123 4567" 
                      required 
                      className="transition-all duration-300 focus:border-cyan-400 focus:ring-cyan-400/20 focus:scale-[1.02]"
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <Label htmlFor="email" className="text-slate-700 font-semibold">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="juan@ejemplo.com" 
                    required 
                    className="transition-all duration-300 focus:border-cyan-400 focus:ring-cyan-400/20 focus:scale-[1.02]"
                  />
                </div>

                <div className="space-y-2 group">
                  <Label htmlFor="direccion" className="text-slate-700 font-semibold">
                    Dirección del servicio <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="direccion" 
                    placeholder="Calle 10 #5-20, Ibagué" 
                    required 
                    className="transition-all duration-300 focus:border-cyan-400 focus:ring-cyan-400/20 focus:scale-[1.02]"
                  />
                </div>

                <div className="space-y-2 group">
                  <Label htmlFor="servicio" className="text-slate-700 font-semibold">
                    Servicio de interés <span className="text-red-500">*</span>
                  </Label>
                  <select
                    id="servicio"
                    className="flex h-11 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base transition-all duration-300 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 focus:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  >
                    <option value="">Selecciona un servicio</option>
                    {SERVICES.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2 group">
                  <Label htmlFor="mensaje" className="text-slate-700 font-semibold">
                    Mensaje <span className="text-slate-400">(opcional)</span>
                  </Label>
                  <Textarea
                    id="mensaje"
                    placeholder="Cuéntanos más sobre tus necesidades de seguridad..."
                    rows={4}
                    className="transition-all duration-300 focus:border-cyan-400 focus:ring-cyan-400/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="group relative w-full bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-300 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/50 active:scale-95 overflow-hidden"
                  disabled={isLoading || submitted}
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Enviando tu solicitud...
                    </>
                  ) : (
                    <span className="relative flex items-center justify-center gap-2">
                      Solicitar Cotización Gratis
                      <svg 
                        className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  )}
                </Button>
              </form>
            </Card>
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
