/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
		domains: [
			"https://pps.whatsapp.net"
		],
	},
}

module.exports = nextConfig
