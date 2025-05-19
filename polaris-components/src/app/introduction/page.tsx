import Introduction from "@/src/components/Introduction";

export const metadata = {
  title: "Shopify Polaris Components – Open Source UI for Shopify Apps",
  description:
    "Open-source component library for building Shopify admin apps with React, TypeScript, and Polaris. Ideal for Remix, React and Next.js",

  openGraph: {
    title: "Shopify Polaris Components",
    description:
      "Open-source UI components for building Shopify admin apps and embedded dashboards using Polaris and TypeScript.",
    url: "https://polaris.shopifycomponents.com",
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

export default function IntroductionPage() {
  return <Introduction />;
}
