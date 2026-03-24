"use client"

import Link from "next/link"
import { Heart, Stethoscope, Car, Landmark, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const lifestylePhoto = "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=90"

const services = [
  {
    id: "vida",
    title: "Seguro de Vida",
    description: "Coberturas que garantizan el bienestar financiero de tu familia.",
    icon: Heart,
    href: "/servicios/vida",
    features: ["Fallecimiento", "Beneficios en vida"],
  },
  {
    id: "gastos",
    title: "Gastos Médicos",
    description: "Acceso a la mejor atención médica para ti y los tuyos.",
    icon: Stethoscope,
    href: "/servicios/gastos-medicos",
    features: ["Hospitalización", "Consultas"],
  },
  {
    id: "auto",
    title: "Seguro de Auto",
    description: "Respaldo completo para tu vehículo ante cualquier imprevisto.",
    icon: Car,
    href: "/servicios/auto",
    features: ["Resp. civil", "Robo total"],
  },
  {
    id: "bancarios",
    title: "Servicios Bancarios",
    description: "Soluciones para hacer crecer y proteger tu patrimonio.",
    icon: Landmark,
    href: "/servicios/bancarios",
    features: ["Ahorro", "Inversiones"],
  },
]

const fade = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
}

export function ServicesPreview() {
  return (
    <section className="pb-28 pt-4">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── LEFT: headline + cards ── */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              custom={0}
              variants={fade}
              className="mb-12"
            >
              <p className="text-[11px] uppercase tracking-widest font-semibold text-slate-400 mb-5">
                Nuestros Servicios
              </p>
              <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 leading-[1.1] mb-5">
                Protección que se<br />siente personal.
              </h2>
              <p className="text-base text-slate-500 leading-relaxed max-w-md">
                Cada familia es única. Creamos soluciones a la medida que protegen
                lo que más amas, con el respaldo de más de 15 años de experiencia.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-3">
              {services.map((service, i) => (
                <motion.div
                  key={service.id}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  custom={i + 1}
                  variants={fade}
                >
                  <Link
                    href={service.href}
                    className="group block h-full p-5 bg-white/50 hover:bg-white rounded-2xl border border-black/[0.06] hover:border-black/10 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center">
                        <service.icon className="w-4 h-4 text-slate-700" strokeWidth={1.5} />
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-600 transition-colors" strokeWidth={2} />
                    </div>
                    <h3 className="text-sm font-semibold tracking-tight text-slate-900 mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.features.map((f) => (
                        <span
                          key={f}
                          className="text-[10px] uppercase tracking-wide text-slate-400 bg-slate-50 border border-black/5 px-2 py-0.5 rounded-md"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={5}
              variants={fade}
              className="mt-8"
            >
              <Link
                href="/servicios"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-600 transition-colors"
              >
                Ver todos los servicios
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>

          {/* ── RIGHT: photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:sticky lg:top-8"
          >
            <img
              src={lifestylePhoto}
              alt="Hogar familiar cálido"
              className="rounded-[1.75rem] h-[580px] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-black/5" />

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="absolute bottom-6 left-6 right-6"
            >
              <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 border border-black/5 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Agentes Certificados</p>
                    <p className="text-xs text-slate-400">Grupo Financiero Inbursa</p>
                  </div>
                  <div className="flex items-center gap-5 text-center">
                    <div>
                      <p className="text-xl font-semibold text-slate-900">500+</p>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400">Familias</p>
                    </div>
                    <div className="h-7 w-px bg-black/10" />
                    <div>
                      <p className="text-xl font-semibold text-slate-900">15+</p>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400">Años</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
