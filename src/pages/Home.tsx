import Banner from "../components/banner/Banner";
import Cars from "../components/cars/Cars";
import CustomerTestimonials from "../components/customerTestimonials/CustomerTestimonials";
import FeaturedCar from "../components/featured-car/FeaturedCar";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <Banner/>
            <FeaturedCar/>
            <CustomerTestimonials/>
            <Cars/>
            {/* <Footer/> */}
        </div>
    );
};
export default Home;