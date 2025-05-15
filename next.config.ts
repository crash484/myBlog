import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

    // Minimize JavaScript
  swcMinify: true,
  
  // Disable unnecessary features for production
  reactStrictMode: true,
  poweredByHeader: false,
};



export default nextConfig;


