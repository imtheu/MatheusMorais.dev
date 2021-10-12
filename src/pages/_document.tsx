import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
	return (
		<Html>
			<Head>
				<meta name="theme-color" content="#06D6A0" />
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/images/favicons/32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/images/favicons/16x16.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="192x192"
					href="/images/favicons/192x192.png"
				/>
				<link rel="shortcut icon" href="/images/favicons/favicon.ico"></link>

				<meta property="og:site_name" content="MatheusMorais.dev" />
				<meta property="og:type" content="website" />
				<meta property="og:locale" content="pt_BR" />
				<meta property="og:url" content="http://www.matheusmorais.dev/" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
