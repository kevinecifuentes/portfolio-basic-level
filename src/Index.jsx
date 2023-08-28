import Footer from './components/Footer'
import Lenguages from './components/Lenguages'
import Hero from './components/Hero'
import Principles from './components/Principles'
import Skillset from './components/Skillset'
import Works from './components/Works'
import Nav from './components/Nav'
import Contact from './components/Contact'
import Hobbies from './components/Hobbies'

const Index = () => {
  return (
    <section className="max-w-[1700px] mx-auto">
      <Nav />
      <Hero />
      <Lenguages />
      <Hobbies />
      <Principles />
      <Skillset />
      <Works />
      <Contact />
      <Footer />
    </section>
  )
}
export default Index
