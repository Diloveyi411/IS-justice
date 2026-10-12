import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PathSelector from './components/PathSelector'
import Services from './components/Services'
import Comparison from './components/Comparison'
import Stats from './components/Stats'
import Pricing from './components/Pricing'
import CaseStudies from './components/CaseStudies'
import FounderQuote from './components/FounderQuote'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'
import useScrollFx from './hooks/useScrollFx'

export default function App() {
  useScrollFx()

  return (
    <>
      <Navbar />
      <Hero />
      <Comparison />
      <div className="fx-curtain fx-curtain--dark" data-fx>
        <Services />
      </div>
      <Stats />
      <Pricing />
      <CaseStudies />
      <FounderQuote />
      <PathSelector />
      <LeadForm />
      <div className="fx-curtain fx-curtain--light" data-fx>
        <Footer />
      </div>
    </>
  )
}
