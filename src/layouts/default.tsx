import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import Separator from '../components/separator';

const DefaultLayout = (props: { children: JSX.Element }) => {
	return (
		<>
			<Header />
			<main className="container">{props.children}</main>
			<Separator />
			<Footer />
		</>
	);
};

export default DefaultLayout;
