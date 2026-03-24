"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const navLinks = [
  { label: "Vida", href: "/servicios/vida" },
  { label: "Gastos Médicos", href: "/servicios/gastos-medicos" },
  { label: "Auto", href: "/servicios/auto" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
]

export function CTASection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <>
      {/* CTA Section - With image */}
      <section className="relative overflow-hidden" ref={containerRef}>
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2000&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-950/85" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[11px] tracking-[0.2em] uppercase text-white/50 font-medium mb-6 block">
                Comienza hoy
              </span>
              <h2
                className="text-4xl md:text-5xl text-white leading-[1.15] tracking-tight mb-6"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Protege lo que
                <br />
                más importa.
              </h2>
              <p className="text-base text-white/60 leading-relaxed max-w-md mb-10">
                Agenda una consulta gratuita con nuestros asesores expertos
                y encuentra la protección perfecta para ti y tu familia.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <motion.a
                  href="/cotizar"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-3 px-7 py-3.5 bg-white text-stone-900 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
                >
                  Solicitar cotización
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </motion.a>
                <motion.a
                  href="tel:+526861234567"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 px-7 py-3.5 text-white rounded-full text-sm font-medium border border-white/25 transition-all duration-300 hover:bg-white/10 hover:border-white/40"
                >
                  <Phone className="w-4 h-4" strokeWidth={1.5} />
                  (686) 123-4567
                </motion.a>
              </div>
            </motion.div>

            {/* Right - Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { value: "500+", label: "Familias protegidas" },
                { value: "15", label: "Años de experiencia" },
                { value: "98%", label: "Clientes satisfechos" },
                { value: "24/7", label: "Soporte disponible" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm"
                >
                  <div
                    className="text-3xl md:text-4xl text-white tracking-tight mb-2"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Main footer */}
          <div className="py-16 grid md:grid-cols-12 gap-12">
            {/* Brand */}
            <div className="md:col-span-5">
              <Link
                href="/"
                className="text-2xl tracking-[0.3em] uppercase text-white mb-5 inline-block"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                VA
              </Link>
              <p className="text-stone-400 text-sm leading-relaxed mb-6 max-w-xs">
                Asesores Valenzuela y Aguilar. Más de 15 años protegiendo
                familias en Mexicali, Baja California.
              </p>
              <p className="text-xs text-stone-600">
                Agentes Autorizados · Grupo Financiero Inbursa
              </p>
            </div>

            {/* Links */}
            <div className="md:col-span-3">
              <h4 className="text-xs tracking-[0.15em] uppercase text-stone-500 mb-5">Servicios</h4>
              <nav className="flex flex-col gap-3">
                {navLinks.slice(0, 3).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* More Links */}
            <div className="md:col-span-2">
              <h4 className="text-xs tracking-[0.15em] uppercase text-stone-500 mb-5">Empresa</h4>
              <nav className="flex flex-col gap-3">
                <Link href="/nosotros" className="text-sm text-stone-400 hover:text-white transition-colors">
                  Nosotros
                </Link>
                <Link href="/contacto" className="text-sm text-stone-400 hover:text-white transition-colors">
                  Contacto
                </Link>
                <Link href="/cotizar" className="text-sm text-stone-400 hover:text-white transition-colors">
                  Cotizar
                </Link>
              </nav>
            </div>

            {/* Contact */}
            <div className="md:col-span-2">
              <h4 className="text-xs tracking-[0.15em] uppercase text-stone-500 mb-5">Contacto</h4>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+526861234567"
                  className="text-sm text-stone-400 hover:text-white transition-colors duration-300"
                >
                  (686) 123-4567
                </a>
                <a
                  href="mailto:hola@asesoresva.com"
                  className="text-sm text-stone-400 hover:text-white transition-colors duration-300"
                >
                  hola@asesoresva.com
                </a>
                <span className="text-sm text-stone-500">
                  Mexicali, B.C.
                </span>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="py-6 border-t border-stone-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-stone-600">
              © {new Date().getFullYear()} Asesores Valenzuela y Aguilar
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacidad" className="text-xs text-stone-600 hover:text-stone-400 transition-colors">
                Privacidad
              </Link>
              <Link href="/terminos" className="text-xs text-stone-600 hover:text-stone-400 transition-colors">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
