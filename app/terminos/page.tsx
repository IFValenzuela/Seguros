"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/header"
import { FileText } from "lucide-react"

const TOBACCO = "#160C04"
const CHAMPAGNE = "#EBD9B4"
const GOLD = "#C9A86C"

const navLinks = [
  { label: "Vida", href: "/servicios/vida" },
  { label: "Gastos Médicos", href: "/servicios/gastos-medicos" },
  { label: "Auto", href: "/servicios/auto" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
]

export default function TerminosPage() {
  return (
    <div className="flex min-h-screen flex-col" style={{ background: "#FAFAF8" }}>
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
          style={{ background: "#121212" }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 60% 40% at 50% 30%, ${GOLD}12, transparent 70%)`,
            }}
          />

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <FileText className="w-6 h-6" style={{ color: GOLD }} />
                <span
                  className="text-xs uppercase tracking-[0.3em] font-semibold"
                  style={{ color: GOLD }}
                >
                  Legal
                </span>
              </div>

              <h1
                className="text-3xl md:text-5xl font-medium tracking-tight mb-6"
                style={{
                  color: "#ebebeb",
                  fontFamily: "var(--font-serif)",
                }}
              >
                Términos y Condiciones
              </h1>

              <p
                className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
                style={{ color: "#ebebeb" }}
              >
                Conoce los términos y condiciones de uso de nuestro sitio web
                y servicios de asesoría en seguros.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none"
              style={{ color: "#4B5563" }}
            >
              <p className="text-sm mb-8" style={{ color: "#9CA3AF" }}>
                Última actualización: Marzo 2026
              </p>

              <h2 style={{ color: TOBACCO, fontFamily: "var(--font-serif)" }}>
                1. Aceptación de los Términos
              </h2>
              <p>
                Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos
                Términos y Condiciones de uso. Si no está de acuerdo con alguno de estos
                términos, le recomendamos no utilizar nuestro sitio.
              </p>

              <h2 style={{ color: TOBACCO, fontFamily: "var(--font-serif)" }}>
                2. Servicios Ofrecidos
              </h2>
              <p>
                Asesores Valenzuela y Aguilar ofrece servicios de asesoría en seguros,
                incluyendo pero no limitado a:
              </p>
              <ul>
                <li>Seguros de Vida</li>
                <li>Seguros de Gastos Médicos Mayores</li>
                <li>Seguros de Automóvil</li>
                <li>Seguros Empresariales</li>
                <li>Asesoría personalizada en materia de seguros</li>
              </ul>

              <h2 style={{ color: TOBACCO, fontFamily: "var(--font-serif)" }}>
                3. Uso del Sitio Web
              </h2>
              <p>
                El usuario se compromete a utilizar este sitio web de manera responsable y
                conforme a la legislación vigente. Queda prohibido:
              </p>
              <ul>
                <li>Utilizar el sitio para fines ilegales</li>
                <li>Interferir con el funcionamiento del sitio</li>
                <li>Copiar o distribuir contenido sin autorización</li>
                <li>Proporcionar información falsa o engañosa</li>
              </ul>

              <h2 style={{ color: TOBACCO, fontFamily: "var(--font-serif)" }}>
                4. Cotizaciones y Contratación
              </h2>
              <p>
                Las cotizaciones proporcionadas a través de este sitio web son informativas
                y están sujetas a verificación y aprobación. La contratación final de cualquier
                póliza de seguros estará sujeta a los términos específicos de cada aseguradora.
              </p>

              <h2 style={{ color: TOBACCO, fontFamily: "var(--font-serif)" }}>
                5. Propiedad Intelectual
              </h2>
              <p>
                Todo el contenido de este sitio web, incluyendo textos, imágenes, logotipos y
                diseños, es propiedad de Asesores Valenzuela y Aguilar o de sus respectivos
                titulares y está protegido por las leyes de propiedad intelectual.
              </p>

              <h2 style={{ color: TOBACCO, fontFamily: "var(--font-serif)" }}>
                6. Limitación de Responsabilidad
              </h2>
              <p>
                Asesores Valenzuela y Aguilar no se hace responsable por:
              </p>
              <ul>
                <li>Errores u omisiones en el contenido del sitio</li>
                <li>Interrupciones en el servicio del sitio web</li>
                <li>Daños derivados del uso de la información proporcionada</li>
                <li>Decisiones tomadas basándose únicamente en el contenido del sitio</li>
              </ul>

              <h2 style={{ color: TOBACCO, fontFamily: "var(--font-serif)" }}>
                7. Modificaciones
              </h2>
              <p>
                Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier
                momento. Las modificaciones entrarán en vigor desde su publicación en el sitio web.
              </p>

              <h2 style={{ color: TOBACCO, fontFamily: "var(--font-serif)" }}>
                8. Legislación Aplicable
              </h2>
              <p>
                Estos Términos y Condiciones se rigen por las leyes de los Estados Unidos Mexicanos.
                Cualquier controversia será sometida a los tribunales competentes de Mexicali,
                Baja California.
              </p>

              <h2 style={{ color: TOBACCO, fontFamily: "var(--font-serif)" }}>
                9. Contacto
              </h2>
              <p>
                Para cualquier pregunta sobre estos Términos y Condiciones, puede contactarnos:
              </p>
              <ul>
                <li>Email: hola@asesoresva.com</li>
                <li>Teléfono: (686) 262-2535</li>
              </ul>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-950 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="py-12 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <Link href="/" className="relative inline-block mb-6">
                <img
                  src="/VA WL.png"
                  alt="VA Advisors"
                  className="w-auto object-contain"
                  style={{ height: "190px", position: "absolute", left: 0, top: -50 }}
                />
                <div style={{ width: "300px", height: "80px" }} />
              </Link>
              <p className="text-sm leading-relaxed text-stone-400 mb-3">
                Más de 25 años protegiendo familias en Mexicali, Baja California.
              </p>
              <p className="text-xs text-stone-600">Agentes Autorizados</p>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-xs tracking-wider uppercase text-stone-500 mb-4">Servicios</h4>
              <nav className="flex flex-col gap-2">
                {navLinks.slice(0, 3).map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-stone-400 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-xs tracking-wider uppercase text-stone-500 mb-4">Empresa</h4>
              <nav className="flex flex-col gap-2">
                <Link href="/nosotros" className="text-sm text-stone-400 hover:text-white transition-colors">Nosotros</Link>
                <Link href="/contacto" className="text-sm text-stone-400 hover:text-white transition-colors">Contacto</Link>
              </nav>
            </div>
            <div className="md:col-span-4">
              <h4 className="text-xs tracking-wider uppercase text-stone-500 mb-4">Contacto</h4>
              <div className="flex flex-col gap-2">
                <a href="tel:+526862622535" className="text-sm text-stone-400 hover:text-white transition-colors">(686) 262-2535</a>
                <a href="mailto:hola@asesoresva.com" className="text-sm text-stone-400 hover:text-white transition-colors">hola@asesoresva.com</a>
                <span className="text-sm text-stone-500">Mexicali, B.C.</span>
              </div>
            </div>
          </div>
          <div className="py-5 border-t border-stone-900 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-stone-600">© {new Date().getFullYear()} Asesores Valenzuela y Aguilar</p>
            <div className="flex items-center gap-8">
              <Link href="/privacidad" className="text-xs text-stone-600 hover:text-stone-400 transition-colors">Privacidad</Link>
              <Link href="/terminos" className="text-xs text-stone-600 hover:text-stone-400 transition-colors">Términos</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
