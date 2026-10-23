"use client"

import { motion } from "framer-motion"

const EASE = [0.22, 1, 0.36, 1] as const

/* Heading that rises from behind a mask on first scroll into view, the same motion the
   home hero gives "Lo que más importa es tu". The trigger sits on the mask, since the
   text starts clipped out of it. Reduced motion is honoured by MotionProvider. */
export function MaskReveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.span
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.4 }}
      className="block overflow-hidden pb-[0.12em]"
    >
      <motion.span
        variants={{ hidden: { y: "106%" }, shown: { y: "0%" } }}
        transition={{ duration: 1.1, delay, ease: EASE }}
        className={`block ${className ?? ""}`}
      >
        {children}
      </motion.span>
    </motion.span>
  )
}
