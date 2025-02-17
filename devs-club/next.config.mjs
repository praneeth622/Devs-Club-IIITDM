/** @type {import('next').NextConfig} */
export default {
  images: {
    domains: ['images.pexels.com', 'img.clerk.com', 'firebasestorage.googleapis.com','d8it4huxumps7.cloudfront.net'],
  },
  async rewrites() {
    return [
      {
        source: '/api/devpost/:path*',  
        destination: 'https://devpost.com/api/:path*',
      },
      {
        source: '/api/unstop/:path*',  
        destination: 'https://unstop.com/api/:path*',
      },
      {
        source: '/api/devfolio/:path*',  
        destination: 'https://api.devfolio.co/api/:path*',
      },
    ];
  },
};
