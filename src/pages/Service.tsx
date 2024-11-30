import { services } from "../components/Service/ServicesData";
import ServiceCard from "../components/Service/ServiceCard";
import Container from "../components/Shared/Container";

const Service = () => {
    return (
        <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        </Container>
    );
};
export default Service;