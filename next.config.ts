import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",

  images: {
    unoptimized: true,
    domains: [
      "i.pinimg.com",
      "res.cloudinary.com",
      // add other domains if needed
    ],
  },
};

module.exports = nextConfig;
