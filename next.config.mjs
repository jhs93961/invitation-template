/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/invitation-template' : '',
  trailingSlash: true
};

export default nextConfig;
