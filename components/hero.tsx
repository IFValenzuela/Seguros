"use client"

import { useState, useEffect, useRef } from "react"
import { Phone, ArrowRight } from "lucide-react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

/* ─────────────────────────────────────────────────────────────
   ROTATING PHRASES
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
    const id = setInterval(() => setIndex((i) => (i + 1) % PHRASES.length), 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="relative block overflow-hidden" style={{ minHeight: "1.05em" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="block text-blue-400"
        >
          {PHRASES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

/* ─────────────────────────────────────────────────────────────
   HERO
   ───────────────────────────────────────────────────────────── */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  /* Parallax: image drifts up 20% as section scrolls out */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center overflow-hidden isolate"
    >
      {/* ── Parallax background image ── */}
      <motion.img
        src="https://images.unsplash.com/photo-1543342384-1f1350e27861?q=80&w=2500&auto=format&fit=crop"
        alt="Familia feliz"
        style={{ y: imageY }}
        className="absolute inset-0 w-full h-[115%] object-cover -z-20 object-center"
      />

      {/* ── Dark overlay ── */}
      <div className="absolute inset-0 bg-slate-950/65 -z-10" />

      {/* ── Film grain texture ─────────────────────────────────
          SVG feTurbulence noise at low opacity gives the photo
          a cinematic, printed-editorial quality.
          ───────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23grain)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
          mixBlendMode: "overlay",
        }}
      />

      {/* ── Radial vignette — darkens edges for depth ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 60% 50%, transparent 30%, rgba(2,6,23,0.55) 100%)",
        }}
      />

      {/* ── Vertical editorial label (left edge) ── */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col items-center gap-3"
      >
        <div className="h-14 w-px bg-white/20" />
        <span
          className="text-[0.6rem] uppercase tracking-[0.3em] font-bold text-white/30"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Mexicali — B.C.
        </span>
        <div className="h-14 w-px bg-white/20" />
      </motion.div>

      {/* ── Main content grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-7xl mx-auto px-8 relative z-20 py-32">

        {/* LEFT: headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] [font-family:var(--font-playfair)]">
            Lo que más importa merece{" "}
            <TextRotator />
          </h1>
        </motion.div>

        {/* RIGHT: paragraph + CTAs + stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:ml-auto"
        >
          <p className="text-sm md:text-base font-medium tracking-normal leading-relaxed text-slate-300 max-w-md mb-10">
            Seguros de vida, gastos médicos y servicios bancarios con
            asesoría personalizada. Más de 15 años protegiendo familias
            en Mexicali, Baja California.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              href="/cotizar"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold text-slate-900 transition-all hover:bg-slate-100"
            >
              Solicitar Cotización
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </motion.a>

            <motion.a
              href="tel:+526861234567"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-white/10 backdrop-blur-sm px-6 text-sm font-semibold text-white ring-1 ring-inset ring-white/20 transition-all hover:bg-white/20"
            >
              <Phone className="h-4 w-4" strokeWidth={1.5} />
              (686) 123-4567
            </motion.a>
          </div>

          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10">
            {[
              { value: "500+", label: "Familias" },
              { value: "15+",  label: "Años" },
              { value: "24/7", label: "Soporte" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-extrabold tracking-tighter text-white">{stat.value}</div>
                <div className="text-[0.65rem] uppercase tracking-[0.2em] font-bold text-slate-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.3em] font-bold text-white/30">
          Scroll
        </span>
        <div className="relative h-10 w-px overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-white/60 to-transparent"
            animate={{ y: ["0%", "100%"] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            style={{ height: "60%" }}
          />
        </div>
      </motion.div>
    </section>
  )
}
