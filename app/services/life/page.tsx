import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Life Insurance | Sarah Mitchell Insurance",
  description: "Secure your family's financial future with term life, whole life, and final expense insurance.",
}

const products = [
  {
    title: "Term Life Insurance",
    description: "Affordable coverage for a specific period, ideal for protecting your family during key years.",
    features: ["10, 20, or 30 year terms", "Fixed premiums", "High coverage amounts", "Convertible options"],
  },
  {
    title: "Whole Life Insurance",
    description: "Permanent coverage that builds cash value over time and provides lifelong protection.",
    features: ["Lifetime coverage", "Cash value accumulation", "Fixed premiums", "Dividend potential"],
  },
  {
    title: "Final Expense Insurance",
    description: "Smaller policies designed to cover end-of-life expenses and ease the burden on loved ones.",
    features: ["Simplified underwriting", "Quick approval", "Affordable premiums", "No medical exam"],
  },
]

const benefits = [
  "Free needs analysis consultation",
  "Multiple carrier options",
  "No-pressure approach",
  "Help understanding policy options",
  "Beneficiary planning guidance",
  "Annual policy reviews",
]

export default function LifeInsurancePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <Badge variant="secondary">Life Insurance</Badge>
                <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  Secure Your Family's Future
                </h1>
                <p className="text-lg text-muted-foreground">
                  Life insurance isn't about you - it's about protecting the people you love. 
                  I'll help you find the right coverage to give your family financial security.
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
                  <Heart className="h-24 w-24 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-foreground">Life Insurance Options</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Different situations call for different solutions. I'll help you choose the right type.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {products.map((product) => (
                <Card key={product.title}>
                  <CardHeader>
                    <CardTitle>{product.title}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-muted/50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-foreground">Why Work With Me</h2>
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

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Ready to Protect Your Family?</h2>
            <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
              Schedule a free consultation to discuss your life insurance needs
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
