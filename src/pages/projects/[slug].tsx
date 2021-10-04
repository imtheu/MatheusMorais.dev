import { MDXProvider } from '@mdx-js/react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import ContentLayout from '../../layouts/contentLayout';

import Separator from '../../components/separator';
import Title from '../../components/title';
import ContentTable from '../../components/contentTable';

import { getAllProjects } from '../../services/projects';

const components = {
	h1: Title,
	hr: Separator,
	table: ContentTable
};

export const getStaticPaths: GetStaticPaths = () => {
	const projects = getAllProjects();
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
		<MDXProvider components={components}>
			<ContentLayout meta={props.meta}>
				<ContentComponent />
			</ContentLayout>
		</MDXProvider>
	);
};

export default Project;
