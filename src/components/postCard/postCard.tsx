import Link from 'next/link';
import React from 'react';

import Button from 'components/button';
import Spacing from 'components/spacing';
import Text from 'components/text';
import Title from 'components/title';

import useI18N from 'hooks/useI18N';

type PropsType = {
	title: string;
	content: string;
	url: string;
	external: boolean;
	date: Date;
};

const cardContent: { [key: string]: Record<string, string> } = {
	'en-US': {
		externalText: 'External link • ',
		buttonText: 'Read post'
	},
	'pt-BR': {
		externalText: 'Link externo • ',
		buttonText: 'Ler post'
	}
};

const PostCard = ({ title, content, url, external, date }: PropsType) => {
	const { locale } = useI18N();

	return (
		<article>
			<Link href={url} passHref>
				<a>
					<Title tag="h1" size={4}>
						{title}
					</Title>
				</a>
			</Link>
			<Text size={1} color="rockBlue">
				{external ? cardContent[locale].externalText : null}
				{date.toLocaleDateString(locale, {
					day: 'numeric',
					month: 'long',
					year: 'numeric'
				})}
			</Text>
			<Spacing size={1} />
			<Text size={2} align="justify">
				{content}
			</Text>
			<Spacing size={3} />
			<Link href={url} passHref>
				<a target={external ? '_blank' : '_self'}>
					<Button>{cardContent[locale].buttonText}</Button>
				</a>
			</Link>
			<Spacing size={6} />
		</article>
	);
};

export default PostCard;
