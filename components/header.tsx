"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Servicios", href: "/servicios" },
  { label: "Vida", href: "/servicios/vida" },
  { label: "Gastos Médicos", href: "/servicios/gastos-medicos" },
  { label: "Auto", href: "/servicios/auto" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-stone-200/50 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 md:px-8 py-5">
          {/* Logo */}
          <Link
            href="/"
            className={`text-xl tracking-[0.3em] uppercase transition-colors duration-300 ${
              isScrolled ? 'text-stone-900' : 'text-white'
            }`}
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            VA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 rounded-full ${
                  isScrolled
                    ? 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/cotizar"
              className={`inline-flex items-center px-6 py-2.5 rounded-full text-[13px] font-medium tracking-wide transition-all duration-300 ${
                isScrolled
                  ? 'bg-stone-900 text-white hover:bg-stone-800'
                  : 'bg-white text-stone-900 hover:bg-white/90'
              }`}
            >
              Cotizar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-stone-900' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[72px] z-40 bg-white/95 backdrop-blur-xl border-b border-stone-200 lg:hidden"
          >
            <nav className="flex flex-col p-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-stone-700 hover:text-stone-900 hover:bg-stone-50 rounded-xl text-base font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
                className="pt-4"
              >
                <Link
                  href="/cotizar"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-3.5 bg-stone-900 text-white rounded-full text-base font-medium"
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
