import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Add all external domains you plan to use
    domains: [
      "res.cloudinary.com",
      "static.tnnbt.in",
      "www.tourmyindia.com",
      "maps.app.goo.gl",
      "cdn.example.com", // add any other domains you might use
    ],
    // Allow using remote patterns for more flexibility
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // matches any hostname
        port: "",
        pathname: "/**", // matches any path
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
