"use client"

import Image from "next/image"

interface VALogoProps {
  className?: string
  size?: number
}

/* ─────────────────────────────────────────────────────────────
   VA LOGO — Using actual brand image
   ───────────────────────────────────────────────────────────── */
export function VALogo({ className = "", size = 44 }: VALogoProps) {
  return (
    <Image
      src="/logo-va.png"
      alt="Valenzuela y Aguilar"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      priority
    />
  )
}

/* ─────────────────────────────────────────────────────────────
   FULL LOGO WITH TEXT — For footer and larger displays
   ───────────────────────────────────────────────────────────── */
export function VALogoFull({ className = "", width = 120 }: { className?: string; width?: number }) {
  return (
    <Image
      src="/logo-va.png"
      alt="Valenzuela y Aguilar - Agentes de Seguros"
      width={width}
      height={width * 1.2}
      className={`object-contain ${className}`}
      priority
    />
  )
}
