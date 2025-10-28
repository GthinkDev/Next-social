import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	turbopack: {
		root: __dirname,
	},
	async redirects() {
		return [
			{
				source: '/home',
				destination: '/',
				permanent: true, // 308 永久重定向
			},
		]
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.pexels.com',
			},
		],
	}, // 配置图片资源
}

export default nextConfig
