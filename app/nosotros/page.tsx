"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Users, Award, Heart, Clock, ArrowRight } from "lucide-react"

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

const values = [
  {
    icon: Heart,
    title: "Compromiso",
    description: "Nos comprometemos con cada cliente como si fuera parte de nuestra familia.",
  },
  {
    icon: Award,
    title: "Excelencia",
    description: "Buscamos la excelencia en cada interacción y en cada póliza que entregamos.",
  },
  {
    icon: Users,
    title: "Cercanía",
    description: "Creemos en las relaciones personales y en conocer a cada uno de nuestros clientes.",
  },
  {
    icon: Clock,
    title: "Responsabilidad",
    description: "Actuamos con integridad y transparencia en todo momento.",
  },
]

const stats = [
  { value: "15+", label: "Años de experiencia" },
  { value: "500+", label: "Familias protegidas" },
  { value: "98%", label: "Satisfacción" },
  { value: "24/7", label: "Soporte disponible" },
]

export default function NosotrosPage() {
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
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop"
              alt=""
              fill
              className="object-cover opacity-30"
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
                    Nuestra Historia
                  </span>
                </div>

                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6"
                  style={{
                    color: "#ebebeb",
                    fontFamily: "var(--font-serif)",
                  }}
                >
                  Más que asesores, somos tu familia
                </h1>

                <p
                  className="text-lg md:text-xl leading-relaxed"
                  style={{ color: "#ebebeb" }}
                >
                  Desde hace más de 15 años, en Asesores Valenzuela y Aguilar nos dedicamos
                  a proteger lo que más importa: tu familia, tu salud y tu patrimonio.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 md:py-32">
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
                  Quiénes Somos
                </span>
                <h2
                  className="text-3xl md:text-4xl font-medium tracking-tight mt-4 mb-6"
                  style={{ color: TOBACCO, fontFamily: "var(--font-serif)" }}
                >
                  Una historia de confianza y compromiso
                </h2>
                <div className="space-y-4 text-base leading-relaxed" style={{ color: "#6B7280" }}>
                  <p>
                    Fundados en Mexicali, Baja California, comenzamos como una pequeña agencia
                    de seguros con un gran sueño: hacer que la protección financiera fuera
                    accesible para todas las familias.
                  </p>
                  <p>
                    Con el tiempo, nos hemos convertido en uno de los asesores de seguros
                    más reconocidos de la región, no por el tamaño de nuestra operación,
                    sino por la calidad de nuestro servicio y el compromiso con cada cliente.
                  </p>
                  <p>
                    Hoy, continuamos con la misma pasión del primer día: ayudar a las
                    familias a proteger lo que más aman.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[500px] rounded-2xl overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop"
                  alt="Nuestro equipo"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16" style={{ background: "#121212" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div
                    className="text-4xl md:text-5xl font-medium mb-2"
                    style={{ color: GOLD, fontFamily: "var(--font-serif)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm" style={{ color: "#ebebeb" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
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
                Nuestros Valores
              </span>
              <h2
                className="text-3xl md:text-4xl font-medium tracking-tight mt-4"
                style={{ color: TOBACCO, fontFamily: "var(--font-serif)" }}
              >
                Lo que nos define
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center p-6"
                >
                  <div
                    className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6"
                    style={{ background: `${GOLD}15` }}
                  >
                    <value.icon className="w-8 h-8" style={{ color: GOLD }} />
                  </div>
                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{ color: TOBACCO }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32" style={{ background: `${TOBACCO}08` }}>
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
                ¿Listo para conocernos?
              </h2>
              <p className="text-lg mb-10" style={{ color: "#6B7280" }}>
                Agenda una cita con uno de nuestros asesores y descubre cómo
                podemos ayudarte a proteger lo que más importa.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm font-semibold transition-all duration-300"
                style={{ background: TOBACCO, color: CHAMPAGNE }}
              >
                Contactar ahora
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
