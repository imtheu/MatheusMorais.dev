import React from 'react';

import Container from 'components/container';
import Header from 'components/header';
import Spacing from 'components/spacing';
import Footer from 'components/footer';

const DefaultLayout = ({ children }: { children: JSX.Element }) => (
	<>
		<Container>
			<Header />
			<Spacing size={6} />
			<main>{children}</main>
		</Container>
		<Footer />
	</>
);

export default DefaultLayout;
