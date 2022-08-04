import { Text } from 'components/text/style';

import { styled } from 'style/stitches.config';

export const Title = styled('div', {
	'h1, h2, h3, h4, h5, h6, p': {
		margin: 0,
		padding: 0
	},

	[`${Text}`]: {
		a: {
			color: '$darkShade',
			textDecoration: 'none',

			'&:hover': {
				textDecoration: 'underline'
			}
		}
	}
});
