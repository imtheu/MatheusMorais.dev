import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useI18N from '../../hooks/useI18N';

type PropsType = {
	title: string;
	content: string;
	imageSrc: string;
	className: string;
	url: string;
};

const content: { [key: string]: Record<string, string> } = {
	'en-US': {
		buttonText: 'Read more'
	},
	'pt-BR': {
		buttonText: 'Leia mais'
	}
};

const ProjectCard = (props: PropsType) => {
	const { locale } = useI18N();

	return (
		<article className={props.className}>
			<Image src={props.imageSrc} width="536" height="250" />
			<h1 className="subtitle medium-weight">{props.title}</h1>
			<p>{props.content}</p>

			<Link href={props.url}>
				<a className="button">{content[locale].buttonText}</a>
			</Link>
		</article>
	);
};

export default ProjectCard;
