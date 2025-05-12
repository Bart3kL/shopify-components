"use client";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider } from "@shopify/polaris";
import { AppSidebar } from "@/src/components/app-sidebar";

import { Separator } from "@/src/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/src/components/ui/sidebar";
import { BreadcrumbData } from "@/src/lib/generateBreadcrumbs";

export const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <AppProvider i18n={enTranslations}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 ">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <BreadcrumbData />
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 ali bg-[#f1f1f1]">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </AppProvider>
  );
};
