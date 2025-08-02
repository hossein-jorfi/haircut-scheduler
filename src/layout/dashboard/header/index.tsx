import useAuthStore from "@/store/auth/useAuthStore";
import NewAppointmentButton from "./new-appointment-button";
import { ThemeToggle } from "@/components/theme-provider/theme-toggle";

const Header = () => {
  const userInfo = useAuthStore((state) => state.userInfo);

  return (
    <div className="mb-5 py-5">
      <div className="app-container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div>{userInfo?.username}</div>
          <ThemeToggle />
        </div>
        <NewAppointmentButton />
      </div>
    </div>
  );
};

export default Header;
