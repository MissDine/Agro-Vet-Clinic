import AnimalCarousel from "../components/animalSlider";
import Cta from "../components/cta";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import OurServices from "../components/ourServices";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurServices />
      <AnimalCarousel />
      <Cta />
      <Footer />
    </div>
  );
}

export default Home;
