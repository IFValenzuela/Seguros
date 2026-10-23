import Link from "next/link"
import { Reveal } from "@/components/reveal"

const assurances = [
  {
    title: "Más de 25 años",
    body: "Asesorando a familias de Mexicali, Baja California.",
    link: { label: "Nuestra historia", href: "/nosotros" },
  },
  {
    title: "Soporte 24/7",
    body: "Para nuestros asegurados, cuando más lo necesitan.",
    link: { label: "Contáctanos", href: "/contacto" },
  },
  {
    title: "Respuesta en menos de 24 h",
    body: "A cada solicitud de cotización, sin compromiso.",
    link: { label: "Cotizar ahora", href: "/cotizar" },
  },
]

/* Three quiet promises above the footer, centred, as Banham closes its pages. */
export function Assurances() {
  return (
    <section className="section bg-paper">
      <div className="container-site grid gap-12 sm:grid-cols-3 sm:gap-10">
        {assurances.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06} className="flex h-full flex-col items-center text-center">
            <h3 className="t-card">{item.title}</h3>
            <p className="t-small mt-2 max-w-[30ch] text-neutral-600">{item.body}</p>
            <Link href={item.link.href} className="link-under mt-auto pt-4 text-ink">
              {item.link.label}
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
