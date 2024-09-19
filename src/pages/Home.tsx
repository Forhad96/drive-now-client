import Banner from "../components/banner/Banner";
import CustomerTestimonials from "../components/customerTestimonials/CustomerTestimonials";
import FeaturedCar from "../components/featured-car/FeaturedCar";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <FeaturedCar/>
            <CustomerTestimonials/>
            <Footer/>
        </div>
    );
};
export default Home;