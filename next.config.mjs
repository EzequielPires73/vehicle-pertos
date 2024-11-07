/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'cdn.motor1.com'
            },
            {
                hostname: 'localhost'
            }
        ]
    }
};

export default nextConfig;
