"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const services = [
  {
    id: "vida",
    title: "Seguro de Vida",
    description: "Protege el futuro financiero de tu familia con coberturas diseñadas para cada etapa de la vida.",
    href: "/servicios/vida",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "gastos",
    title: "Gastos Médicos",
    description: "Acceso a la mejor atención médica con la tranquilidad de estar protegido.",
    href: "/servicios/gastos-medicos",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "auto",
    title: "Seguro de Auto",
    description: "Respaldo completo para tu vehículo con la cobertura perfecta.",
    href: "/servicios/auto",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "bancarios",
    title: "Servicios Financieros",
    description: "Soluciones integrales para hacer crecer tu patrimonio.",
    href: "/servicios/bancarios",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
  },
]

export function ServicesPreview() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section className="py-28 bg-stone-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-[11px] tracking-[0.2em] uppercase text-stone-400 font-medium mb-4 block">
              Nuestros servicios
            </span>
            <h2
              className="text-3xl md:text-4xl text-stone-900 tracking-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Protección que se siente personal
            </h2>
          </div>
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors"
          >
            Ver todos los servicios
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </Link>
        </motion.div>

        {/* Featured Service - Large */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <Link href={services[0].href} className="group block">
            <div className="grid md:grid-cols-2 gap-6 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-500">
              {/* Image */}
              <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                <motion.img
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  src={services[0].image}
                  alt={services[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Content */}
              <div className="flex flex-col justify-center p-8 md:p-12">
                <span className="text-[11px] tracking-[0.15em] uppercase text-stone-400 font-medium mb-4">
                  Destacado
                </span>
                <h3
                  className="text-2xl md:text-3xl text-stone-900 mb-4 tracking-tight"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {services[0].title}
                </h3>
                <p className="text-stone-500 leading-relaxed mb-8">
                  {services[0].description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 group-hover:gap-3 transition-all duration-300">
                  Conocer más
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Other Services - Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.slice(1).map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3 + i * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <Link href={service.href} className="group block h-full">
                <div className="h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-500">
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <motion.img
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 1.2,
                        delay: 0.2 + i * 0.15,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h3
                      className="text-lg text-stone-900 mb-2 tracking-tight"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm text-stone-500 mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-400 group-hover:text-stone-900 group-hover:gap-2.5 transition-all duration-300">
                      Ver más
                      <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
