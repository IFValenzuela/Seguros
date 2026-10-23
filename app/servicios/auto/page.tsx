import type { Metadata } from "next"
import { Shield, Wrench, MapPin } from "lucide-react"
import { ServicePage } from "@/components/service-page"

export const metadata: Metadata = {
  title: "Seguro de Auto",
  description: "Seguro de auto con asistencia vial 24/7, cobertura nacional y extensión a Estados Unidos. Asesoría personal en Mexicali.",
}

export default function AutoPage() {
  return (
    <ServicePage
      content={{
        name: "Seguro de Auto",
        title: "Maneja con total tranquilidad",
        intro: "Protege tu vehículo y a quienes viajan contigo. Un seguro de auto que te respalda en todo momento, desde pequeños percances hasta siniestros mayores.",
        heroImage: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2000&auto=format&fit=crop",
        quoteHref: "/cotizar?tipo=auto",
        benefitsTitle: "Protección vehicular sin límites",
        benefits: [
          { icon: Shield, title: "Cobertura Amplia", description: "Protección completa contra daños materiales, robo total y responsabilidad civil." },
          { icon: Wrench, title: "Asistencia Vial 24/7", description: "Grúa, paso de corriente, cambio de llanta y auxilio mecánico en cualquier momento." },
          { icon: MapPin, title: "Cobertura Nacional", description: "Tu seguro te protege en todo México, sin importar a dónde viajes." },
        ],
        coveragesTitle: "Todo lo que necesitas en un solo seguro",
        coverages: [
          "Daños materiales por colisión",
          "Robo total del vehículo",
          "Responsabilidad civil",
          "Gastos médicos a ocupantes",
          "Asistencia legal",
          "Extensión de cobertura en USA",
          "Daños por fenómenos naturales",
        ],
        coverageImage: {
          src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop",
          alt: "Auto deportivo en carretera",
        },
        closing: {
          title: "¿Listo para proteger tu vehículo?",
          body: "Obtén una cotización en minutos. Nuestros asesores te ayudarán a encontrar la mejor cobertura al mejor precio.",
        },
      }}
    />
  )
}
