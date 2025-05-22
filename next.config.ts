import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   basePath: "/aubser.github.io",
   output: "export",  // <=== enables static exports
   reactStrictMode: true,
};

export default nextConfig;
