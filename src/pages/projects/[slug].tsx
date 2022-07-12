import { MDXProvider } from '@mdx-js/react';
import {
	GetStaticPaths,
	GetStaticPropsContext,
	InferGetStaticPropsType
} from 'next';
import Head from 'next/head';
import { useRef } from 'react';

import ContentLayout from 'layouts/contentLayout';
import { contentComponents } from 'utils/content.utils';

import { generateImage } from 'lib/opengraph';

import {
	ContentDirectories,
	get,
	getContentMetadata
} from 'utils/services.utils';

import { ProjectMetaFile } from 'src/types/Project';
import { MDXContent } from 'mdx/types';

export const getStaticPaths: GetStaticPaths = async () => {
	const projects = await getContentMetadata<ProjectMetaFile>(
		ContentDirectories.Projects
	);

	if (process.env.GENERATE_IMAGES) {
		projects.forEach((project) =>
			Object.keys(project).forEach((language) => {
				const metadata = project[language];
				try {
					generateImage(
						metadata.title,
						undefined,
						language,
						`/public/images/content/projects/${metadata.slug}`
					);
				} catch {
					console.log(`OG Image not generated: ${metadata.slug}`);
				}
			})
		);
	}

	const paths = projects.flatMap((project) =>
		Object.keys(project).map((language) => ({
			params: {
				slug: project[language].slug
			},
			locale: language
		}))
	);

	return {
		paths,
		fallback: false
	};
};

export const getStaticProps = async ({
	locale,
	params
}: GetStaticPropsContext) => {
	const { meta } = await get<ProjectMetaFile>(ContentDirectories.Projects, {
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
	locale,
	slug
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const ContentComponent = useRef<MDXContent>();
	const metadata = meta[locale ?? ''];

	try {
		ContentComponent.current =
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			require(`../../content/projects/${slug}/${locale}.mdx`).default;
	} catch {
		return null;
	}

	return (
		<MDXProvider components={contentComponents}>
			<Head>
				<meta
					property="og:image"
					content={`/images/content/projects/${slug}/og_${locale}.png`}
				/>
				<meta property="og:image:type" content="image/png" />
			</Head>
			<ContentLayout meta={metadata}>
				<>{ContentComponent.current ? <ContentComponent.current /> : null}</>
			</ContentLayout>
		</MDXProvider>
	);
};

export default Project;
