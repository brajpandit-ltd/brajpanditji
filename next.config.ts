import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",

  images: {
    domains: [
      "i.pinimg.com",
      "res.cloudinary.com",
      // add other domains if needed
    ],
  },
};

module.exports = nextConfig;
