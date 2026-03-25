"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"

const TOBACCO   = "#160C04"
const CHAMPAGNE = "#EBD9B4"
const GOLD      = "#C9A86C"

const navLinks = [
  { label: "Servicios",      href: "/#servicios" },
  { label: "Vida",           href: "/servicios/vida" },
  { label: "Gastos Médicos", href: "/servicios/gastos-medicos" },
  { label: "Auto",           href: "/servicios/auto" },
  { label: "Nosotros",       href: "/nosotros" },
  { label: "Contacto",       href: "/contacto" },
]

export function Header() {
  const [isScrolled, setIsScrolled]     = useState(false)
  const [isMobileMenuOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 w-full z-50"
      >
        <div
          className="absolute inset-0 transition-all duration-300"
          style={{
            background: (isScrolled || isMobileMenuOpen) ? "#FFFFFF" : "transparent",
            boxShadow: (isScrolled || isMobileMenuOpen) ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
          }}
        />

        <nav className="relative flex items-center justify-between max-w-7xl mx-auto px-6 md:px-10 py-4">

          {/* Mobile spacer for balance */}
          <div className="lg:hidden w-10" />

          {/* Logo - centered on mobile, left on desktop */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:translate-x-0 lg:-my-10 flex items-center justify-center"
          >
            <img
              src={(isScrolled || isMobileMenuOpen) ? "/VABL.png" : "/VA WL.png"}
              alt="VA Advisors"
              className="w-auto object-contain transition-opacity duration-500 h-[150px] lg:h-[140px]"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium transition-colors duration-300"
                style={{
                  color: isScrolled ? TOBACCO : CHAMPAGNE,
                  textShadow: isScrolled ? "none" : "0 1px 2px rgba(0,0,0,0.3)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = GOLD
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = isScrolled ? TOBACCO : CHAMPAGNE
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact - Phone & WhatsApp */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+526861234567"
              className="inline-flex items-center gap-2 text-[14px] font-medium transition-all duration-300"
              style={{
                color: isScrolled ? TOBACCO : CHAMPAGNE,
                textShadow: isScrolled ? "none" : "0 1px 2px rgba(0,0,0,0.3)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = GOLD
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = isScrolled ? TOBACCO : CHAMPAGNE
              }}
            >
              <Phone className="w-4 h-4" strokeWidth={2} />
              (686) 123-4567
            </a>
            <a
              href="https://wa.me/526861234567?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20seguros."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-300"
              style={{
                background: "#25D366",
                color: "#FFFFFF",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#20bd5a"
                e.currentTarget.style.transform = "scale(1.02)"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#25D366"
                e.currentTarget.style.transform = "scale(1)"
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Mobile burger button - right side */}
          <button
            onClick={() => setMobileOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 transition-colors duration-300 z-10"
            style={{ color: (isScrolled || isMobileMenuOpen) ? TOBACCO : CHAMPAGNE }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-0 top-[72px] md:top-[88px] z-40 lg:hidden"
            style={{
              background: "#FFFFFF",
            }}
          >
            <nav className="flex flex-col p-6 space-y-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.03 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-base font-medium transition-colors duration-200"
                    style={{ color: TOBACCO }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: navLinks.length * 0.03 }}
                className="pt-4 space-y-3"
              >
                <a
                  href="https://wa.me/526861234567?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20seguros."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full text-base font-semibold"
                  style={{ background: "#25D366", color: "#FFFFFF" }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Escríbenos por WhatsApp
                </a>
                <Link
                  href="/cotizar"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-6 py-3.5 rounded-full text-base font-semibold border-2"
                  style={{ borderColor: GOLD, color: TOBACCO }}
                >
                  Solicitar Cotización
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
