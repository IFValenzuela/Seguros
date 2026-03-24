import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Award, Users, Clock, CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About | Sarah Mitchell Insurance",
  description: "Learn about Sarah Mitchell, your trusted local insurance agent with over 15 years of experience.",
}

const stats = [
  { label: "Years Experience", value: "15+", icon: Clock },
  { label: "Happy Clients", value: "2,500+", icon: Users },
  { label: "BBB Rating", value: "A+", icon: Award },
  { label: "Insurance Carriers", value: "20+", icon: Shield },
]

const values = [
  {
    title: "Personalized Service",
    description: "Every client's needs are unique. I take the time to understand your specific situation and find the right coverage for you.",
  },
  {
    title: "Transparent Communication",
    description: "No confusing jargon or hidden fees. I explain your options in plain language so you can make informed decisions.",
  },
  {
    title: "Claims Advocacy",
    description: "When you need to file a claim, I'm in your corner. I work directly with carriers to ensure you get fair treatment.",
  },
  {
    title: "Long-term Relationships",
    description: "I'm not just here to sell a policy. I review your coverage annually to make sure it still meets your changing needs.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <Badge variant="secondary">About Me</Badge>
                <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  Your Neighbor, Your Agent
                </h1>
                <p className="text-lg text-muted-foreground">
                  Hi, I'm Sarah Mitchell. For over 15 years, I've been helping families and businesses 
                  in our community find the right insurance coverage at the right price.
                </p>
                <p className="text-muted-foreground">
                  Unlike online quote engines or 1-800 numbers, when you work with me, you get a real person 
                  who knows your name, understands your situation, and is here when you need help.
                </p>
                <Button asChild>
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <Card key={stat.label}>
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <stat.icon className="mb-2 h-8 w-8 text-primary" />
                      <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Why Work With Me
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                My approach to insurance is simple: treat every client the way I'd want to be treated
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {values.map((value) => (
                <Card key={value.title}>
                  <CardContent className="flex gap-4 p-6">
                    <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-2 font-semibold text-foreground">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="bg-muted/50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground">
                Credentials & Affiliations
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="px-4 py-2 text-sm">
                  Licensed Property & Casualty Agent
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm">
                  Licensed Life & Health Agent
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm">
                  Certified Insurance Counselor
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm">
                  Better Business Bureau A+ Rated
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm">
                  Chamber of Commerce Member
                </Badge>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
