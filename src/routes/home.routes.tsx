import CarDetails from "../components/CarDetails/CarDetails";
import Cars from "../components/cars/Cars";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";

export const homePaths = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "cars",
    element: <Cars />,
    children: [
      {
        path: "cars/:id",
        element: <CarDetails />,
      },
    ],
  },
  {
    path: "sing-up",
    element: <SignUp />,
  },
];
