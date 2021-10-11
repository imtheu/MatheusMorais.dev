import { MDXProvider } from '@mdx-js/react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import ContentLayout from '../../layouts/contentLayout';

import Separator from '../../components/separator';
import Title from '../../components/title';
import ContentTable from '../../components/contentTable';

import { getAllPosts, getPostLanguages } from '../../services/posts';

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
		<MDXProvider components={components}>
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
