import ReusableButton from "../Shared/ReusableButton";
import { WhatsAppIcon } from "../Shared/Icons";
import { TCar } from "../../types";
const CarInfoCard = ({ car }: { car: TCar }) => {
    const carInfos = [
      {
        label: "Doors",
        value: car?.door,
        icon: "M8 10h.01M12 10h.01M16 10h.01M9 16h6m-6 4h6a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z",
      },
      {
        label: "Passengers",
        value: car?.passengers,
        icon: "M13 16h-1v-4h1m0-4h.01M16.5 20h-9a2.5 2.5 0 01-2.5-2.5v-11A2.5 2.5 0 017.5 4h9a2.5 2.5 0 012.5 2.5v11a2.5 2.5 0 01-2.5 2.5z",
      },
      {
        label: "Transmission",
        value: car?.transmission,
        icon: "M4 16c0 2.21 3.582 4 8 4s8-1.79 8-4-3.582-4-8-4-8 1.79-8 4z",
      },
      {
        label: "Age",
        value: car?.year,
        icon: "M19.428 15.341A8 8 0 118 3.2M22 12a10 10 0 11-7.03-9.84",
      },
      {
        label: "Luggage",
        value: car?.luggage,
        icon: "M3 10h11m4 0h5M3 14h5m4 0h5m4 0h5M5 6h4m4 0h10",
      },
      {
        label: "Air Condition",
        value: car?.airCondition ? "Yes":"No",
        icon: "M3 8h7a4 4 0 014 4h6a4 4 0 014-4V5a2 2 0 00-2-2H5a2 2 0 00-2 2v3z",
      },
    ];
  
    return (
      <div className="w-full md:max-w-xs md:sticky top-0 max-h-fit p-6 bg-primary/5 rounded-lg shadow-lg">
        <div className="text-4xl font-bold mb-2">
          ${car?.pricePerDay}<span className="text-lg font-normal">/Per Day</span>
        </div>
        <div className="space-y-3 border-t border-gray-700 pt-4">
          {carInfos.map((feature, index) => (
            <div className="flex items-center justify-between" key={index}>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={feature.icon}
                  />
                </svg>
                {feature.label}
              </div>
              <span>{feature.value}</span>
            </div>
          ))}
        </div>
        <BookingOptions />
      </div>
    );
  };
  
export default CarInfoCard
  const BookingOptions = () => {
    return (
      <div className="flex flex-col sm:flex-row justify-between items-center my-5 space-y-4 sm:space-y-0">
        <div className="flex justify-center space-x-4">
          <ReusableButton label="Book Now" size="medium" />
        </div>
        <p className="text-center sm:text-left">OR</p>
        <a className="flex justify-center">
          <WhatsAppIcon />
        </a>
      </div>
    );
  };
  