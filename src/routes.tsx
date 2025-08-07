import { createBrowserRouter, Outlet } from "react-router-dom";

// Lay
import AuthLayout from "./layout/auth/auth-layout";

// Pages
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import DashboardLayout from "./layout/dashboard/dashboard-layout";
import Main from "./pages/dashboard/main";
import Appointments from "./pages/dashboard/appointments";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    ),
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "appointments",
        element: <Appointments />,
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    ),
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
