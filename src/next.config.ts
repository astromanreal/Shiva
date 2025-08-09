
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
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
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
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'unitywithinfinity.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'bambinos.live',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'anantgyan.co.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'shiva1008.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.templepurohit.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
