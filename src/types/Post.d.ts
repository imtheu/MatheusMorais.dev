export type PostMetaType = {
	slug: string;
	title: string;
	author: string;
	description: string;
	date: string;
	external?: string;
};

export type PostMetaFile = { [language: string]: PostMetaType };
