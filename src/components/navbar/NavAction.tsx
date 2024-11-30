import { Link} from "react-router-dom";
import ReusableButton from "../Shared/ReusableButton";




const NavAction = () => {


  return (
    <div className="ml-auto flex items-center justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0">
      {/* <NavProfile /> */}
      <ReusableButton label="Book A Rental"/>
    </div>
  );
};
export default NavAction