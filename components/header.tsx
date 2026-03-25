"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"

const TOBACCO   = "#160C04"
const CHAMPAGNE = "#EBD9B4"
const GOLD      = "#C9A86C"

const navLinks = [
  { label: "Servicios",      href: "/servicios" },
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
          className="absolute inset-0 transition-all duration-500"
          style={{
            background: isScrolled ? "#FFFFFF" : "transparent",
            boxShadow: isScrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
          }}
        />

        <nav className="relative flex items-center justify-between max-w-7xl mx-auto px-6 md:px-10 py-4">

          {/* Logo */}
          <Link
            href="/"
            className="relative flex items-center"
          >
            <img
              src={isScrolled ? "/VABL.png" : "/VA WL.png"}
              alt="VA Advisors"
              className="w-auto object-contain transition-opacity duration-500 h-[80px] md:h-[120px] lg:h-[150px]"
              style={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
            {/* Spacer to maintain layout */}
            <div className="w-[120px] md:w-[180px] lg:w-[250px] h-[40px] md:h-[50px]" />
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

          {/* Contact Phone */}
          <a
            href="tel:+526861234567"
            className="hidden lg:inline-flex items-center gap-2 text-[14px] font-medium transition-all duration-300"
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

          {/* Mobile button */}
          <button
            onClick={() => setMobileOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 transition-colors duration-300"
            style={{ color: isScrolled ? TOBACCO : CHAMPAGNE }}
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
            className="fixed inset-x-0 top-[60px] md:top-[72px] z-40 lg:hidden"
            style={{
              background: "#FFFFFF",
              borderBottom: `1px solid rgba(0,0,0,0.08)`,
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
                className="pt-4"
              >
                <Link
                  href="/cotizar"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-6 py-3.5 rounded-full text-base font-semibold"
                  style={{ background: GOLD, color: "#FFFFFF" }}
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
