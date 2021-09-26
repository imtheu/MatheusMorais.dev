import React from 'react';
import Head from 'next/head';

import Header from '../components/header';
import { ProjectMetaType } from '../types/Project';

const ContentLayout = (props: {
	children: JSX.Element;
	meta: ProjectMetaType;
}) => {
	return (
		<>
			<Head>
				<title>{props.meta.title} - MatheusMorais.dev</title>
			</Head>
			<Header />
			<main className="container">
				<div className="content">{props.children}</div>
			</main>
		</>
	);
};

export default ContentLayout;
