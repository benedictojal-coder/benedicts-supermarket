/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  experimental: {
    turbo: false, // disables Turbopack
  },
};

export default nextConfig;
