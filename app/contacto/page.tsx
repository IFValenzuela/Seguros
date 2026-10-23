"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { PHONE_PRIMARY, PHONE_SECONDARY, EMAIL, whatsappUrl } from "@/lib/site"

const contactInfo = [
  { title: "Teléfono", value: PHONE_PRIMARY.display, href: PHONE_PRIMARY.href },
  { title: "Teléfono 2", value: PHONE_SECONDARY.display, href: PHONE_SECONDARY.href },
  { title: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { title: "Dirección", value: "Mexicali, Baja California", href: null },
  { title: "Horario", value: "Lunes a viernes, 9:00 a 18:00", href: null },
]

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Error al enviar el mensaje")
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar el mensaje")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="flex min-h-[100dvh] flex-col overflow-x-clip bg-paper">
      <Header overlay />

      <main className="flex-1">
        <PageHero
          eyebrow="Contacto"
          title="Estamos aquí para ayudarte"
          intro="¿Tienes preguntas? ¿Necesitas asesoría? Ponte en contacto con nosotros y uno de nuestros asesores te atenderá de inmediato."
          image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1600&auto=format&fit=crop"
        />

        <section className="section">
          <div className="container-site grid gap-16 md:grid-cols-12 md:gap-10">
            {/* Direct channels */}
            <Reveal className="md:col-span-5 lg:col-span-4">
              <h2 className="t-section">Múltiples formas de contactarnos</h2>

              <dl className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex flex-col gap-1 py-5">
                    <dt className="text-base text-neutral-600">{item.title}</dt>
                    <dd className="break-words text-lg text-ink">
                      {item.href ? (
                        <a href={item.href} className="tabular-nums transition-colors hover:text-slate">
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <a
                href={whatsappUrl("Hola, me gustaría información sobre seguros")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark mt-10 w-full sm:w-auto"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Escríbenos por WhatsApp
              </a>
            </Reveal>

            {/* Form */}
            <Reveal delay={0.1} className="md:col-span-7 lg:col-span-7 lg:col-start-6">
              <div className="border border-neutral-200 bg-white p-6 sm:p-10">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="t-card">Envíanos un mensaje</h2>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="nombre" className="field-label">Nombre *</label>
                        <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          autoComplete="name"
                          value={formData.nombre}
                          onChange={handleChange}
                          required
                          className="field-input"
                        />
                      </div>
                      <div>
                        <label htmlFor="telefono" className="field-label">Teléfono</label>
                        <input
                          type="tel"
                          id="telefono"
                          name="telefono"
                          autoComplete="tel"
                          inputMode="tel"
                          value={formData.telefono}
                          onChange={handleChange}
                          className="field-input tabular-nums"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="field-label">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        spellCheck={false}
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="field-input"
                      />
                    </div>

                    <div>
                      <label htmlFor="mensaje" className="field-label">Mensaje *</label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="field-input resize-y"
                      />
                    </div>

                    <div aria-live="polite">
                      {error && (
                        <p role="alert" className="border-l-2 border-red-700 bg-red-50 px-4 py-3 text-base text-red-800">
                          {error}. Intenta de nuevo o escríbenos por WhatsApp.
                        </p>
                      )}
                    </div>

                    <button type="submit" disabled={isSubmitting} className="btn btn-dark w-full disabled:opacity-60">
                      {isSubmitting ? "Enviando…" : "Enviar mensaje"}
                    </button>
                  </form>
                ) : (
                  <div role="status" className="py-10">
                    <span className="flex h-12 w-12 items-center justify-center bg-ink">
                      <Check className="h-5 w-5 text-white" strokeWidth={2} aria-hidden="true" />
                    </span>
                    <h2 className="t-section mt-8">¡Mensaje enviado!</h2>
                    <p className="mt-3 max-w-md leading-relaxed text-neutral-600">
                      Gracias por contactarnos. Te responderemos lo antes posible.
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
