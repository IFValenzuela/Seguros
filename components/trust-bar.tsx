"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, Users, Award, Clock } from "lucide-react"

const features = [
  {
    icon: Shield,
    label: "Protección Integral",
  },
  {
    icon: Users,
    label: "Asesoría Personalizada",
  },
  {
    icon: Award,
    label: "Agentes Certificados",
  },
  {
    icon: Clock,
    label: "Soporte 24/7",
  },
]

export function TrustBar() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-50px" })

  return (
    <section className="py-20 bg-white border-y border-stone-100" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-stone-600" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium text-stone-600">
                {feature.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
