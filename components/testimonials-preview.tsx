"use client"

import Link from "next/link"
import { Star, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const testimonios = [
  {
    name: "María González",
    role: "Empresaria",
    content:
      "Excelente servicio y atención personalizada. Me ayudaron a encontrar el seguro de gastos médicos perfecto para mi familia.",
    rating: 5,
    initials: "MG",
  },
  {
    name: "Carlos Mendoza",
    role: "Contador Público",
    content:
      "Gracias a su asesoría pude proteger mi patrimonio. Muy profesionales y siempre disponibles.",
    rating: 5,
    initials: "CM",
  },
  {
    name: "Ana Rodríguez",
    role: "Madre de Familia",
    content:
      "Cuando tuve un percance con mi auto, el respaldo fue inmediato. Atención excepcional.",
    rating: 5,
    initials: "AR",
  },
]

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
}

export function TestimonialsPreview() {
  return (
    <section className="py-24 border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header row */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0}
          variants={fade}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-[11px] uppercase tracking-widest font-semibold text-slate-400 mb-4">
              Testimonios
            </p>
            <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 leading-[1.1]">
              La confianza de<br />nuestros clientes.
            </h2>
          </div>
          <Link
            href="/testimonios"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors self-start"
          >
            Ver todos los testimonios
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Featured — dark card, spans 2 cols */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            variants={fade}
            className="md:col-span-2"
          >
            <div className="h-full bg-slate-900 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-xl lg:text-2xl font-medium text-white leading-relaxed">
                  &ldquo;{testimonios[0].content}&rdquo;
                </blockquote>
              </div>
              <div className="flex items-center gap-3 pt-8 mt-8 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="font-semibold text-sm text-white">{testimonios[0].initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-white">{testimonios[0].name}</p>
                  <p className="text-xs text-white/40">{testimonios[0].role}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary cards stacked */}
          <div className="flex flex-col gap-4">
            {testimonios.slice(1).map((t, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i + 2}
                variants={fade}
                className="flex-1"
              >
                <div className="h-full bg-white/60 hover:bg-white rounded-2xl p-6 border border-black/[0.06] transition-colors">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="text-sm text-slate-700 leading-relaxed mb-5">
                    &ldquo;{t.content}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-2.5 pt-4 border-t border-black/5">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                      <span className="text-[11px] font-semibold text-slate-700">{t.initials}</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">{t.name}</p>
                      <p className="text-[10px] text-slate-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
