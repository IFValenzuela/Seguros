"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react"

export function CTASection() {
  return (
    <footer className="bg-[#0a0a0a] text-white">

      {/* ── TOP STRIP: logo + nav + cta ── */}
      <div className="border-b border-white/20">
        <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Wordmark + tagline */}
          <div>
            <Link href="/" className="text-xl font-bold tracking-widest uppercase text-white">
              VA
            </Link>
            <p className="text-[11px] uppercase tracking-widest text-white/40 mt-1">
              Asesores Valenzuela y Aguilar
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {[
              { label: "Vida",        href: "/servicios/vida" },
              { label: "Gastos Médicos", href: "/servicios/gastos-medicos" },
              { label: "Auto",        href: "/servicios/auto" },
              { label: "Cuentas",     href: "/servicios/cuentas" },
              { label: "Créditos",    href: "/servicios/creditos" },
              { label: "Inversiones", href: "/servicios/inversiones" },
              { label: "Nosotros",    href: "/nosotros" },
              { label: "Contacto",    href: "/contacto" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs uppercase tracking-widest font-semibold text-white/50 hover:text-white transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="/cotizar"
            className="group inline-flex items-center gap-2 text-white hover:text-white/60 transition shrink-0"
          >
            <span className="text-xs uppercase tracking-widest font-semibold">Solicitar cotización</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* ── CONTACT ROW ── */}
      <div className="border-b border-white/20">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
          <a
            href="tel:+526861234567"
            className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition"
          >
            <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
            (686) 123-4567
          </a>
          <a
            href="mailto:contacto@asesoresva.com"
            className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition"
          >
            <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />
            contacto@asesoresva.com
          </a>
          <div className="flex items-center gap-2.5 text-sm text-white/40">
            <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
            Mexicali, Baja California
          </div>
          <div className="sm:ml-auto text-xs uppercase tracking-widest text-white/30">
            Lun–Vie 9–18 h &nbsp;·&nbsp; Sáb 9–14 h
          </div>
        </div>
      </div>

      {/* ── COPYRIGHT BAR ── */}
      <div className="max-w-7xl mx-auto px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} Asesores Valenzuela y Aguilar. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-6">
          <span className="text-[10px] uppercase tracking-widest text-white/25">
            Agentes Autorizados · Grupo Financiero Inbursa
          </span>
          <a href="/privacidad" className="text-xs text-white/30 hover:text-white/60 transition">Privacidad</a>
          <a href="/terminos"   className="text-xs text-white/30 hover:text-white/60 transition">Términos</a>
        </div>
      </div>

    </footer>
  )
}
