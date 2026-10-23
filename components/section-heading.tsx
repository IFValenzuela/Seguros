import { Reveal } from "@/components/reveal"
import { MaskReveal } from "@/components/mask-reveal"

/* The one section heading: small and centred, so the photography below carries the section. */
export function SectionHeading({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="section-head">
      <h2 className="t-section">
        <MaskReveal>{title}</MaskReveal>
      </h2>
      {intro && (
        <Reveal delay={0.15}>
          <p className="t-small mx-auto mt-4 max-w-[52ch] text-neutral-600">{intro}</p>
        </Reveal>
      )}
    </div>
  )
}
