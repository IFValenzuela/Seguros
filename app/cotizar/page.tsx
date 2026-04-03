"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Heart, Car, Home, Briefcase, Shield, CheckCircle, Send, ArrowRight } from "lucide-react"

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

const insuranceTypes = [
  { id: "vida", label: "Seguro de Vida", icon: Heart, description: "Protege a tu familia" },
  { id: "gastos-medicos", label: "Gastos Médicos", icon: Shield, description: "Cobertura de salud" },
  { id: "auto", label: "Seguro de Auto", icon: Car, description: "Protección vehicular" },
  { id: "hogar", label: "Seguro de Hogar", icon: Home, description: "Protege tu patrimonio" },
  { id: "empresarial", label: "Empresarial", icon: Briefcase, description: "Seguros para tu negocio" },
]

export default function CotizarPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    tipoSeguro: "",
    mensaje: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/cotizar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar la solicitud")
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Hubo un error al enviar tu solicitud. Por favor, intenta de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const selectInsuranceType = (typeId: string) => {
    setFormData({ ...formData, tipoSeguro: typeId })
  }

  const isFormValid = formData.nombre && formData.email && formData.telefono && formData.tipoSeguro

  return (
    <div className="flex min-h-screen flex-col" style={{ background: "#FAFAF8" }}>
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
          style={{ background: "#121212" }}
        >
          {/* Full background image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop"
              alt=""
              fill
              className="object-cover opacity-30"
            />
            {/* Dark overlay with gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to bottom, #121212 0%, transparent 30%, transparent 70%, #121212 100%), linear-gradient(to right, #12121280 0%, transparent 50%, #12121280 100%)`,
              }}
            />
            {/* Gold radial gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse 60% 40% at 50% 30%, ${GOLD}12, transparent 70%)`,
              }}
            />
          </div>

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="w-8 h-px" style={{ background: `${GOLD}60` }} />
                <span
                  className="text-[10px] uppercase tracking-[0.3em] font-semibold"
                  style={{ color: GOLD }}
                >
                  Cotización Gratuita
                </span>
                <span className="w-8 h-px" style={{ background: `${GOLD}60` }} />
              </div>

              <h1
                className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6"
                style={{
                  color: "#ebebeb",
                  fontFamily: "var(--font-serif)",
                }}
              >
                Solicita tu Cotización
              </h1>

              <p
                className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
                style={{ color: "#ebebeb" }}
              >
                Completa el formulario y uno de nuestros asesores se pondrá en contacto
                contigo en menos de 24 horas con una propuesta personalizada.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  onSubmit={handleSubmit}
                  className="space-y-10"
                >
                  {/* Insurance Type Selection */}
                  <div>
                    <label
                      className="block text-sm font-semibold uppercase tracking-wider mb-4"
                      style={{ color: TOBACCO }}
                    >
                      Tipo de Seguro
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                      {insuranceTypes.map((type) => {
                        const isSelected = formData.tipoSeguro === type.id
                        return (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => selectInsuranceType(type.id)}
                            className="group relative flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-300"
                            style={{
                              borderColor: isSelected ? GOLD : "#E5E5E5",
                              background: isSelected ? `${GOLD}08` : "white",
                            }}
                            onMouseEnter={(e) => {
                              if (!isSelected) {
                                e.currentTarget.style.borderColor = GOLD
                                e.currentTarget.style.background = `${GOLD}08`
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!isSelected) {
                                e.currentTarget.style.borderColor = "#E5E5E5"
                                e.currentTarget.style.background = "white"
                              }
                            }}
                          >
                            <type.icon
                              className="w-6 h-6 mb-2 transition-colors group-hover:text-[#C9A86C]"
                              style={{ color: isSelected ? GOLD : undefined }}
                            />
                            <span
                              className="text-xs font-medium text-center leading-tight"
                              style={{ color: TOBACCO }}
                            >
                              {type.label}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-6">
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
                        placeholder="Tu nombre"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none"
                        style={{
                          borderColor: "#E5E5E5",
                          background: "white",
                          color: TOBACCO,
                        }}
                        onFocus={(e) => e.target.style.borderColor = GOLD}
                        onBlur={(e) => e.target.style.borderColor = "#E5E5E5"}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="apellido"
                        className="block text-sm font-semibold uppercase tracking-wider mb-2"
                        style={{ color: TOBACCO }}
                      >
                        Apellido
                      </label>
                      <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        placeholder="Tu apellido"
                        className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none"
                        style={{
                          borderColor: "#E5E5E5",
                          background: "white",
                          color: TOBACCO,
                        }}
                        onFocus={(e) => e.target.style.borderColor = GOLD}
                        onBlur={(e) => e.target.style.borderColor = "#E5E5E5"}
                      />
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold uppercase tracking-wider mb-2"
                        style={{ color: TOBACCO }}
                      >
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none"
                        style={{
                          borderColor: "#E5E5E5",
                          background: "white",
                          color: TOBACCO,
                        }}
                        onFocus={(e) => e.target.style.borderColor = GOLD}
                        onBlur={(e) => e.target.style.borderColor = "#E5E5E5"}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="telefono"
                        className="block text-sm font-semibold uppercase tracking-wider mb-2"
                        style={{ color: TOBACCO }}
                      >
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="(686) 123-4567"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none"
                        style={{
                          borderColor: "#E5E5E5",
                          background: "white",
                          color: TOBACCO,
                        }}
                        onFocus={(e) => e.target.style.borderColor = GOLD}
                        onBlur={(e) => e.target.style.borderColor = "#E5E5E5"}
                      />
                    </div>
                  </div>

                  {/* Message (Optional) */}
                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-semibold uppercase tracking-wider mb-2"
                      style={{ color: TOBACCO }}
                    >
                      Mensaje (Opcional)
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Cuéntanos más sobre lo que necesitas..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none resize-none"
                      style={{
                        borderColor: "#E5E5E5",
                        background: "white",
                        color: TOBACCO,
                      }}
                      onFocus={(e) => e.target.style.borderColor = GOLD}
                      onBlur={(e) => e.target.style.borderColor = "#E5E5E5"}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={!isFormValid || isSubmitting}
                      className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        background: isFormValid ? TOBACCO : "#9CA3AF",
                        color: CHAMPAGNE,
                      }}
                      onMouseEnter={(e) => {
                        if (isFormValid) e.currentTarget.style.background = GOLD
                      }}
                      onMouseLeave={(e) => {
                        if (isFormValid) e.currentTarget.style.background = TOBACCO
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        <>
                          Solicitar Cotización
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Privacy Note */}
                  <p className="text-xs text-center md:text-left" style={{ color: "#9CA3AF" }}>
                    <Shield className="inline w-3 h-3 mr-1" />
                    Tu información está segura y nunca será compartida con terceros.
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center"
                    style={{ background: `${GOLD}15` }}
                  >
                    <CheckCircle className="w-10 h-10" style={{ color: GOLD }} />
                  </motion.div>

                  <h2
                    className="text-2xl md:text-3xl font-medium mb-4"
                    style={{ color: TOBACCO, fontFamily: "var(--font-serif)" }}
                  >
                    ¡Solicitud Recibida!
                  </h2>

                  <p className="text-base max-w-md mx-auto mb-8" style={{ color: "#6B7280" }}>
                    Gracias, <span className="font-semibold" style={{ color: TOBACCO }}>{formData.nombre}</span>.
                    Uno de nuestros asesores te contactará pronto al{" "}
                    <span className="font-semibold" style={{ color: TOBACCO }}>{formData.telefono}</span> o{" "}
                    <span className="font-semibold" style={{ color: TOBACCO }}>{formData.email}</span>.
                  </p>

                  <div
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm"
                    style={{ background: `${TOBACCO}08`, color: TOBACCO }}
                  >
                    <Shield className="w-4 h-4" style={{ color: GOLD }} />
                    Respuesta en menos de 24 horas
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="pb-16 md:pb-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                {
                  title: "Sin Compromiso",
                  description: "Cotización gratuita y sin obligación de compra",
                  icon: CheckCircle,
                },
                {
                  title: "Respuesta Rápida",
                  description: "Un asesor te contactará en menos de 24 horas",
                  icon: Send,
                },
                {
                  title: "Asesoría Personalizada",
                  description: "Planes adaptados a tus necesidades específicas",
                  icon: Shield,
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6"
                >
                  <div
                    className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ background: `${GOLD}15` }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: GOLD }} />
                  </div>
                  <h3
                    className="text-sm font-semibold uppercase tracking-wider mb-2"
                    style={{ color: TOBACCO }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ color: "#6B7280" }}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

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
    </div>
  )
}
