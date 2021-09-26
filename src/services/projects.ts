import fs from 'fs';
import path from 'path';

const projectsDir = path.resolve(process.cwd(), 'src', 'pages', 'projects');

const getMarkdownFiles = () => {
	return fs.readdirSync(projectsDir);
};

export const getProjects = () => {
	const markdownFiles = getMarkdownFiles();

	return Promise.all(
		markdownFiles.map(async (file) => {
			const mdx = await import(`../pages/projects/${file}`);
			return {
				url: `/projects/${file.replace(/\.mdx?$/, '')}`,
				slug: file.replace(/\.mdx?$/, ''),
				meta: mdx.meta
			};
		})
	);
};
