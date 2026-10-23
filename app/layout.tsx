import type { Metadata, Viewport } from 'next'
import { Newsreader } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { ScrollToTop } from '@/components/scroll-to-top'
import { MotionProvider } from '@/components/motion-provider'
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

export const metadata: Metadata = {
  title: {
    default: 'Asesores Valenzuela y Aguilar | Seguros y Servicios Financieros en Mexicali',
    template: '%s | Valenzuela y Aguilar, Mexicali',
  },
  description: 'Protege lo importante y potencia tu futuro financiero. Soluciones integrales en seguros de vida, gastos médicos, auto y servicios bancarios. Agentes autorizados Grupo Inbursa.',
}

export const viewport: Viewport = {
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-MX" className={newsreader.variable}>
      <body className="font-serif antialiased">
        <ScrollToTop />
        <MotionProvider>
          {children}
          <WhatsAppButton />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  )
}
