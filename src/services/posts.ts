import fs from 'fs';
import path from 'path';

const postsDir = path.resolve(process.cwd(), 'src', 'content', 'posts');

const getLanguages = () => fs.readdirSync(postsDir);

const getMarkdownFiles = (language: string) =>
	fs.readdirSync(path.join(postsDir, language));

export const getPosts = (locale: string) => {
	const files = getMarkdownFiles(locale).map((file) => ({
		file,
		language: locale
	}));

	const languages = getLanguages();
	const untranslatedFiles = languages
		.filter((language) => language !== locale)
		.map((language) => {
			return getMarkdownFiles(language).map((file) => {
				if (!files.some((translatedFile) => translatedFile.file === file)) {
					return { file, language };
				}
			});
		})
		.flat()
		.filter((file): file is typeof files[0] => Boolean(file));

	return Promise.all(
		[...files, ...untranslatedFiles]
			.filter(({ file }) => file.includes('.mdx'))
			.map(async ({ file, language }) => {
				const mdx = await import(`../content/posts/${language}/${file}`);

				return {
					url: mdx.meta.externalLink ?? `/blog/${file.replace(/\.mdx?$/, '')}`,
					external: !!mdx.meta.externalLink,
					slug: file.replace(/\.mdx?$/, ''),
					meta: mdx.meta
				};
			})
	);
};

export const getAllPosts = () => {
	const languages = getLanguages();
	const files = languages
		.map((language) =>
			getMarkdownFiles(language).map((file) => ({
				file,
				language,
				slug: file.replace(/\.mdx?$/, '')
			}))
		)
		.flat();

	return files;
};
