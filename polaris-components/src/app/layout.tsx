import "./globals.css";
import "@shopify/polaris/build/esm/styles.css";

import { Layout } from "../components/Layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Shopify Polaris Components",
    template: "%s | Shopify Polaris Components",
  },
  description:
    "Reusable Shopify Polaris component library for Remix, React and Next.js. Build beautiful Shopify apps with TypeScript and React.",

  authors: [
    {
      name: "Bartosz Lewandowski",
      url: "https://www.linkedin.com/in/bartosz-lewandowski-dev/",
    },
  ],
  creator: "https://www.linkedin.com/in/bartosz-lewandowski-dev/",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://polaris.shopifycomponents.com",
    siteName: "Shopify Polaris Components",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
