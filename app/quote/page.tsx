"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Car, Home, Heart, Briefcase, ArrowRight, ArrowLeft, CheckCircle, Shield } from "lucide-react"

const insuranceTypes = [
  { id: "auto", label: "Auto Insurance", icon: Car, description: "Cars, trucks, motorcycles" },
  { id: "home", label: "Home Insurance", icon: Home, description: "Homeowners, renters, condo" },
  { id: "life", label: "Life Insurance", icon: Heart, description: "Term, whole life, final expense" },
  { id: "business", label: "Business Insurance", icon: Briefcase, description: "Liability, property, workers comp" },
]

export default function QuotePage() {
  const [step, setStep] = useState(1)
  const [insuranceType, setInsuranceType] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipCode: "",
  })

  const totalSteps = 3
  const progress = (step / totalSteps) * 100

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(4) // Success state
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-muted/30">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-muted/30 py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4">Free Quote</Badge>
            <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Get Your Personalized Quote
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Answer a few quick questions and I'll prepare a custom quote for you
            </p>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto max-w-2xl px-4">
            {step < 4 && (
              <div className="mb-8">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-muted-foreground">Step {step} of {totalSteps}</span>
                  <span className="font-medium text-foreground">{Math.round(progress)}% Complete</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )}

            <Card>
              {step === 1 && (
                <>
                  <CardHeader>
                    <CardTitle>What type of insurance do you need?</CardTitle>
                    <CardDescription>Select the coverage you're interested in</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={insuranceType} onValueChange={setInsuranceType} className="grid gap-4 sm:grid-cols-2">
                      {insuranceTypes.map((type) => (
                        <div key={type.id}>
                          <RadioGroupItem value={type.id} id={type.id} className="peer sr-only" />
                          <Label
                            htmlFor={type.id}
                            className="flex cursor-pointer flex-col items-center gap-2 rounded-lg border-2 border-muted bg-card p-6 text-center transition-colors hover:bg-accent peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                          >
                            <type.icon className="h-8 w-8 text-primary" />
                            <span className="font-medium">{type.label}</span>
                            <span className="text-sm text-muted-foreground">{type.description}</span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                    <Button className="mt-6 w-full" onClick={handleNext} disabled={!insuranceType}>
                      Continue
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </>
              )}

              {step === 2 && (
                <>
                  <CardHeader>
                    <CardTitle>Tell me about yourself</CardTitle>
                    <CardDescription>This helps me find the best rates for you</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <FieldGroup>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field>
                          <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            placeholder="John"
                            required
                          />
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            placeholder="Smith"
                            required
                          />
                        </Field>
                      </div>
                      <Field>
                        <FieldLabel htmlFor="zipCode">ZIP Code</FieldLabel>
                        <Input
                          id="zipCode"
                          value={formData.zipCode}
                          onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                          placeholder="12345"
                          maxLength={5}
                          required
                        />
                      </Field>
                      <div className="flex gap-4">
                        <Button variant="outline" className="flex-1" onClick={handleBack}>
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Back
                        </Button>
                        <Button
                          className="flex-1"
                          onClick={handleNext}
                          disabled={!formData.firstName || !formData.lastName || !formData.zipCode}
                        >
                          Continue
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </FieldGroup>
                  </CardContent>
                </>
              )}

              {step === 3 && (
                <form onSubmit={handleSubmit}>
                  <CardHeader>
                    <CardTitle>How can I reach you?</CardTitle>
                    <CardDescription>I'll send your personalized quote within 24 hours</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor="email">Email Address</FieldLabel>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          required
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 123-4567"
                          required
                        />
                      </Field>
                      <div className="flex gap-4">
                        <Button variant="outline" className="flex-1" type="button" onClick={handleBack}>
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Back
                        </Button>
                        <Button className="flex-1" type="submit" disabled={!formData.email || !formData.phone}>
                          Get My Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </FieldGroup>
                  </CardContent>
                </form>
              )}

              {step === 4 && (
                <CardContent className="py-12">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-10 w-10 text-primary" />
                    </div>
                    <h2 className="mb-2 text-2xl font-bold text-foreground">Quote Request Received!</h2>
                    <p className="mb-6 max-w-md text-muted-foreground">
                      Thank you, {formData.firstName}! I'll review your information and send your 
                      personalized {insuranceTypes.find(t => t.id === insuranceType)?.label.toLowerCase()} quote 
                      to {formData.email} within 24 hours.
                    </p>
                    <div className="flex items-center gap-2 rounded-lg bg-muted p-4">
                      <Shield className="h-5 w-5 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        Your information is secure and will never be shared
                      </span>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>

            {step < 4 && (
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Your information is secure and will only be used to prepare your quote
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
