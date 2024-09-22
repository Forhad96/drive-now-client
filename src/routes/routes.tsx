import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import routesGenerator from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import ChangePassword from "../pages/ChangePassword";
import userPaths from "./user.routes";
import { homePaths } from "./home.routes";
import DashboardLayout from "../components/layout/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routesGenerator(homePaths),
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: routesGenerator(adminPaths),
  },
  {
    path: "/user/dashboard",
    element: (
      <ProtectedRoute role="user">
        <DashboardLayout/>
      </ProtectedRoute>
    ),
    children: routesGenerator(userPaths),
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/change-password",
    element: <ChangePassword />,
  },
]);

export default router;
