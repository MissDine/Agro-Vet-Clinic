import React from 'react'
import Navbar from '../components/navbar'
import ServicesHero from '../components/servicesHero'
import ServicesList from '../components/servicesList'
import Servicescta from '../components/servicescta'
import ServicesCta2 from '../components/servicesCta2'
import Footer from '../components/footer'
import Seo from '../components/Seo'
import { SITE_URL } from '../config/site'

/**
 * Services page composition component.
 *
 * @description
 * Renders the services hero, detailed service list, emergency call-to-action,
 * appointment call-to-action, and footer.
 *
 * @returns {JSX.Element} Complete services page layout.
 */
function Services() {
  return (
    <>
      <Seo
        title="Our Services"
        description="Comprehensive mobile veterinary services in Kisii, Nyamira, and Nyanza: preventive care, diagnostics, surgery, emergency care, livestock and pet treatment at your location."
        path="/services"
        keywords="vet services Kisii, animal surgery Nyamira, pet vaccinations Nyanza, livestock treatment Kenya, emergency vet services"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Our Services | The Monna Veterinary Clinic',
          description:
            'Comprehensive mobile veterinary services across Kisii, Nyamira, and Nyanza.',
          url: `${SITE_URL}/services`,
        }}
      />
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesList />
        <Servicescta />
        <ServicesCta2 />
      </main>
      <Footer />
    </>
  )
}

export default Services
