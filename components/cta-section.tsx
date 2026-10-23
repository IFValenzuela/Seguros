import Image from "next/image"
import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { PhotoReveal } from "@/components/photo-reveal"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { PHONE_PRIMARY, PHONE_SECONDARY, whatsappUrl } from "@/lib/site"

/* Framed photo + slate panel on mist, in the proportions of Banham's award block (57/43).
   One primary action; WhatsApp and phone sit beneath it as quiet text links. */
export function CTASection({
  title = "Hablemos de tu protección",
  body = "Agenda una consulta gratuita. Revisamos tu situación y te proponemos la cobertura adecuada para ti y tu familia.",
  quoteHref = "/cotizar",
  ctaLabel = "Solicitar cotización",
  image = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1600&auto=format&fit=crop",
}: {
  title?: string
  body?: string
  quoteHref?: string
  ctaLabel?: string
  image?: string
}) {
  return (
    <section className="section bg-mist">
      <Reveal className="container-site">
        <div className="grid overflow-hidden bg-slate lg:grid-cols-[57fr_43fr]">
          <PhotoReveal delay={0.15} className="aspect-[3/2] lg:aspect-auto lg:min-h-[520px]">
            <Image src={image} alt="" fill sizes="(min-width: 1024px) 780px, 100vw" className="photo-tone object-cover" />
          </PhotoReveal>

          <div className="flex flex-col items-center justify-center px-8 py-14 text-center md:px-12">
            <h2 className="t-section max-w-[18ch] text-white">{title}</h2>
            <p className="t-small mt-4 max-w-[40ch] text-white/80">{body}</p>
            <Link href={quoteHref} className="btn btn-light mt-8">
              {ctaLabel}
            </Link>
            {/* Phones wrap WhatsApp onto its own line below the two numbers; wider screens keep one row. */}
            <div className="t-small mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="order-last inline-flex basis-full items-center justify-center gap-2 underline decoration-white/35 sm:order-none sm:basis-auto underline-offset-[6px] transition-[text-decoration-color] hover:decoration-white"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
              {[PHONE_PRIMARY, PHONE_SECONDARY].map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="tabular-nums underline decoration-white/35 underline-offset-[6px] transition-[text-decoration-color] hover:decoration-white"
                >
                  {phone.display}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
