import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link to="/">
      <img className="size-20 object-fill" src="/drivenow-logo.png" alt="Drive Now" />
    </Link>
  );
};
export default NavLogo;
