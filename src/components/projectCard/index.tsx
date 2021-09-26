import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type PropsType = {
	title: string;
	content: string;
	imageSrc: string;
	className: string;
	url: string;
};

const ProjectCard = (props: PropsType) => {
	return (
		<article className={props.className}>
			<Image src={props.imageSrc} width="536" height="250" />
			<h1 className="subtitle medium-weight">{props.title}</h1>
			<p>{props.content}</p>

			<Link href={props.url}>
				<a className="button">Read more</a>
			</Link>
		</article>
	);
};

export default ProjectCard;
