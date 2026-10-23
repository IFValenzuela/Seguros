import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { MaskReveal } from "@/components/mask-reveal"

/* Sub-page hero, two forms:
   with an image, a full-bleed photo with the text set low and centred that the page
   slides up over (pair with <Header overlay />), full screen or, with `compact`, a short band
   for pages whose content should start quickly; without one, the same centred statement on white. */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  compact = false,
  children,
}: {
  eyebrow: string
  title: string
  intro?: string
  image?: string
  compact?: boolean
  children?: React.ReactNode
}) {
  if (image) {
    return (
      <section
        className={`curtain isolate flex items-end justify-center overflow-hidden bg-ink ${
          compact ? "min-h-[28rem] md:min-h-[34rem]" : "min-h-[100svh]"
        }`}
      >
        <Image src={image} alt="" fill priority sizes="100vw" className="photo-tone -z-10 object-cover" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/45" />
        <div className="max-w-[40rem] px-5 pb-16 pt-32 text-center md:pb-24">
          <Reveal>
            <p className="kicker mb-5 text-white/75">{eyebrow}</p>
          </Reveal>
          <h1 className="t-statement text-white">
            <MaskReveal delay={0.1}>{title}</MaskReveal>
          </h1>
          <Reveal delay={0.3}>
            {intro && <p className="t-lead mx-auto mt-5 max-w-[46ch] text-white/85">{intro}</p>}
            {children && (
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">{children}</div>
            )}
          </Reveal>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-paper pb-12 pt-32 md:pb-16 md:pt-40">
      <div className="mx-auto max-w-[40rem] px-5 text-center">
        <Reveal>
          <p className="kicker mb-5 text-neutral-500">{eyebrow}</p>
        </Reveal>
        <h1 className="t-statement">
          <MaskReveal delay={0.1}>{title}</MaskReveal>
        </h1>
        <Reveal delay={0.3}>
          {intro && <p className="t-lead mx-auto mt-5 max-w-[46ch] text-neutral-600">{intro}</p>}
          {children && (
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">{children}</div>
          )}
        </Reveal>
      </div>
    </section>
  )
}
