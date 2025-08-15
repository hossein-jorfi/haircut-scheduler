import { createBrowserRouter, Outlet } from "react-router-dom";

// Lay
import AuthLayout from "./layout/auth/auth-layout";

// Pages
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import DashboardLayout from "./layout/dashboard/dashboard-layout";
import Main from "./pages/dashboard/main";
import Appointments from "./pages/dashboard/appointments";
import { Suspense } from "react";
import PageLoading from "./components/shared/loading/page-loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DashboardLayout>
        <Suspense fallback={<PageLoading />}>
          <Outlet />
        </Suspense>
      </DashboardLayout>
    ),
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "appointments",
        element: (
          <Suspense fallback={<PageLoading />}>
            <Appointments />
          </Suspense>
        ),
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
