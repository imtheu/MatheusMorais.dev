import { MDXProvider } from '@mdx-js/react';
import {
	GetStaticPaths,
	GetStaticPropsContext,
	InferGetStaticPropsType
} from 'next';
import Head from 'next/head';
import { useRef } from 'react';

import ContentLayout from 'layouts/contentLayout';
import { contentComponents, dropsContentComponents } from 'utils/content.utils';

import { generateImage } from 'lib/opengraph';

import {
	ContentDirectories,
	get,
	getContentMetadata
} from 'utils/services.utils';

import { MDXContent } from 'mdx/types';
import { DropMetaFile } from 'src/types/Drop';

export const getStaticPaths: GetStaticPaths = async () => {
	const drops = await getContentMetadata<DropMetaFile>(
		ContentDirectories.Drops
	);

	if (process.env.GENERATE_IMAGES) {
		drops.forEach((drop) =>
			Object.keys(drop).forEach((language) => {
				const metadata = drop[language];
				try {
					generateImage(
						metadata.title,
						metadata.date,
						language,
						`/public/images/content/drops/${metadata.slug}`
					);
				} catch (e) {
					console.log(`OG Image not generated: ${metadata.slug}`, e);
				}
			})
		);
	}

	const paths = drops.flatMap((drop) =>
		Object.keys(drop).map((language) => ({
			params: {
				slug: drop[language].slug
			},
			locale: language
		}))
	);

	return {
		paths,
		fallback: true
	};
};

export const getStaticProps = async ({
	locale,
	params
}: GetStaticPropsContext) => {
	const { meta } = await get<DropMetaFile>(ContentDirectories.Drops, {
		slug: (params?.slug as string) ?? ''
	});

	return {
		props: {
			meta,
			slug: params?.slug ?? '',
			locale
		}
	};
};

const Drop = ({
	meta,
	slug,
	locale
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const ContentComponent = useRef<MDXContent>();

	if (!meta) {
		return null;
	}

	const metadata = meta[locale ?? ''];

	try {
		ContentComponent.current =
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			require(`../../content/drops/${slug}/${locale}.mdx`).default;
	} catch {
		return null;
	}

	return (
		<MDXProvider
			components={{ ...contentComponents, ...dropsContentComponents(locale) }}
		>
			<Head>
				<meta
					property="og:image"
					content={`/images/content/drops/${slug}/og_${locale}.png`}
				/>
				<meta property="og:image:type" content="image/png" />
			</Head>
			<ContentLayout
				meta={metadata}
				comments={{
					title: metadata.title,
					identifier: `drops_${slug}`,
					language: locale?.replace('-', '_') ?? '',
					url: `https://matheusmorais.dev/drops/${slug}`
				}}
				locale={locale}
				locales={Object.keys(meta)}
				dropId={metadata.id + 1}
			>
				<>{ContentComponent.current ? <ContentComponent.current /> : null}</>
			</ContentLayout>
		</MDXProvider>
	);
};

export default Drop;
