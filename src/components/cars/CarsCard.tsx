import { Link } from "react-router-dom";

const CarsCard = ({ car }) => {
  return (
    <div
      key={car?._id}
      className="relative m-10 max-h-96 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md"
    >
      <a href="#">
        <img
          className="h-60 w-full  rounded-t-lg object-cover"
          src="https://cdn.pixabay.com/photo/2021/06/21/21/35/car-6354667_1280.png"
          alt="product image"
        />
      </a>
      <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-primary text-center text-sm text-white">
        Trending
      </span>
      <div className="mt-4 px-5 pb-5">
        {/* <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-slate-900">
            {car?.name}
          </h5>
        </a> */}
        {/* <div className="mt-2.5 mb-5 flex items-center">

        </div> */}
        <div className="flex items-center justify-between">
          <h5 className="text-xl font-semibold tracking-tight text-slate-900">
            {car?.name}
          </h5>
          <p>
            <span className="text-3xl font-bold text-slate-900">
              ${car?.pricePerHour}
            </span>
            <span className="text-sm text-slate-900 line-through">20%</span>
          </p>
        </div>
      </div>

      <Link to={`/productDetails/${car?._id}`}>
        <button className="bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
          Details
        </button>
      </Link>
    </div>
  );
};
export default CarsCard