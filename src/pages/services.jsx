import React from 'react'
import Navbar from '../components/navbar'
import ServicesHero from '../components/servicesHero'
import ServicesList from '../components/servicesList'
import Servicescta from '../components/servicescta'
import ServicesCta2 from '../components/servicesCta2'
import Footer from '../components/footer'

function Services() {
  return (
    <div>
      <Navbar />
        <ServicesHero />
     <ServicesList/>
     <Servicescta/>
     <ServicesCta2/>
      <Footer />
    </div>
  )
}

export default Services
