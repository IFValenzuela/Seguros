import type { Metadata, Viewport } from 'next'
import { Newsreader } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { ScrollToTop } from '@/components/scroll-to-top'
import { MotionProvider } from '@/components/motion-provider'
import Script from 'next/script'
import { SITE_URL, BUSINESS_NAME, EMAIL } from '@/lib/site'
import './globals.css'

/* Newsreader: a sharp contemporary serif with optical sizes, the closest open
   equivalent to Banham's Ivar Headline/Text pairing. One family sets the whole site. */
const newsreader = Newsreader({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-newsreader',
  display: 'swap',
  axes: ['opsz'],
  style: ['normal', 'italic'],
})

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: BUSINESS_NAME,
    url: '/',
    title: 'Asesores Valenzuela y Aguilar | Seguros y Servicios Financieros en Mexicali',
    description: 'Seguros de vida, gastos médicos, auto y servicios bancarios en Mexicali. Agentes autorizados Grupo Inbursa.',
    images: [{ url: '/logo-va.png' }],
  },
  verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION },
  title: {
    default: 'Asesores Valenzuela y Aguilar | Seguros y Servicios Financieros en Mexicali',
    template: '%s | Valenzuela y Aguilar, Mexicali',
  },
  description: 'Protege lo importante y potencia tu futuro financiero. Soluciones integrales en seguros de vida, gastos médicos, auto y servicios bancarios. Agentes autorizados Grupo Inbursa.',
}

export const viewport: Viewport = {
  themeColor: '#000000',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: BUSINESS_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/logo-va.png`,
  telephone: '+526862622535',
  email: EMAIL,
  areaServed: 'Mexicali, Baja California',
  address: { '@type': 'PostalAddress', addressLocality: 'Mexicali', addressRegion: 'Baja California', addressCountry: 'MX' },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  }],
  makesOffer: ['Seguro de vida', 'Seguro de gastos médicos', 'Seguro de auto', 'Servicios bancarios'].map((name) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name },
  })),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-MX" className={newsreader.variable} data-scroll-behavior="smooth">
      <body className="font-serif antialiased">
        <ScrollToTop />
        <MotionProvider>
          {children}
          <WhatsAppButton />
        </MotionProvider>
        <Analytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
