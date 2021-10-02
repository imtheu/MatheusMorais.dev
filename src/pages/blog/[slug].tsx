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

	let ContentComponent: React.ComponentType | null = null;
	let meta;
	try {
		ContentComponent = dynamic(
			() => import(`../../content/posts/${locale}/${router.query.slug}.mdx`),
			{ ssr: true }
		);

		meta =
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			require(`../../content/posts/${locale}/${router.query.slug}.mdx`).meta;
	} catch {
		if (locale === 'pt-BR') {
			router.push(router.asPath, undefined, { locale: 'en-US' });
		} else if (locale === 'en-US') {
			router.push(router.asPath, undefined, { locale: 'pt-BR' });
		}
	}

	return (
		<MDXProvider components={components}>
			<ContentLayout meta={meta}>
				<>{ContentComponent ? <ContentComponent /> : null}</>
			</ContentLayout>
		</MDXProvider>
	);
};

export default Project;