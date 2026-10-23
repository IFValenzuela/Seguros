import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { CTASection } from "@/components/cta-section"
import { Assurances } from "@/components/assurances"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

export const metadata: Metadata = {
  title: "Agentes de Seguros en Mexicali",
  description: "Más de 25 años protegiendo familias en Mexicali. Conoce a Asesores Valenzuela y Aguilar, agentes autorizados Grupo Inbursa.",
}

const values = [
  {
    title: "Compromiso",
    description: "Nos comprometemos con cada cliente como si fuera parte de nuestra familia.",
  },
  {
    title: "Excelencia",
    description: "Buscamos la excelencia en cada interacción y en cada póliza que entregamos.",
  },
  {
    title: "Cercanía",
    description: "Creemos en las relaciones personales y en conocer a cada uno de nuestros clientes.",
  },
  {
    title: "Responsabilidad",
    description: "Actuamos con integridad y transparencia en todo momento.",
  },
]


export default function NosotrosPage() {
  return (
    <div className="flex min-h-[100svh] flex-col overflow-x-clip bg-paper">
      <Header overlay />

      <main className="flex-1">
        <PageHero
          eyebrow="Nuestra historia"
          title="Más que asesores, somos tu familia"
          intro="Desde hace más de 25 años, en Asesores Valenzuela y Aguilar nos dedicamos a proteger lo que más importa: tu familia, tu salud y tu patrimonio."
          image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop"
        />

        {/* Story: centred title over a narrow reading column */}
        <section className="section bg-paper">
          <SectionHeading title="Una historia de confianza y compromiso" />
          <Reveal className="t-lead mx-auto max-w-[60ch] space-y-5 px-5 text-ink-soft">
            <p>
              Fundados en Mexicali, Baja California, comenzamos como una pequeña agencia de seguros con un
              gran sueño: hacer que la protección financiera fuera accesible para todas las familias.
            </p>
            <p>
              Con el tiempo, nos hemos convertido en uno de los asesores de seguros más reconocidos de la
              región, no por el tamaño de nuestra operación, sino por la calidad de nuestro servicio y el
              compromiso con cada cliente.
            </p>
            <p>
              Hoy, continuamos con la misma pasión del primer día: ayudar a las familias a proteger lo que
              más aman.
            </p>
          </Reveal>
        </section>

        {/* Values: an editorial list in the same reading column, name beside meaning */}
        <section className="section bg-mist">
          <SectionHeading title="Lo que nos define" />

          <dl className="mx-auto max-w-[46rem] border-b border-neutral-300 px-5">
            {values.map((value, i) => (
              <Reveal
                key={value.title}
                delay={i * 0.05}
                className="grid gap-2 border-t border-neutral-300 py-6 sm:grid-cols-[12rem_1fr] sm:gap-8"
              >
                <dt className="t-card">{value.title}</dt>
                <dd className="t-lead text-neutral-600">{value.description}</dd>
              </Reveal>
            ))}
          </dl>
        </section>

        <CTASection
          title="¿Listo para conocernos?"
          body="Agenda una cita con uno de nuestros asesores y descubre cómo podemos ayudarte a proteger lo que más importa."
        />
        <Assurances />
      </main>

      <Footer />
    </div>
  )
}
