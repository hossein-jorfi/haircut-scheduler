import { ThemeToggle } from "@/components/theme-provider/theme-toggle";
import UserDropdown from "./user-dropdown";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Header = () => {
  return (
    <>
      <div className="z-50 px-4 py-3 flex gap-2 items-center border justify-between sticky backdrop-blur-lg bg-sidebar/40 mx-2 md:ms-0 rounded-lg top-2 mb-2">
        <SidebarTrigger />
        <div className="flex gap-2 items-center">
          <UserDropdown />
          <ThemeToggle />
        </div>
      </div>
    </>
  );
};

export default Header;
