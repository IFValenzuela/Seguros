import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustSection } from "@/components/trust-section"
import { ServicesGrid } from "@/components/services-preview"
import { MissionBand } from "@/components/mission-band"
import { CTASection } from "@/components/cta-section"
import { Assurances } from "@/components/assurances"
import { Footer } from "@/components/footer"

/* One pattern per job: full-bleed photo for mood (hero, mission line), centred statement
   to introduce, one card grid for services, framed slate panel to make contact, three promises to close. */
export default function HomePage() {
  return (
    <div className="w-full overflow-x-clip">
      <Header overlay />
      <main>
        <Hero />
        <TrustSection />
        <ServicesGrid />
        <MissionBand />
        <CTASection />
        <Assurances />
      </main>
      <Footer />
    </div>
  )
}
