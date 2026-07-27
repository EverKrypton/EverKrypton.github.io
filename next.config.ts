import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },
  // Avoid picking /home/ubuntu as monorepo root when a parent lockfile exists
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
