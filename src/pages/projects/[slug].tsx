import { MDXProvider } from '@mdx-js/react';
import { useRouter } from 'next/router';

import dynamic from 'next/dynamic';

import ContentLayout from '../../layouts/contentLayout';

import Separator from '../../components/separator';
import Title from '../../components/title';
import ContentTable from '../../components/contentTable';
import useI18N from '../../hooks/useI18N';

const components = {
	h1: Title,
	hr: Separator,
	table: ContentTable
};

const Project = () => {
	const router = useRouter();
	const { locale } = useI18N();

	if (!router.query.slug || !locale) {
		return <></>;
	}

	const ContentComponent = dynamic(
		() => import(`../../content/projects/${locale}/${router.query.slug}.mdx`),
		{ ssr: true }
	);

	const meta =
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		require(`../../content/projects/${locale}/${router.query.slug}.mdx`).meta;

	return (
		<MDXProvider components={components}>
			<ContentLayout meta={meta}>
				<ContentComponent />
			</ContentLayout>
		</MDXProvider>
	);
};

export default Project;
