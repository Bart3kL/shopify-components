import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.resolve.alias["@radix-ui/react-select"] = path.resolve(
      __dirname,
      "node_modules/@radix-ui/react-select"
    );
    return config;
  },
};

export default nextConfig;
