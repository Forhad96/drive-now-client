import { useGetAllCarsQuery } from "../../redux/features/car/CarMangement.api";
import Container from "../Shared/Container";

export default function FeaturedCar() {
    const {data} = useGetAllCarsQuery(undefined)
    console.log(data);
  return (
    <Container>
    <div className="flex justify-between items-center gap-4">

      {data?.data?.map((car,idx) => (
        <FeaturedCard car={car} />
      ))}
    </div>
    </Container>
  );
}

const FeaturedCard = ({car}) => {
    console.log(car);
  return (
    <div className="overflow-hidden  rounded bg-white text-slate-500 shadow-md shadow-slate-200">
      {/*  <!-- Image --> */}
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
          <p className="text-sm text-slate-700">Price per hour: {car.pricePerHour}</p>
        </header>
        <p>{car?.description}</p>
      </div>
    </div>
  );
};
