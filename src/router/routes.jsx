import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import AddUserPage from "../pages/AddUserPage";
import UpdateUserPage from "../pages/UpdateUserPage";
import DashboardLayout from "../layouts/DashboardLayout";
import UserHome from "../pages/UserHome";
import AdminHome from "../pages/AdminHome";

export const router = createBrowserRouter([
  {
    element: <AppLayout></AppLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "add-user",
        element: <AddUserPage></AddUserPage>,
      },
      {
        path: "update-user",
        element: <UpdateUserPage></UpdateUserPage>,
      },
    ],
  },
  {
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/user-home",
        element: <UserHome></UserHome>,
      },
      {
        path: "/admin-home",
        element: <AdminHome></AdminHome>,
      },
    ],
  },
]);
