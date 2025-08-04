import useAuthStore from "@/store/auth/useAuthStore";
import { type ReactNode } from "react";
import { Navigate } from "react-router";
import Header from "./header";
import { AppSidebar } from "./app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <div className="p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
