import Bookings from "../pages/userDashboard/Bookings";
import UserDashboard from "../pages/userDashboard/UserDashboard";

const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard />,
  },
  {
    name: "Bookings",
    path: "bookings",
    element: <Bookings />,
  },

];

export default userPaths;
