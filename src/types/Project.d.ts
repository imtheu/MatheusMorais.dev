export type ProjectMetaType = {
	slug: string;
	title: string;
	author: string;
	description: string;
	thumbnail: string;
};

export type ProjectMetaFile = { [language: string]: ProjectMetaType };
