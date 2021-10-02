import React from 'react';
import Link from 'next/link';

import styles from './postsCard.module.css';

type PropsType = {
	title: string;
	content: string;
	className?: string;
	url: string;
	external: boolean;
	date: Date;
};

const PostsCard = (props: PropsType) => {
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
				{props.external ? 'External link • ' : null}
				{props.date.toLocaleDateString('pt-BR', {
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
					Read
				</a>
			) : (
				<Link href={props.url}>
					<a className="button">Read</a>
				</Link>
			)}
		</article>
	);
};

export default PostsCard;
