// Contentlayer를 다음 개발 및 빌드 프로세스에 연결하려면 withContentlayer 메서드를 사용하여 Next.js 구성을 래핑하는 것이 좋다.
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true };

module.exports = withContentlayer(nextConfig);

