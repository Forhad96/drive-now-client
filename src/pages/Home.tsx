import Banner from "../components/banner/Banner";
import CustomerTestimonials from "../components/customerTestimonials/CustomerTestimonials";
import DriverSection from "../components/driver/DriverSection";
import FAQSection from "../components/faqSection/FaqSection";
import FeaturedCar from "../components/featured-car/FeaturedCar";
import OurFleet from "../components/ourFleet/OurFleet";
import ServiceSection from "../components/Service/ServiceSection";
import StatsSection from "../components/StatsSection/StatsSection";
import VisionMission from "../components/visionMission/VisionMission";
const Home = () => {
  return (
    <div>
      <Banner />
      <OurFleet />
      <ServiceSection />
      <StatsSection />
      <FAQSection />
      <DriverSection/>
      <VisionMission/>
      <FeaturedCar />
      <CustomerTestimonials />
    </div>
  );
};
export default Home;
