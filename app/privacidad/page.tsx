import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description: "Tu privacidad es importante para nosotros. Conoce cómo protegemos y utilizamos tu información personal.",
}

export default function Page() {
  return (
    <div className="flex min-h-[100dvh] flex-col overflow-x-clip bg-paper">
      <Header />

      <main className="flex-1">
        <PageHero eyebrow="Legal" title="Aviso de Privacidad" intro="Tu privacidad es importante para nosotros. Conoce cómo protegemos y utilizamos tu información personal." />

        <section className="section border-t border-neutral-200">
          <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-10">
            <aside className="lg:col-span-3">
              <nav aria-label="Contenido" className="lg:sticky lg:top-32">
                <p className="t-small text-neutral-500">Última actualización: Marzo 2026</p>
                <ol className="t-small mt-6 hidden space-y-3 border-t border-neutral-300 pt-6 text-neutral-600 lg:block">
                  <li><a href="#responsable-del-tratamiento" className="transition-colors hover:text-ink">1. Responsable del Tratamiento</a></li>
                  <li><a href="#datos-personales-que-recabamos" className="transition-colors hover:text-ink">2. Datos Personales que Recabamos</a></li>
                  <li><a href="#finalidades-del-tratamiento" className="transition-colors hover:text-ink">3. Finalidades del Tratamiento</a></li>
                  <li><a href="#proteccion-de-datos" className="transition-colors hover:text-ink">4. Protección de Datos</a></li>
                  <li><a href="#derechos-arco" className="transition-colors hover:text-ink">5. Derechos ARCO</a></li>
                  <li><a href="#cambios-al-aviso-de-privacidad" className="transition-colors hover:text-ink">6. Cambios al Aviso de Privacidad</a></li>
                  <li><a href="#contacto" className="transition-colors hover:text-ink">7. Contacto</a></li>
                </ol>
              </nav>
            </aside>
            <article className="legal max-w-[68ch] lg:col-span-7 lg:col-start-5">
            <h2 id="responsable-del-tratamiento">
              1. Responsable del Tratamiento
            </h2>
            <p>
              Asesores Valenzuela y Aguilar, con domicilio en Mexicali, Baja California, México,
              es responsable del tratamiento de sus datos personales.
            </p>

            <h2 id="datos-personales-que-recabamos">
              2. Datos Personales que Recabamos
            </h2>
            <p>Los datos personales que podemos recabar incluyen:</p>
            <ul>
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Información relacionada con la solicitud de cotización de seguros</li>
            </ul>

            <h2 id="finalidades-del-tratamiento">
              3. Finalidades del Tratamiento
            </h2>
            <p>Sus datos personales serán utilizados para:</p>
            <ul>
              <li>Atender sus solicitudes de información y cotización</li>
              <li>Proporcionar servicios de asesoría en seguros</li>
              <li>Enviar información sobre nuestros productos y servicios</li>
              <li>Dar cumplimiento a obligaciones legales</li>
            </ul>

            <h2 id="proteccion-de-datos">
              4. Protección de Datos
            </h2>
            <p>
              Implementamos medidas de seguridad administrativas, técnicas y físicas para
              proteger sus datos personales contra daño, pérdida, alteración, destrucción
              o el uso, acceso o tratamiento no autorizado.
            </p>

            <h2 id="derechos-arco">
              5. Derechos ARCO
            </h2>
            <p>
              Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento
              de sus datos personales. Para ejercer estos derechos, puede contactarnos a
              través de nuestro correo electrónico: contacto@valenzuelayaguilar.com
            </p>

            <h2 id="cambios-al-aviso-de-privacidad">
              6. Cambios al Aviso de Privacidad
            </h2>
            <p>
              Nos reservamos el derecho de efectuar cambios o actualizaciones al presente
              aviso de privacidad. Las modificaciones estarán disponibles en nuestro sitio web.
            </p>

            <h2 id="contacto">
              7. Contacto
            </h2>
            <p>
              Para cualquier duda o aclaración respecto al tratamiento de sus datos personales,
              puede contactarnos:
            </p>
            <ul>
              <li>Email: contacto@valenzuelayaguilar.com</li>
              <li>Teléfono: (686) 262-2535</li>
            </ul>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
