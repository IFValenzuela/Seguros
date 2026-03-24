"use client"

import { useRef, useEffect, useState } from "react"
import { Phone, ArrowRight, MapPin, Clock, Mail, Shield, Sparkles } from "lucide-react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 })
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (isInView) motionValue.set(value)
  }, [isInView, motionValue, value])

  useEffect(() => {
    return springValue.on("change", (v) => setDisplay(Math.floor(v)))
  }, [springValue])

  return (
    <span ref={ref} className="tabular-nums">
      {display}{suffix}
    </span>
  )
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 25, stiffness: 120 },
  },
}

export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      {/* ══════════════════════════════════════════════════════════════════
          PREMIUM INBURSA NAVY - Corporate trust and professionalism
          ══════════════════════════════════════════════════════════════════ */}
      <div className="relative py-24 lg:py-32">
        {/* Premium Inbursa Navy gradient background - deep, rich, corporate */}
        <div className="absolute inset-0 premium-navy" />

        {/* Blue frosted glass texture layer */}
        <div className="absolute inset-0 frosted-texture" />

        {/* Subtle grain for premium analog feel */}
        <div className="absolute inset-0 grain-overlay" />

        {/* Inner glow effect */}
        <div className="absolute inset-0 inner-glow" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Main content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
              }}
              className="text-center"
            >
              {/* Premium badge - corporate blue tones */}
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-inset ring-white/10 mb-8">
                <Sparkles className="w-4 h-4 text-blue-400" strokeWidth={1.5} />
                <span className="text-sm font-medium text-blue-200">Asesoría sin compromiso</span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="font-heading text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white text-balance mb-6"
              >
                Tu tranquilidad{" "}
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                  comienza aquí
                </span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-lg lg:text-xl text-stone-300 leading-relaxed mb-10 max-w-2xl mx-auto"
              >
                Solicita tu cotización sin compromiso. Nuestro equipo te brindará
                asesoría personalizada para encontrar la protección perfecta para ti y tu familia.
              </motion.p>

              {/* Stats row */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-10 pb-10 border-b border-white/10"
              >
                {[
                  { value: 15, suffix: "+", label: "Años de experiencia" },
                  { value: 500, suffix: "+", label: "Familias protegidas" },
                  { value: 100, suffix: "%", label: "Compromiso" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-heading text-3xl lg:text-4xl font-extrabold text-white">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-sm text-stone-400">{stat.label}</p>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <motion.a
                  href="/cotizar"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 h-14 px-8 text-base font-semibold rounded-xl shadow-[0_0_0_1px_rgba(255,255,255,0.1),_0_8px_40px_-12px_rgba(255,255,255,0.3)] transition-all hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2),_0_12px_50px_-12px_rgba(255,255,255,0.4)]"
                >
                  Solicitar Cotización
                  <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                </motion.a>

                <motion.a
                  href="tel:+526861234567"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 text-base font-semibold rounded-xl bg-white/5 text-white ring-1 ring-inset ring-white/15 hover:bg-white/10 hover:ring-white/25 transition-all"
                >
                  <Phone className="w-5 h-5" strokeWidth={1.5} />
                  (686) 123-4567
                </motion.a>
              </motion.div>

              {/* Contact info - warm glass cards */}
              <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto">
                {[
                  { icon: MapPin, label: "Ubicación", value: "Mexicali, BC" },
                  { icon: Clock, label: "Horario", value: "Lun-Vie 9am-6pm" },
                  { icon: Mail, label: "Email", value: "contacto@asesoresva.com" },
                  { icon: Phone, label: "WhatsApp", value: "Respuesta inmediata" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-xl ring-1 ring-inset ring-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-stone-300" strokeWidth={1.5} />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-stone-400">{item.label}</p>
                      <p className="text-sm font-medium text-white truncate">{item.value}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Trust badge */}
              <motion.div
                variants={itemVariants}
                className="mt-10 inline-flex items-center gap-3 px-5 py-3 bg-white/5 rounded-xl ring-1 ring-inset ring-white/10"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center ring-1 ring-inset ring-emerald-400/30">
                  <Shield className="w-5 h-5 text-emerald-400" strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-white">Agentes Certificados</p>
                  <p className="text-xs text-stone-400">Grupo Financiero Inbursa</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
