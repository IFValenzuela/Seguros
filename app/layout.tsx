import type { Metadata } from 'next'
import { Inter, Libre_Baskerville } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

/* ─── Libre Baskerville — refined editorial serif ──────────
   Elegant, timeless serif with beautiful curves. Premium feel
   at all sizes without looking heavy or dated.
   ─────────────────────────────────────────────────────────── */
const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
})

/* ─── Inter — modern geometric sans ────────────────────────
   Apple-grade typography. Clean, highly legible, with
   excellent letter-spacing. Never looks cheap or chunky.
   ─────────────────────────────────────────────────────────── */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
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
    <html lang="es" className={`${libreBaskerville.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-[#FAFAF9] text-stone-800 selection:bg-blue-100 selection:text-blue-900">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
