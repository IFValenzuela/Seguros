import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Asesores Valenzuela y Aguilar | Seguros y Servicios Financieros en Mexicali',
  description: 'Protege lo importante y potencia tu futuro financiero. Soluciones integrales en seguros de vida, gastos médicos, auto y servicios bancarios. Agentes autorizados Grupo Inbursa.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-slate-50 text-slate-900">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
