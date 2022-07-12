import { MDXProvider } from '@mdx-js/react';
import {
	GetStaticPaths,
	GetStaticPropsContext,
	InferGetStaticPropsType
} from 'next';
import Head from 'next/head';
import { useEffect, useRef } from 'react';

import ContentLayout from 'layouts/contentLayout';
import { contentComponents } from 'utils/content.utils';

import { generateImage } from 'lib/opengraph';

import {
	ContentDirectories,
	get,
	getContentMetadata
} from 'utils/services.utils';

import { MDXContent } from 'mdx/types';
import { PostMetaFile } from 'src/types/Post';

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getContentMetadata<PostMetaFile>(
		ContentDirectories.Posts
	);

	if (process.env.GENERATE_IMAGES) {
		posts.forEach((post) =>
			Object.keys(post).forEach((language) => {
				const metadata = post[language];
				try {
					generateImage(
						metadata.title,
						metadata.date,
						language,
						`/public/images/content/posts/${metadata.slug}`
					);
				} catch (e) {
					console.log(`OG Image not generated: ${metadata.slug}`, e);
				}
			})
		);
	}

	const paths = posts.flatMap((post) =>
		Object.keys(post).map((language) => ({
			params: {
				slug: post[language].slug
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
	const { meta } = await get<PostMetaFile>(ContentDirectories.Posts, {
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

const Project = ({
	meta,
	slug,
	locale
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const ContentComponent = useRef<MDXContent>();

	useEffect(() => {
		const external = meta?.[locale ?? '']?.external;
		if (external) {
			window.location.assign(external);
		}
	}, [locale, meta]);

	if (!meta) {
		return null;
	}

	const metadata = meta[locale ?? ''];

	if (metadata.external) {
		return null;
	}

	try {
		ContentComponent.current =
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			require(`../../content/posts/${slug}/${locale}.mdx`).default;
	} catch {
		return null;
	}

	return (
		<MDXProvider components={contentComponents}>
			<Head>
				<meta
					property="og:image"
					content={`/images/content/posts/${slug}/og_${locale}.png`}
				/>
				<meta property="og:image:type" content="image/png" />
			</Head>
			<ContentLayout
				meta={metadata}
				comments={{
					title: metadata.title,
					identifier: `post_${slug}`,
					language: locale?.replace('-', '_') ?? '',
					url: `https://matheusmorais.dev/blog/${slug}`
				}}
				locale={locale}
				locales={Object.keys(meta)}
			>
				<>{ContentComponent.current ? <ContentComponent.current /> : null}</>
			</ContentLayout>
		</MDXProvider>
	);
};

export default Project;
