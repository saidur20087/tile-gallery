

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // এটি দিলে যেকোনো ওয়েবসাইট থেকে ইমেজ লোড হবে
      },
    ],
  },
};

export default nextConfig;