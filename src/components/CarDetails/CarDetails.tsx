// CarDetails.tsx
import { FC, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleCarsQuery } from "../../redux/features/car/CarManagement.api";
import { TCar } from "../../types";
import CarImage from "./CarImage";
import CarServiceInfo from "../carServiceInfo/CarServiceInfo";
import AmenitiesFeatures from "./AmenitiesFeatures";
import PoliciesAgreement from "../policiesAgreement/PoliciesAgreement";
import Container from "../Shared/Container";
import CarInfoCard from "./CarInfoCard";

const CarDetails: FC = () => {
  const { id } = useParams();
  const { data } = useGetSingleCarsQuery(id);
  const carDetails = data as TCar;
  const [selectedImage, setSelectedImage] = useState(
    "https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );

  const imageThumbnails = useMemo(
    () => [
      "https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/13781/pexels-photo-13781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/368685/pexels-photo-368685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    []
  );

  const onThumbnailClick = (src: string) => setSelectedImage(src);

  // const addToWishlist = () => console.log("Added to wishlist");

  return (
    <Container>
      <div className="relative grid md:grid-cols-5 gap-1 px-4 py-8">
        <div className=" md:col-span-2">
          <CarInfoCard car={carDetails} />
        </div>
        <div
          className="md:col-span-3 -mx-4 overflow-y-auto max-h-screen "
          // style={{ maxHeight: "100vh" }}
        >
          <CarImage
            mainImage={selectedImage}
            thumbnails={imageThumbnails}
            onThumbnailClick={onThumbnailClick}
          />
          <CarServiceInfo />
          <AmenitiesFeatures  feature={carDetails?.features}/>
          <PoliciesAgreement />
        </div>
      </div>
    </Container>
  );
};

export default CarDetails;

