import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { MaskReveal } from "@/components/mask-reveal"

/* Full-bleed photo band carrying the agency's own words from Nosotros.
   On desktop the photo holds still and the band scrolls past it like a window. */
export function MissionBand() {
  return (
    <section className="photo-window relative isolate flex min-h-[80vh] items-end justify-center overflow-hidden bg-ink md:min-h-[100vh]">
      <div className="photo-window-media -z-10">
        <Image
          src="https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?q=80&w=2400&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          className="photo-tone object-cover"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/45" />

      <div className="max-w-[48rem] px-5 pb-20 text-center md:pb-28">
        <p className="t-statement text-white">
          <MaskReveal>Ayudamos a las familias a proteger lo que más aman.</MaskReveal>
        </p>
        <Reveal delay={0.2}>
          <p className="t-lead mt-5 text-white/85">La misma pasión del primer día, desde Mexicali.</p>
        </Reveal>
      </div>
    </section>
  )
}
