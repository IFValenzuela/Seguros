import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Solicitar cotización",
  description: "Cotización gratuita y sin compromiso de seguro de vida, gastos médicos, auto, hogar o empresarial. Respuesta en menos de 24 horas.",
}

export default function CotizarLayout({ children }: { children: React.ReactNode }) {
  return children
}
