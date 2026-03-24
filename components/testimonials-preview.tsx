"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const testimonios = [
  {
    name: "María González",
    role: "Empresaria",
    content: "Excelente servicio y atención personalizada. Me ayudaron a encontrar el seguro perfecto para mi familia.",
  },
  {
    name: "Carlos Mendoza",
    role: "Contador Público",
    content: "Gracias a su asesoría pude proteger mi patrimonio. Muy profesionales y siempre disponibles.",
  },
  {
    name: "Ana Rodríguez",
    role: "Madre de Familia",
    content: "Cuando tuve un percance, el respaldo fue inmediato. Atención excepcional en todo momento.",
  },
]

export function TestimonialsPreview() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-stone-100" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <span className="text-[11px] tracking-[0.2em] uppercase text-stone-400 font-medium mb-3 block">
              Testimonios
            </span>
            <h2
              className="text-3xl md:text-4xl text-stone-900 tracking-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Lo que dicen nuestros clientes
            </h2>
          </div>
          <Link
            href="/testimonios"
            className="hidden md:inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors"
          >
            Ver todos
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </Link>
        </motion.div>

        {/* Testimonials Grid - Sharp edge cards with initials */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonios.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group"
            >
              <div className="bg-white h-full flex flex-col p-8 transition-all duration-300 hover:shadow-xl hover:shadow-stone-900/5">
                {/* Large initial */}
                <div className="mb-8">
                  <span
                    className="text-6xl text-stone-200 group-hover:text-stone-300 transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {t.name.charAt(0)}
                  </span>
                </div>

                {/* Quote */}
                <p
                  className="text-stone-600 leading-relaxed mb-8 flex-1"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  "{t.content}"
                </p>

                {/* Author */}
                <div className="pt-6 border-t border-stone-100">
                  <p className="text-sm font-medium text-stone-900">{t.name}</p>
                  <p className="text-xs text-stone-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
