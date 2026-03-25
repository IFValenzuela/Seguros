"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"

const TOBACCO   = "#160C04"
const CHAMPAGNE = "#EBD9B4"
const GOLD      = "#C9A86C"

const WORDS = ["Familia", "Futuro", "Salud", "Hogar", "Legado"]

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setWordIndex(i => (i + 1) % WORDS.length), 3400)
    return () => clearInterval(id)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  /* 3D parallax depth: photo slowest → headline → word fastest */
  const photoY    = useTransform(scrollYProgress, [0, 1], ["0%",  "25%"])
  const headlineY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"])
  const wordY     = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"])
  const lowerY    = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])
  const fadeOut   = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
      style={{ background: TOBACCO }}
    >

      {/* ── LAYER 0 — Full-bleed photo, oversized for parallax travel ── */}
      <motion.div
        style={{ y: photoY, height: "130%", top: "-15%" }}
        className="absolute left-0 right-0"
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop"
          alt="Asesor con familia"
          className="w-full h-full object-cover object-center"
          /* Moody but visible — faces emerge through spotlight below */
          style={{ filter: "contrast(1.02) saturate(0.85) brightness(0.82)" }}
        />
      </motion.div>

      {/* ── LAYER 1 — Deep tobacco tint ── */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(18,9,2,0.28)", zIndex: 1 }}
      />

      {/* ── LAYER 2 — Warm face spotlight: lifts just the subjects ── */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
          background: `radial-gradient(
            ellipse 50% 55% at 57% 43%,
            rgba(201,168,108,0.22)  0%,
            rgba(201,168,108,0.10) 25%,
            transparent            40%,
            rgba(10,5,1,0.12)     65%,
            rgba(5,2,0,0.35)     100%
          )`,
        }}
      />

      {/* ── LAYER 3 — Top / bottom tobacco burn ── */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
          background: `linear-gradient(
            to bottom,
            rgba(14,7,1,0.35)   0%,
            transparent         15%,
            transparent         68%,
            rgba(10,5,0,0.55)  100%
          )`,
        }}
      />

      {/* ── LAYER 4 — All content, fades out on scroll ── */}
      <motion.div
        style={{ opacity: fadeOut }}
        className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6"
      >

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex items-center gap-4 mb-9"
        >
          <span className="w-6 h-px" style={{ background: `${GOLD}45` }} />
          <span
            className="text-[10px] uppercase tracking-[0.4em] font-semibold"
            style={{
              color: CHAMPAGNE,
              textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
            }}
          >
            Agentes de Seguros · Mexicali, B.C.
          </span>
          <span className="w-6 h-px" style={{ background: `${GOLD}45` }} />
        </motion.div>

        {/* Headline — clip-reveal from below, then parallaxes up */}
        <motion.div style={{ y: headlineY }} className="mb-2">
          <div className="overflow-hidden px-1 py-2">
            <motion.h1
              initial={{ y: "106%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-center uppercase"
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 4.4vw, 4.6rem)",
                lineHeight: 1.06,
                letterSpacing: "0.14em",
                color: CHAMPAGNE,
              }}
            >
              {"Lo que más importa es tu".split("").map((char, i) => (
                <span
                  key={i}
                  style={{
                    textShadow: "1px 2px 4px rgba(0,0,0,0.7), 0 0 20px rgba(0,0,0,0.4)",
                    display: "inline-block",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </motion.h1>
          </div>
        </motion.div>

        {/* Dynamic italic word — separate parallax layer, deepest depth */}
        <motion.div
          style={{ y: wordY }}
          className="flex items-center justify-center mb-10"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={WORDS[wordIndex]}
              initial={{ opacity: 0, filter: "blur(10px)", y: 8 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(10px)", y: -8 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="italic text-center block"
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                fontSize: "clamp(3rem, 8.5vw, 8.8rem)",
                lineHeight: 1.0,
                letterSpacing: "0.02em",
                color: GOLD,
              }}
            >
              {WORDS[wordIndex].split("").map((char, i) => (
                <span
                  key={i}
                  style={{
                    textShadow: "2px 3px 6px rgba(0,0,0,0.7), 0 0 25px rgba(0,0,0,0.4)",
                    display: "inline-block",
                  }}
                >
                  {char}
                </span>
              ))}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Gold rule + CTA — share a lower parallax layer */}
        <motion.div
          style={{ y: lowerY }}
          className="flex flex-col items-center gap-0"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: 36,
              height: 1,
              background: `${GOLD}65`,
              transformOrigin: "center",
              marginBottom: "2rem",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <a
              href="/cotizar"
              className="group inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-400"
              style={{
                padding: "1rem 2.4rem",
                color: TOBACCO,
                border: `2px solid rgba(0,0,0,0.6)`,
                borderRadius: "9999px",
                background: `#d8d7d5`,
                boxShadow: "0 4px 15px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = CHAMPAGNE
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.4), 0 3px 6px rgba(0,0,0,0.25)"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = `#d8d7d5`
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)"
              }}
            >
              Solicitar Cotización
            </a>
          </motion.div>
        </motion.div>

      </motion.div>

      {/* ── Scroll cue ── */}
      <motion.div
        style={{
          opacity: fadeOut,
          position: "absolute",
          left: "50%",
          bottom: "2rem",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.9 }}
          className="flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: 1,
              height: 28,
              background: `linear-gradient(to bottom, ${GOLD}50, transparent)`,
            }}
          />
          <span
            className="text-[8px] uppercase tracking-[0.3em]"
            style={{ color: `${CHAMPAGNE}28` }}
          >
            Scroll
          </span>
        </motion.div>
      </motion.div>

    </section>
  )
}
