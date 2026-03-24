import Link from "next/link"
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react"

const navigation = {
  seguros: [
    { name: "Seguro de Vida", href: "/servicios/vida" },
    { name: "Gastos Médicos", href: "/servicios/gastos-medicos" },
    { name: "Seguro de Auto", href: "/servicios/auto" },
  ],
  bancarios: [
    { name: "Cuentas de Ahorro", href: "/servicios/cuentas" },
    { name: "Créditos Personales", href: "/servicios/creditos" },
    { name: "Inversiones", href: "/servicios/inversiones" },
  ],
  empresa: [
    { name: "Nosotros", href: "/nosotros" },
    { name: "Testimonios", href: "/testimonios" },
    { name: "Contacto", href: "/contacto" },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-slate-200/50 bg-white">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/30 pointer-events-none" />

      <div className="container relative mx-auto px-4">
        {/* Main footer content */}
        <div className="py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Brand column */}
            <div className="lg:col-span-4 space-y-6">
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-sm">
                  <span className="font-heading font-bold text-xl text-white">VA</span>
                </div>
                <div>
                  <p className="font-heading font-bold text-lg text-foreground">
                    Asesores Valenzuela
                  </p>
                  <p className="text-sm text-muted-foreground">y Aguilar</p>
                </div>
              </Link>

              <p className="text-muted-foreground leading-relaxed max-w-sm">
                Más de 15 años protegiendo lo que más importa. Tu confianza es
                nuestro compromiso en seguros y servicios financieros.
              </p>

              <div className="space-y-3">
                <a
                  href="tel:+526861234567"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-medium">(686) 123-4567</span>
                </a>
                <a
                  href="mailto:contacto@asesoresva.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-medium">contacto@asesoresva.com</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Mexicali, Baja California</span>
                </div>
              </div>
            </div>

            {/* Navigation columns */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <p className="font-heading font-semibold text-foreground mb-4">Seguros</p>
                  <ul className="space-y-3">
                    {navigation.seguros.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                        >
                          {item.name}
                          <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-heading font-semibold text-foreground mb-4">Bancarios</p>
                  <ul className="space-y-3">
                    {navigation.bancarios.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                        >
                          {item.name}
                          <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-heading font-semibold text-foreground mb-4">Empresa</p>
                  <ul className="space-y-3">
                    {navigation.empresa.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                        >
                          {item.name}
                          <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-heading font-semibold text-foreground mb-4">Horario</p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>Lunes - Viernes</li>
                    <li className="font-medium text-foreground">9:00 AM - 6:00 PM</li>
                    <li className="pt-2">Sábado</li>
                    <li className="font-medium text-foreground">9:00 AM - 2:00 PM</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Asesores Valenzuela y Aguilar. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-xs font-medium text-primary">
              Agentes Autorizados Grupo Inbursa
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
