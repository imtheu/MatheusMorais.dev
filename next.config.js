// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require('@next/mdx')({
	extension: /\.mdx$/
});

if (
	process.env.LD_LIBRARY_PATH == null ||
	!process.env.LD_LIBRARY_PATH.includes(
		`${process.env.PWD}/node_modules/canvas/build/Release:`
	)
) {
	process.env.LD_LIBRARY_PATH = `${
		process.env.PWD
	}/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ''}`;
}

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
