import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { ServicesSection } from './components/ServicesSection'
import { AboutSection } from './components/AboutSection'
import { BookCovers } from './components/BookCovers'
import { Packages } from './components/Packages'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { ContactSection } from './components/ContactSection'
import { FooterSection } from './components/FooterSection'
import { Toaster } from './components/ui/toaster'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <BookCovers />
        <Packages />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>
      <FooterSection />
      <Toaster />
    </div>
  )
}
