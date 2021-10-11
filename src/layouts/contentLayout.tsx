import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { ProjectMetaType } from '../types/Project';

import Comments from '../components/comments';
import Footer from '../components/footer';
import Header from '../components/header';
import Notification from '../components/notification';
import Separator from '../components/separator';

const languages = {
	'en-US': 'English',
	'pt-BR': 'Português'
};

type PropsType = {
	children: JSX.Element;
	meta?: ProjectMetaType;
	comments?:
		| {
				url: string;
				identifier: string;
				language: string;
				title: string;
		  }
		| undefined;
	locale?: string;
	locales?: string[];
};

const ContentLayout = (props: PropsType) => {
	const router = useRouter();

	const toggleLanguage = async (
		event: React.FormEvent<HTMLAnchorElement>,
		language: string
	) => {
		event.preventDefault();
		await router.push(router.asPath, undefined, { locale: language });
	};

	return (
		<>
			<Head>
				<title>{props?.meta?.title} - MatheusMorais.dev</title>
			</Head>
			<Header />
			<main className="container">
				{props.locales && props.locales.length > 1 ? (
					<Notification>
						<>
							This post is also available in{' '}
							{props.locales
								.filter((locale) => locale !== props.locale)
								.map((locale) => (
									// eslint-disable-next-line jsx-a11y/anchor-is-valid
									<a
										key={locale}
										onClick={(event) => toggleLanguage(event, locale)}
										href="#"
										className="color-grey-darker medium-weight"
									>
										{languages[locale as 'en-US' | 'pt-BR']}
									</a>
								))}
						</>
					</Notification>
				) : null}
				<div className="content">{props.children}</div>
				<Separator />
				{props.comments ? (
					<>
						<Comments
							url={props.comments.url}
							identifier={props.comments.identifier}
							language={props.comments.language}
							title={props.comments.title}
						/>
						<Separator />
					</>
				) : null}
			</main>
			<Footer />
		</>
	);
};

export default ContentLayout;
