/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hide the Next.js dev badge so local previews match production
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Legacy English template routes → Spanish pages
  async redirects() {
    return [
      { source: "/quote", destination: "/cotizar", permanent: true },
      { source: "/about", destination: "/nosotros", permanent: true },
      { source: "/contact", destination: "/contacto", permanent: true },
      { source: "/services/auto", destination: "/servicios/auto", permanent: true },
      { source: "/services/life", destination: "/servicios/vida", permanent: true },
      { source: "/services/:path*", destination: "/cotizar", permanent: true },
      { source: "/testimonials", destination: "/", permanent: true },
    ]
  },
}

export default nextConfig
