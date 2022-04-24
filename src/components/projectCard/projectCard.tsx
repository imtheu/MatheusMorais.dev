import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useI18N from '../../hooks/useI18N';
import Grid from '../grid';
import Title from '../title';
import Text from '../text';
import Spacing from '../spacing';

import * as Styled from './style';
import Button from '../button';

type PropsType = {
	title: string;
	content: string;
	imageSrc: string;
	url: string;
};

const cardContent: { [key: string]: Record<string, string> } = {
	'en-US': {
		buttonText: 'Read more'
	},
	'pt-BR': {
		buttonText: 'Leia mais'
	}
};

const ProjectCard = ({ imageSrc, title, content, url }: PropsType) => {
	const { locale } = useI18N();

	return (
		<article>
			<Grid>
				<Grid.Item size={6} tabletSize={12} mobileSize={12}>
					<Styled.CardImageWrapper>
						<Link href={url} passHref>
							<a>
								<Image src={imageSrc} width="536" height="250" />
							</a>
						</Link>
					</Styled.CardImageWrapper>
				</Grid.Item>
				<Grid.Item size={6} tabletSize={12} mobileSize={12}>
					<Spacing tabletSize={4} mobileSize={4} />
					<Styled.CardContent>
						<Link href={url} passHref>
							<a>
								<Title tag="h1" size={4}>
									{title}
								</Title>
							</a>
						</Link>
						<Spacing size={4} />
						<Text size={2} align="justify">
							{content}
						</Text>
						<Spacing size={5} />

						<Link href={url} passHref>
							<a>
								<Button>{cardContent[locale].buttonText}</Button>
							</a>
						</Link>
					</Styled.CardContent>
				</Grid.Item>
			</Grid>
		</article>
	);
};

export default ProjectCard;
