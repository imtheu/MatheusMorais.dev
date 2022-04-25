import { styled } from 'style/stitches.config';

export const CardImageWrapper = styled('div', {
	'> div': {
		boxShadow: '$low'
	}
});

export const CardContent = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	height: '100%'
});
