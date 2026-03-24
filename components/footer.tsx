"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { VALogo } from "@/components/va-logo"

const navigation = {
  seguros: [
    { name: "Seguro de Vida", href: "/servicios/vida" },
    { name: "Gastos Médicos", href: "/servicios/gastos-medicos" },
    { name: "Seguro de Auto", href: "/servicios/auto" },
  ],
  bancarios: [
    { name: "Cuentas de Ahorro", href: "/servicios/cuentas" },
    { name: "Créditos Personales", href: "/servicios/creditos" },
    { name: "Inversiones", href: "/servicios/inversiones" },
  ],
  empresa: [
    { name: "Nosotros", href: "/nosotros" },
    { name: "Testimonios", href: "/testimonios" },
    { name: "Contacto", href: "/contacto" },
  ],
}

export function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a]">
      {/* ══════════════════════════════════════════
          MASSIVE HEADLINE SECTION
          ══════════════════════════════════════════ */}
      <div className="border-b border-white/20">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tighter text-white leading-[0.95]"
          >
            TU TRANQUILIDAD, NUESTRA MISIÓN.
          </motion.h2>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-6 mt-12"
          >
            <Link
              href="/cotizar"
              className="group inline-flex items-center gap-3 text-white hover:text-white/70 transition-colors"
            >
              <span className="text-sm uppercase tracking-widest font-semibold">
                Solicitar cotización
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <span className="text-white/20">|</span>
            <a
              href="tel:+526861234567"
              className="group inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-sm font-medium">(686) 123-4567</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          GRID SECTION — Navigation + Info
          ══════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo + Contact */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-6 lg:pr-8 lg:border-r lg:border-white/20">
            <Link href="/" className="inline-block">
              <VALogo size={48} className="brightness-0 invert" />
            </Link>
            <div className="space-y-3">
              <a
                href="mailto:contacto@asesoresva.com"
                className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
              >
                <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />
                contacto@asesoresva.com
              </a>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                Mexicali, B.C.
              </div>
            </div>
          </div>

          {/* Seguros */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-5">
              Seguros
            </p>
            <ul className="space-y-3">
              {navigation.seguros.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bancarios */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-5">
              Bancarios
            </p>
            <ul className="space-y-3">
              {navigation.bancarios.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-5">
              Empresa
            </p>
            <ul className="space-y-3">
              {navigation.empresa.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Horario */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-5">
              Horario
            </p>
            <ul className="space-y-2 text-sm text-white/50">
              <li>Lun – Vie</li>
              <li className="text-white">9:00 – 18:00</li>
              <li className="pt-2">Sábado</li>
              <li className="text-white">9:00 – 14:00</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          BOTTOM BAR
          ══════════════════════════════════════════ */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Asesores Valenzuela y Aguilar
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] uppercase tracking-widest text-white/30">
              Agentes Autorizados Grupo Inbursa
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
