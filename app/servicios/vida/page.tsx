import type { Metadata } from "next"
import { Shield, Users, Clock } from "lucide-react"
import { ServicePage } from "@/components/service-page"

export const metadata: Metadata = {
  title: "Seguro de Vida en Mexicali",
  description: "Protege el futuro de quienes más amas. Seguros de vida con asesoría personal en Mexicali, agentes autorizados Grupo Inbursa.",
}

export default function VidaPage() {
  return (
    <ServicePage
      content={{
        name: "Seguro de Vida en Mexicali",
        title: "Protege el futuro de quienes más amas",
        intro: "Un seguro de vida en Mexicali es el regalo más valioso que puedes dejar a tu familia. Garantiza su tranquilidad financiera sin importar lo que pase.",
        heroImage: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2000&auto=format&fit=crop",
        quoteHref: "/cotizar?tipo=vida",
        benefitsTitle: "¿Por qué elegir un Seguro de Vida?",
        benefits: [
          { icon: Shield, title: "Protección Familiar", description: "Asegura el bienestar económico de tu familia ante cualquier eventualidad." },
          { icon: Users, title: "Beneficiarios Múltiples", description: "Designa a las personas que más importan como beneficiarios de tu póliza." },
          { icon: Clock, title: "Cobertura de por Vida", description: "Planes que te acompañan durante todas las etapas de tu vida." },
        ],
        coveragesTitle: "Protección completa para ti y tu familia",
        coverages: [
          "Fallecimiento por cualquier causa",
          "Muerte accidental con doble indemnización",
          "Invalidez total y permanente",
          "Enfermedades graves",
          "Gastos funerarios",
          "Anticipo por enfermedad terminal",
        ],
        coverageImage: {
          src: "https://images.unsplash.com/photo-1516733968668-dbdce39c4651?q=80&w=1000&auto=format&fit=crop",
          alt: "Familia reunida en casa",
        },
        faqs: [
          { q: "¿Para qué sirve un seguro de vida?", a: "Para que tu familia mantenga su estabilidad económica si tú faltas: cubre gastos del hogar, deudas, educación de tus hijos y gastos funerarios, según el plan." },
          { q: "¿Cuánto debo asegurar?", a: "Depende de tus ingresos, deudas y dependientes económicos. Un asesor puede ayudarte a calcular una suma asegurada adecuada, sin compromiso." },
          { q: "¿Quién puede ser beneficiario?", a: "Tú decides: cónyuge, hijos, padres u otras personas. Puedes repartir el porcentaje entre varios beneficiarios y cambiarlo cuando lo necesites." },
          { q: "¿Qué seguros de vida ofrecen en Mexicali?", a: "Somos agentes autorizados de Grupo Inbursa y te asesoramos de forma personal para elegir el plan que mejor se ajusta a tu situación." },
        ],
        closing: {
          title: "¿Listo para proteger a tu familia?",
          body: "Solicita una cotización gratuita y sin compromiso. Nuestros asesores te ayudarán a encontrar el plan adecuado para ti.",
        },
      }}
    />
  )
}
