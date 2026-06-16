import Hero from "../components/hero/Hero";
import AboutSection from "../components/about/AboutSection";
import MissionSection from "../components/mission/MissionSection";
import StatsSection from "../components/stats/StatsSection";
import DonationSection from "../components/donation/DonationSection";
import GallerySection from "../components/gallery/GallerySection"; 
import Testimonials from "../components/home/Testimonials";
import VolunteerSection from "../components/volunteer/VolunteerSection";
import ContactSection from "../components/contact/ContactSection";
import Achievements from "../components/home/Achievements";
import DonationAppeal from "../components/home/DonationAppeal";
import LibrarySection from "../components/home/LibrarySection"; 
import ReviewForm from "../components/home/ReviewForm";
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



<GallerySection />

<Testimonials /> 
<ReviewForm />
<VolunteerSection />
<ContactSection />
    </>
  );
};

export default Home;