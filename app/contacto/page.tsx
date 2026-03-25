"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react"

const TOBACCO = "#160C04"
const CHAMPAGNE = "#EBD9B4"
const GOLD = "#C9A86C"

const navLinks = [
  { label: "Vida", href: "/servicios/vida" },
  { label: "Gastos Médicos", href: "/servicios/gastos-medicos" },
  { label: "Auto", href: "/servicios/auto" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
]

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    value: "(686) 123-4567",
    href: "tel:+526861234567",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hola@asesoresva.com",
    href: "mailto:hola@asesoresva.com",
  },
  {
    icon: MapPin,
    title: "Dirección",
    value: "Mexicali, Baja California",
    href: null,
  },
  {
    icon: Clock,
    title: "Horario",
    value: "Lun - Vie: 9:00 - 18:00",
    href: null,
  },
]

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="flex min-h-screen flex-col" style={{ background: "#FAFAF8" }}>
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
          style={{ background: "#121212" }}
        >
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2000&auto=format&fit=crop"
              alt=""
              fill
              className="object-cover opacity-25"
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to bottom, #121212 0%, transparent 30%, transparent 60%, #121212 100%), linear-gradient(to right, #121212 0%, transparent 60%)`,
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse 60% 40% at 70% 50%, ${GOLD}10, transparent 70%)`,
              }}
            />
          </div>

          <div className="relative max-w-6xl mx-auto px-6">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-px" style={{ background: `${GOLD}60` }} />
                  <span
                    className="text-xs uppercase tracking-[0.3em] font-semibold"
                    style={{ color: GOLD }}
                  >
                    Contacto
                  </span>
                </div>

                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6"
                  style={{
                    color: "#ebebeb",
                    fontFamily: "var(--font-serif)",
                  }}
                >
                  Estamos aquí para ayudarte
                </h1>

                <p
                  className="text-lg md:text-xl leading-relaxed"
                  style={{ color: "#ebebeb" }}
                >
                  ¿Tienes preguntas? ¿Necesitas asesoría? Ponte en contacto con nosotros
                  y uno de nuestros expertos te atenderá de inmediato.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span
                  className="text-xs uppercase tracking-[0.3em] font-semibold"
                  style={{ color: GOLD }}
                >
                  Información de Contacto
                </span>
                <h2
                  className="text-3xl md:text-4xl font-medium tracking-tight mt-4 mb-8"
                  style={{ color: TOBACCO, fontFamily: "var(--font-serif)" }}
                >
                  Múltiples formas de contactarnos
                </h2>

                <div className="space-y-6 mb-10">
                  {contactInfo.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${GOLD}15` }}
                      >
                        <item.icon className="w-5 h-5" style={{ color: GOLD }} />
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1" style={{ color: TOBACCO }}>
                          {item.title}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-base transition-colors hover:opacity-70"
                            style={{ color: "#6B7280" }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p style={{ color: "#6B7280" }}>{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/526861234567?text=Hola,%20me%20gustaría%20información%20sobre%20seguros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-white transition-all duration-300"
                  style={{ background: "#25D366" }}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">Escríbenos por WhatsApp</span>
                </a>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block text-sm font-semibold uppercase tracking-wider mb-2"
                        style={{ color: TOBACCO }}
                      >
                        Nombre *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none"
                        style={{ borderColor: "#E5E5E5", background: "white", color: TOBACCO }}
                        onFocus={(e) => (e.target.style.borderColor = GOLD)}
                        onBlur={(e) => (e.target.style.borderColor = "#E5E5E5")}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold uppercase tracking-wider mb-2"
                        style={{ color: TOBACCO }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none"
                        style={{ borderColor: "#E5E5E5", background: "white", color: TOBACCO }}
                        onFocus={(e) => (e.target.style.borderColor = GOLD)}
                        onBlur={(e) => (e.target.style.borderColor = "#E5E5E5")}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="telefono"
                        className="block text-sm font-semibold uppercase tracking-wider mb-2"
                        style={{ color: TOBACCO }}
                      >
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none"
                        style={{ borderColor: "#E5E5E5", background: "white", color: TOBACCO }}
                        onFocus={(e) => (e.target.style.borderColor = GOLD)}
                        onBlur={(e) => (e.target.style.borderColor = "#E5E5E5")}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="mensaje"
                        className="block text-sm font-semibold uppercase tracking-wider mb-2"
                        style={{ color: TOBACCO }}
                      >
                        Mensaje *
                      </label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none resize-none"
                        style={{ borderColor: "#E5E5E5", background: "white", color: TOBACCO }}
                        onFocus={(e) => (e.target.style.borderColor = GOLD)}
                        onBlur={(e) => (e.target.style.borderColor = "#E5E5E5")}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 disabled:opacity-50"
                      style={{ background: TOBACCO, color: CHAMPAGNE }}
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          Enviar mensaje
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-16">
                    <div
                      className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                      style={{ background: `${GOLD}15` }}
                    >
                      <Send className="w-10 h-10" style={{ color: GOLD }} />
                    </div>
                    <h3
                      className="text-2xl font-medium mb-4"
                      style={{ color: TOBACCO, fontFamily: "var(--font-serif)" }}
                    >
                      ¡Mensaje enviado!
                    </h3>
                    <p style={{ color: "#6B7280" }}>
                      Gracias por contactarnos. Te responderemos lo antes posible.
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-950 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="py-12 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <Link href="/" className="relative inline-block mb-6">
                <img
                  src="/VA WL.png"
                  alt="VA Advisors"
                  className="w-auto object-contain"
                  style={{ height: "190px", position: "absolute", left: 0, top: -50 }}
                />
                <div style={{ width: "300px", height: "80px" }} />
              </Link>
              <p className="text-sm leading-relaxed text-stone-400 mb-3">
                Más de 15 años protegiendo familias en Mexicali, Baja California.
              </p>
              <p className="text-xs text-stone-600">Agentes Autorizados</p>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-xs tracking-wider uppercase text-stone-500 mb-4">Servicios</h4>
              <nav className="flex flex-col gap-2">
                {navLinks.slice(0, 3).map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-stone-400 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-xs tracking-wider uppercase text-stone-500 mb-4">Empresa</h4>
              <nav className="flex flex-col gap-2">
                <Link href="/nosotros" className="text-sm text-stone-400 hover:text-white transition-colors">Nosotros</Link>
                <Link href="/contacto" className="text-sm text-stone-400 hover:text-white transition-colors">Contacto</Link>
              </nav>
            </div>
            <div className="md:col-span-4">
              <h4 className="text-xs tracking-wider uppercase text-stone-500 mb-4">Contacto</h4>
              <div className="flex flex-col gap-2">
                <a href="tel:+526861234567" className="text-sm text-stone-400 hover:text-white transition-colors">(686) 123-4567</a>
                <a href="mailto:hola@asesoresva.com" className="text-sm text-stone-400 hover:text-white transition-colors">hola@asesoresva.com</a>
                <span className="text-sm text-stone-500">Mexicali, B.C.</span>
              </div>
            </div>
          </div>
          <div className="py-5 border-t border-stone-900 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-stone-600">© {new Date().getFullYear()} Asesores Valenzuela y Aguilar</p>
            <div className="flex items-center gap-8">
              <Link href="/privacidad" className="text-xs text-stone-600 hover:text-stone-400 transition-colors">Privacidad</Link>
              <Link href="/terminos" className="text-xs text-stone-600 hover:text-stone-400 transition-colors">Términos</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
