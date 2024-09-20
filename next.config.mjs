/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/**',
      },
    ],
    deviceSizes: [320, 420, 768, 1024, 1200], // Sizes to be used for responsive images
    imageSizes: [16, 32, 48, 64, 96], // Sizes to be used for fixed-size images
  },
};

export default nextConfig;