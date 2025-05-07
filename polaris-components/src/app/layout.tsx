import "./globals.css";
import "@shopify/polaris/build/esm/styles.css";

import { Layout } from "../components/Layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
