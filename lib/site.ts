// Single source for brand contact data and navigation. Every page reads from here.

export const PHONE_PRIMARY = { display: "(686) 262-2535", href: "tel:+526862622535" }
export const PHONE_SECONDARY = { display: "(686) 569-9613", href: "tel:+526865699613" }
export const EMAIL = "contacto@valenzuelayaguilar.com"

export function whatsappUrl(message = "Hola, me gustaría obtener información sobre sus servicios de seguros.") {
  return `https://wa.me/526862622535?text=${encodeURIComponent(message)}`
}

export const serviceLinks = [
  { label: "Vida", long: "Seguro de Vida", href: "/servicios/vida" },
  { label: "Gastos Médicos", long: "Gastos Médicos", href: "/servicios/gastos-medicos" },
  { label: "Auto", long: "Seguro de Auto", href: "/servicios/auto" },
  { label: "Bancarios", long: "Servicios Bancarios", href: "/servicios/bancarios" },
]

export const companyLinks = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
  { label: "Cotizar", href: "/cotizar" },
]

export const navLinks = [
  ...serviceLinks.map(({ label, href }) => ({ label, href })),
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
]
