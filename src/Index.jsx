import Experience from './components/Experience'
import Footer from './components/Footer'
import Lenguages from './components/Lenguages'
import Hero from './components/Hero'
import Principles from './components/Principles'
import Skillset from './components/Skillset'
import Works from './components/Works'
import Nav from './components/Nav'
import Contact from './components/Contact'
import ContactMe from './components/ContactMe'

const Index = () => {
  return (
    <section className="max-w-[1700px] mx-auto">
      <Nav />
      <Hero />
      <Experience />
      <Principles />
      <Skillset />
      <Works />
      <Lenguages />
      <Contact />
      {/* <ContactMe /> */}
      <Footer />
    </section>
  )
}
export default Index
