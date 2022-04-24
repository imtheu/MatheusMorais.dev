import { styled } from '../../style/stitches.config';

export const Nav = styled('nav', {
	ul: {
		listStyle: 'none',
		display: 'flex',
		padding: 0
	},

	li: {
		position: 'relative',

		'& + li': {
			marginLeft: '15px'
		},

		'& + li::before': {
			content: '•',
			position: 'absolute',
			left: '-12px'
		}
	},

	a: {
		textDecoration: 'none',
		color: '$medium',
		fontWeight: '$fwMedium',

		'&:hover': {
			color: '$mediumShade'
		}
	}
});
