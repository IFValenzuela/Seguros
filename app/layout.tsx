import type { Metadata } from 'next'
import { Outfit, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

/* ─── Playfair Display — editorial serif for hero headline ─
   High-contrast old-style serif. Dramatic at large sizes.
   ─────────────────────────────────────────────────────────── */
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

/* ─── Outfit — geometric sans for body & UI ────────────────
   Clean, modern. Used for everything except the hero h1.
   ─────────────────────────────────────────────────────────── */
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
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
    <html lang="es" className={`${playfair.variable} ${outfit.variable} bg-[#E5E4DF]`}>
      <body className="font-sans antialiased bg-[#E5E4DF] text-slate-900">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
