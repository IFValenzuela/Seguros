"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Heart, Stethoscope, Car, Landmark, Phone, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

const serviciosSeguros = [
  {
    title: "Seguro de Vida",
    href: "/servicios/vida",
    description: "Protege a tus seres queridos",
    icon: Heart,
  },
  {
    title: "Gastos Médicos",
    href: "/servicios/gastos-medicos",
    description: "Cuida tu salud y tranquilidad",
    icon: Stethoscope,
  },
  {
    title: "Seguro de Auto",
    href: "/servicios/auto",
    description: "Respaldo ante imprevistos",
    icon: Car,
  },
]

const serviciosBancarios = [
  {
    title: "Cuentas de Ahorro",
    href: "/servicios/cuentas",
    description: "Cuentas de ahorro y débito",
    icon: Landmark,
  },
  {
    title: "Créditos Personales",
    href: "/servicios/creditos",
    description: "Financiamiento a tu medida",
    icon: Landmark,
  },
  {
    title: "Inversiones",
    href: "/servicios/inversiones",
    description: "Planes de inversión y ahorro",
    icon: Landmark,
  },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white backdrop-blur-md shadow-sm ring-1 ring-slate-900/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-sm">
              <span className="font-heading font-bold text-lg text-white">VA</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-heading font-bold text-foreground leading-tight">
                Asesores Valenzuela
              </p>
              <p className="text-xs text-muted-foreground">y Aguilar</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 px-4 font-medium bg-transparent hover:bg-muted/50 data-[active]:bg-muted/50 data-[state=open]:bg-muted/50">
                  Seguros
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-1 p-4">
                    {serviciosSeguros.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={service.href}
                            className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-muted group"
                          >
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <service.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{service.title}</p>
                              <p className="text-sm text-muted-foreground">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 px-4 font-medium bg-transparent hover:bg-muted/50 data-[active]:bg-muted/50 data-[state=open]:bg-muted/50">
                  Servicios Bancarios
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-1 p-4">
                    {serviciosBancarios.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={service.href}
                            className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-muted group"
                          >
                            <div className="w-10 h-10 rounded-lg bg-accent/30 flex items-center justify-center group-hover:bg-accent/50 transition-colors">
                              <service.icon className="w-5 h-5 text-accent-foreground" />
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{service.title}</p>
                              <p className="text-sm text-muted-foreground">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/nosotros"
                  className="inline-flex h-10 items-center px-4 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  Nosotros
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/contacto"
                  className="inline-flex h-10 items-center px-4 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  Contacto
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+526861234567"
              className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(686) 123-4567</span>
            </a>

            <Button className="hidden sm:flex btn-premium h-10 px-5 text-white rounded-lg" asChild>
              <Link href="/cotizar">
                Cotizar
                <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>

            {/* Mobile menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] p-0">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="p-6 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                        <span className="font-heading font-bold text-lg text-white">VA</span>
                      </div>
                      <div>
                        <p className="font-heading font-bold text-foreground">Asesores Valenzuela</p>
                        <p className="text-xs text-muted-foreground">y Aguilar</p>
                      </div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <nav className="flex-1 overflow-auto p-6 space-y-6">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Seguros
                      </p>
                      <div className="space-y-1">
                        {serviciosSeguros.map((service) => (
                          <Link
                            key={service.title}
                            href={service.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                          >
                            <service.icon className="w-5 h-5 text-primary" />
                            <span className="font-medium">{service.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Servicios Bancarios
                      </p>
                      <div className="space-y-1">
                        {serviciosBancarios.map((service) => (
                          <Link
                            key={service.title}
                            href={service.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                          >
                            <service.icon className="w-5 h-5 text-accent-foreground" />
                            <span className="font-medium">{service.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <Link
                        href="/nosotros"
                        onClick={() => setMobileOpen(false)}
                        className="block p-3 rounded-lg hover:bg-muted transition-colors font-medium"
                      >
                        Nosotros
                      </Link>
                      <Link
                        href="/contacto"
                        onClick={() => setMobileOpen(false)}
                        className="block p-3 rounded-lg hover:bg-muted transition-colors font-medium"
                      >
                        Contacto
                      </Link>
                    </div>
                  </nav>

                  {/* Footer */}
                  <div className="p-6 border-t border-border space-y-3">
                    <a
                      href="tel:+526861234567"
                      className="flex items-center justify-center gap-2 p-3 rounded-lg bg-muted text-foreground font-medium"
                    >
                      <Phone className="w-4 h-4" />
                      (686) 123-4567
                    </a>
                    <Button className="w-full btn-premium h-12 text-white rounded-lg" asChild>
                      <Link href="/cotizar" onClick={() => setMobileOpen(false)}>
                        Cotizar Ahora
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
