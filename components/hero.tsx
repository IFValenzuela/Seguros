"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

/* ─────────────────────────────────────────────────────────────
   ROTATING PHRASES - Elegant transitions
   ───────────────────────────────────────────────────────────── */
const PHRASES = [
  "la mejor protección.",
  "tranquilidad absoluta.",
  "atención experta.",
  "el mejor respaldo.",
]

function TextRotator() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % PHRASES.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="relative inline-block overflow-hidden align-bottom" style={{ minHeight: "1.1em" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-110%", opacity: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="block text-stone-400"
        >
          {PHRASES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

/* ─────────────────────────────────────────────────────────────
   PREMIUM HERO - Editorial, Refined, Million-dollar feel
   ───────────────────────────────────────────────────────────── */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -50])

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with parallax */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 -z-20"
      >
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop"
          alt="Familia feliz"
          className="w-full h-[120%] object-cover"
        />
      </motion.div>

      {/* Gradient overlay - balanced for readability + image visibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950/80 via-stone-950/50 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-stone-950/70 via-transparent to-stone-950/30" />

      {/* Main content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 py-32"
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-white/50 font-medium">
              <span className="w-8 h-px bg-white/30" />
              Mexicali, Baja California
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-8"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Lo que más importa
            <br />
            merece <TextRotator />
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-lg text-white/80 leading-relaxed max-w-xl mb-12"
          >
            Seguros de vida, gastos médicos y servicios financieros con
            asesoría personalizada. Más de 15 años protegiendo familias
            en Mexicali.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="/cotizar"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-stone-900 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
            >
              Solicitar cotización
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
            </motion.a>

            <motion.a
              href="/nosotros"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/15 text-white rounded-full text-sm font-medium border border-white/30 backdrop-blur-sm transition-all duration-300 hover:bg-white/25 hover:border-white/50"
            >
              Conocer más
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-12 mt-20 pt-8 border-t border-white/10"
          >
            {[
              { value: "500+", label: "Familias protegidas" },
              { value: "15+", label: "Años de experiencia" },
              { value: "98%", label: "Satisfacción" },
            ].map((stat, i) => (
              <div key={stat.label}>
                <div
                  className="text-3xl md:text-4xl text-white tracking-tight mb-2"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-[0.15em] text-white/40 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/30 font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
