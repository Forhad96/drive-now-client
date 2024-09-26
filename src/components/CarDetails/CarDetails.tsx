// Product.js
import  { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleCarsQuery } from "../../redux/features/car/CarManagement.api";
import { TCar } from "../../types";
import CarInfo from "./CarInfo";
import CarImage from "./CarImage";

const CarDetails: FC = () => {
  const { id } = useParams();
  const { data } = useGetSingleCarsQuery(id);
  const carData = data?.data as TCar;
  console.log(carData);

  // return
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
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          <CarImage
            mainImage={mainImage}
            thumbnails={thumbnails}
            onThumbnailClick={handleThumbnailClick}
          />
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
      </div>
    </div>
  );
};

export default CarDetails;
