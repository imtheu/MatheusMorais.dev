import fs from 'fs';
import path from 'path';

const projectsDir = path.resolve(process.cwd(), 'src', 'content', 'projects');

const getLanguages = () => fs.readdirSync(projectsDir);

const getMarkdownFiles = (language: string) =>
	fs.readdirSync(path.join(projectsDir, language));

export const getProjects = (locale: string) => {
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
		[...files, ...untranslatedFiles].map(async ({ file, language }) => {
			const mdx = await import(`../content/projects/${language}/${file}`);

			return {
				url: `/projects/${file.replace(/\.mdx?$/, '')}`,
				slug: file.replace(/\.mdx?$/, ''),
				meta: mdx.meta
			};
		})
	);
};

export const getAllProjects = () => {
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
