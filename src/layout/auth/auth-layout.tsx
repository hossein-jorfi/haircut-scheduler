import useAuthStore from "@/store/auth/useAuthStore";
import { type ReactNode } from "react";
import { Navigate } from "react-router";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
