import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { ServicesPreview } from "@/components/services-preview"
import { TestimonialsPreview } from "@/components/testimonials-preview"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="w-full bg-[#F5F4EF] min-h-screen overflow-x-hidden">
      {/* Header sits sticky inside the rounded app window */}
      <Header />
      <main>
        {/* Hero: cinematic video header with full-bleed */}
        <Hero />
        <ServicesPreview />
        <TestimonialsPreview />
        {/* CTA Section now includes footer elements */}
        <CTASection />
      </main>
    </div>
  )
}
