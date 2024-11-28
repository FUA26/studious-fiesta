"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  House,
  LifeBuoy,
  Map,
  MonitorSmartphoneIcon,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
  Users,
} from "lucide-react";

import { NavMain } from "@/components/layout/nav-main";
import { NavProjects } from "@/components/layout/nav-projects";
import { NavSecondary } from "@/components/layout/nav-secondary";
import { NavUser } from "@/components/layout/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: House,
      isActive: true,
      items: []
    },
    {
      title: "Manage Pengguna",
      url: "#",
      icon: Users,
      items: [],
    },
    {
      title: "Manage Aplikasi",
      url: "#",
      icon: MonitorSmartphoneIcon,
      items: [],
    },
    {
      title: "Dokumentasi",
      url: "#",
      icon: BookOpen,
      items: [],
    },
    {
      title: "Pengaturan",
      url: "#",
      icon: Settings2,
      items: [],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  {/* <Command className="size-4" /> */}
                  <img src="/images/logo.png" alt="logo" className="h-8" />
                  <img/>
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold text-accent">Single Sign On</span>
                  <span className="truncate text-xs">Kabupaten Malang</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {/* <NavUser user={data.user} /> */}
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
      {/* <NavUser user={data.user} /> */}
      </SidebarFooter>
    </Sidebar>
  );
}
