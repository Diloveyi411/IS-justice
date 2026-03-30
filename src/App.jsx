import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PathSelector from './components/PathSelector'
import Services from './components/Services'
import Comparison from './components/Comparison'
import Stats from './components/Stats'
import CaseStudies from './components/CaseStudies'
import FounderQuote from './components/FounderQuote'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PathSelector />
      <Services />
      <Comparison />
      <Stats />
      <CaseStudies />
      <FounderQuote />
      <LeadForm />
      <Footer />
    </>
  )
}
