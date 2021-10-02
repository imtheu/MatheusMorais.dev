import React from 'react';
import Link from 'next/link';

import styles from './postsCard.module.css';
import useI18N from '../../hooks/useI18N';

type PropsType = {
	title: string;
	content: string;
	className?: string;
	url: string;
	external: boolean;
	date: Date;
};

const content: { [key: string]: Record<string, string> } = {
	'en-US': {
		externalText: 'External link • ',
		buttonText: 'Read'
	},
	'pt-BR': {
		externalText: 'Link externo • ',
		buttonText: 'Ler'
	}
};

const PostsCard = (props: PropsType) => {
	const { locale } = useI18N();
	return (
		<article className={`${props.className} ${styles.postCard}`}>
			{props.external ? (
				<h1 className="subtitle medium-weight">
					<a target="_blank" rel="noopener noreferrer" href={props.url}>
						{props.title}
					</a>
				</h1>
			) : (
				<Link href={props.url}>
					<h1 className="subtitle medium-weight">{props.title}</h1>
				</Link>
			)}

			<p className="color-grey-darker small-text">
				{props.external ? content[locale].externalText : null}
				{props.date.toLocaleDateString(locale, {
					day: 'numeric',
					month: 'long',
					year: 'numeric'
				})}
			</p>

			<p>{props.content}</p>

			{props.external ? (
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={props.url}
					className="button"
				>
					{content[locale].buttonText}
				</a>
			) : (
				<Link href={props.url}>
					<a className="button">{content[locale].buttonText}</a>
				</Link>
			)}
		</article>
	);
};

export default PostsCard;
