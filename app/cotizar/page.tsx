"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Car, Home, Briefcase, Shield, Check, Phone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { PHONE_PRIMARY, whatsappUrl } from "@/lib/site"
import { cn } from "@/lib/utils"

const insuranceTypes = [
  { id: "vida", label: "Seguro de Vida", icon: Heart, description: "Protege a tu familia" },
  { id: "gastos-medicos", label: "Gastos Médicos", icon: Shield, description: "Cobertura de salud" },
  { id: "auto", label: "Seguro de Auto", icon: Car, description: "Protección vehicular" },
  { id: "hogar", label: "Seguro de Hogar", icon: Home, description: "Protege tu patrimonio" },
  { id: "empresarial", label: "Empresarial", icon: Briefcase, description: "Seguros para tu negocio" },
]

const assurances = [
  { title: "Sin compromiso", description: "Cotización gratuita y sin obligación de compra" },
  { title: "Respuesta rápida", description: "Un asesor te contactará en menos de 24 horas" },
  { title: "Asesoría personalizada", description: "Planes adaptados a tus necesidades específicas" },
]

const EASE = [0.23, 1, 0.32, 1] as const

export default function CotizarPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    tipoSeguro: "",
    mensaje: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Pre-select the insurance type when arriving from a service page (/cotizar?tipo=vida)
  useEffect(() => {
    const tipo = new URLSearchParams(window.location.search).get("tipo")
    if (tipo && insuranceTypes.some((t) => t.id === tipo)) {
      setFormData((prev) => ({ ...prev, tipoSeguro: tipo }))
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/cotizar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar la solicitud")
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
      setError("Hubo un error al enviar tu solicitud. Intenta de nuevo o escríbenos por WhatsApp.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const selectInsuranceType = (typeId: string) => {
    setFormData({ ...formData, tipoSeguro: typeId })
  }

  // Arrow keys move the selection, like a native radio group.
  const onTypeKeyDown = (e: React.KeyboardEvent, index: number) => {
    const step = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0
    if (!step) return
    e.preventDefault()
    const next = (index + step + insuranceTypes.length) % insuranceTypes.length
    selectInsuranceType(insuranceTypes[next].id)
    document.getElementById(`tipo-${insuranceTypes[next].id}`)?.focus()
  }

  const isFormValid = formData.nombre && formData.email && formData.telefono && formData.tipoSeguro

  const missingFields = [
    !formData.tipoSeguro && "tipo de seguro",
    !formData.nombre && "nombre",
    !formData.email && "correo",
    !formData.telefono && "teléfono",
  ].filter(Boolean)

  const selectedIndex = insuranceTypes.findIndex((t) => t.id === formData.tipoSeguro)

  return (
    <div className="flex min-h-[100svh] flex-col overflow-x-clip bg-paper">
      <Header overlay />

      <main className="flex-1">
        <PageHero
          eyebrow="Cotización gratuita"
          title="Solicita tu cotización"
          intro="Completa el formulario y uno de nuestros asesores se pondrá en contacto contigo en menos de 24 horas con una propuesta personalizada."
          image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop"
          compact
        />

        <section className="section">
          <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-8">
              <div className="border border-neutral-200 bg-white p-6 sm:p-10">
                <AnimatePresence mode="wait" initial={false}>
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2, ease: EASE }}
                      onSubmit={handleSubmit}
                      className="space-y-10"
                    >
                      {/* Insurance type */}
                      <fieldset>
                        <legend id="tipo-label" className="field-label">Tipo de seguro *</legend>
                        <div
                          role="radiogroup"
                          aria-labelledby="tipo-label"
                          className="mt-1 grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-5"
                        >
                          {insuranceTypes.map((type, i) => {
                            const isSelected = formData.tipoSeguro === type.id
                            const tabbable = isSelected || (selectedIndex === -1 && i === 0)
                            return (
                              <button
                                key={type.id}
                                id={`tipo-${type.id}`}
                                type="button"
                                role="radio"
                                aria-checked={isSelected}
                                tabIndex={tabbable ? 0 : -1}
                                onClick={() => selectInsuranceType(type.id)}
                                onKeyDown={(e) => onTypeKeyDown(e, i)}
                                className={cn(
                                  "flex min-h-[104px] flex-col justify-between rounded-[4px] border p-4 text-left transition-[background-color,border-color,color,transform] duration-150 active:scale-[0.97]",
                                  isSelected
                                    ? "border-ink bg-ink text-white"
                                    : "border-neutral-300 bg-white text-ink [@media(hover:hover)]:hover:border-ink",
                                )}
                              >
                                <type.icon
                                  className={cn("h-5 w-5", isSelected ? "text-white" : "text-slate")}
                                  strokeWidth={1.5}
                                  aria-hidden="true"
                                />
                                <span className="mt-4 text-base leading-tight">{type.label}</span>
                              </button>
                            )
                          })}
                        </div>
                      </fieldset>

                      {/* Personal info */}
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="nombre" className="field-label">Nombre *</label>
                          <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            autoComplete="given-name"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                            className="field-input"
                          />
                        </div>
                        <div>
                          <label htmlFor="apellido" className="field-label">Apellido</label>
                          <input
                            type="text"
                            id="apellido"
                            name="apellido"
                            autoComplete="family-name"
                            value={formData.apellido}
                            onChange={handleChange}
                            className="field-input"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="field-label">Correo electrónico *</label>
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
                          <label htmlFor="telefono" className="field-label">Teléfono *</label>
                          <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            autoComplete="tel"
                            inputMode="tel"
                            value={formData.telefono}
                            onChange={handleChange}
                            required
                            className="field-input tabular-nums"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="mensaje" className="field-label">Mensaje (opcional)</label>
                        <textarea
                          id="mensaje"
                          name="mensaje"
                          value={formData.mensaje}
                          onChange={handleChange}
                          placeholder="Cuéntanos más sobre lo que necesitas…"
                          rows={4}
                          className="field-input resize-y"
                        />
                      </div>

                      <div className="space-y-4 border-t border-neutral-200 pt-8">
                        <div aria-live="polite">
                          {error && (
                            <p role="alert" className="mb-4 border-l-2 border-red-700 bg-red-50 px-4 py-3 text-base text-red-800">
                              {error}
                            </p>
                          )}
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <button
                            type="submit"
                            disabled={!isFormValid || isSubmitting}
                            className="btn btn-dark w-full disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:text-neutral-600 sm:w-auto"
                          >
                            {isSubmitting ? "Enviando…" : "Solicitar cotización"}
                          </button>
                          <p className="flex items-center gap-2 text-[15px] text-neutral-600">
                            <Shield className="h-3.5 w-3.5 shrink-0 text-slate" strokeWidth={1.75} aria-hidden="true" />
                            Tu información está segura y nunca será compartida con terceros.
                          </p>
                        </div>

                        {!isFormValid && (
                          <p className="text-base text-neutral-600">
                            Para continuar, completa: {missingFields.join(", ")}.
                          </p>
                        )}
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      role="status"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="py-6"
                    >
                      <span className="flex h-12 w-12 items-center justify-center bg-ink">
                        <Check className="h-5 w-5 text-white" strokeWidth={2} aria-hidden="true" />
                      </span>

                      <h2 className="t-section mt-8">¡Solicitud recibida!</h2>

                      <p className="mt-4 max-w-lg leading-relaxed text-neutral-600">
                        Gracias, <span className="font-medium text-ink">{formData.nombre}</span>. Uno de nuestros
                        asesores te contactará pronto al{" "}
                        <span className="font-medium tabular-nums text-ink">{formData.telefono}</span> o{" "}
                        <span className="font-medium text-ink">{formData.email}</span>. Respuesta en menos de 24 horas.
                      </p>

                      <div className="mt-10 border-t border-neutral-200 pt-8">
                        <h3 className="kicker text-neutral-500">¿Qué sigue?</h3>
                        <ol className="mt-5 space-y-4 text-neutral-600">
                          {[
                            "Un asesor revisa tu solicitud y te contacta para conocer tus necesidades.",
                            formData.tipoSeguro === "auto"
                              ? "Ten a la mano la marca, modelo y año de tu vehículo."
                              : formData.tipoSeguro === "gastos-medicos" || formData.tipoSeguro === "vida"
                                ? "Ten a la mano las edades de las personas que quieres asegurar."
                                : "Ten a la mano los datos básicos de lo que quieres asegurar.",
                            "Recibes una propuesta personalizada, sin compromiso.",
                          ].map((step, i) => (
                            <li key={i} className="flex gap-4">
                              <span className="font-serif tabular-nums text-slate">{i + 1}</span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>

                      <a
                        href={whatsappUrl("Hola, acabo de solicitar una cotización en su sitio web.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-dark mt-10"
                      >
                        <WhatsAppIcon className="h-4 w-4" />
                        ¿Prefieres no esperar? Escríbenos
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Assurances */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <dl className="divide-y divide-neutral-200 border-y border-neutral-200">
                  {assurances.map((item) => (
                    <div key={item.title} className="py-6">
                      <dt className="font-serif text-xl text-ink">{item.title}</dt>
                      <dd className="mt-1.5 text-base leading-relaxed text-neutral-600">{item.description}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-8">
                  <p className="text-base text-neutral-600">¿Prefieres hablar con un asesor?</p>
                  <a
                    href={PHONE_PRIMARY.href}
                    className="mt-2 inline-flex items-center gap-2 font-serif text-2xl tabular-nums text-ink transition-colors hover:text-slate"
                  >
                    <Phone className="h-4 w-4 text-slate" strokeWidth={1.75} aria-hidden="true" />
                    {PHONE_PRIMARY.display}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
