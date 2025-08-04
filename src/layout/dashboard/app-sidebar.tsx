import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router";
import { Calendar, User } from "lucide-react";

export function AppSidebar() {
  const items = [
    {
      title: "تقویم",
      url: "/",
      icon: Calendar,
    },
    {
      title: "نوبت ها",
      url: "/appointments",
      icon: Calendar,
    },
    {
      title: "حساب کاربری",
      url: "/account",
      icon: User,
    },
  ];

  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader>نوبت دهی</SidebarHeader>
      <SidebarContent>
        {items.map((item) => (
          <SidebarItem key={item.title} item={item} />
        ))}
      </SidebarContent>
    </Sidebar>
  );
}

const SidebarItem = ({
  item,
}: {
  item: { title: string; url: string; icon: React.ElementType };
}) => {
  const { pathname } = useLocation();
  const { toggleSidebar, isMobile } = useSidebar();

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={pathname === item.url}
        tooltip={item.title}
        onClick={() => isMobile && toggleSidebar()}
      >
        <Link to={item.url} className="cursor-default">
          <item.icon />
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};
