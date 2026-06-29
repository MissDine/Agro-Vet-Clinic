import Navbar from '../components/navbar'
import Hero from '../components/hero'
import OurServices from '../components/ourServices'
import ValueProp from '../components/animalSlider'
import Cta from '../components/cta'
import Footer from '../components/footer'
import Seo from '../components/Seo'
import {
  DEFAULT_DESCRIPTION,
  LOCAL_BUSINESS_JSON_LD,
} from '../config/site'

/**
 * Home page composition component.
 *
 * @description
 * Assembles all homepage sections in visual order.
 *
 * @returns {JSX.Element} Complete home page layout.
 */
function Home() {
  return (
    <>
      <Seo
        description={DEFAULT_DESCRIPTION}
        path="/"
        jsonLd={LOCAL_BUSINESS_JSON_LD}
      />
      <Navbar />
      <main>
        <Hero />
        <OurServices />
        <ValueProp />
        <Cta />
      </main>
      <Footer />
    </>
  )
}

export default Home
