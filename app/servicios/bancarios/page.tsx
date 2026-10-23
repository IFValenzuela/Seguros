import type { Metadata } from "next"
import { TrendingUp, PiggyBank, CreditCard } from "lucide-react"
import { ServicePage } from "@/components/service-page"

export const metadata: Metadata = {
  title: "Servicios Bancarios",
  description: "Ahorro, inversión y crédito para hacer crecer tu patrimonio. Asesoría financiera personal en Mexicali, agentes autorizados Grupo Inbursa.",
}

export default function BancariosPage() {
  return (
    <ServicePage
      content={{
        name: "Servicios Bancarios",
        title: "Haz crecer tu patrimonio con confianza",
        intro: "Soluciones financieras integrales para cada etapa de tu vida. Ahorro, inversión y crédito con el respaldo de la mejor institución.",
        heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000&auto=format&fit=crop",
        quoteHref: "/cotizar",
        ctaLabel: "Solicitar asesoría",
        benefitsTitle: "Tu dinero trabajando para ti",
        benefits: [
          { icon: TrendingUp, title: "Inversiones Inteligentes", description: "Haz crecer tu dinero con opciones de inversión seguras y rentables." },
          { icon: PiggyBank, title: "Ahorro Programado", description: "Planes de ahorro diseñados para alcanzar tus metas financieras." },
          { icon: CreditCard, title: "Créditos Accesibles", description: "Financiamiento con las mejores tasas y condiciones del mercado." },
        ],
        coveragesTitle: "Soluciones financieras a tu medida",
        coverages: [
          "Cuentas de ahorro e inversión",
          "Créditos personales y empresariales",
          "Tarjetas de crédito",
          "Fondos de inversión",
          "Planes de retiro",
          "Asesoría financiera personalizada",
        ],
        coverageImage: {
          src: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000&auto=format&fit=crop",
          alt: "Planeación financiera",
        },
        closing: {
          title: "¿Listo para hacer crecer tu dinero?",
          body: "Agenda una consulta gratuita con nuestros asesores financieros y descubre las mejores opciones para ti.",
        },
      }}
    />
  )
}
