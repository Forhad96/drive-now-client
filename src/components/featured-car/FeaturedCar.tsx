import { Button } from "antd";
import { useGetAllCarsQuery } from "../../redux/features/car/CarManagement.api";
import Container from "../Shared/Container";
import { useNavigate } from "react-router-dom";
import { TCar } from "../../types";
import { FC } from "react";

export default function FeaturedCar() {
  const { data } = useGetAllCarsQuery(undefined);
  const carData = data?.data?.result as TCar[];
  return (
    <Container>
      <div className="flex justify-between sm:text-center md:mx-auto mb-20">
        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Featured Car
        </h3>
        <Button type="primary" className="bg-green-900">
          view All
        </Button>
      </div>
      <div className="flex justify-between items-center gap-4">
        {carData?.slice(0, 3).map((car) => (
          <FeaturedCard
            _id={car?._id}
            name={car?.name}
            description={car?._id}
            pricePerHour={car?.pricePerDay}
          />
        ))}
      </div>
    </Container>
  );
}

const FeaturedCard: FC<Partial<TCar>> = ({
  _id,
  name,
  description,
  pricePerHour,
}) => {
  // console.log(car);
  const navigate = useNavigate();
  const handleGoto = () => {
    navigate(`/cars/${_id}`);
  };
  return (
    <div
      onClick={handleGoto}
      className="overflow-hidden cursor-pointer hover:shadow-primary rounded bg-white text-slate-500 shadow-md shadow-slate-200"
    >
      <figure>
        <img
          src="https://cdn.pixabay.com/photo/2016/04/17/22/10/mercedes-benz-1335674_1280.png"
          alt="card image"
          className="aspect-video w-full"
        />
      </figure>
      {/*  <!-- Body--> */}
      <div className="p-6">
        <header className="mb-4">
          <h3 className="text-xl font-medium text-slate-700">{name}</h3>
          <p className="text-sm text-slate-800 font-bold">
            Price per hour: {pricePerHour}
          </p>
        </header>
        <p>{description}</p>
      </div>
    </div>
  );
};
