import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cotizar Seguro en Mexicali",
  description: "Cotización gratuita y sin compromiso de seguro de vida, gastos médicos, auto o servicios bancarios. Respuesta en menos de 24 horas.",
}

export default function CotizarLayout({ children }: { children: React.ReactNode }) {
  return children
}
