
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        // Allow direct image view paths for Google Drive images
        pathname: '/uc', // Specifically allow /uc path used for direct image links
      },
       { // Keep the broader rule if other /file paths are used elsewhere, otherwise remove
         protocol: 'https',
         hostname: 'drive.google.com',
         port: '',
         pathname: '/file/**',
       },

    ],
  },
};

export default nextConfig;
