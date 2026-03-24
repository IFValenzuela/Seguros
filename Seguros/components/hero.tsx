"use client"

import { useRef } from "react"
import Link from "next/link"
import { Shield, TrendingUp, Users, Phone, ArrowRight, Sparkles } from "lucide-react"
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"

// Premium spring config for expensive feel
const springConfig = { damping: 30, stiffness: 200, mass: 0.8 }

// Staggered reveal variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 120,
    },
  },
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Parallax transforms
  const yText = useTransform(scrollYProgress, [0, 1], [0, 100])
  const yCards = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // SVG grid pattern
  const gridSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Cpath d='M64 0H0v64' fill='none' stroke='%23cbd5e1' stroke-opacity='0.3' stroke-width='1'/%3E%3C/svg%3E")`

  return (
    <section ref={containerRef} className="relative flex-1 flex flex-col bg-stone-50 overflow-hidden">
      {/* Engineered grid background with radial fade mask */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: gridSvg,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 0%, transparent 70%)',
        }}
      />

      {/* Secondary dot pattern for depth */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgb(120 113 108 / 0.5) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 80%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 80%)',
        }}
      />

      {/* Clean ambient glow blobs - subtle blue for corporate trust */}
      <motion.div
        className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/[0.06] rounded-full blur-[120px] pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.06, 0.09, 0.06],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-indigo-500/[0.04] rounded-full blur-[100px] pointer-events-none"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.04, 0.07, 0.04],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Main content with parallax */}
      <motion.div
        style={{ y: yText, opacity }}
        className="container relative z-10 mx-auto px-4 py-12 lg:py-16 flex-1 flex items-center"
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          {/* Left: Typography lockup with staggered reveals */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-6"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white ring-1 ring-inset ring-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04),_0_4px_16px_-2px_rgba(0,0,0,0.06)]">
                <motion.div
                  className="w-2 h-2 rounded-full bg-emerald-500"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="uppercase tracking-widest text-xs font-semibold text-stone-600">
                  Agentes Autorizados Grupo Inbursa
                </span>
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.div variants={itemVariants} className="space-y-1">
              <h1 className="font-heading text-[2.25rem] sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-extrabold tracking-tight text-stone-900 leading-[1.1] text-balance">
                Protege lo que más importa:
              </h1>
              <p className="text-[2.25rem] sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-heading font-extrabold tracking-tight leading-[1.1]">
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Tu Familia y tu Futuro
                </span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="max-w-lg text-lg text-stone-600 leading-relaxed"
            >
              Soluciones integrales en seguros y servicios bancarios. Más de 15 años
              protegiendo familias en Mexicali con asesoría personalizada.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2">
              {/* Magnetic Primary CTA */}
              <motion.a
                href="/cotizar"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", damping: 15, stiffness: 300 }}
                className="relative overflow-hidden inline-flex items-center justify-center gap-2 bg-gradient-to-b from-blue-600 to-blue-700 text-white h-14 px-8 text-base font-semibold rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.1),_0_8px_24px_-4px_rgba(59,130,246,0.4)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.1),_0_16px_40px_-4px_rgba(59,130,246,0.5)] transition-shadow duration-300"
              >
                <Sparkles className="w-5 h-5" strokeWidth={1.5} />
                Solicitar Cotización
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </motion.a>

              {/* Secondary CTA */}
              <motion.a
                href="tel:+526861234567"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 h-14 px-8 text-base font-semibold rounded-xl bg-white text-stone-900 ring-1 ring-inset ring-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04),_0_4px_16px_-2px_rgba(0,0,0,0.06)] hover:ring-black/10 transition-all"
              >
                <Phone className="w-5 h-5" strokeWidth={1.5} />
                (686) 123-4567
              </motion.a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-6">
              {[
                { label: "Asesoría sin costo", color: "bg-emerald-500" },
                { label: "Respuesta inmediata", color: "bg-blue-500" },
                { label: "100% confiable", color: "bg-indigo-500" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className={`w-2 h-2 rounded-full ${item.color}`} />
                  <span className="text-sm font-medium text-stone-600">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Human Anchor with 3D Overlapping Cards */}
          <motion.div style={{ y: yCards }} className="lg:col-span-6 relative">
            <div className="relative h-[500px] lg:h-[580px]">

              {/* Massive Lifestyle Image Container - The Human Anchor */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute inset-0 lg:inset-x-8"
              >
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden ring-1 ring-inset ring-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.05),_0_24px_60px_-12px_rgba(0,0,0,0.2)]">
                  {/* Cinematic Image with Slow Zoom Out */}
                  <motion.img
                    src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=85&w=1400&auto=format&fit=crop"
                    alt="Familia feliz en casa protegida"
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="w-full h-full object-cover"
                  />

                  {/* Subtle Gradient Overlay for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent" />
                </div>
              </motion.div>

              {/* Protection Shield Card - Top Left Overlap with Continuous Float */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", damping: 15, stiffness: 300 },
                }}
                className="absolute top-8 left-0 lg:left-4 w-[200px] z-30"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="bg-white rounded-xl p-4 ring-1 ring-inset ring-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04),_0_16px_48px_-8px_rgba(0,0,0,0.18)] backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center ring-1 ring-inset ring-blue-200/50">
                      <Shield className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-stone-900">Tu Protección</p>
                      <p className="uppercase tracking-widest text-[10px] font-semibold text-stone-400">Garantizada</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Stats Card - Top Right Overlap */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", damping: 15, stiffness: 300 },
                }}
                className="absolute top-6 right-0 lg:right-4 w-[160px] z-30"
              >
                <div className="bg-white rounded-xl p-4 ring-1 ring-inset ring-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04),_0_16px_48px_-8px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-stone-50 flex items-center justify-center ring-1 ring-inset ring-black/5">
                      <Users className="w-5 h-5 text-blue-600" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-2xl text-stone-900">500+</p>
                      <p className="uppercase tracking-widest text-[10px] font-semibold text-stone-400">Clientes</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Years Experience Card - Right Side Middle with Continuous Float */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", damping: 15, stiffness: 300 },
                }}
                className="absolute top-[180px] right-[-8px] lg:right-0 w-[140px] z-30"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                  className="bg-white rounded-xl p-4 ring-1 ring-inset ring-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04),_0_16px_48px_-8px_rgba(0,0,0,0.18)] backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center ring-1 ring-inset ring-emerald-200/50">
                      <Shield className="w-5 h-5 text-emerald-600" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-2xl text-stone-900">15+</p>
                      <p className="uppercase tracking-widest text-[10px] font-semibold text-stone-400">Años</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Services Card - Bottom Left Overlap */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.9,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", damping: 15, stiffness: 300 },
                }}
                className="absolute bottom-8 left-0 lg:left-4 w-[240px] z-30"
              >
                <div className="bg-white rounded-xl p-4 ring-1 ring-inset ring-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04),_0_16px_48px_-8px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-stone-50 flex items-center justify-center ring-1 ring-inset ring-black/5">
                      <Shield className="w-5 h-5 text-blue-600" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-stone-900">Seguros</p>
                      <p className="uppercase tracking-widest text-[10px] font-semibold text-stone-400">Protección integral</p>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    {["Seguro de Vida", "Gastos Médicos", "Seguro de Auto"].map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 + i * 0.1 }}
                        className="flex items-center gap-2 text-sm text-stone-500"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Banking Services Card - Bottom Right Overlap */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1.0,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", damping: 15, stiffness: 300 },
                }}
                className="absolute bottom-6 right-0 lg:right-4 w-[240px] z-30"
              >
                <div className="bg-stone-900 rounded-xl p-4 ring-1 ring-inset ring-white/10 shadow-[0_1px_2px_rgba(0,0,0,0.2),_0_20px_60px_-8px_rgba(0,0,0,0.5)] text-white backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-white/5 backdrop-blur-xl flex items-center justify-center ring-1 ring-inset ring-white/10 border-t border-white/20">
                      <TrendingUp className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <p className="font-heading font-bold">Servicios Bancarios</p>
                  </div>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    Ahorro, créditos e inversiones
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
