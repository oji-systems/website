import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/studio",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
