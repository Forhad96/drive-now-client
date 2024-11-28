import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import routesGenerator from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";

import ProtectedRoute from "../components/layout/ProtectedRoute";
import userPaths from "./user.routes";
import { homePaths } from "./home.routes";
import DashboardLayout from "../components/layout/DashboardLayout";
import NotFound from "../components/carDetails/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routesGenerator(homePaths),
    errorElement:<NotFound/>
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
    path: "/user",
    element: (
      <ProtectedRoute role="user">
        <DashboardLayout/>
      </ProtectedRoute>
    ),
    children: routesGenerator(userPaths),
  },



]);

export default router;
