import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router";
import { CalendarDays, ClipboardClock, User } from "lucide-react";

export function AppSidebar() {
  const items = [
    {
      title: "تقویم",
      url: "/",
      icon: CalendarDays,
    },
    {
      title: "نوبت ها",
      url: "/appointments",
      icon: ClipboardClock,
    },
    {
      title: "حساب کاربری",
      url: "#",
      icon: User,
    },
  ];

  return (
    <Sidebar collapsible="icon" variant="floating" side="right">
      <SidebarHeader>نوبت دهی</SidebarHeader>
      <SidebarGroup>
        <SidebarGroupLabel>منو</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarContent>
            {items.map((item) => (
              <SidebarItem key={item.title} item={item} />
            ))}
          </SidebarContent>
        </SidebarMenu>
      </SidebarGroup>
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
        <Link to={item.url} className="cursor-default flex items-center gap-2">
          <item.icon />
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};
