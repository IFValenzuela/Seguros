"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const WARM_WHITE = "#F2EDE4"
const GOLD       = "#C9A86C"
const OBSIDIAN   = "#080706"

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
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: isScrolled
              ? `rgba(8,7,6,0.94)`
              : "transparent",
            backdropFilter: isScrolled ? "blur(16px)" : "none",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-700"
          style={{
            background: `${GOLD}35`,
            opacity: isScrolled ? 1 : 0,
          }}
        />

        <nav className="relative flex items-center justify-center max-w-7xl mx-auto px-6 md:px-8 py-5">

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[13px] font-medium tracking-wide rounded-full transition-all duration-300"
                style={{ color: `${WARM_WHITE}66` }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = WARM_WHITE
                  e.currentTarget.style.background = `${WARM_WHITE}0A`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = `${WARM_WHITE}66`
                  e.currentTarget.style.background = "transparent"
                }}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/cotizar"
              className="inline-flex items-center px-6 py-2.5 rounded-full text-[13px] font-medium tracking-wide ml-2 transition-all duration-300"
              style={{
                border: `1.5px solid ${GOLD}70`,
                color: GOLD,
                background: "transparent",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = GOLD
                e.currentTarget.style.color = OBSIDIAN
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.color = GOLD
              }}
            >
              Cotizar
            </Link>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setMobileOpen(!isMobileMenuOpen)}
            className="lg:hidden absolute right-6 md:right-8 p-2 rounded-lg transition-colors duration-300"
            style={{ color: `${WARM_WHITE}80` }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[68px] z-40 lg:hidden"
            style={{
              background: "rgba(8,7,6,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: `1px solid ${GOLD}20`,
            }}
          >
            <nav className="flex flex-col p-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-base font-medium rounded-xl transition-colors duration-200"
                    style={{ color: `${WARM_WHITE}70` }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: navLinks.length * 0.04 }}
                className="pt-4"
              >
                <Link
                  href="/cotizar"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-6 py-3.5 rounded-full text-base font-semibold"
                  style={{ background: GOLD, color: OBSIDIAN }}
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
