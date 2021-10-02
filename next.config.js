// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require('@next/mdx')({
	extension: /\.mdx$/
});

/** @type {import('next').NextConfig} */
module.exports = withMDX({
	i18n: {
		locales: ['en-US', 'pt-BR'],
		defaultLocale: 'en-US',
		localeDetection: false
	},
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
	reactStrictMode: true
});
