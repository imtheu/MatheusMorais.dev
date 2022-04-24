import { styled } from 'style/stitches.config';

export const LineNumber = styled('span', {
	display: 'inline-block',
	textAlign: 'center',
	marginRight: '73px',
	width: '20px',
	color: '$light',

	'@phone': {
		display: 'none'
	}
});

export const Typewriter = styled('span', {
	'.Typewriter': {
		display: 'inline',
		fontWeight: '$fwLight'
	},
	'.Typewriter__wrapper': {
		fontWeight: '$fwLight!important',
		fontFamily: '$robotoMono'
	}
});
