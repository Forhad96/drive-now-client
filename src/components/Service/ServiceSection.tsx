import ReusableButton from "../Shared/ReusableButton";
import Container from "../Shared/Container";
import { services } from "./ServicesData";
import ServiceCard from "./ServiceCard";
import SectionHeader from "../Shared/SectionHeader";

export default function ServiceSection() {
  return (
    <div className="bg-light-background py-16 px-4">
      <SectionHeader title="Explore our wide range of <br/>
rental services" subtitle="Our Services" size="large" />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0,4).map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-12 text-center text-sm">
          <p className="text-gray-600">
            Discover our range of car rental services designed to meet all your
            travel needs.
            <br />
            From a diverse fleet of vehicles to flexible rental plans.
          </p>
          <div className="flex items-center justify-center pt-4">
            <ReusableButton label="View All Service" />
          </div>
        </div>
      </Container>
    </div>
  );
}
