import { type ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <p>DashboardLayout</p>
      {children}
    </div>
  );
};

export default DashboardLayout;
