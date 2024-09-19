import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageBookings from "../pages/admin/ManageBookings";
import ManageCars from "../pages/admin/ManageCars";


export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Manage Cars",
    path: "manage-cars",
    element: <ManageCars />,
  },
  {
    name: "Manage Bookings",
    path: "manage-bookings",
    element: <ManageBookings />,
  },
  // {
  //   name: "Academic Management",
  //   children: [],
  // },
];

//* Pragmatical way

//! Hard coded way

// export const adminPaths = [
//   {
//     path: 'dashboard',
//     element: <AdminDashboard />,
//   },
//   {
//     path: 'create-student',
//     element: <CreateStudent />,
//   },
//   {
//     path: 'create-admin',
//     element: <CreateAdmin />,
//   },
//   {
//     path: 'create-faculty',
//     element: <CreateFaculty />,
//   },
// ];
