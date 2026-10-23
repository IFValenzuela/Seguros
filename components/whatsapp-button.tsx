"use client"

import { motion } from "framer-motion"
import { whatsappUrl } from "@/lib/site"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

/* Floating slate tab, after Banham's "Book a Free Survey" button. Icon-only on phones. */
export function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      whileTap={{ scale: 0.97 }}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1], delay: 1 }}
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex h-13 min-w-13 items-center justify-center gap-3 rounded-[4px] border border-white/15 bg-slate px-4 text-white transition-colors duration-200 hover:bg-slate-deep md:bottom-6 md:right-6 md:px-5"
    >
      <span aria-hidden="true" className="hidden text-base md:inline">
        ¿Dudas? Escríbenos
      </span>
      <WhatsAppIcon className="h-5 w-5" />
    </motion.a>
  )
}
