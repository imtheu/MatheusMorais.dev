import React from 'react';
import Head from 'next/head';

import { ProjectMetaType } from '../types/Project';

import Header from '../components/header';
import Footer from '../components/footer';
import Separator from '../components/separator';
import Comments from '../components/comments';

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
};

const ContentLayout = (props: PropsType) => {
	return (
		<>
			<Head>
				<title>{props?.meta?.title} - MatheusMorais.dev</title>
			</Head>
			<Header />
			<main className="container">
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
