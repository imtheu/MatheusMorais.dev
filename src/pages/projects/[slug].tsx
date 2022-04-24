import { MDXProvider } from '@mdx-js/react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import ContentLayout from '../../layouts/contentLayout';

import { getAllProjects } from '../../services/projects';
import { generateImage } from '../../lib/opengraph';
import { contentComponents } from '../../utils/content.utils';

export const getStaticPaths: GetStaticPaths = async () => {
	const projects = await getAllProjects();

	if (process.env.GENERATE_IMAGES) {
		projects.forEach((project) => {
			try {
				generateImage(
					project.slug,
					project.meta.title,
					undefined,
					project.language,
					`/public/images/content/projects/${project.slug}`
				);
			} catch {
				console.log(`OG Image not generated: ${project.slug}`);
			}
		});
	}

	return {
		paths: projects.map((project) => {
			return {
				params: {
					slug: project.slug
				},
				locale: project.language
			};
		}),
		fallback: false
	};
};

export const getStaticProps: GetStaticProps = ({ locale, params }) => {
	const meta =
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		require(`../../content/projects/${locale}/${params?.slug}.mdx`).meta;

	return {
		props: {
			meta,
			locale,
			slug: params?.slug ?? ''
		}
	};
};

const Project = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
	const ContentComponent =
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		require(`../../content/projects/${props.locale}/${props.slug}.mdx`).default;

	return (
		<MDXProvider components={contentComponents}>
			<Head>
				<meta
					property="og:image"
					content={`/images/content/projects/${props.slug}/og_${props.locale}.png`}
				/>
				<meta property="og:image:type" content="image/png" />
			</Head>
			<ContentLayout meta={props.meta}>
				<ContentComponent />
			</ContentLayout>
		</MDXProvider>
	);
};

export default Project;
