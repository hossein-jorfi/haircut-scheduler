import useAuthStore from "@/store/auth/useAuthStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/store/auth/hooks";

const UserDropdown = () => {
  const userInfo = useAuthStore((state) => state.userInfo);

  const { logoutUser } = useAuth();

  return (
    <DropdownMenu dir="rtl">
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <User />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="p-2 border-b mb-1">{userInfo?.username}</div>
        <DropdownMenuItem onClick={logoutUser}>
          <LogOut /> خروج
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
