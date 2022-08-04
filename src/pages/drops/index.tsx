import React from 'react';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

import Spacing from 'components/spacing';
import Title from 'components/title';
import DropCard from 'components/dropCard';
import Text from 'components/text';

import DefaultLayout from 'layouts/default';

import {
	ContentDirectories,
	getContentMetadata,
	Languages
} from 'utils/services.utils';

import { DropMetaFile } from 'src/types/Drop';

const content: { [key: string]: Record<string, string> } = {
	'en-US': {
		dropsDescription:
			"Drops are quick tips, or things I've learned recently that I'd like to share."
	},
	'pt-BR': {
		dropsDescription:
			'Drops são dicas rapidinhas, ou coisas que aprendi recentemente e gostaria de compartilhar.'
	}
};

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
	const drops = await getContentMetadata<DropMetaFile>(
		ContentDirectories.Drops
	);

	return {
		props: {
			drops: drops.sort((a, b) => (a['en-US'].id < b['en-US'].id ? 1 : -1)),
			locale: (locale ?? 'en-US') as Languages
		}
	};
};

const Blog = ({
	drops,
	locale
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Title branding>Drops</Title>
			<Text size={1} color="rockBlue">
				{content[locale].dropsDescription}
			</Text>
			<Spacing size={4} />
			{drops?.map((drop) => {
				const metadata = drop[locale];

				if (!metadata) {
					return null;
				}

				return <DropCard key={metadata.slug} {...metadata} locale={locale} />;
			})}
			<Spacing size={6} multiplier={3} />
		</>
	);
};

Blog.layout = DefaultLayout;

export default Blog;
