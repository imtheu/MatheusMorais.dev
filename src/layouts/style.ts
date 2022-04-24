import { styled } from 'style/stitches.config';

export const Content = styled('div', {
	a: {
		color: '$link',
		textDecoration: 'underline',
		'&:hover': {
			color: '$linkShade'
		}
	},

	img: { display: 'block', margin: '0 auto', maxWidth: '100%' },

	'p, li': {
		fontSize: '$size2',
		lineHeight: 1.4,
		textAlign: 'justify'
	},

	'li + li': {
		marginTop: '$space4'
	},

	'code, pre': {
		'&, & *': {
			fontFamily: '$robotoMono!important'
		}
	},

	code: {
		background: '#282a36',
		color: '$white',
		padding: '2px 4px',
		borderRadius: '5px'
	},

	table: {
		padding: '0',
		wordBreak: 'initial',
		width: '100%',
		tr: {
			margin: '0',
			padding: '0'
		},
		'tr:nth-child(2n), thead': {
			backgroundColor: '$lighter'
		},
		'tr th': {
			fontWeight: 500,
			textAlign: 'left',
			margin: '0',
			padding: '12px 25px',
			fontSize: '18px',
			color: '$primary'
		},
		'tr td': {
			textAlign: 'left',
			margin: '0',
			padding: '8px 20px',
			fontSize: '16px'
		},
		'tr th:first-child, tr td:first-child': {
			marginTop: '0'
		},
		'tr th:last-child, tr td:last-child': {
			marginBottom: '0'
		}
	},

	blockquote: {
		borderLeft: '4px solid $light',
		padding: '10px 25px',
		backgroundColor: '$lighter',
		margin: '0'
	},

	hr: {
		margin: 'calc($space5 * 2) 0',
		background: '$light',
		height: '1px',
		border: 0
	}
});
