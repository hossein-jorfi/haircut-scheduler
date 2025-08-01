import { type ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <p>DashboardLayout</p>
      {children}
    </div>
  );
};

export default DashboardLayout;
