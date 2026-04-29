/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  trailingSlash: true,   // ✅ IMPORTANT FIX

  allowedDevOrigins: ['192.168.1.34', "192.168.0.106"],

  images: {
    unoptimized: true,
  },
};

export default nextConfig;