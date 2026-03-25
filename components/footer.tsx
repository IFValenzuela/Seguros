"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { VALogo } from "@/components/va-logo"

const TOBACCO = "#160C04"
const CHAMPAGNE = "#EBD9B4"
const GOLD = "#C9A86C"

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
    <footer className="relative overflow-hidden">
      {/* ══════════════════════════════════════════
          MASSIVE HEADLINE SECTION WITH FULL BACKGROUND
          ══════════════════════════════════════════ */}
      <div className="relative" style={{ background: "#121212" }}>
        {/* Full background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover opacity-40"
          />
          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, #121212 0%, transparent 20%, transparent 60%, #121212 100%), linear-gradient(to right, #12121290 0%, transparent 50%)`,
            }}
          />
        </div>

        {/* Subtle gold glow */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 60% 40% at 50% 100%, ${GOLD}15, transparent 60%)`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-8 py-32 lg:py-40 text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="w-8 h-px" style={{ background: `${GOLD}60` }} />
            <span
              className="text-[10px] uppercase tracking-[0.3em] font-semibold"
              style={{ color: GOLD }}
            >
              Comienza Hoy
            </span>
            <span className="w-8 h-px" style={{ background: `${GOLD}60` }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.1] max-w-4xl mx-auto"
            style={{
              fontFamily: "var(--font-serif)",
              color: CHAMPAGNE,
            }}
          >
            Tu Tranquilidad,{" "}
            <span style={{ color: GOLD }}>Nuestra Misión</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: `${CHAMPAGNE}80` }}
          >
            Agenda una consulta gratuita con nuestros asesores expertos y encuentra la protección perfecta para ti y tu familia.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-4 mt-10"
          >
            <a
              href="https://wa.me/526861234567?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20seguros."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 bg-[#25D366] hover:bg-[#20bd5a] text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="text-sm uppercase tracking-widest font-semibold">
                Escríbenos por WhatsApp
              </span>
            </a>
            <a
              href="tel:+526861234567"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border transition-all duration-300 hover:bg-white/5"
              style={{ borderColor: `${CHAMPAGNE}40`, color: CHAMPAGNE }}
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
      <div style={{ background: "#0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-8 py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Logo + Contact */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-6 lg:pr-8 lg:border-r border-white/10">
              <Link href="/" className="inline-block">
                <VALogo size={48} className="brightness-0 invert" />
              </Link>
              <div className="space-y-3">
                <a
                  href="https://wa.me/526861234567?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20seguros."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#25D366] hover:text-[#20bd5a] text-sm font-medium transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Escríbenos por WhatsApp
                </a>
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
              <p className="text-[10px] font-semibold uppercase tracking-widest mb-5" style={{ color: GOLD }}>
                Seguros
              </p>
              <ul className="space-y-3">
                {navigation.seguros.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bancarios */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest mb-5" style={{ color: GOLD }}>
                Bancarios
              </p>
              <ul className="space-y-3">
                {navigation.bancarios.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest mb-5" style={{ color: GOLD }}>
                Empresa
              </p>
              <ul className="space-y-3">
                {navigation.empresa.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Horario */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest mb-5" style={{ color: GOLD }}>
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
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} Asesores Valenzuela y Aguilar
            </p>
            <div className="flex items-center gap-2">
              <span
                className="w-6 h-px"
                style={{ background: `${GOLD}40` }}
              />
              <span className="text-[10px] uppercase tracking-widest text-white/30">
                Agentes Autorizados Grupo Inbursa
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
