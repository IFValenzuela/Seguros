import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Briefcase, CheckCircle, ArrowRight, Shield, Users, Building } from "lucide-react"

export const metadata: Metadata = {
  title: "Business Insurance | Sarah Mitchell Insurance",
  description: "Comprehensive business insurance solutions including liability, property, and workers compensation.",
}

const products = [
  {
    title: "General Liability",
    description: "Protects your business from claims of bodily injury, property damage, and advertising injury.",
    icon: Shield,
  },
  {
    title: "Commercial Property",
    description: "Covers your building, equipment, inventory, and other business property against damage or loss.",
    icon: Building,
  },
  {
    title: "Workers Compensation",
    description: "Provides coverage for employee injuries and illnesses that occur on the job.",
    icon: Users,
  },
  {
    title: "Business Owner's Policy",
    description: "Combines general liability and property coverage into one convenient, cost-effective package.",
    icon: Briefcase,
  },
]

const industries = [
  "Contractors & Construction",
  "Retail & Restaurants",
  "Professional Services",
  "Manufacturing",
  "Healthcare",
  "Real Estate",
  "Technology",
  "Non-Profits",
]

const benefits = [
  "Customized coverage for your industry",
  "Multiple carrier options",
  "Competitive pricing",
  "Claims support and advocacy",
  "Annual policy reviews",
  "Risk management guidance",
]

export default function BusinessInsurancePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <Badge variant="secondary">Business Insurance</Badge>
                <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  Protect Your Business
                </h1>
                <p className="text-lg text-muted-foreground">
                  You've worked hard to build your business. I'll help you protect it with 
                  comprehensive coverage tailored to your industry and needs.
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
                  <Briefcase className="h-24 w-24 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-foreground">Coverage Options</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Comprehensive protection for businesses of all sizes
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {products.map((product) => (
                <Card key={product.title}>
                  <CardContent className="flex gap-4 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <product.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-foreground">{product.title}</h3>
                      <p className="text-sm text-muted-foreground">{product.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="bg-muted/50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-foreground">Industries I Serve</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Experience across a wide range of business types
              </p>
            </div>
            <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
              {industries.map((industry) => (
                <Badge key={industry} variant="outline" className="px-4 py-2 text-sm">
                  {industry}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24">
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
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Ready to Protect Your Business?</h2>
            <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
              Schedule a free consultation to discuss your business insurance needs
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
