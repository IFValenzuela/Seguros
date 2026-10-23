"use client"

import { motion } from "framer-motion"

const EASE = [0.22, 1, 0.36, 1] as const

/* Framed photo that fades in on first scroll into view while the image settles from a
   slight zoom. No wipe or hard edge: the photo just eases into place.
   `className` sizes the frame; children fill it. Reduced motion is honoured by MotionProvider. */
export function PhotoReveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.25 }}
      className={`relative overflow-hidden ${className ?? ""}`}
    >
      <motion.div
        variants={{ hidden: { opacity: 0, scale: 1.06 }, shown: { opacity: 1, scale: 1 } }}
        transition={{
          opacity: { duration: 1.2, delay, ease: "easeOut" },
          scale: { duration: 2, delay, ease: EASE },
        }}
        className="absolute inset-0"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
