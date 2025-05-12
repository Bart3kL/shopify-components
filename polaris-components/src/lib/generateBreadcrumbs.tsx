/* eslint-disable @typescript-eslint/no-explicit-any */
import { usePathname } from "next/navigation";
import { data } from "../lib/constants";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/src/components/ui/breadcrumb";

export const BreadcrumbData = () => {
  const pathname = usePathname();
  let mainBreadcrumb: any;
  let subTitle = "";

  for (const nav of data.navMain) {
    const foundItem = nav.items.find((item) => item.pathname === pathname);
    if (foundItem) {
      mainBreadcrumb = nav;
      subTitle = foundItem.title;
      break;
    }
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {mainBreadcrumb && (
          <>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href={mainBreadcrumb.url}>
                {mainBreadcrumb.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
          </>
        )}

        <BreadcrumbItem>
          <BreadcrumbPage>{subTitle}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
