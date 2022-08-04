export type DropMetaType = {
	id: number;
	slug: string;
	title: string;
	author: string;
	description: string;
	date: string;
};

export type DropMetaFile = { [language: string]: DropMetaType };
