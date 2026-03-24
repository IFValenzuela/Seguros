import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ServicesPreview } from "@/components/services-preview"
import { TestimonialsPreview } from "@/components/testimonials-preview"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ServicesPreview />
        <TestimonialsPreview />
        <CTASection />
      </main>
    </div>
  )
}
