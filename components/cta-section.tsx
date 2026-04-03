"use client"

import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"
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
  const isInView = useInView(containerRef, { once: false, margin: "-100px" })

  return (
    <>
      {/* CTA Section - Clean design with hero-style background */}
      <section className="relative overflow-hidden py-32" ref={containerRef}>
        {/* Background image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <motion.img
            initial={{ scale: 1.08 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2000&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: "contrast(1.52) saturate(0.85) brightness(0.75)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "rgba(29, 21, 15, 0.65)" }}
          />
        </motion.div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Simple eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6"
            >
              <span
                className="text-xs tracking-[0.3em] uppercase"
                style={{ color: "#C9A86C" }}
              >
                Comienza hoy
              </span>
            </motion.div>

            {/* Clean headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6"
              style={{
                fontFamily: 'var(--font-serif)',
                color: "#f6f6f6",
              }}
            >
              Protege lo que más importa
            </motion.h2>

            {/* Simple description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-base md:text-lg leading-relaxed mb-12 max-w-2xl mx-auto"
              style={{ color: "#e8e2d7" }}
            >
              Agenda una consulta gratuita con nuestros asesores expertos y encuentra la protección perfecta para ti y tu familia.
            </motion.p>

            {/* Clean CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="/cotizar"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  background: "#d8d7d5",
                  color: "#160C04",
                  border: "2px solid rgba(0,0,0,0.4)",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#C9A86C"
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#d8d7d5"
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)"
                }}
              >
                Solicitar cotización
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </a>
              <a
                href="tel:+526861234567"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  border: "1.5px solid rgba(235,217,180,0.4)",
                  color: "#EBD9B4",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(235,217,180,0.1)"
                  e.currentTarget.style.borderColor = "#EBD9B4"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent"
                  e.currentTarget.style.borderColor = "rgba(235,217,180,0.4)"
                }}
              >
                <Phone className="w-4 h-4" strokeWidth={2} />
                (686) 123-4567
              </a>
            </motion.div>

            {/* Clean stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center gap-16 md:gap-24 mt-20 pt-20"
              style={{ borderTop: "1px solid rgba(201,168,108,0.3)" }}
            >
              {[
                { value: "25", label: "Años de experiencia" },
                { value: "24/7", label: "Soporte" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-3xl md:text-4xl tracking-tight mb-2"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      color: "#e8e2d7",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "rgba(235, 217, 180, 0.56)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal and clean */}
      <footer className="bg-stone-950 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Main footer */}
          <div className="py-12 grid md:grid-cols-12 gap-10">
            {/* Brand */}
            <div className="md:col-span-4">
              <Link
                href="/"
                className="relative inline-block mb-6"
              >
                <img
                  src="/VA WL.png"
                  alt="VA Advisors"
                  className="w-auto object-contain"
                  style={{
                    height: "190px",
                    position: "absolute",
                    left: 0,
                    top: -50,
                  }}
                />
                {/* Spacer to maintain layout */}
                <div style={{ width: "300px", height: "80px" }} />
              </Link>
              <p className="text-sm leading-relaxed text-stone-400 mb-3">
                Más de 25 años protegiendo familias en Mexicali, Baja California.
              </p>
              <p className="text-xs text-stone-600">
                Agentes Autorizados
              </p>
            </div>

            {/* Links */}
            <div className="md:col-span-2">
              <h4 className="text-xs tracking-wider uppercase text-stone-500 mb-4">Servicios</h4>
              <nav className="flex flex-col gap-2">
                {navLinks.slice(0, 3).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* More Links */}
            <div className="md:col-span-2">
              <h4 className="text-xs tracking-wider uppercase text-stone-500 mb-4">Empresa</h4>
              <nav className="flex flex-col gap-2">
                <Link href="/nosotros" className="text-sm text-stone-400 hover:text-white transition-colors">
                  Nosotros
                </Link>
                <Link href="/contacto" className="text-sm text-stone-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </nav>
            </div>

            {/* Contact */}
            <div className="md:col-span-4">
              <h4 className="text-xs tracking-wider uppercase text-stone-500 mb-4">Contacto</h4>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+526861234567"
                  className="text-sm text-stone-400 hover:text-white transition-colors"
                >
                  (686) 123-4567
                </a>
                <a
                  href="mailto:hola@asesoresva.com"
                  className="text-sm text-stone-400 hover:text-white transition-colors"
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
          <div className="py-5 border-t border-stone-900 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-stone-600">
              © {new Date().getFullYear()} Asesores Valenzuela y Aguilar
            </p>
            <div className="flex items-center gap-8">
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
