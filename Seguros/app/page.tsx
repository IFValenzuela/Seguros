import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { ServicesPreview } from "@/components/services-preview"
import { TestimonialsPreview } from "@/components/testimonials-preview"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16 lg:pt-20">
        {/* Hero + TrustBar wrapper - fills viewport above the fold */}
        <div className="flex flex-col min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)]">
          <Hero />
          <TrustBar />
        </div>
        <ServicesPreview />
        <TestimonialsPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
