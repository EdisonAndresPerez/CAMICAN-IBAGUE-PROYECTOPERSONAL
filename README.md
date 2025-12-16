# CamiCan - Sistemas de Seguridad

Landing page profesional para empresa de instalación y mantenimiento de sistemas de seguridad en Ibagué, desarrollado con Next.js 16, React 19, TypeScript y Tailwind CSS.

## 🚀 Despliegue en Vercel

### Opción 1: Deploy Automático (Recomendado)

1. **Sube tu código a GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub
   - Click en "Add New Project"
   - Importa tu repositorio `CAM_IBG`
   - Vercel detectará automáticamente que es Next.js
   - Click en "Deploy"

### Opción 2: Deploy desde CLI

1. **Instala Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Inicia sesión:**
   ```bash
   vercel login
   ```

3. **Despliega:**
   ```bash
   vercel
   ```

### Configuración Post-Deploy

1. **Variables de Entorno** (opcional):
   - En Vercel Dashboard → Settings → Environment Variables
   - Agrega: `NEXT_PUBLIC_SITE_URL` con tu dominio

2. **Dominio Personalizado**:
   - Settings → Domains
   - Agrega tu dominio personalizado

## ✅ Pre-Deploy Checklist

- [x] Dependencias instaladas correctamente
- [x] Build exitoso (`npm run build`)
- [x] TypeScript sin errores críticos
- [x] Imágenes optimizadas
- [x] SEO configurado (sitemap, robots.txt)
- [x] Información de empresa actualizada en `lib/constants.ts`

## Características Principales

- **SEO Optimizado**: Metadata completa, sitemap.xml, robots.txt y datos estructurados
- **Arquitectura Escalable**: Constantes centralizadas y componentes reutilizables
- **100% TypeScript**: Type-safe con interfaces y tipos definidos
- **Pruebas Unitarias**: Cobertura completa con Jest y React Testing Library
- **Responsive Design**: Optimizado para dispositivos móviles y desktop
- **Performance**: Optimizado con Next.js 16 y React 19

## Estructura del Proyecto

\`\`\`
├── app/
│   ├── layout.tsx          # Layout principal con SEO metadata
│   ├── page.tsx             # Página principal
│   ├── sitemap.ts           # Generación de sitemap
│   └── robots.ts            # Configuración de robots.txt
├── components/
│   ├── hero.tsx             # Sección hero principal
│   ├── services.tsx         # Servicios ofrecidos
│   ├── features.tsx         # Características destacadas
│   ├── stats.tsx            # Estadísticas de la empresa
│   ├── contact-form.tsx     # Formulario de contacto
│   ├── cta.tsx              # Call-to-action
│   └── footer.tsx           # Footer con enlaces
├── lib/
│   ├── constants.ts         # Constantes centralizadas (SCALABLE)
│   ├── types.ts             # Definiciones de tipos TypeScript
│   └── utils.ts             # Funciones utilitarias
└── __tests__/
    ├── components/          # Tests unitarios de componentes
    ├── lib/                 # Tests de utilidades
    └── integration/         # Tests de integración
\`\`\`

## Arquitectura Escalable

### Constantes Centralizadas (`lib/constants.ts`)

Todas las configuraciones importantes están centralizadas en un solo lugar:

\`\`\`typescript
// Información de la empresa
export const COMPANY_INFO = {
  name: 'SecureView Pro',
  phone: '+1 (234) 567-890',
  email: 'contacto@secureviewpro.com',
  // ... más configuración
}

// Servicios (fácil agregar más)
export const SERVICES = [
  { id: 'installation', title: '...', ... },
  // Agrega nuevos servicios aquí
]
\`\`\`

**Ventajas:**
- Un solo lugar para actualizar información
- Fácil agregar nuevos servicios, características o stats
- Mantiene consistencia en todo el sitio
- Facilita pruebas unitarias

### Tipos TypeScript (`lib/types.ts`)

Definiciones de tipos para type safety completo:

\`\`\`typescript
export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: readonly string[]
}
\`\`\`

## SEO Implementado

### Metadata Completa
- Title y description optimizados
- Keywords relevantes
- Open Graph tags para redes sociales
- Twitter Cards
- Canonical URLs
- Datos estructurados (JSON-LD) para Google

### Archivos SEO
- `sitemap.ts`: Generación automática de sitemap
- `robots.ts`: Configuración de crawlers
- Metadata dinámica basada en constantes

### Mejores Prácticas
- Semantic HTML (main, section, nav, footer)
- Alt text en imágenes
- ARIA labels para accesibilidad
- Enlaces descriptivos
- Estructura de headings correcta (h1, h2, h3)

## Testing

### Ejecutar Tests

\`\`\`bash
# Tests unitarios
npm test

# Tests en modo watch
npm run test:watch

# Coverage completo
npm run test:coverage
\`\`\`

### Cobertura de Tests

- ✅ Componentes individuales (Hero, Services, Features, etc.)
- ✅ Constantes y utilidades
- ✅ Integración de página completa
- ✅ Validación de tipos
- ✅ Renderizado y contenido

## Scripts Disponibles

\`\`\`bash
npm run dev          # Desarrollo (localhost:3000)
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linting
npm run test         # Tests unitarios
npm run test:watch   # Tests en modo watch
npm run test:coverage # Coverage de tests
\`\`\`

## Cómo Agregar Contenido Nuevo

### Agregar un Nuevo Servicio

1. Edita `lib/constants.ts`:
\`\`\`typescript
export const SERVICES = [
  // ... servicios existentes
  {
    id: 'nuevo-servicio',
    title: 'Título del Servicio',
    description: 'Descripción...',
    icon: 'IconName', // Debe existir en lucide-react
    features: ['Feature 1', 'Feature 2'],
  },
]
\`\`\`

2. Si necesitas un nuevo ícono, agrégalo en `components/services.tsx`:
\`\`\`typescript
import { Camera, Wrench, Search, RefreshCw, EuroIcon as NuevoIcono } from 'lucide-react'

const iconMap = {
  Camera,
  // ... otros íconos
  NuevoIcono,
}
\`\`\`

### Agregar una Nueva Característica

Edita `lib/constants.ts`:
\`\`\`typescript
export const FEATURES = [
  // ... características existentes
  {
    id: 'nueva-feature',
    title: 'Título',
    description: 'Descripción...',
    icon: 'IconName',
  },
]
\`\`\`

### Actualizar Información de Contacto

Edita `lib/constants.ts`:
\`\`\`typescript
export const COMPANY_INFO = {
  name: 'Tu Nombre',
  phone: 'Tu Teléfono',
  email: 'tu@email.com',
  // ...
}
\`\`\`

Todos los componentes se actualizarán automáticamente.

## Tecnologías Utilizadas

- **Next.js 16**: Framework de React con App Router
- **React 19**: Biblioteca de UI
- **TypeScript**: Type safety completo
- **Tailwind CSS v4**: Estilos utility-first
- **Lucide React**: Íconos
- **Jest**: Framework de testing
- **React Testing Library**: Testing de componentes
- **Vercel Analytics**: Analytics integrado

## Deployment

### Vercel (Recomendado)

1. Push tu código a GitHub
2. Conecta tu repo en Vercel
3. Deploy automático

### Otros Providers

\`\`\`bash
npm run build
npm run start
\`\`\`

## Configuración SEO para Producción

Antes de hacer deploy, actualiza:

1. **layout.tsx**: Cambia `metadataBase` a tu dominio real
2. **sitemap.ts**: Actualiza `baseUrl`
3. **constants.ts**: Actualiza toda la información de contacto
4. **Layout structured data**: Actualiza coordenadas y dirección

## Mantenimiento y Escalabilidad

### Agregar Nuevas Páginas

1. Crea archivo en `app/nueva-pagina/page.tsx`
2. Agrega metadata específica
3. Actualiza `sitemap.ts`
4. Agrega link en navegación si es necesario

### Internacionalización (i18n)

El sitio está preparado para agregar i18n:
1. Mueve `constants.ts` a estructura de idiomas
2. Usa Next.js i18n routing
3. Los componentes ya usan las constantes

### Integración con Backend

Para conectar con API:
1. Crea Server Actions en `app/actions/`
2. Usa en `contact-form.tsx`
3. Conecta con tu backend o base de datos

## Soporte y Contacto

Para más información sobre este proyecto, consulta la documentación de:
- [Next.js](https://nextjs.org/docs)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)

## Licencia

Privado - SecureView Pro
