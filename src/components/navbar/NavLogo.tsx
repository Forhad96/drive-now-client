import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link to="/">
      <img className="size-20 object-contain" src="./drivenow-logo.png" alt="" />
    </Link>
  );
};
export default NavLogo;
