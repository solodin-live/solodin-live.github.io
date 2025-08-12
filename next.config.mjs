/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  output: "export",
  skipTrailingSlashRedirect: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
}

export default nextConfig
