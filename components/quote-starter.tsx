import Link from "next/link"
import { PHONE_PRIMARY, PHONE_SECONDARY, whatsappUrl } from "@/lib/site"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

/* Ids match the type picker on /cotizar, which preselects from ?tipo=. */
const types = [
  { id: "vida", label: "Vida" },
  { id: "gastos-medicos", label: "Gastos Médicos" },
  { id: "auto", label: "Auto" },
  { id: "hogar", label: "Hogar" },
  { id: "empresarial", label: "Empresarial" },
]

const underline =
  "underline decoration-white/40 underline-offset-[6px] transition-[text-decoration-color] hover:decoration-white"

/* Hero quote starter: one click on a product opens the quote form with it chosen.
   No panel: a benefit line, then the site's outlined light buttons straight on the photo. */
export function QuoteStarter() {
  return (
    <div className="text-white">
      <p className="text-xl md:text-2xl">Cotiza hoy y protege lo que más importa.</p>

      <ul className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {types.map((type) => (
          <li key={type.id}>
            <Link href={`/cotizar?tipo=${type.id}`} aria-label={`Cotizar ${type.label}`} className="btn btn-line-light px-6">
              {type.label}
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-base text-white/80">
        <span>Gratis y sin compromiso, respuesta en menos de 24&nbsp;h</span>
        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 text-white ${underline}`}>
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp
        </a>
        {[PHONE_PRIMARY, PHONE_SECONDARY].map((phone) => (
          <a key={phone.href} href={phone.href} className={`tabular-nums text-white ${underline}`}>
            {phone.display}
          </a>
        ))}
      </p>
    </div>
  )
}
