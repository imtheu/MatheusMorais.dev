import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Comments from 'components/comments';
import Notification from 'components/notification';
import Header from 'components/header';
import Container from 'components/container';
import Footer from 'components/footer';
import Spacing from 'components/spacing';

import * as Styled from './style';

import { ProjectMetaType } from 'src/types/Project';
import { PostMetaType } from 'src/types/Post';
import { DropMetaType } from 'src/types/Drop';

const languages = {
	'en-US': 'English',
	'pt-BR': 'Português'
};

type PropsType = {
	children: JSX.Element;
	meta?: ProjectMetaType | PostMetaType | DropMetaType;
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
	dropId?: number;
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
						<Notification
							css={{
								width: 'fit-content',
								marginLeft: 'auto',
								'@phone': {
									margin: '0 auto'
								}
							}}
						>
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
										>
											{languages[locale as 'en-US' | 'pt-BR']}
										</a>
									))}
							</>
						</Notification>
					) : null}

					{props.dropId ? (
						<Styled.DropsTag>
							<Image src="/images/drops.svg" width="7px" height="12px" /> Drops
							#{props.dropId}
						</Styled.DropsTag>
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
