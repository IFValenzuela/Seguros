"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Car, Shield, Wrench, MapPin, CheckCircle, ArrowRight, Phone } from "lucide-react"

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

const benefits = [
  {
    icon: Shield,
    title: "Cobertura Amplia",
    description: "Protección completa contra daños materiales, robo total y responsabilidad civil.",
  },
  {
    icon: Wrench,
    title: "Asistencia Vial 24/7",
    description: "Grúa, paso de corriente, cambio de llanta y auxilio mecánico en cualquier momento.",
  },
  {
    icon: MapPin,
    title: "Cobertura Nacional",
    description: "Tu seguro te protege en todo México, sin importar a dónde viajes.",
  },
]

const coverages = [
  "Daños materiales por colisión",
  "Robo total del vehículo",
  "Responsabilidad civil",
  "Gastos médicos a ocupantes",
  "Asistencia legal",
  "Extensión de cobertura en USA",
  "Daños por fenómenos naturales",
]

export default function AutoPage() {
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
              src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2000&auto=format&fit=crop"
              alt=""
              fill
              className="object-cover opacity-30"
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to bottom, #121212 0%, transparent 0%, transparent 100%, #121212 100%)`,
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
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: `${GOLD}20` }}
                  >
                    <Car className="w-6 h-6" style={{ color: GOLD }} />
                  </div>
                  <span
                    className="text-xs uppercase tracking-[0.3em] font-semibold"
                    style={{ color: GOLD }}
                  >
                    Seguro de Auto
                  </span>
                </div>

                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6"
                  style={{
                    color: "#ebebeb",
                    fontFamily: "var(--font-serif)",
                  }}
                >
                  Maneja con total tranquilidad
                </h1>

                <p
                  className="text-lg md:text-xl leading-relaxed mb-10"
                  style={{ color: "#ebebeb" }}
                >
                  Protege tu vehículo y a quienes viajan contigo. Un seguro de auto que
                  te respalda en todo momento, desde pequeños percances hasta siniestros mayores.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/cotizar"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                    style={{ background: GOLD, color: TOBACCO }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#D4B57A"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = GOLD
                    }}
                  >
                    Cotizar ahora
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+526861234567"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 border hover:scale-[1.02]"
                    style={{ borderColor: `${CHAMPAGNE}40`, color: CHAMPAGNE }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = CHAMPAGNE
                      e.currentTarget.style.background = `${CHAMPAGNE}15`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `${CHAMPAGNE}40`
                      e.currentTarget.style.background = "transparent"
                    }}
                  >
                    <Phone className="w-4 h-4" />
                    Llamar ahora
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span
                className="text-xs uppercase tracking-[0.3em] font-semibold"
                style={{ color: GOLD }}
              >
                Beneficios
              </span>
              <h2
                className="text-3xl md:text-4xl font-medium tracking-tight mt-4"
                style={{ color: TOBACCO, fontFamily: "var(--font-serif)" }}
              >
                Protección vehicular sin límites
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-8 rounded-2xl"
                  style={{ background: "white", border: "1px solid #E5E5E5" }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: `${GOLD}15` }}
                  >
                    <benefit.icon className="w-7 h-7" style={{ color: GOLD }} />
                  </div>
                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{ color: TOBACCO }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverages Section */}
        <section className="py-20 md:py-32" style={{ background: "#121212" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
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
                  Coberturas
                </span>
                <h2
                  className="text-3xl md:text-4xl font-medium tracking-tight mt-4 mb-8"
                  style={{ color: "#ebebeb", fontFamily: "var(--font-serif)" }}
                >
                  Todo lo que necesitas en un solo seguro
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {coverages.map((coverage, i) => (
                    <motion.div
                      key={coverage}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: GOLD }} />
                      <span className="text-sm" style={{ color: "#ebebeb" }}>{coverage}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px] rounded-2xl overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop"
                  alt="Auto"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, #121212 0%, transparent 50%)` }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-3xl md:text-4xl font-medium tracking-tight mb-6"
                style={{ color: TOBACCO, fontFamily: "var(--font-serif)" }}
              >
                ¿Listo para proteger tu vehículo?
              </h2>
              <p className="text-lg mb-10" style={{ color: "#6B7280" }}>
                Obtén una cotización en minutos. Nuestros asesores te ayudarán
                a encontrar la mejor cobertura al mejor precio.
              </p>
              <Link
                href="/cotizar"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                style={{ background: TOBACCO, color: CHAMPAGNE }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = GOLD
                  e.currentTarget.style.color = TOBACCO
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = TOBACCO
                  e.currentTarget.style.color = CHAMPAGNE
                }}
              >
                Solicitar cotización gratuita
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
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
                Más de 25 años protegiendo familias en Mexicali, Baja California.
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
