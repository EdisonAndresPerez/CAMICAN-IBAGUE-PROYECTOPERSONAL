import { Shield, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { COMPANY_INFO, SERVICES } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <Shield className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold text-slate-950">{COMPANY_INFO.name}</span>
            </div>
            <p className="mb-4 text-slate-600 leading-relaxed">
              Tu socio de confianza  <strong>Camilo</strong>  en sistemas de seguridad y vigilancia. 
              Protegemos lo que más te importa con tecnología de vanguardia.
            </p>
            <div className="flex gap-4">
              {COMPANY_INFO.social.facebook && (
                <Link href={COMPANY_INFO.social.facebook} className="text-slate-600 hover:text-cyan-400 transition-colors" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
              )}

              {COMPANY_INFO.social.instagram && (
                <Link href={COMPANY_INFO.social.instagram} className="text-slate-600 hover:text-cyan-400 transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              )}

              {COMPANY_INFO.social.twitter && (
                <Link href={COMPANY_INFO.social.twitter} className="text-slate-600 hover:text-cyan-400 transition-colors" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              )}

              {COMPANY_INFO.social.linkedin && (
                <Link href={COMPANY_INFO.social.linkedin} className="text-slate-600 hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              )}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-slate-950">Servicios</h3>
            <ul className="space-y-2 text-slate-600">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link href={`#${service.id}`} className="hover:text-cyan-400 transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-slate-950">Empresa</h3>
            <ul className="space-y-2 text-slate-600">
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Nosotros</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Casos de éxito</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Contacto</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-600">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
