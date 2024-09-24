import { Button } from "antd";
import { useGetAllCarsQuery } from "../../redux/features/car/CarManagement.api";
import Container from "../Shared/Container";

export default function FeaturedCar() {
  const { data } = useGetAllCarsQuery(undefined);
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
        {data?.data?.result?.slice(0, 3).map((car, idx) => (
          <FeaturedCard key={idx} car={car} />
        ))}
      </div>
    </Container>
  );
}

const FeaturedCard = ({ car }) => {
  console.log(car);
  return (
    <div className="overflow-hidden cursor-pointer rounded bg-white text-slate-500 shadow-md shadow-slate-200">
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
          <h3 className="text-xl font-medium text-slate-700">{car.name}</h3>
          <p className="text-sm text-slate-800 font-bold">
            Price per hour: {car.pricePerHour}
          </p>
        </header>
        <p>{car?.description}</p>
      </div>
    </div>
  );
};
