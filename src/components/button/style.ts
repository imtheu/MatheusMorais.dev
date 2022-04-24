import { styled } from 'style/stitches.config';

export const Button = styled('button', {
	background: '$primary',
	padding: '$space2 $space5',
	color: '$white',
	cursor: 'pointer',
	borderRadius: '3px',
	textDecoration: 'none',
	border: 'none',
	boxShadow: 'none',
	display: 'inline',

	'&:hover': {
		background: '$primaryShade'
	}
});
