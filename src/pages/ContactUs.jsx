import ContactUsHero from "../components/contactUsHero"
import ContactUsLocation from "../components/contactUsLocation"
import ContactUsForm from "../components/contactUsForm"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import ContactUsCta from "../components/contactUsCta"
import Seo from "../components/Seo"
import {
  SITE_EMAIL,
  SITE_PHONE,
  SITE_PHONE_DISPLAY,
  SITE_URL,
} from "../config/site"

/**
 * Contact page composition component.
 *
 * @description
 * Renders the contact hero, form, service area/hours block, emergency CTA,
 * and footer.
 *
 * @returns {JSX.Element} Complete contact page layout.
 */
function ContactUs() {
  return (
    <>
      <Seo
        title="Contact Us"
        description={`Book a mobile vet visit or emergency call-out in Kisii, Nyamira, and Nyanza. Call ${SITE_PHONE_DISPLAY} or email ${SITE_EMAIL}.`}
        path="/contact"
        keywords="contact vet Kisii, book vet appointment Nyamira, emergency vet phone Nyanza, Monna Veterinary Clinic contact"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact The Monna Veterinary Clinic',
          url: `${SITE_URL}/contact`,
          mainEntity: {
            '@type': 'VeterinaryCare',
            name: 'The Monna Veterinary Clinic',
            telephone: SITE_PHONE,
            email: SITE_EMAIL,
          },
        }}
      />
      <Navbar />
      <main>
        <ContactUsHero />
        <ContactUsForm />
        <ContactUsLocation />
        <ContactUsCta />
      </main>
      <Footer />
    </>
  )
}

export default ContactUs
