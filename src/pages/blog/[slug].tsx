import { MDXProvider } from '@mdx-js/react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import ContentLayout from '../../layouts/contentLayout';

import Separator from '../../components/separator';
import Title from '../../components/title';
import ContentTable from '../../components/contentTable';

import { getAllPosts } from '../../services/posts';

const components = {
	h1: Title,
	hr: Separator,
	table: ContentTable
};

export const getStaticPaths: GetStaticPaths = () => {
	const posts = getAllPosts();
	return {
		paths: posts.map((post) => {
			return {
				params: {
					slug: post.slug
				},
				locale: post.language
			};
		}),
		fallback: false
	};
};

export const getStaticProps: GetStaticProps = ({ locale, params }) => {
	const meta =
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		require(`../../content/posts/${locale}/${params?.slug}.mdx`).meta;

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
		require(`../../content/posts/${props.locale}/${props.slug}.mdx`).default;

	return (
		<MDXProvider components={components}>
			<ContentLayout
				meta={props.meta}
				comments={{
					title: props.meta?.title,
					identifier: `post_${props.slug}`,
					language: props.locale.replace('-', '_'),
					url: `https://matheusmorais.dev/blog/${props.slug}`
				}}
			>
				<>{ContentComponent ? <ContentComponent /> : null}</>
			</ContentLayout>
		</MDXProvider>
	);
};

export default Project;
