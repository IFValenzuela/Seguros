"use client"

import Link from "next/link"
import { Star, ArrowUpRight, Quote } from "lucide-react"
import { motion } from "framer-motion"

const testimonios = [
  {
    name: "María González",
    role: "Empresaria",
    content:
      "Excelente servicio y atención personalizada. Me ayudaron a encontrar el seguro de gastos médicos perfecto para mi familia.",
    rating: 5,
    initials: "MG",
    featured: true,
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

export function TestimonialsPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white relative shadow-sm ring-1 ring-slate-900/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16"
        >
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-blue-900 uppercase tracking-wide mb-3">
              Testimonios
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              La confianza de{" "}
              <span className="text-blue-900">nuestros clientes</span>
            </h2>
          </div>
          <Link
            href="/testimonios"
            className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:gap-3 transition-all self-start lg:self-auto"
          >
            Ver todos los testimonios
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Featured testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-1"
          >
            <div className="h-full bg-slate-50 rounded-xl p-8 lg:p-10 ring-1 ring-slate-900/5 relative overflow-hidden">
              <Quote className="absolute top-6 right-6 w-16 h-16 text-blue-900/5" />

              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <blockquote className="text-xl lg:text-2xl font-medium text-slate-900 leading-relaxed mb-8">
                  &ldquo;{testimonios[0].content}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                  <div className="w-14 h-14 rounded-full bg-blue-900 flex items-center justify-center">
                    <span className="font-heading font-bold text-lg text-white">
                      {testimonios[0].initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-slate-900">
                      {testimonios[0].name}
                    </p>
                    <p className="text-sm text-slate-600">{testimonios[0].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Regular testimonials */}
          {testimonios.slice(1).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 1) * 0.15 }}
            >
              <div className="h-full bg-white rounded-xl p-6 shadow-sm ring-1 ring-slate-900/5">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <blockquote className="text-slate-900 leading-relaxed mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                    <span className="font-heading font-semibold text-sm text-slate-900">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-slate-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
