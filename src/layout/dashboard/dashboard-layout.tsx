import useAuthStore from "@/store/auth/useAuthStore";
import { type ReactNode } from "react";
import { Navigate } from "react-router";
import Header from "./header";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <div className="flex h-screen w-screen flex-col px-10 xl:container">
      <Header />
      {children}
    </div>
  );
};

export default DashboardLayout;
