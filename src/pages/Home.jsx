import Navbar from '../components/navbar'
import Hero from '../components/hero'
import OurServices from '../components/ourServices'
import ValueProp from '../components/animalSlider'
import Cta from '../components/cta'
import Footer from '../components/footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <OurServices/>
      <ValueProp/>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default Home
