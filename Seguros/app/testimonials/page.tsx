import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Star, ArrowRight, Quote } from "lucide-react"

export const metadata: Metadata = {
  title: "Testimonials | Sarah Mitchell Insurance",
  description: "See what our clients say about working with Sarah Mitchell Insurance.",
}

const testimonials = [
  {
    name: "Michael Thompson",
    role: "Homeowner",
    content: "Sarah saved us over $400 a year on our home and auto bundle. She took the time to understand our needs and found coverage we didn't even know we needed. When we had water damage last year, she guided us through the entire claims process.",
    rating: 5,
    insuranceType: "Home & Auto",
  },
  {
    name: "Jennifer Martinez",
    role: "Small Business Owner",
    content: "As a small business owner, I was overwhelmed by insurance options. Sarah made it simple and found me comprehensive coverage within my budget. She even helped me understand my liability exposure that I hadn't considered.",
    rating: 5,
    insuranceType: "Business",
  },
  {
    name: "Robert Chen",
    role: "Family of Four",
    content: "When we had a claim after a car accident, Sarah was there every step of the way. She advocated for us with the insurance company and made sure we got fair treatment. That personal touch is invaluable.",
    rating: 5,
    insuranceType: "Auto",
  },
  {
    name: "Patricia Williams",
    role: "Retiree",
    content: "I've been with Sarah for over 10 years now. She reviews my policies annually and has consistently found ways to improve my coverage while keeping costs reasonable. I recommend her to all my friends.",
    rating: 5,
    insuranceType: "Home & Life",
  },
  {
    name: "David & Lisa Anderson",
    role: "New Homeowners",
    content: "As first-time homebuyers, we had no idea what insurance we needed. Sarah patiently explained everything and helped us get the right coverage. She even noticed our home qualified for discounts we didn't know about.",
    rating: 5,
    insuranceType: "Home",
  },
  {
    name: "James Rodriguez",
    role: "Contractor",
    content: "Finding insurance for my contracting business was a nightmare until I met Sarah. She understood my industry and found a carrier that specializes in construction. My premiums are reasonable and I'm fully protected.",
    rating: 5,
    insuranceType: "Business",
  },
  {
    name: "Emily Foster",
    role: "Young Professional",
    content: "I was paying way too much for car insurance through one of those big online companies. Sarah found me the same coverage for 30% less and I actually have someone I can call when I have questions.",
    rating: 5,
    insuranceType: "Auto",
  },
  {
    name: "Thomas & Mary O'Brien",
    role: "Parents",
    content: "After our second child was born, Sarah helped us understand our life insurance options. She didn't push expensive policies we didn't need - instead she found term coverage that fit our budget and protects our family.",
    rating: 5,
    insuranceType: "Life",
  },
]

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4">Testimonials</Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              What My Clients Say
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Don't just take my word for it - hear from real clients about their experience
            </p>
            <div className="mt-8 flex items-center justify-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-lg font-medium">4.9 out of 5</span>
              <span className="text-muted-foreground">based on 150+ reviews</span>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <Quote className="mb-4 h-8 w-8 text-primary/20" />
                    <div className="mb-4 flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <blockquote className="mb-4 text-foreground">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                          {testimonial.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                      <Badge variant="outline">{testimonial.insuranceType}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              Ready to Experience the Difference?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
              Join over 2,500 satisfied clients who trust me with their insurance needs
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
