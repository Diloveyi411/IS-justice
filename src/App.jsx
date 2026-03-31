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

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Comparison />
      <Services />
      <Stats />
      <Pricing />
      <CaseStudies />
      <FounderQuote />
      <PathSelector />
      <LeadForm />
      <Footer />
    </>
  )
}
