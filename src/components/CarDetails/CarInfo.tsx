import { FC, useState } from "react";
import { TCar } from "../../types";
import BookingFrom from "../bookings/BookingFrom";

type CarInfoProps = Partial<TCar> & {
  onWishlist: () => void;
  rating: string;
  reviews: string;
};

const CarInfo: FC<CarInfoProps> = ({
  _id,
  name,
  model,
  pricePerDay,
  pricePerHour,
  description,
  features,
  rating,
  carType,
  color,
  reviews,

}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };


  return (
    <div className="w-full md:w-1/2 px-4">
      <h2 className="text-3xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-4">Model: {model}</p>
      <p className="text-gray-600 mb-4">Car Type: {carType}</p>
      <div className="mb-4">
        <span className="text-2xl font-bold mr-2">
          Price Day:-${pricePerDay}
        </span>
        <span className="text-gray-500 line-through">${pricePerHour}</span>
      </div>
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-yellow-500"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>
        ))}
        <span className="ml-2 text-gray-600">
          {rating} ({reviews} reviews)
        </span>
      </div>
      <p className="text-gray-700 mb-6">{description}</p>

      {/* Color Selection */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Color:{color}</h3>
      </div>
      {/* Action Buttons */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={showModal}
          className="bg-primary flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Book Now
        </button>
      </div>

      {/* Key Features */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
        <ul className="list-disc list-inside text-gray-700">
          {features?.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <BookingFrom isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} carName={name} carId={_id}/>
    </div>
  );
};
export default CarInfo;
