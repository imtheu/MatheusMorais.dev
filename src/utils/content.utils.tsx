import { MDXProviderComponents } from '@mdx-js/react';

import CodeBlock from 'components/codeblock';
import ContentTable from 'components/contentTable';
import Spacing from 'components/spacing';
import Title from 'components/title';
import Notification from 'components/notification';

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

const dropNotificationContent: { [key: string]: Record<string, JSX.Element> } =
	{
		'en-US': {
			content: (
				<>
					You{"'"}re reading a <strong style={{ fontWeight: 800 }}>Drop</strong>
					: A Quick Tip, or something I{"'"}ve learned recently that I{"'"}d
					like to share.
				</>
			)
		},
		'pt-BR': {
			content: (
				<>
					Você está lendo um <strong style={{ fontWeight: 800 }}>Drop</strong>:
					Uma dica rapidinha, ou uma coisa que eu aprendi recentemente e
					gostaria de compartilhar.
				</>
			)
		}
	};

export const dropsContentComponents = (locale?: string) =>
	({
		h1: ({ children }) => (
			<>
				<Spacing size={3} />
				<Title size={5}>{children}</Title>
				<Notification
					css={{
						textAlign: 'center'
					}}
				>
					{dropNotificationContent[locale ?? 'en-US'].content}
				</Notification>
				<Spacing size={4} />
			</>
		)
	} as MDXProviderComponents);
