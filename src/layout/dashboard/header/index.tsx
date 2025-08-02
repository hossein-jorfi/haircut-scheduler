import useAuthStore from "@/store/auth/useAuthStore";
import NewAppointmentButton from "./new-appointment-button";
import { ThemeToggle } from "@/components/theme-provider/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/store/auth/hooks";

const Header = () => {
  const userInfo = useAuthStore((state) => state.userInfo);

  const { logoutUser } = useAuth();
  return (
    <div className="mb-5 py-5">
      <div className="app-container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <DropdownMenu dir="rtl">
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <User />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <div className="p-2 border-b mb-1">{userInfo?.username}</div>
              <DropdownMenuItem onClick={logoutUser}>
                <LogOut /> خروج
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ThemeToggle />
        </div>
        <NewAppointmentButton />
      </div>
    </div>
  );
};

export default Header;
