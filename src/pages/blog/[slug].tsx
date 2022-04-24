import { MDXProvider } from '@mdx-js/react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import ContentLayout from 'layouts/contentLayout';
import { contentComponents } from 'utils/content.utils';

import { generateImage } from 'lib/opengraph';

import { getAllPosts, getPostLanguages } from 'services/posts';

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getAllPosts();

	if (process.env.GENERATE_IMAGES) {
		posts.forEach((post) => {
			if (post.meta.externalLink) {
				return;
			}

			try {
				generateImage(
					post.slug,
					post.meta.title,
					post.meta.date,
					post.language,
					`/public/images/content/posts/${post.slug}`
				);
			} catch {
				console.log(`OG Image not generated: ${post.slug}`);
			}
		});
	}

	return {
		paths: posts.map((post) => {
			return {
				params: {
					slug: post.slug
				},
				locale: post.language
			};
		}),
		fallback: true
	};
};

export const getStaticProps: GetStaticProps = ({ locale, params }) => {
	const postLanguages = getPostLanguages((params?.slug as string) ?? '');

	if (!postLanguages.includes(locale ?? '')) {
		return {
			redirect: {
				destination: `/${postLanguages[0]}/blog/${params?.slug}`,
				permanent: false
			}
		};
	}

	const meta =
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		require(`../../content/posts/${locale}/${params?.slug}.mdx`).meta;

	return {
		props: {
			meta,
			locale,
			slug: params?.slug ?? '',
			locales: postLanguages
		}
	};
};

const Project = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
	let ContentComponent;

	try {
		ContentComponent =
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			require(`../../content/posts/${props.locale}/${props.slug}.mdx`).default;
	} catch {
		return <></>;
	}

	return (
		<MDXProvider components={contentComponents}>
			<Head>
				<meta
					property="og:image"
					content={`/images/content/posts/${props.slug}/og_${props.locale}.png`}
				/>
				<meta property="og:image:type" content="image/png" />
			</Head>
			<ContentLayout
				meta={props.meta}
				comments={{
					title: props.meta?.title,
					identifier: `post_${props.slug}`,
					language: props.locale.replace('-', '_'),
					url: `https://matheusmorais.dev/blog/${props.slug}`
				}}
				locale={props.locale}
				locales={props.locales}
			>
				<>{ContentComponent ? <ContentComponent /> : null}</>
			</ContentLayout>
		</MDXProvider>
	);
};

export default Project;
