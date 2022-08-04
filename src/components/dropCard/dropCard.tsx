import React from 'react';
import Link from 'next/link';

import Grid from 'components/grid';
import Text from 'components/text';
import Spacing from 'components/spacing';

type PropsType = {
	id: number;
	title: string;
	description: string;
	slug: string;
	locale: 'pt-BR' | 'en-US';
};

const content: { [key: string]: Record<string, string> } = {
	'en-US': {
		readMore: 'Read more'
	},
	'pt-BR': {
		readMore: 'Leia mais'
	}
};

const DropCard = ({ id, title, description, locale, slug }: PropsType) => (
	<article>
		<Grid>
			<Grid.Item size={2} tabletSize={2} mobileSize={2}>
				<Text size={4} weight="medium" align="right" color="light" tag="p">
					#{id + 1}
				</Text>
			</Grid.Item>
			<Grid.Item size={10} tabletSize={10} mobileSize={10}>
				<Link href={`/${locale}/drops/${slug}`} passHref>
					<a>
						<Text size={4} weight="medium" tag="h1">
							{title}
						</Text>
					</a>
				</Link>
				<Spacing size={1} />
				<Text size={2} weight="light" tag="p">
					{description}{' '}
					<Link href={`/${locale}/drops/${slug}`} passHref>
						<a>{content[locale].readMore}</a>
					</Link>
				</Text>
			</Grid.Item>
		</Grid>
	</article>
);

export default DropCard;
