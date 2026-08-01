import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "utfs.io",
        protocol: "https",
        port: "",
      },
    ],
  },
  typescript: {
    // Allows production builds to complete even if there are type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // Optional: Ignores ESLint errors during builds as well
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
