"use client"

import Link from "next/link"

export function Header() {
  return (
    <header className="absolute top-0 w-full z-50 bg-transparent text-white border-none">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-8 py-6">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-bold text-lg leading-none tracking-widest uppercase"
        >
          VA
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/servicios/vida"          className="text-xs uppercase tracking-widest font-semibold hover:opacity-70 transition">Vida</Link>
          <Link href="/servicios/gastos-medicos" className="text-xs uppercase tracking-widest font-semibold hover:opacity-70 transition">Gastos Médicos</Link>
          <Link href="/servicios/auto"           className="text-xs uppercase tracking-widest font-semibold hover:opacity-70 transition">Auto</Link>
          <Link href="/servicios/cuentas"        className="text-xs uppercase tracking-widest font-semibold hover:opacity-70 transition">Cuentas</Link>
          <Link href="/servicios/creditos"       className="text-xs uppercase tracking-widest font-semibold hover:opacity-70 transition">Créditos</Link>
          <Link href="/servicios/inversiones"    className="text-xs uppercase tracking-widest font-semibold hover:opacity-70 transition">Inversiones</Link>
          <Link href="/nosotros"                 className="text-xs uppercase tracking-widest font-semibold hover:opacity-70 transition">Nosotros</Link>
          <Link href="/contacto"                 className="text-xs uppercase tracking-widest font-semibold hover:opacity-70 transition">Contacto</Link>
        </div>

        {/* CTA */}
        <Link
          href="/cotizar"
          className="hidden lg:inline-flex h-9 items-center rounded-md bg-white px-5 text-xs font-semibold uppercase tracking-widest text-slate-900 hover:bg-slate-100 transition"
        >
          Cotizar
        </Link>
      </nav>
    </header>
  )
}
