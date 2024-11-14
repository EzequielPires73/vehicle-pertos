/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'cdn.motor1.com'
            },
            {
                hostname: 'localhost'
            },
            {
                hostname: '192.168.0.106'
            }
        ]
    }
};

export default nextConfig;
