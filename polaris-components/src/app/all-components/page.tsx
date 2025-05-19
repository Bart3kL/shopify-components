import React from "react";

export const metadata = {
  title: "All Components | Shopify Polaris Components",
  description:
    "Browse the full collection of open-source Shopify Polaris components for building Shopify apps using React, TypeScript, and Remix or Next.js. Includes admin UI, dashboards, forms, and more.",

  openGraph: {
    title: "All Shopify Polaris Components",
    description:
      "Explore the full set of open-source UI components for Shopify app development. Built with React, TypeScript, and Shopify Polaris.",
    url: "https://polaris.shopifycomponents.com/all-components",
    type: "website",
  },
  authors: [
    {
      name: "Bartosz Lewandowski",
      url: "https://www.linkedin.com/in/bartosz-lewandowski-dev/",
    },
  ],
  creator: "https://www.linkedin.com/in/bartosz-lewandowski-dev/",
};

import AllComponents from "@/src/components/AllComponents";

export default function AllComponentsPage() {
  return <AllComponents />;
}
