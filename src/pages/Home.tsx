import Banner from "../components/banner/Banner";
import Testimonial from "../components/Testimonial/Testimonial";
import DriverSection from "../components/driver/DriverSection";
import FAQSection from "../components/faqSection/FaqSection";
import FeaturedCar from "../components/featured-car/FeaturedCar";
import OurFleet from "../components/ourFleet/OurFleet";
import ServiceSection from "../components/Service/ServiceSection";
import StatsSection from "../components/StatsSection/StatsSection";
const Home = () => {
  return (
    <div>
      <Banner />
      <OurFleet />
      <ServiceSection />
      <StatsSection />
      <FAQSection />
      <DriverSection/>
      <FeaturedCar />
      <Testimonial />
    </div>
  );
};
export default Home;
