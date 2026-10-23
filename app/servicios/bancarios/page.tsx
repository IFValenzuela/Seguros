import type { Metadata } from "next"
import { TrendingUp, PiggyBank, CreditCard } from "lucide-react"
import { ServicePage } from "@/components/service-page"

export const metadata: Metadata = {
  title: "Servicios Bancarios y Financieros en Mexicali",
  description: "Ahorro, inversión y crédito para hacer crecer tu patrimonio. Asesoría financiera personal en Mexicali, agentes autorizados Grupo Inbursa.",
}

export default function BancariosPage() {
  return (
    <ServicePage
      content={{
        name: "Servicios Bancarios y Financieros en Mexicali",
        title: "Haz crecer tu patrimonio con confianza",
        intro: "Ahorro, inversión y crédito con asesoría personal en Mexicali, para hacer crecer tu patrimonio con confianza.",
        heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000&auto=format&fit=crop",
        quoteHref: "/cotizar?tipo=bancarios",
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
        faqs: [
          { q: "¿Qué servicios financieros ofrecen en Mexicali?", a: "Te asesoramos en ahorro, inversión y crédito como agentes autorizados de Grupo Inbursa, según tus metas y tu perfil." },
          { q: "¿Cómo puedo empezar a ahorrar o invertir?", a: "Agenda una consulta gratuita. Revisamos tus objetivos y plazos para proponerte opciones adecuadas a tu situación." },
          { q: "¿La consulta tiene costo?", a: "No. La primera asesoría es gratuita y sin compromiso." },
        ],
        closing: {
          title: "¿Listo para hacer crecer tu dinero?",
          body: "Agenda una consulta gratuita con nuestros asesores financieros y descubre las mejores opciones para ti.",
        },
      }}
    />
  )
}
