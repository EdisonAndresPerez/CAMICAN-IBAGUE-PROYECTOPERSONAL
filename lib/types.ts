// Type definitions for better scalability and type safety

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: readonly string[]
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
}

export interface Stat {
  id: string
  value: string
  label: string
}

export interface NavLink {
  id: string
  label: string
  href: string
}

export interface CompanyInfo {
  name: string
  phone: string
  phoneRaw: string
  email: string
  address: {
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  social: {
    facebook: string
    twitter: string
    instagram: string
    linkedin?: string
  }
}

export interface ContactFormData {
  nombre: string
  telefono: string
  email: string
  direccion: string
  servicio: string
  mensaje?: string
}
