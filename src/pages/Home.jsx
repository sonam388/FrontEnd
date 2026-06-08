import Hero from "../components/hero/Hero";
import AboutSection from "../components/about/AboutSection";
import MissionSection from "../components/mission/MissionSection";
import StatsSection from "../components/stats/StatsSection";
import DonationSection from "../components/donation/DonationSection";
import GallerySection from "../components/gallery/GallerySection";
import Testimonials from "../components/testimonials/Testimonials";
import VolunteerSection from "../components/volunteer/VolunteerSection";
import ContactSection from "../components/contact/ContactSection";
import Achievements from "../components/home/Achievements";
import DonationAppeal from "../components/home/DonationAppeal";
import LibrarySection from "../components/home/LibrarySection";
import ProductsSection from "../components/home/ProductsSection";
const Home = () => {
  return (
    <>
     <Hero />
<AboutSection />
<Achievements />

<DonationAppeal />

<LibrarySection />

<MissionSection />
<StatsSection />
<DonationSection />

<ProductsSection />

<GallerySection />
<Testimonials />
<VolunteerSection />
<ContactSection />
    </>
  );
};

export default Home;