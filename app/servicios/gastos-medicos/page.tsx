import type { Metadata } from "next"
import { Hospital, Stethoscope, Heart } from "lucide-react"
import { ServicePage } from "@/components/service-page"

export const metadata: Metadata = {
  title: "Seguro de Gastos Médicos en Mexicali",
  description: "Seguro de gastos médicos con acceso a la mejor atención médica. Asesoría personal en Mexicali, agentes autorizados Grupo Inbursa.",
}

export default function GastosMedicosPage() {
  return (
    <ServicePage
      content={{
        name: "Seguro de Gastos Médicos en Mexicali",
        title: "Tu salud es tu mayor inversión",
        intro: "Tu salud y la de tu familia protegidas. Un seguro de gastos médicos en Mexicali que te da acceso a buena atención sin poner en riesgo tu patrimonio.",
        heroImage: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2000&auto=format&fit=crop",
        quoteHref: "/cotizar?tipo=gastos-medicos",
        benefitsTitle: "La mejor atención médica a tu alcance",
        benefits: [
          { icon: Hospital, title: "Red Hospitalaria", description: "Acceso a los mejores hospitales y clínicas del país con atención de primera clase." },
          { icon: Stethoscope, title: "Médicos Especialistas", description: "Consultas con los mejores especialistas sin largas esperas ni trámites complicados." },
          { icon: Heart, title: "Cobertura Integral", description: "Cobertura total para accidentes y enfermedades, con acceso a hospitales de alta calidad cuando más lo necesitas." },
        ],
        coveragesTitle: "Cobertura médica completa",
        coverages: [
          "Hospitalización y cirugías",
          "Consultas médicas y especialistas",
          "Estudios de laboratorio y gabinete",
          "Medicamentos durante hospitalización",
          "Maternidad y atención al recién nacido",
          "Urgencias médicas 24/7",
          "Tratamientos ambulatorios",
          "Rehabilitación física",
        ],
        coverageImage: {
          src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop",
          alt: "Médico atendiendo a un paciente",
        },
        faqs: [
          { q: "¿Qué es un seguro de gastos médicos mayores?", a: "Es un seguro que cubre hospitalización, cirugías, honorarios médicos y tratamientos por accidentes y enfermedades, protegiendo tus ahorros de gastos inesperados." },
          { q: "¿Qué es el deducible y el coaseguro?", a: "El deducible es lo que pagas antes de que el seguro comience a cubrir; el coaseguro es el porcentaje que compartes después. Te explicamos cómo funcionan en cada plan para que compares con claridad." },
          { q: "¿Puedo asegurar a toda mi familia?", a: "Sí, puedes incluir a tu pareja e hijos en una misma póliza. Consúltanos las opciones y condiciones vigentes." },
          { q: "¿Cómo contrato un seguro de gastos médicos en Mexicali?", a: "Solicita tu cotización en línea, por WhatsApp o por teléfono. Un asesor te contacta para encontrar el plan adecuado." },
        ],
        closing: {
          title: "No esperes a necesitarlo",
          body: "Protege tu salud hoy. Solicita una cotización gratuita y descubre el plan que mejor se adapta a tus necesidades.",
        },
      }}
    />
  )
}
