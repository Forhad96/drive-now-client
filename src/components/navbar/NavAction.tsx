import { Link} from "react-router-dom";




const NavAction = () => {


  return (
    <div className="ml-auto flex items-center justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0">
      {/* <NavProfile /> */}
      <Link
        to="/contact"
        className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0"
      >
        <button className="inline-flex h-10 items-center justify-center bg-primary gap-2 whitespace-nowrap rounded bg-price px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-emerald-200 transition duration-300 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
          <span>Contact us</span>
        </button>
      </Link>
    </div>
  );
};
export default NavAction