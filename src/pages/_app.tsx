import { NextComponentType, NextPageContext } from 'next';
import type { AppProps } from 'next/app';

import 'normalize.css';
import global from '../style/global';

const App = ({
	Component,
	pageProps
}: AppProps & {
	Component: NextComponentType<
		NextPageContext,
		unknown,
		Record<string, unknown>
	> & {
		layout: React.FunctionComponent;
	};
}) => {
	global();

	return Component.layout ? (
		<Component.layout>
			<Component {...pageProps} />
		</Component.layout>
	) : (
		<Component {...pageProps} />
	);
};

export default App;
