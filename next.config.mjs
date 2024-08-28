/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects(){
        return [
            {
                source: '/',
                destination: 'https://instagram.com/dep.ferraco',
                permanent: true
            }
        ]
    }
};

export default nextConfig;
