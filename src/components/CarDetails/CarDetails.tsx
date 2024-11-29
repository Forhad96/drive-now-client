// Product.js
import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleCarsQuery } from "../../redux/features/car/CarManagement.api";
import { TCar } from "../../types";
import CarInfo from "./CarInfo";
import CarImage from "./CarImage";
import CarServiceInfo from "../carServiceInfo/CarServiceInfo";
import AmenitiesFeatures from "./AmenitiesFeatures";
import PoliciesAgreement from "../policiesAgreement/PoliciesAgreement";

const CarDetails: FC = () => {
  const { id } = useParams();
  const { data } = useGetSingleCarsQuery(id);
  const carData = data?.data as TCar;
  const [mainImage, setMainImage] = useState(
    "https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );
  const thumbnails = [
    "https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/13781/pexels-photo-13781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/368685/pexels-photo-368685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const handleThumbnailClick = (src: string) => {
    setMainImage(src);
  };

  const handleWishlist = () => {
    console.log("Added to wishlist");
  };

  return (
    <div className="">
      <div className="mx-auto flex justify-between gap-10   px-4 py-8">
        <div className=" flex-wrap flex-1 -mx-4">
          <CarImage
            mainImage={mainImage}
            thumbnails={thumbnails}
            onThumbnailClick={handleThumbnailClick}
          />
          <CarServiceInfo/>
          <AmenitiesFeatures/>
          <PoliciesAgreement/>
          <CarInfo
            _id={carData?._id}
            name={carData?.name}
            model={carData?.model}
            pricePerDay={carData?.pricePerDay}
            pricePerHour={carData?.pricePerHour}
            carType={carData?.carType}
            color={carData?.color}
            rating="4.5"
            reviews="120"
            description={carData?.description}
            features={carData?.features}
            onWishlist={handleWishlist}
          />
        </div>
          <Card />

      </div>
    </div>
  );
};

export default CarDetails;

const Card = () => {
  return (
    <div className="max-w-sm max-h-fit p-6 bg-black text-white rounded-lg shadow-lg">
      {/* Price Section */}
      <div className="text-4xl font-bold mb-2">
        $219<span className="text-lg font-normal">/Per Day</span>
      </div>

      {/* Features Section */}
      <div className="space-y-3 border-t border-gray-700 pt-4">
        {[
          {
            label: "Doors",
            value: "4",
            icon: "M8 10h.01M12 10h.01M16 10h.01M9 16h6m-6 4h6a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z",
          },
          {
            label: "Passengers",
            value: "2",
            icon: "M13 16h-1v-4h1m0-4h.01M16.5 20h-9a2.5 2.5 0 01-2.5-2.5v-11A2.5 2.5 0 017.5 4h9a2.5 2.5 0 012.5 2.5v11a2.5 2.5 0 01-2.5 2.5z",
          },
          {
            label: "Transmission",
            value: "Auto",
            icon: "M4 16c0 2.21 3.582 4 8 4s8-1.79 8-4-3.582-4-8-4-8 1.79-8 4z",
          },
          {
            label: "Age",
            value: "4",
            icon: "M19.428 15.341A8 8 0 118 3.2M22 12a10 10 0 11-7.03-9.84",
          },
          {
            label: "Luggage",
            value: "2",
            icon: "M3 10h11m4 0h5M3 14h5m4 0h5m4 0h5M5 6h4m4 0h10",
          },
          {
            label: "Air Condition",
            value: "Yes",
            icon: "M3 8h7a4 4 0 014 4h6a4 4 0 014-4V5a2 2 0 00-2-2H5a2 2 0 00-2 2v3z",
          },
        ].map((item, idx) => (
          <div className="flex items-center justify-between" key={idx}>
            <span className="flex items-center">
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
                  d={item.icon}
                />
              </svg>
              {item.label}
            </span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>

      {/* Buttons Section */}
      <div className="flex items-center justify-between mt-6 space-x-3">
        <button className="bg-orange-500 text-white py-2 px-4 rounded-lg flex-1 hover:bg-orange-600">
          Book Now
        </button>
        <button className="flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
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
              d="M12 11c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM4.25 5.125A6.25 6.25 0 0110.5 4v0a6.25 6.25 0 016.25 6.25c0 3.875-5.875 10.125-5.875 10.125S4.25 13.125 4.25 9.25a6.25 6.25 0 01.125-4.125z"
            />
          </svg>
          WhatsApp
        </button>
      </div>
    </div>
  );
};

// export default Card;
