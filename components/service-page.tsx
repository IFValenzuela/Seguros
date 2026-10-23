import Image from "next/image"
import Link from "next/link"
import { Check, Phone, type LucideIcon } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Assurances } from "@/components/assurances"
import { Reveal } from "@/components/reveal"
import { PhotoReveal } from "@/components/photo-reveal"
import { SectionHeading } from "@/components/section-heading"
import { PageHero } from "@/components/page-hero"
import { PHONE_PRIMARY } from "@/lib/site"

export type ServicePageContent = {
  name: string
  title: string
  intro: string
  heroImage: string
  quoteHref: string
  ctaLabel?: string
  benefitsTitle: string
  benefits: { icon: LucideIcon; title: string; description: string }[]
  coveragesTitle: string
  coverages: string[]
  coverageImage: { src: string; alt: string }
  closing: { title: string; body: string }
}

/* Arranged like a Banham service page: full-bleed hero, the offer on mist,
   photo beside the detail, the framed contact panel, then the three promises. */
export function ServicePage({ content }: { content: ServicePageContent }) {
  const ctaLabel = content.ctaLabel ?? "Solicitar cotización"

  return (
    <div className="flex min-h-[100svh] flex-col overflow-x-clip bg-paper">
      <Header overlay />

      <main className="flex-1">
        <PageHero eyebrow={content.name} title={content.title} intro={content.intro} image={content.heroImage}>
          <Link href={content.quoteHref} className="btn btn-light w-full max-w-xs sm:w-auto">
            {ctaLabel}
          </Link>
          <a href={PHONE_PRIMARY.href} className="btn btn-line-light w-full max-w-xs tabular-nums sm:w-auto">
            <Phone className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            {PHONE_PRIMARY.display}
          </a>
        </PageHero>

        {/* The offer: three centred items on mist */}
        <section className="section bg-mist">
          <SectionHeading title={content.benefitsTitle} />

          <ul className="container-site grid gap-12 md:grid-cols-3 md:gap-10">
            {content.benefits.map((benefit, i) => (
              <li key={benefit.title}>
                <Reveal delay={i * 0.06} className="flex flex-col items-center text-center">
                  <benefit.icon className="h-7 w-7 text-ink" strokeWidth={1} aria-hidden="true" />
                  <h3 className="t-card mt-5">{benefit.title}</h3>
                  <p className="t-small mt-2 max-w-[34ch] text-neutral-600">{benefit.description}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        {/* Coverage: photo beside the list, inside the container */}
        <section className="section bg-paper">
          <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <PhotoReveal className="aspect-[4/3]">
              <Image
                src={content.coverageImage.src}
                alt={content.coverageImage.alt}
                fill
                sizes="(min-width: 1024px) 660px, 100vw"
                className="photo-tone object-cover"
              />
            </PhotoReveal>

            <Reveal delay={0.08} className="lg:max-w-[34rem]">
              <h2 className="t-section">{content.coveragesTitle}</h2>
              <ul className="t-small mt-6 grid gap-x-8 gap-y-3 text-ink-soft sm:grid-cols-2">
                {content.coverages.map((coverage) => (
                  <li key={coverage} className="flex gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-ink" strokeWidth={1.5} aria-hidden="true" />
                    {coverage}
                  </li>
                ))}
              </ul>
              <Link href={content.quoteHref} className="link-under mt-8 text-ink">
                {ctaLabel}
              </Link>
            </Reveal>
          </div>
        </section>

        <CTASection title={content.closing.title} body={content.closing.body} quoteHref={content.quoteHref} ctaLabel={ctaLabel} />
        <Assurances />
      </main>

      <Footer />
    </div>
  )
}
