"use client"

import Link from "next/link"
import { Heart, Stethoscope, Car, Landmark, ArrowRight, Check, ArrowUpRight, Shield } from "lucide-react"
import { motion } from "framer-motion"

// Golden hour architectural photography - warm, serene, aspirational
// Search terms used: "modern living room golden hour", "warm interior sunlight"
const backgrounds = {
  // Warm, sunlit modern living room - natural golden hour lighting
  architecture: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=2400&q=85",
}

const services = [
  {
    id: "vida",
    title: "Seguro de Vida",
    description: "Protege el futuro de tu familia con coberturas que garantizan su bienestar financiero.",
    icon: Heart,
    href: "/servicios/vida",
    features: ["Cobertura por fallecimiento", "Beneficios en vida", "Ahorro garantizado"],
  },
  {
    id: "gastos",
    title: "Gastos Médicos",
    description: "Acceso a la mejor atención médica para ti y tu familia.",
    icon: Stethoscope,
    href: "/servicios/gastos-medicos",
    features: ["Hospitalización", "Consultas"],
  },
  {
    id: "auto",
    title: "Seguro de Auto",
    description: "Respaldo completo para tu vehículo en cualquier situación.",
    icon: Car,
    href: "/servicios/auto",
    features: ["Responsabilidad civil", "Robo total"],
  },
  {
    id: "bancarios",
    title: "Servicios Bancarios",
    description: "Soluciones financieras para hacer crecer tu patrimonio.",
    icon: Landmark,
    href: "/servicios/bancarios",
    features: ["Ahorro", "Créditos", "Inversiones"],
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 25, stiffness: 120 },
  },
}

export function ServicesPreview() {
  return (
    <section className="relative overflow-hidden">
      {/* ══════════════════════════════════════════════════════════════════
          WARM EDITORIAL - Golden hour photography with minimal overlay
          ══════════════════════════════════════════════════════════════════ */}
      <div className="relative py-24 lg:py-32">
        {/* Background: Warm golden hour architectural photo - LET IT SHINE */}
        <div className="absolute inset-0">
          <img
            src={backgrounds.architecture}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Subtle vignette ONLY - no heavy color overlay */}
          <div className="absolute inset-0 soft-vignette" />
          {/* Optional: Very subtle warm tint for text contrast - VERY light */}
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900/20 via-transparent to-stone-900/10" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Main content on frosted glass */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            {/* Warm frosted glass card for main content */}
            <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl">
              <motion.div variants={itemVariants} className="text-center mb-12">
                <p className="uppercase tracking-widest text-xs font-semibold text-blue-700 mb-4">
                  Nuestros Servicios
                </p>
                <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-stone-900 text-balance mb-6">
                  Protección que{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                    se siente personal
                  </span>
                </h2>
                <p className="text-lg lg:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
                  Cada familia es única. Por eso creamos soluciones a la medida que protegen
                  lo que más amas, con el respaldo de más de 15 años de experiencia.
                </p>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-12 pb-12 border-b border-stone-200"
              >
                {[
                  { value: "500+", label: "Familias protegidas" },
                  { value: "15+", label: "Años de experiencia" },
                  { value: "100%", label: "Compromiso" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-heading text-3xl lg:text-4xl font-extrabold text-stone-900">
                      {stat.value}
                    </p>
                    <p className="text-sm text-stone-500">{stat.label}</p>
                  </div>
                ))}
              </motion.div>

              {/* Service cards grid inside the glass */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {services.map((service) => (
                  <motion.div key={service.id} variants={itemVariants}>
                    <Link
                      href={service.href}
                      className="block h-full group p-6 bg-white/60 hover:bg-white rounded-xl ring-1 ring-inset ring-black/5 shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center ring-1 ring-inset ring-blue-500/10">
                          <service.icon className="w-5 h-5 text-blue-700" strokeWidth={1.5} />
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-stone-50 flex items-center justify-center ring-1 ring-inset ring-black/5 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowUpRight className="w-4 h-4 text-blue-700" strokeWidth={1.5} />
                        </div>
                      </div>

                      <h3 className="font-heading text-lg font-bold tracking-tight text-stone-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-stone-600 leading-relaxed mb-4">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="inline-flex items-center gap-1 text-xs text-stone-700 bg-white/80 px-2 py-1 rounded-md ring-1 ring-inset ring-black/5"
                          >
                            <Check className="w-3 h-3 text-emerald-600" strokeWidth={2} />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Trust badge */}
              <motion.div
                variants={itemVariants}
                className="mt-8 flex justify-center"
              >
                <div className="inline-flex items-center gap-3 px-4 py-3 bg-white/60 rounded-xl ring-1 ring-inset ring-black/5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center ring-1 ring-inset ring-emerald-500/20">
                    <Shield className="w-5 h-5 text-emerald-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-stone-900">Agentes Certificados</p>
                    <p className="text-xs text-stone-500">Grupo Financiero Inbursa</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom CTA - on the warm photo background */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 text-stone-900 hover:text-blue-700 font-semibold hover:gap-3 transition-all"
              >
                Ver todos los servicios
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
