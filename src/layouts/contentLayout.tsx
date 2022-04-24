import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Comments from 'components/comments';
import Notification from 'components/notification';
import Header from 'components/header';
import Container from 'components/container';
import Footer from 'components/footer';
import Spacing from 'components/spacing';

import * as Styled from './style';

import { ProjectMetaType } from 'types/Project';

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
				<meta name="description" content={props?.meta?.description} />
				<meta property="og:title" content={props?.meta?.title} />
				<meta property="og:description" content={props?.meta?.description} />
			</Head>
			<Container>
				<Header />

				<main>
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
					<Styled.Content>{props.children}</Styled.Content>

					<Spacing size={6} multiplier={3} />

					{props.comments ? (
						<>
							<Comments
								url={props.comments.url}
								identifier={props.comments.identifier}
								language={props.comments.language}
								title={props.comments.title}
							/>
						</>
					) : null}
				</main>
			</Container>
			<Spacing size={6} multiplier={2} />
			<Footer />
		</>
	);
};

export default ContentLayout;
