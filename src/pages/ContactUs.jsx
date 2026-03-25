import ContactUsHero from "../components/contactUsHero"
import ContactUsLocation from "../components/contactUsLocation"
import ContactUsForm from "../components/contactUsForm"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
function ContactUs() {
  return (
    <div>
        <Navbar/>
      <ContactUsHero />
      <ContactUsForm/>
      <ContactUsLocation />
      <Footer/>
    </div>
  )
}

export default ContactUs
