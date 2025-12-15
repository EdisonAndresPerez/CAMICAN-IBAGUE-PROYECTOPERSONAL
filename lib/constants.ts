export const COMPANY_INFO = {
  name: 'CamiCan',
  phone: '+57 350709926',
  phoneRaw: '573507309926',
  email: 'edisonandresperezmartinez@gmail.com',
  address: {
    street: 'Your Street',
    city: 'Your City',
    state: 'Your State',
    zip: 'Your Zip',
    country: 'US',
  },
  social: {
    facebook: 'https://facebook.com/secureviewpro',
    twitter: 'https://twitter.com/secureviewpro',
    instagram: 'https://instagram.com/secureviewpro',
    linkedin: 'https://www.linkedin.com/company/secureviewpro',
  },
} as const

export const SERVICES = [
  {
    id: 'cameras',
    title: 'Cámaras de Seguridad',
    description: 'Instalamos cámaras de seguridad de última generación con monitoreo en tiempo real para tu hogar o negocio.',
    icon: 'Camera',
    features: ['Tecnología 4K', 'Visión nocturna', 'Monitoreo remoto', 'Almacenamiento en nube'],
  },
  {
    id: 'electric-fences',
    title: 'Cercas Eléctricas',
    description: 'Sistemas de cercas eléctricas de alto voltaje para perímetros exteriores con alertas automáticas.',
    icon: 'Zap',
    features: ['Alto voltaje', 'Pulsos controlados', 'Sistema anti-sabotaje', 'Certificación técnica'],
  },
  {
    id: 'access-control',
    title: 'Controles de Acceso',
    description: 'Gestión inteligente de accesos con tecnología biométrica, tarjetas y códigos para edificios y empresas.',
    icon: 'KeyRound',
    features: ['Huella dactilar', 'Tarjetas RFID', 'Códigos PIN', 'Registro de ingresos'],
  },
  {
    id: 'smart-locks',
    title: 'Chapas Inteligentes',
    description: 'Cerraduras electrónicas de última generación con apertura remota y control total desde tu smartphone.',
    icon: 'Lock',
    features: ['Apertura remota', 'Control por app', 'Códigos temporales', 'Registro de actividad'],
  },
  {
    id: 'concertinas',
    title: 'Concertinas',
    description: 'Instalación de alambre de púas en espiral de alta seguridad para protección perimetral efectiva.',
    icon: 'Shield',
    features: ['Acero galvanizado', 'Alta resistencia', 'Instalación profesional', 'Diferentes calibres'],
  },
  {
    id: 'alarms',
    title: 'Instalación de Alarmas',
    description: 'Sistemas de alarma con sensores de movimiento, puertas y ventanas, con notificaciones instantáneas.',
    icon: 'Bell',
    features: ['Sensores inalámbricos', 'Alertas móviles', 'Sirenas potentes', 'Central de monitoreo'],
  },
] as const

export const FEATURES = [
  {
    id: 'monitoring',
    title: 'Monitoreo 24/7',
    description: 'Vigilancia continua con alertas en tiempo real',
    icon: 'Eye',
  },
  {
    id: 'warranty',
    title: 'Garantía Total',
    description: 'Respaldamos nuestro trabajo con garantía completa',
    icon: 'Shield',
  },
  {
    id: 'app',
    title: 'App Móvil',
    description: 'Controla todo desde tu smartphone',
    icon: 'Smartphone',
  },
  {
    id: 'support',
    title: 'Soporte Técnico',
    description: 'Asistencia profesional cuando la necesites',
    icon: 'Headphones',
  },
  {
    id: 'quality',
    title: 'Alta Definición',
    description: 'Imagen 4K ultra clara día y noche',
    icon: 'Video',
  },
  {
    id: 'storage',
    title: 'Almacenamiento Seguro',
    description: 'Grabaciones protegidas en la nube',
    icon: 'HardDrive',
  },
] as const

export const STATS = [
  { id: 'experience', value: '8+', label: 'Años de Experiencia' },
  { id: 'clients', value: '2,500+', label: 'Clientes Satisfechos' },
  { id: 'satisfaction', value: '99%', label: 'Satisfacción' },
  { id: 'availability', value: '24/7', label: 'Disponibilidad' },
] as const

export const NAV_LINKS = [
  { id: 'services', label: 'Servicios', href: '#servicios' },
  { id: 'features', label: 'Características', href: '#caracteristicas' },
  { id: 'contact', label: 'Contacto', href: '#contacto' },
] as const
