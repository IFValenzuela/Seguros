import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Conoce los términos y condiciones de uso de nuestro sitio web y servicios de asesoría en seguros.",
}

export default function Page() {
  return (
    <div className="flex min-h-[100svh] flex-col overflow-x-clip bg-paper">
      <Header />

      <main className="flex-1">
        <PageHero eyebrow="Legal" title="Términos y Condiciones" intro="Conoce los términos y condiciones de uso de nuestro sitio web y servicios de asesoría en seguros." />

        <section className="section border-t border-neutral-200">
          <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-10">
            <aside className="lg:col-span-3">
              <nav aria-label="Contenido" className="lg:sticky lg:top-32">
                <p className="t-small text-neutral-500">Última actualización: Marzo 2026</p>
                <ol className="t-small mt-6 hidden space-y-3 border-t border-neutral-300 pt-6 text-neutral-600 lg:block">
                  <li><a href="#aceptacion-de-los-terminos" className="transition-colors hover:text-ink">1. Aceptación de los Términos</a></li>
                  <li><a href="#servicios-ofrecidos" className="transition-colors hover:text-ink">2. Servicios Ofrecidos</a></li>
                  <li><a href="#uso-del-sitio-web" className="transition-colors hover:text-ink">3. Uso del Sitio Web</a></li>
                  <li><a href="#cotizaciones-y-contratacion" className="transition-colors hover:text-ink">4. Cotizaciones y Contratación</a></li>
                  <li><a href="#propiedad-intelectual" className="transition-colors hover:text-ink">5. Propiedad Intelectual</a></li>
                  <li><a href="#limitacion-de-responsabilidad" className="transition-colors hover:text-ink">6. Limitación de Responsabilidad</a></li>
                  <li><a href="#modificaciones" className="transition-colors hover:text-ink">7. Modificaciones</a></li>
                  <li><a href="#legislacion-aplicable" className="transition-colors hover:text-ink">8. Legislación Aplicable</a></li>
                  <li><a href="#contacto" className="transition-colors hover:text-ink">9. Contacto</a></li>
                </ol>
              </nav>
            </aside>
            <article className="legal max-w-[68ch] lg:col-span-7 lg:col-start-5">
            <h2 id="aceptacion-de-los-terminos">
              1. Aceptación de los Términos
            </h2>
            <p>
              Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos
              Términos y Condiciones de uso. Si no está de acuerdo con alguno de estos
              términos, le recomendamos no utilizar nuestro sitio.
            </p>

            <h2 id="servicios-ofrecidos">
              2. Servicios Ofrecidos
            </h2>
            <p>
              Asesores Valenzuela y Aguilar ofrece servicios de asesoría en seguros,
              incluyendo pero no limitado a:
            </p>
            <ul>
              <li>Seguros de Vida</li>
              <li>Seguros de Gastos Médicos</li>
              <li>Seguros de Automóvil</li>
              <li>Servicios Bancarios: ahorro, inversión y crédito</li>
              <li>Asesoría personalizada en materia de seguros</li>
            </ul>

            <h2 id="uso-del-sitio-web">
              3. Uso del Sitio Web
            </h2>
            <p>
              El usuario se compromete a utilizar este sitio web de manera responsable y
              conforme a la legislación vigente. Queda prohibido:
            </p>
            <ul>
              <li>Utilizar el sitio para fines ilegales</li>
              <li>Interferir con el funcionamiento del sitio</li>
              <li>Copiar o distribuir contenido sin autorización</li>
              <li>Proporcionar información falsa o engañosa</li>
            </ul>

            <h2 id="cotizaciones-y-contratacion">
              4. Cotizaciones y Contratación
            </h2>
            <p>
              Las cotizaciones proporcionadas a través de este sitio web son informativas
              y están sujetas a verificación y aprobación. La contratación final de cualquier
              póliza de seguros estará sujeta a los términos específicos de cada aseguradora.
            </p>

            <h2 id="propiedad-intelectual">
              5. Propiedad Intelectual
            </h2>
            <p>
              Todo el contenido de este sitio web, incluyendo textos, imágenes, logotipos y
              diseños, es propiedad de Asesores Valenzuela y Aguilar o de sus respectivos
              titulares y está protegido por las leyes de propiedad intelectual.
            </p>

            <h2 id="limitacion-de-responsabilidad">
              6. Limitación de Responsabilidad
            </h2>
            <p>
              Asesores Valenzuela y Aguilar no se hace responsable por:
            </p>
            <ul>
              <li>Errores u omisiones en el contenido del sitio</li>
              <li>Interrupciones en el servicio del sitio web</li>
              <li>Daños derivados del uso de la información proporcionada</li>
              <li>Decisiones tomadas basándose únicamente en el contenido del sitio</li>
            </ul>

            <h2 id="modificaciones">
              7. Modificaciones
            </h2>
            <p>
              Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier
              momento. Las modificaciones entrarán en vigor desde su publicación en el sitio web.
            </p>

            <h2 id="legislacion-aplicable">
              8. Legislación Aplicable
            </h2>
            <p>
              Estos Términos y Condiciones se rigen por las leyes de los Estados Unidos Mexicanos.
              Cualquier controversia será sometida a los tribunales competentes de Mexicali,
              Baja California.
            </p>

            <h2 id="contacto">
              9. Contacto
            </h2>
            <p>
              Para cualquier pregunta sobre estos Términos y Condiciones, puede contactarnos:
            </p>
            <ul>
              <li>Email: contacto@valenzuelayaguilar.com</li>
              <li>Teléfonos: (686) 262-2535 y (686) 569-9613</li>
            </ul>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
