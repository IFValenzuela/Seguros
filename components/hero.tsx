"use client"

import { useRef } from "react"
import { Phone, ArrowRight, ChevronDown } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

/* ─────────────────────────────────────────────────────────────
   HERO — Premium Editorial Redesign
   Split layout with frosted glass panel for WCAG AA contrast
   ───────────────────────────────────────────────────────────── */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  /* Parallax: image drifts up as section scrolls out */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section
      ref={sectionRef}
      style={{ position: "relative" }}
      className="relative w-full min-h-screen flex items-center overflow-hidden isolate"
    >
      {/* ── Parallax background image ── */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 -z-20"
      >
        {/* Dark gradient placeholder - replace with family photo */}
        <div 
          className="absolute inset-0 w-full h-[120%]"
          style={{
            background: `
              linear-gradient(135deg, 
                hsl(220, 30%, 12%) 0%, 
                hsl(220, 25%, 18%) 40%,
                hsl(200, 20%, 22%) 70%,
                hsl(180, 15%, 15%) 100%
              )
            `
          }}
        />
        {/* Warm overlay to suggest family photo warmth */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 25% 60%, rgba(180, 120, 80, 0.15), transparent),
              radial-gradient(ellipse 60% 40% at 75% 40%, rgba(200, 160, 100, 0.08), transparent)
            `
          }}
        />
      </motion.div>

      {/* ── Film grain texture ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23grain)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
          mixBlendMode: "overlay",
        }}
      />

      {/* ── Vignette ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, transparent 20%, rgba(10,15,25,0.5) 100%)",
        }}
      />

      {/* ── Vertical editorial label (left edge) ── */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-5 lg:left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-4"
      >
        <div className="h-16 w-px bg-white/15" />
        <span
          className="text-[0.55rem] uppercase tracking-[0.35em] font-semibold text-white/25"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Mexicali — B.C.
        </span>
        <div className="h-16 w-px bg-white/15" />
      </motion.div>

      {/* ── Main content ── */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-20 py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">

          {/* LEFT: Headline (7 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <h1 className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5rem] font-bold tracking-[-0.02em] text-white leading-[1.08] [font-family:var(--font-playfair)]">
              Lo que más importa{" "}
              <br className="hidden sm:block" />
              merece{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200">
                  atención experta.
                </span>
                {/* Subtle underline accent */}
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-400/60 via-amber-300/40 to-transparent rounded-full" />
              </span>
            </h1>
          </motion.div>

          {/* RIGHT: Info panel with frosted glass (5 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-5 lg:justify-self-end w-full lg:max-w-md"
          >
            {/* Frosted glass card for contrast */}
            <div className="relative rounded-2xl overflow-hidden">
              {/* Glass background */}
              <div 
                className="absolute inset-0 -z-10"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(24px) saturate(180%)",
                  WebkitBackdropFilter: "blur(24px) saturate(180%)",
                }}
              />
              {/* Inner border glow */}
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-white/10" />
              
              <div className="p-6 sm:p-8">
                <p className="text-[0.9rem] sm:text-base font-normal leading-relaxed text-white/85 mb-8">
                  Seguros de vida, gastos médicos y servicios bancarios con
                  asesoría personalizada. Más de 15 años protegiendo familias
                  en Mexicali, Baja California.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <motion.a
                    href="/cotizar"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-slate-900 transition-all hover:bg-slate-100 shadow-lg shadow-black/10"
                  >
                    Solicitar Cotización
                    <ArrowRight className="h-4 w-4" strokeWidth={2} />
                  </motion.a>

                  <motion.a
                    href="tel:+526861234567"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white/10 px-5 text-sm font-semibold text-white ring-1 ring-inset ring-white/15 transition-all hover:bg-white/15"
                  >
                    <Phone className="h-4 w-4" strokeWidth={2} />
                    (686) 123-4567
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Stats row — prominent treatment ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="mt-16 lg:mt-20"
        >
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 lg:gap-16">
            {[
              { value: "500+", label: "Familias Protegidas" },
              { value: "15+", label: "Años de Experiencia" },
              { value: "24/7", label: "Soporte Disponible" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.7, 
                  ease: [0.16, 1, 0.3, 1], 
                  delay: 0.5 + i * 0.1 
                }}
                className="group"
              >
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white [font-family:var(--font-playfair)]">
                    {stat.value.replace("+", "")}
                  </span>
                  {stat.value.includes("+") && (
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-300/80">+</span>
                  )}
                </div>
                <div className="text-[0.65rem] sm:text-xs uppercase tracking-[0.2em] font-semibold text-white/40 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[0.55rem] uppercase tracking-[0.3em] font-semibold text-white/30">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-white/30" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  )
}
