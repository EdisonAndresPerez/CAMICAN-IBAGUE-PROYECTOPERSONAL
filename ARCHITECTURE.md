# Guía de Arquitectura - SecureView Pro

Esta guía explica las decisiones de arquitectura y cómo mantener el código escalable.

## Principios de Diseño

### 1. Single Source of Truth (SSOT)

Todas las configuraciones están en `lib/constants.ts`. Esto significa:

- **Un solo lugar para actualizar**: Cambia el teléfono una vez, se actualiza en todo el sitio
- **Consistencia garantizada**: No hay información duplicada
- **Fácil de testear**: Los tests validan contra las constantes
- **Type-safe**: TypeScript valida la estructura

### 2. Separation of Concerns

\`\`\`
lib/constants.ts    → Datos y configuración
lib/types.ts        → Definiciones de tipos
lib/utils.ts        → Lógica reutilizable
components/         → Presentación visual
__tests__/          → Validación
\`\`\`

### 3. Component Composition

Cada componente tiene una responsabilidad única:

- `Hero`: Primera impresión y CTA principal
- `Services`: Mostrar servicios usando SERVICES constant
- `Features`: Destacar características usando FEATURES constant
- `ContactForm`: Capturar leads usando COMPANY_INFO

## Patrones de Código

### Importar y Usar Constantes

\`\`\`typescript
// ✅ CORRECTO
import { COMPANY_INFO, SERVICES } from '@/lib/constants'

export function Component() {
  return <div>{COMPANY_INFO.name}</div>
}

// ❌ INCORRECTO - Datos hardcodeados
export function Component() {
  return <div>SecureView Pro</div>
}
\`\`\`

### Mapeo de Iconos

\`\`\`typescript
// Pattern usado en services.tsx y features.tsx
const iconMap = {
  Camera,
  Wrench,
  // ... más iconos
}

// Uso dinámico
const Icon = iconMap[service.icon as keyof typeof iconMap]
\`\`\`

### Type Safety

\`\`\`typescript
// Definir tipos
import { Service } from '@/lib/types'

// Usar en constantes
export const SERVICES: Service[] = [...]

// TypeScript validará la estructura
\`\`\`

## Escalabilidad

### Agregar Nuevas Secciones

1. **Crear el componente**:
\`\`\`typescript
// components/testimonials.tsx
import { TESTIMONIALS } from '@/lib/constants'

export function Testimonials() {
  return (
    <section>
      {TESTIMONIALS.map(t => <div key={t.id}>...</div>)}
    </section>
  )
}
\`\`\`

2. **Agregar constante**:
\`\`\`typescript
// lib/constants.ts
export const TESTIMONIALS = [
  { id: '1', name: '...', text: '...', rating: 5 },
] as const
\`\`\`

3. **Agregar tipos**:
\`\`\`typescript
// lib/types.ts
export interface Testimonial {
  id: string
  name: string
  text: string
  rating: number
}
\`\`\`

4. **Agregar tests**:
\`\`\`typescript
// __tests__/components/testimonials.test.tsx
import { render } from '@testing-library/react'
import { Testimonials } from '@/components/testimonials'

describe('Testimonials', () => {
  it('renders all testimonials', () => {
    // ...
  })
})
\`\`\`

### Multi-idioma (Preparación)

Estructura futura para i18n:

\`\`\`typescript
// lib/locales/es/constants.ts
export const COMPANY_INFO = { ... }

// lib/locales/en/constants.ts
export const COMPANY_INFO = { ... }

// lib/constants.ts
import { getLocale } from './locale-utils'
export * from `./locales/${getLocale()}/constants`
\`\`\`

### Integración con CMS

Para conectar con un CMS (Strapi, Contentful, etc.):

\`\`\`typescript
// lib/cms.ts
export async function getServices() {
  const res = await fetch('https://cms.example.com/services')
  return res.json()
}

// components/services.tsx
export async function Services() {
  const services = await getServices() // Server Component
  return <section>...</section>
}
\`\`\`

## Testing Strategy

### Pirámide de Tests

\`\`\`
                 /\
                /  \
               / E2E \          (Futuros tests end-to-end)
              /______\
             /        \
            /Integration\       (Tests de integración)
           /____________\
          /              \
         /  Unit Tests    \     (Tests unitarios - actual)
        /_________________ \
\`\`\`

### Tests Actuales

1. **Unit Tests**: Cada componente individual
2. **Integration Tests**: Página completa renderizada
3. **Constants Tests**: Validación de datos

### Tests Futuros Recomendados

- E2E con Playwright
- Visual regression con Percy/Chromatic
- Performance tests con Lighthouse CI

## Performance

### Optimizaciones Implementadas

- **Server Components**: Mayoría de componentes son RSC
- **Client Components**: Solo `contact-form.tsx` usa estado
- **Image Optimization**: Next.js Image donde sea necesario
- **Font Optimization**: Geist fonts con display swap
- **Code Splitting**: Automático por Next.js

### Métricas Objetivo

- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **Lighthouse Score**: > 90

## SEO Strategy

### On-Page SEO

- ✅ Metadata completa y descriptiva
- ✅ Semantic HTML5
- ✅ Structured data (JSON-LD)
- ✅ Alt text en imágenes
- ✅ H1-H6 jerarquía correcta

### Technical SEO

- ✅ Sitemap.xml generado
- ✅ Robots.txt configurado
- ✅ Canonical URLs
- ✅ Mobile responsive
- ✅ Performance optimizado

### Content SEO

Palabras clave objetivo:
- cámaras de seguridad
- instalación de cámaras
- videovigilancia
- seguridad residencial
- CCTV

## Deployment Checklist

Antes de hacer deploy:

- [ ] Actualizar COMPANY_INFO con datos reales
- [ ] Cambiar metadataBase a dominio real
- [ ] Actualizar sitemap baseUrl
- [ ] Agregar imágenes og-image.jpg y twitter-image.jpg
- [ ] Configurar Analytics
- [ ] Ejecutar `npm run test`
- [ ] Ejecutar `npm run build`
- [ ] Verificar que no hay errores de TypeScript
- [ ] Revisar Lighthouse score
- [ ] Configurar variables de entorno si es necesario

## Mantenimiento

### Updates Regulares

\`\`\`bash
# Actualizar dependencias
npm update

# Verificar vulnerabilidades
npm audit

# Tests después de updates
npm run test
\`\`\`

### Monitoreo

Configurar alertas para:
- Errores en producción (Sentry)
- Performance degradation (Vercel Analytics)
- SEO issues (Google Search Console)

## Recursos

- [Next.js Best Practices](https://nextjs.org/docs)
- [React Testing Library](https://testing-library.com/react)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Web.dev SEO Guide](https://web.dev/lighthouse-seo/)
