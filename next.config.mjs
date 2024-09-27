const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
    deviceSizes: [320, 420, 768, 1024, 1200, 1920, 2560, 3840, 6000], // Added larger sizes
    imageSizes: [16, 32, 48, 64, 96],
  },
};

export default nextConfig;