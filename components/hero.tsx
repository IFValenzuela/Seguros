"use client"

import Image from "next/image"
import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { QuoteStarter } from "@/components/quote-starter"

const WORDS = ["Familia", "Futuro", "Salud", "Hogar", "Legado"]
const EASE = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    if (reduceMotion) return
    const id = setInterval(() => setWordIndex((i) => (i + 1) % WORDS.length), 3400)
    return () => clearInterval(id)
  }, [reduceMotion])

  /* The curtain pins by its bottom edge when the hero outgrows the screen, so it needs its height. */
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const ro = new ResizeObserver(() => el.style.setProperty("--curtain-h", `${el.offsetHeight}px`))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="curtain isolate flex min-h-[100svh] w-full items-end justify-center overflow-hidden bg-ink"
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.4, ease: EASE }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="100vw"
          className="photo-tone object-cover"
          // 46% lands the high five (47.5% across the photo) on the centre line of portrait phones.
          style={{ objectPosition: "46% 40%" }}
        />
      </motion.div>

      {/* One flat black tint for legibility. No gradients. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/50" />

      <div className="flex w-full flex-col items-center px-4 pb-24 pt-28 text-center md:pb-14 md:pt-32"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
          className="kicker mb-8 text-white/80"
        >
          Agentes de Seguros en Mexicali
        </motion.p>

        <h1 className="text-white">
          <span className="block overflow-hidden py-1">
            <motion.span
              initial={{ y: "106%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
              className="block text-[clamp(1.35rem,1.8vw+0.7rem,2.75rem)] font-medium uppercase leading-[1.2] tracking-[0.06em] text-white"
            >
              Lo que más importa es tu
            </motion.span>
          </span>
          <span className="sr-only"> familia, tu futuro, tu salud, tu hogar y tu legado. Seguros de vida, gastos médicos y auto en Mexicali</span>

          <span aria-hidden="true" className="mt-1 block h-[clamp(3.6rem,6.8vw,7.4rem)]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={WORDS[wordIndex]}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="block whitespace-nowrap pb-2 text-[clamp(3rem,6vw,6.5rem)] italic leading-[1.1] text-gold"
              >
                {WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95, ease: EASE }}
          className="mt-8 flex w-full justify-center md:mt-10"
        >
          <QuoteStarter />
        </motion.div>
      </div>
    </section>
  )
}
