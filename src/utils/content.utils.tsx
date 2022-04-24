import { MDXProviderComponents } from '@mdx-js/react';
import CodeBlock from '../components/codeblock';
import ContentTable from '../components/contentTable';
import Spacing from '../components/spacing';
import Title from '../components/title';

export const contentComponents: MDXProviderComponents = {
	h1: ({ children }) => (
		<>
			<Spacing size={3} />
			<Title size={5}>{children}</Title>
			<Spacing size={4} />
		</>
	),
	h2: ({ children }) => (
		<>
			<Spacing size={6} />
			<Title size={4}>{children}</Title>{' '}
		</>
	),
	h3: ({ children }) => (
		<>
			<Spacing size={5} />
			<Title size={3}>{children}</Title>
		</>
	),
	table: ContentTable,
	code: CodeBlock
};
