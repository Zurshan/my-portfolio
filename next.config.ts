/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export', // new way to do static exports
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : undefined,
  images: { unoptimized: true }
};
