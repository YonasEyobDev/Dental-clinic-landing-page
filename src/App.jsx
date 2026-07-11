import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import Stats from "@/components/sections/Stats"
import Services from "@/components/sections/Services"
import About from "@/components/sections/About"
import Doctors from "@/components/sections/Doctors"
import Testimonials from "@/components/sections/Testimonials"
import FAQ from "@/components/sections/FAQ"
import AppointmentCTA from "@/components/sections/AppointmentCTA"
import Contact from "@/components/sections/Contact"

function App() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Doctors />
        <Testimonials />
        <FAQ />
        <AppointmentCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
