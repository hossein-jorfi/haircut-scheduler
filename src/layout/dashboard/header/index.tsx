import NewAppointmentButton from "./new-appointment-button";
import { ThemeToggle } from "@/components/theme-provider/theme-toggle";
import UserDropdown from "./user-dropdown";

const Header = () => {
  return (
    <div className="mb-5 py-5">
      <div className="app-container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <UserDropdown />
          <ThemeToggle />
        </div>
        <NewAppointmentButton />
      </div>
    </div>
  );
};

export default Header;
