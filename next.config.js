/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "api.simic.app",
        port: ""
      }
    ]
  }
}

module.exports = nextConfig
