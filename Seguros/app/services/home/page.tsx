import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Home, CheckCircle, X, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Home Insurance | Sarah Mitchell Insurance",
  description: "Protect your home and belongings with comprehensive homeowners, renters, and condo insurance.",
}

const coverageOptions = [
  { feature: "Dwelling Coverage", basic: true, standard: true, premium: true },
  { feature: "Personal Property", basic: true, standard: true, premium: true },
  { feature: "Liability Protection", basic: true, standard: true, premium: true },
  { feature: "Additional Living Expenses", basic: false, standard: true, premium: true },
  { feature: "Water Backup Coverage", basic: false, standard: true, premium: true },
  { feature: "Identity Theft Protection", basic: false, standard: false, premium: true },
  { feature: "Scheduled Personal Property", basic: false, standard: false, premium: true },
  { feature: "Equipment Breakdown", basic: false, standard: false, premium: true },
]

const benefits = [
  "Homeowners, renters, and condo coverage",
  "Replacement cost coverage available",
  "Bundle discounts with auto insurance",
  "Claims advocacy and support",
  "Annual policy reviews",
  "Multiple carrier options",
]

export default function HomeInsurancePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <Badge variant="secondary">Home Insurance</Badge>
                <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  Protect What Matters Most
                </h1>
                <p className="text-lg text-muted-foreground">
                  Your home is more than just a building - it's where life happens. 
                  I'll help you find the right coverage to protect your home and everything in it.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/quote">
                      Get a Free Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:+15551234567">Call (555) 123-4567</a>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex h-48 w-48 items-center justify-center rounded-full bg-primary/10">
                  <Home className="h-24 w-24 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-foreground">Why Choose Me for Home Insurance</h2>
            </div>
            <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Comparison */}
        <section className="bg-muted/50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-foreground">Coverage Options</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Compare coverage levels to find the right protection for your home
              </p>
            </div>
            <Card className="mx-auto max-w-4xl overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">Coverage</TableHead>
                    <TableHead className="text-center">Basic</TableHead>
                    <TableHead className="text-center">Standard</TableHead>
                    <TableHead className="text-center">Premium</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {coverageOptions.map((option) => (
                    <TableRow key={option.feature}>
                      <TableCell className="font-medium">{option.feature}</TableCell>
                      <TableCell className="text-center">
                        {option.basic ? (
                          <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-muted-foreground/50" />
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {option.standard ? (
                          <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-muted-foreground/50" />
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {option.premium ? (
                          <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-muted-foreground/50" />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Coverage options and pricing vary by carrier. Contact me for a personalized quote.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Ready to Protect Your Home?</h2>
            <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
              Get a free, no-obligation quote and see how much you could save
            </p>
            <Button size="lg" asChild>
              <Link href="/quote">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
