import { createBrowserRouter, Outlet } from "react-router-dom";

// Lay
import AuthLayout from "./layout/auth/auth-layout";

// Pages
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import DashboardLayout from "./layout/dashboard/dashboard-layout";
import Main from "./pages/dashboard/main";

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
