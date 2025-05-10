import * as React from "react";
import { usePathname } from "next/navigation";

import { SearchForm } from "@/src/components/search-form";
import { VersionSwitcher } from "@/src/components/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/src/components/ui/sidebar";
import Link from "next/link";

// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  const data = {
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
    navMain: [
      {
        title: "Getting Started",
        url: "#",
        items: [
          {
            title: "Installation",
            url: "#",
            isActive: pathname === "/installation",
          },
          {
            title: "Project Structure",
            url: "#",
            isActive: pathname === "/project-structure",
          },
        ],
      },
      {
        title: "Components",
        url: "#",
        items: [
          {
            title: "Stats  #1",
            url: "/components/stats1",
            isActive: pathname === "/components/stats1",
          },
          {
            title: "Card List",
            url: "/components/card-list",
            isActive: pathname === "/components/card-list",
          },
          {
            title: "Rich Text Editor",
            url: "/components/rich-text-editor",
            isActive: pathname === "/components/rich-text-editor",
          },
          {
            title: "Search Engine Listing",
            url: "/components/search-engine-listing",
            isActive: pathname === "/components/search-engine-listing",
          },
          {
            title: "Pricing Plans",
            url: "/components/pricing-plans",
            isActive: pathname === "/components/pricing-plans",
          },
          {
            title: "Shortcuts Section",
            url: "/components/shortcuts-section",
            isActive: pathname === "/components/shortcuts-section",
          },
        ],
      },
    ],
  };
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
