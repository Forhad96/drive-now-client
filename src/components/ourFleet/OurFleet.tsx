
import { FC } from "react";
import CommonSlider from "../Shared/CommonSlider/CommonSlider";
import SliderAction from "../Shared/CommonSlider/SliderAction";
import Container from "../Shared/Container";
import SectionHeader from "../Shared/SectionHeader";
import { TCar } from "../../types";


const OurFleet = () => {
  const carData: TCar[] = [
    {
      _id: "1",
      name: "Tesla Model S",
      description: "Luxury electric sedan with cutting-edge technology.",
      brand: "Tesla",
      model: "Model S",
      year: 2022,
      color: "Red",
      isElectric: true,
      carType: "sedan",
      door: 4,
      passengers: 5,
      transmission: "Automatic",
      luggage: 2,
      airCondition: true,
      seats: 5,
      mileage: 15000,
      status: "available",
      location: "San Francisco, CA",
      features: ["Autopilot", "Panoramic Sunroof", "Bluetooth"],
      pricePerHour: 50,
      pricePerDay: 300,
      imageUrl: ["https://example.com/tesla-model-s.jpg"],
      isDeleted: false,
      __v: 0,
    },
    {
      _id: "2",
      name: "BMW X5",
      description: "Luxury midsize SUV with powerful engine options.",
      brand: "BMW",
      model: "X5",
      year: 2021,
      color: "Black",
      isElectric: false,
      carType: "SUV",
      door: 4,
      passengers: 7,
      transmission: "Automatic",
      luggage: 3,
      airCondition: true,
      seats: 7,
      mileage: 20000,
      status: "available",
      location: "New York, NY",
      features: ["Leather Seats", "Navigation System", "Bluetooth"],
      pricePerHour: 60,
      pricePerDay: 400,
      imageUrl: ["https://example.com/bmw-x5.jpg"],
      isDeleted: false,
      __v: 0,
    },
    {
      _id: "3",
      name: "Audi A4",
      description: "Compact executive car with high-quality interior.",
      brand: "Audi",
      model: "A4",
      year: 2020,
      color: "Blue",
      isElectric: false,
      carType: "sedan",
      door: 4,
      passengers: 5,
      transmission: "Automatic",
      luggage: 2,
      airCondition: true,
      seats: 5,
      mileage: 25000,
      status: "unavailable",
      location: "Los Angeles, CA",
      features: ["Sunroof", "Heated Seats", "Bluetooth"],
      pricePerHour: 45,
      pricePerDay: 280,
      imageUrl: ["https://example.com/audi-a4.jpg"],
      isDeleted: false,
      __v: 0,
    },
    {
      _id: "4",
      name: "Ford Mustang",
      description: "Iconic American sports car with muscular performance.",
      brand: "Ford",
      model: "Mustang",
      year: 2019,
      color: "Yellow",
      isElectric: false,
      carType: "coupe",
      door: 2,
      passengers: 4,
      transmission: "Manual",
      luggage: 1,
      airCondition: true,
      seats: 4,
      mileage: 30000,
      status: "available",
      location: "Miami, FL",
      features: ["Leather Seats", "Bluetooth", "Backup Camera"],
      pricePerHour: 70,
      pricePerDay: 350,
      imageUrl: ["https://example.com/ford-mustang.jpg"],
      isDeleted: false,
      __v: 0,
    },
    {
      _id: "5",
      name: "Chevrolet Bolt EV",
      description: "Affordable electric car with impressive range.",
      brand: "Chevrolet",
      model: "Bolt EV",
      year: 2023,
      color: "White",
      isElectric: true,
      carType: "electric",
      door: 4,
      passengers: 5,
      transmission: "Automatic",
      luggage: 2,
      airCondition: true,
      seats: 5,
      mileage: 5000,
      status: "available",
      location: "Austin, TX",
      features: ["Bluetooth", "Backup Camera", "Heated Seats"],
      pricePerHour: 40,
      pricePerDay: 250,
      imageUrl: ["https://example.com/chevrolet-bolt-ev.jpg"],
      isDeleted: false,
      __v: 0,
    },
    {
      _id: "6",
      name: "Honda Accord",
      description: "Reliable midsize car with spacious interior.",
      brand: "Honda",
      model: "Accord",
      year: 2022,
      color: "Silver",
      isElectric: false,
      carType: "sedan",
      door: 4,
      passengers: 5,
      transmission: "Automatic",
      luggage: 2,
      airCondition: true,
      seats: 5,
      mileage: 10000,
      status: "available",
      location: "Seattle, WA",
      features: ["Bluetooth", "Backup Camera", "Heated Seats"],
      pricePerHour: 30,
      pricePerDay: 180,
      imageUrl: ["https://example.com/honda-accord.jpg"],
      isDeleted: false,
      __v: 0,
    },
    {
      _id: "7",
      name: "Toyota RAV4",
      description: "Compact SUV with a comfortable ride and good fuel economy.",
      brand: "Toyota",
      model: "RAV4",
      year: 2021,
      color: "Green",
      isElectric: false,
      carType: "SUV",
      door: 4,
      passengers: 5,
      transmission: "Automatic",
      luggage: 2,
      airCondition: true,
      seats: 5,
      mileage: 15000,
      status: "available",
      location: "Denver, CO",
      features: ["Bluetooth", "Backup Camera", "Navigation System"],
      pricePerHour: 35,
      pricePerDay: 200,
      imageUrl: ["https://example.com/toyota-rav4.jpg"],
      isDeleted: false,
      __v: 0,
    },
    {
      _id: "8",
      name: "Mercedes-Benz E-Class",
      description: "Luxury sedan with advanced technology and comfort.",
      brand: "Mercedes-Benz",
      model: "E-Class",
      year: 2021,
      color: "Black",
      isElectric: false,
      carType: "sedan",
      door: 4,
      passengers: 5,
      transmission: "Automatic",
      luggage: 2,
      airCondition: true,
      seats: 5,
      mileage: 20000,
      status: "unavailable",
      location: "Chicago, IL",
      features: ["Bluetooth", "Sunroof", "Leather Seats"],
      pricePerHour: 80,
      pricePerDay: 450,
      imageUrl: ["https://example.com/mercedes-e-class.jpg"],
      isDeleted: false,
      __v: 0,
    },
    {
      _id: "9",
      name: "Nissan Leaf",
      description: "Affordable electric hatchback with good range.",
      brand: "Nissan",
      model: "Leaf",
      year: 2020,
      color: "Blue",
      isElectric: true,
      carType: "electric",
      door: 4,
      passengers: 5,
      transmission: "Automatic",
      luggage: 2,
      airCondition: true,
      seats: 5,
      mileage: 30000,
      status: "available",
      location: "Phoenix, AZ",
      features: ["Bluetooth", "Backup Camera", "Heated Seats"],
      pricePerHour: 25,
      pricePerDay: 150,
      imageUrl: ["https://example.com/nissan-leaf.jpg"],
      isDeleted: false,
      __v: 0,
    },
    {
      _id: "10",
      name: "Volkswagen Golf",
      description: "Compact car with excellent build quality and ride comfort.",
      brand: "Volkswagen",
      model: "Golf",
      year: 2019,
      color: "White",
      isElectric: false,
      carType: "hatchback",
      door: 4,
      passengers: 5,
      transmission: "Manual",
      luggage: 2,
      airCondition: true,
      seats: 5,
      mileage: 35000,
      status: "available",
      location: "Portland, OR",
      features: ["Bluetooth", "Backup Camera", "Heated Seats"],
      pricePerHour: 30,
      pricePerDay: 170,
      imageUrl: ["https://example.com/volkswagen-golf.jpg"],
      isDeleted: false,
      __v: 0,
    },
  ];
  return (
    <Container className="relative">
      <SectionHeader
        subtitle="Our Fleet"
        title="Explore our perfect and </br> extensive fleet"
      />
      <CommonSlider loop={true} sliderId="ourFleet" >
        {carData.map((item) => (
          <CarCard key={item._id} carData={item} />
        ))}
      </CommonSlider>
      <SliderAction
        sliderId="ourFleet"
        buttonColor="bg-primary"

      />
    </Container>
  );
};
export default OurFleet;

const CarCard:FC<{carData:TCar}>= ({carData}) => {
  
  return (
    <div className="max-w-sm bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg shadow-lg p-4">
      {/* Car Image */}
      <img
        src={"https://demo.awaikenthemes.com/novaride/wp-content/uploads/2024/08/Breeze-Compact.png" } // Replace with actual image
        alt={carData?.name}
        className="w-full  object-cover rounded-lg"
      />

      {/* Category Badge */}
      <span className="mt-3 inline-block bg-light-input dark:bg-dark-input text-primary dark:text-dark-text text-sm font-medium px-3 py-1 rounded-full">
        {carData?.carType}
      </span>

      {/* Car Title */}
      <h3 className="mt-3 text-xl font-semibold text-light-text dark:text-dark-text">
{carData?.name}
      </h3>

      {/* Features */}
      <div className="mt-3 flex justify-between text-light-text dark:text-dark-text text-sm">
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-primary dark:text-dark-text"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 8.25v-1.5A2.25 2.25 0 016.75 4.5h10.5a2.25 2.25 0 012.25 2.25v1.5m-15 0h15m-15 0v8.25a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V8.25m-15 0h15"
            />
          </svg>
          <span>{carData?.door}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-primary dark:text-dark-text"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25V9m9 0v9m0 0a2.25 2.25 0 01-2.25 2.25H8.25A2.25 2.25 0 016 18V9m9 9H9"
            />
          </svg>
          <span>{carData?.seats} Passenger</span>
        </div>
      </div>

      {/* Price and Action */}
      <div className="mt-4 flex justify-between items-center">
        <div>
          <span className="text-xl font-bold text-primary dark:text-primary">
            ${carData?.pricePerDay}
          </span>
          <span className="text-sm text-light-text dark:text-dark-text">
            /Per Day
          </span>
        </div>
        <button className="bg-primary dark:bg-dark-input text-light-buttonText dark:text-dark-buttonText p-3 rounded-full hover:bg-primaryHover dark:hover:bg-dark-buttonHover transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 12l-6.75 6.75M17.25 12l-6.75-6.75"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

// export default CarCard;
