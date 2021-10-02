import fs from 'fs';
import path from 'path';

const postsDir = path.resolve(process.cwd(), 'src', 'pages', 'blog');

const getMarkdownFiles = () => {
	return fs.readdirSync(postsDir).filter((file) => file.includes('.mdx'));
};

export const getPosts = () => {
	const markdownFiles = getMarkdownFiles();

	return Promise.all(
		markdownFiles.map(async (file) => {
			const mdx = await import(`../pages/blog/${file}`);
			return {
				url: mdx.meta.externalLink ?? `/blog/${file.replace(/\.mdx?$/, '')}`,
				external: !!mdx.meta.externalLink,
				slug: file.replace(/\.mdx?$/, ''),
				meta: mdx.meta
			};
		})
	);
};
