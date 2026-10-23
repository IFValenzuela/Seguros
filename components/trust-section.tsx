import { Reveal } from "@/components/reveal"
import { MaskReveal } from "@/components/mask-reveal"

/* Opening statement on white: one large line held to a narrow measure, a short paragraph under it. */
export function TrustSection() {
  return (
    <section className="section-statement bg-paper">
      <div className="mx-auto max-w-[52rem] px-5 text-center">
        <h2 className="t-statement">
          <MaskReveal>Fundados en Mexicali, respaldados por Grupo&nbsp;Inbursa</MaskReveal>
        </h2>
        <Reveal delay={0.2}>
          <p className="t-lead mx-auto mt-6 max-w-[46ch] text-neutral-600">
            Desde hace más de 25 años protegemos lo que más importa: tu familia, tu salud y tu patrimonio. Te
            asesoramos para elegir la póliza correcta y te acompañamos cuando la necesitas.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
