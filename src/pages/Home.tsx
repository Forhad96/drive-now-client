import Banner from "../components/banner/Banner";
import CustomerTestimonials from "../components/customerTestimonials/CustomerTestimonials";
import FeaturedCar from "../components/featured-car/FeaturedCar";
import OurFleet from "../components/ourFleet/OurFleet";
import ServiceSection from "../components/Service/ServiceSection";
import StatsSection from "../components/StatsSection/StatsSection";
const Home = () => {
  return (
    <div>
      <Banner />
<OurFleet/>
<ServiceSection/>
<StatsSection/>
      {/* <FeaturedCar />
      <CustomerTestimonials /> */}
    </div>
  );
};
export default Home;



