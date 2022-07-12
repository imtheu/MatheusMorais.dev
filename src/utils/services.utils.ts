import fs from 'fs';
import path from 'path';

export enum Languages {
	PT_BR = 'pt-BR',
	EN_US = 'en-US'
}

export const DEFAULT_LANGUAGE = Languages.EN_US;

export const enum ContentDirectories {
	Posts = 'src/content/posts',
	Projects = 'src/content/projects'
}

export const getContentMetadata = <MetaFileType>(
	directory: ContentDirectories
) => {
	const contentPath = path.join(process.cwd(), directory);
	const contentFiles = fs.readdirSync(contentPath);

	const filesMetadata = contentFiles.flatMap(async (slug) => {
		const metadata: MetaFileType = (
			await import(`../../${directory}/${slug}/_meta`)
		).Metadata;

		return metadata;
	});

	return Promise.all(filesMetadata);
};

export const get = async <MetaFileType>(
	directory: ContentDirectories,
	query: {
		slug: string;
	}
) => {
	const metadata: MetaFileType = (
		await import(`../../${directory}/${query.slug}/_meta`)
	).Metadata;

	return {
		meta: metadata
	};
};
