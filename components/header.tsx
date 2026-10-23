"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X, Phone, ChevronRight } from "lucide-react"
import { serviceLinks, PHONE_PRIMARY, PHONE_SECONDARY, whatsappUrl } from "@/lib/site"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { cn } from "@/lib/utils"

const DRAWER_EASE = [0.32, 0.72, 0, 1] as const

const agencyLinks = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
]
const legalLinks = [
  { label: "Aviso de privacidad", href: "/privacidad" },
  { label: "Términos y condiciones", href: "/terminos" },
]

/* Banham's arrangement: menu and two quick actions left, wordmark centred, contact icons right.
   Every page lives in the drawer. With `overlay` the bar starts transparent over a dark hero. */
export function Header({ overlay = false }: { overlay?: boolean }) {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useMotionValueEvent(scrollY, "change", (y) => setIsScrolled(y > 48))

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!isOpen) return
    const trigger = triggerRef.current
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
      trigger?.focus()
    }
  }, [isOpen])

  const solid = !overlay || isScrolled

  /* The logo always lands at the top of the landing page. Next skips the scroll when the
     link points at the page you're already on, so on "/" scroll up by hand. */
  const goHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return
    e.preventDefault()
    window.scrollTo({ top: 0 })
  }

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,color] duration-200",
          solid ? "border-b border-neutral-200 bg-paper text-ink" : "border-b border-transparent bg-transparent text-white",
        )}
      >
        <nav aria-label="Principal" className="grid h-16 w-full grid-cols-[1fr_auto_1fr] items-center px-[var(--gutter)] lg:h-20">
          <div className="flex items-center gap-8">
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={isOpen}
              aria-controls="site-menu"
              aria-label="Abrir menú"
              className="-ml-2.5 flex h-10 w-10 items-center justify-center transition-opacity hover:opacity-70 lg:h-11 lg:w-11"
            >
              <Menu className="h-7 w-7" strokeWidth={1.25} />
            </button>
            <Link href="/cotizar" className="hidden text-[17px] tracking-[0.01em] transition-opacity hover:opacity-70 lg:block">
              Solicitar cotización
            </Link>
            <a href={PHONE_PRIMARY.href} className="hidden text-[17px] tracking-[0.01em] transition-opacity hover:opacity-70 lg:block">
              Llámanos
            </a>
          </div>

          <Link href="/" onClick={goHome} aria-label="Valenzuela y Aguilar, inicio">
            <Image
              src={solid ? "/logo-va-dark.png" : "/logo-va-light.png"}
              alt="Valenzuela | Aguilar, Agentes de Seguros"
              width={800}
              height={150}
              priority
              className="h-8 w-auto lg:h-11"
            />
          </Link>

          <div className="-mr-2 flex items-center justify-end gap-1 lg:gap-3">
            <div className="hidden items-center px-2 text-[17px] tracking-[0.01em] tabular-nums xl:flex">
              <a href={PHONE_PRIMARY.href} className="transition-opacity hover:opacity-70">
                {PHONE_PRIMARY.display}
              </a>
              <span aria-hidden="true" className="mx-3 h-4 w-px bg-current opacity-40" />
              <a href={PHONE_SECONDARY.href} className="transition-opacity hover:opacity-70">
                {PHONE_SECONDARY.display}
              </a>
            </div>
            <a
              href={PHONE_PRIMARY.href}
              aria-label={`Llamar al ${PHONE_PRIMARY.display}`}
              className="hidden h-11 w-11 items-center justify-center transition-opacity hover:opacity-70 lg:flex xl:hidden"
            >
              <Phone className="h-[22px] w-[22px]" strokeWidth={1.25} aria-hidden="true" />
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Escríbenos por WhatsApp"
              className="flex h-10 w-10 items-center justify-center lg:h-11 lg:w-11 transition-opacity hover:opacity-70"
            >
              <WhatsAppIcon className="h-[22px] w-[22px]" />
            </a>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="scrim"
              aria-hidden="true"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 z-[60] bg-black/50"
            />
            <motion.div
              key="drawer"
              id="site-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menú"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.45, ease: DRAWER_EASE }}
              className="fixed inset-y-0 left-0 z-[70] flex w-full max-w-[400px] flex-col overflow-y-auto overscroll-contain bg-paper text-ink"
            >
              <div className="flex h-16 shrink-0 items-center px-4 md:px-6 lg:h-20">
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar menú"
                  className="-ml-2.5 flex h-10 w-10 items-center justify-center transition-opacity hover:opacity-70 lg:h-11 lg:w-11"
                >
                  <X className="h-7 w-7" strokeWidth={1.25} />
                </button>
              </div>

              {/* Four kinds of thing, four treatments: the services as a ruled index, the quote as
                  the one panel on mist, the agency pages as plain links, and the ways to reach us
                  at the foot, with the legal pages as fine print under them. */}
              <nav aria-label="Menú del sitio" className="flex flex-1 flex-col px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] md:px-8">
                <p className="kicker text-neutral-500">Servicios</p>
                <ul className="mt-3 divide-y divide-neutral-200 border-y border-neutral-200">
                  {serviceLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={pathname === link.href ? "page" : undefined}
                        className="group flex items-center justify-between py-3 text-xl aria-[current=page]:italic"
                      >
                        {link.long}
                        <ChevronRight
                          className="h-4 w-4 text-neutral-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-ink"
                          strokeWidth={1.25}
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-[4px] bg-mist p-5">
                  <p className="kicker text-neutral-500">Cotización gratuita</p>
                  <p className="mt-2 text-xl leading-snug text-ink">Cotiza hoy y protege lo que más importa.</p>
                  <Link href="/cotizar" className="btn btn-dark mt-4 w-full">
                    Solicitar cotización
                  </Link>
                  <p className="mt-3 text-center text-sm text-neutral-600">Sin compromiso, respuesta en menos de 24&nbsp;h</p>
                </div>

                <p className="kicker mt-6 text-neutral-500">La agencia</p>
                <ul className="mt-3 flex gap-8">
                  {agencyLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} aria-current={pathname === link.href ? "page" : undefined} className="link-under aria-[current=page]:italic">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <p className="kicker text-neutral-500">Habla con nosotros</p>
                  <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-line-dark mt-3 w-full">
                    <WhatsAppIcon className="h-4 w-4" />
                    Escríbenos por WhatsApp
                  </a>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    {[PHONE_PRIMARY, PHONE_SECONDARY].map((phone) => (
                      <a key={phone.href} href={phone.href} className="btn bg-slate px-3 tabular-nums text-white hover:bg-slate-deep">
                        {phone.display}
                      </a>
                    ))}
                  </div>

                  <ul className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm text-neutral-500">
                    {legalLinks.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="transition-colors hover:text-ink">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
