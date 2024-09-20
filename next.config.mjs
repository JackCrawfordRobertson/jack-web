/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: ['res.cloudinary.com', 'example.com'], // Add multiple domains if necessary
        deviceSizes: [320, 420, 768, 1024, 1200], // Sizes to be used for responsive images
        imageSizes: [16, 32, 48, 64, 96], // Sizes to be used for fixed-size images
      },


};



export default nextConfig;
