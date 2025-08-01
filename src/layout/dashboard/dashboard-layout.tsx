import useAuthStore from "@/store/auth/useAuthStore";
import { type ReactNode } from "react";
import { Navigate } from "react-router";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <div className="flex h-screen w-screen flex-col">
      <p>DashboardLayout</p>
      {children}
    </div>
  );
};

export default DashboardLayout;
