"use client"

import { motion } from "framer-motion"
import { Shield, TrendingUp, Building2, Award } from "lucide-react"

const partners = [
  { name: "Grupo Financiero Inbursa", icon: Building2 },
  { name: "Seguros Inbursa", icon: Shield },
  { name: "Banco Inbursa", icon: TrendingUp },
  { name: "Certificación", icon: Award },
]

export function TrustBar() {
  return (
    <section className="relative bg-white shadow-sm ring-1 ring-slate-900/5">
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Respaldados por
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 flex-1">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 cursor-default"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center">
                  <partner.icon className="w-4 h-4 text-slate-500" />
                </div>
                <span className="font-heading font-semibold text-sm text-slate-600 whitespace-nowrap">
                  {partner.name.split(" ").slice(-1)[0]}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex-shrink-0"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 ring-1 ring-green-500/20">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold text-green-700">Agentes Certificados</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
