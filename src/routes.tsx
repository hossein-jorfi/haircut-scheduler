import { createBrowserRouter, Outlet } from "react-router-dom";

// Lay
import AuthLayout from "./layout/auth/auth-layout";

// Pages
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

const router = createBrowserRouter([
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
