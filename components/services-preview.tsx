import Link from "next/link"
import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { PhotoReveal } from "@/components/photo-reveal"
import { SectionHeading } from "@/components/section-heading"

/* Every service gets the same card: a tall portrait photo (slight zoom on hover),
   centred title, one line of copy, one link. Four across, as Banham's "At Your Service". */
const services = [
  {
    title: "Seguro de Vida",
    description: "Protege el futuro financiero de tu familia con coberturas diseñadas para cada etapa de la vida.",
    href: "/servicios/vida",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Gastos Médicos",
    description: "Acceso a la mejor atención médica con la tranquilidad de estar protegido.",
    href: "/servicios/gastos-medicos",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Seguro de Auto",
    description: "Respaldo completo para tu vehículo, en México y con extensión a Estados Unidos.",
    href: "/servicios/auto",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Servicios Bancarios",
    description: "Ahorro, inversión y crédito para hacer crecer tu patrimonio, con la misma asesoría personal.",
    href: "/servicios/bancarios",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
  },
]

export function ServicesGrid() {
  return (
    <section id="servicios" className="section bg-mist">
      <SectionHeading title="Nuestros servicios" />

      <ul className="container-site grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <li key={service.href}>
            <Reveal delay={i * 0.06} className="h-full">
              <Link href={service.href} className="group flex h-full flex-col items-center text-center">
                <PhotoReveal delay={i * 0.08} className="aspect-[4/5] w-full sm:aspect-[2/3]">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 310px, (min-width: 640px) 50vw, 100vw"
                    className="photo-tone photo-zoom"
                  />
                </PhotoReveal>
                <h3 className="t-card mt-5">{service.title}</h3>
                <p className="t-small mt-2 max-w-[34ch] text-neutral-600">{service.description}</p>
                {/* mt-auto pins every link to the same baseline across the row */}
                <span className="link-under mt-auto pt-4 text-ink">Descubrir</span>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
