/** @type {import('next').NextConfig} */
const nextConfig = {
    dangerouslyAllowSVG: true,
    images: {
        domains: ['localhost', 'avataaars.io'],
    },
}

module.exports = nextConfig
