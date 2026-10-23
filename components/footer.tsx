import Link from "next/link"
import Image from "next/image"
import { serviceLinks, companyLinks, PHONE_PRIMARY, PHONE_SECONDARY, EMAIL, whatsappUrl } from "@/lib/site"

const linkClass = "transition-colors hover:text-white"

/* Slate footer: brand, services, company and contact columns over the legal line. */
export function Footer() {
  return (
    <footer className="bg-slate text-white/70">
      <div className="container-site">
        <div className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
          <div className="flex flex-col md:col-span-4">
            <Link href="/" aria-label="Valenzuela y Aguilar, inicio" className="inline-block self-start">
              <Image
                src="/logo-va-light.png"
                alt="Valenzuela | Aguilar, Agentes de Seguros"
                width={800}
                height={150}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-6 max-w-sm text-[17px] leading-relaxed">
              Más de 25 años protegiendo familias en Mexicali, Baja California. Agentes autorizados Grupo Inbursa.
            </p>
          </div>

          <nav aria-label="Servicios" className="md:col-span-3">
            <h2 className="kicker mb-5 text-white">Servicios</h2>
            <ul className="space-y-3 text-[17px]">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.long}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Empresa" className="md:col-span-2">
            <h2 className="kicker mb-5 text-white">Empresa</h2>
            <ul className="space-y-3 text-[17px]">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="kicker mb-5 text-white">Contacto</h2>
            <ul className="space-y-3 text-[17px] tabular-nums">
              <li>
                <a href={PHONE_PRIMARY.href} className={linkClass}>{PHONE_PRIMARY.display}</a>
              </li>
              <li>
                <a href={PHONE_SECONDARY.href} className={linkClass}>{PHONE_SECONDARY.display}</a>
              </li>
              <li>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className={`[overflow-wrap:anywhere] ${linkClass}`}>{EMAIL}</a>
              </li>
              <li className="pt-2 text-white/50">Lunes a viernes, 9:00 a 18:00</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-base text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Asesores Valenzuela y Aguilar</p>
          <div className="flex gap-8">
            <Link href="/privacidad" className={linkClass}>Aviso de privacidad</Link>
            <Link href="/terminos" className={linkClass}>Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
