import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'CamiCan - Instalación de Cámaras de Seguridad Profesional',
  description: 'Instalación profesional de cámaras de seguridad para casas, edificios y negocios. Mantenimiento, revisiones técnicas y actualizaciones. Protección 24/7 con tecnología de última generación.',
  keywords: ['cámaras de seguridad', 'instalación cámaras', 'videovigilancia', 'seguridad residencial', 'seguridad empresarial', 'CCTV', 'monitoreo 24/7', 'mantenimiento cámaras'],
  authors: [{ name: 'CamiCan' }],
  creator: 'CamiCan',
  publisher: 'CamiCan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://secureviewpro.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CamiCan- Instalación de Cámaras de Seguridad',
    description: 'Protección profesional 24/7. Instalación, mantenimiento y monitoreo de cámaras de seguridad para tu hogar o negocio.',
    url: 'https://secureviewpro.com',
    siteName: 'CamiCan',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CamiCan - Cámaras de Seguridad',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CamiCan - Instalación de Cámaras de Seguridad',
    description: 'Protección profesional 24/7 para tu hogar o negocio',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0f172a' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'SecureView Pro',
              description: 'Instalación profesional de cámaras de seguridad',
              image: 'https://secureviewpro.com/og-image.jpg',
              '@id': 'https://secureviewpro.com',
              url: 'https://secureviewpro.com',
              telephone: '+1234567890',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Your Street',
                addressLocality: 'Your City',
                addressRegion: 'Your State',
                postalCode: 'Your Zip',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 40.7128,
                longitude: -74.0060,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday',
                ],
                opens: '00:00',
                closes: '23:59',
              },
              sameAs: [
                'https://facebook.com/secureviewpro',
                'https://twitter.com/secureviewpro',
                'https://instagram.com/secureviewpro',
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
