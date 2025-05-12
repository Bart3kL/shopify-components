import * as React from "react";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "./ui/sidebar";
import { VersionSwitcher } from "./version-switcher";
import { SearchForm } from "./search-form";
import { data } from "../lib/constants";
import Link from "next/link";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const [searchValue, setSearchValue] = React.useState("");

  const componentsSection = data.navMain.find(
    (section) => section.title.toLowerCase() === "components"
  );
  const gettingStartedSection = data.navMain.find(
    (section) => section.title.toLowerCase() === "getting started"
  );

  const filteredComponentItems =
    searchValue.trim().length > 0 && componentsSection
      ? componentsSection.items.filter((item) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      : componentsSection?.items || [];

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />

        <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {gettingStartedSection && searchValue.trim().length === 0 && (
              <SidebarMenuItem key={gettingStartedSection.title}>
                <SidebarMenuButton
                  asChild
                  isActive={gettingStartedSection.url === pathname}
                >
                  <p className="font-medium">{gettingStartedSection.title}</p>
                </SidebarMenuButton>

                {gettingStartedSection.items?.length ? (
                  <SidebarMenuSub>
                    {gettingStartedSection.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={item.pathname === pathname}
                        >
                          <Link href={item.url}>{item.title}</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            )}

            {componentsSection && (
              <SidebarMenuItem key={componentsSection.title}>
                <SidebarMenuButton
                  asChild
                  isActive={componentsSection.url === pathname}
                >
                  <p className="font-medium">{componentsSection.title}</p>
                </SidebarMenuButton>
                {filteredComponentItems.length > 0 ? (
                  <SidebarMenuSub>
                    {filteredComponentItems.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={item.pathname === pathname}
                        >
                          <Link href={item.url}>{item.title}</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : searchValue.trim() ? (
                  <div className="px-4 py-2 text-xs text-muted-foreground">
                    No components found.
                  </div>
                ) : null}
              </SidebarMenuItem>
            )}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
