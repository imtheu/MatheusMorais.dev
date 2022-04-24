import { keyframes } from '@stitches/react';

import { styled } from 'style/stitches.config';

const huhuZoomInRight = keyframes({
	'50%': { transform: 'translateY(5px) translateX(4px)' }
});

const huhuZoomInLeft = keyframes({
	'50%': { transform: 'translateY(-5px) translateX(-2px)' }
});

const huhuFadeOut = keyframes({
	'50%': { transform: 'translateX(-4px)' }
});

const huhuZoomInUp = keyframes({
	'50%': { transform: 'translateX(6px)' }
});

export const Memoji = styled('div', {
	textAlign: 'center',

	'.logoAnimation[data-aos="zoom-in-right"], .logoAnimation[data-aos="zoom-in"]':
		{
			animation: `${huhuZoomInRight} infinite 4s ease-in-out`
		},
	'.logoAnimation[data-aos="zoom-in-left"]': {
		animation: `${huhuZoomInLeft} infinite 3s ease-in-out`
	},
	'.logoAnimation[data-aos="fade-out"]': {
		animation: `${huhuFadeOut} infinite 2.5s ease-in-out`
	},
	'.logoAnimation[data-aos="zoom-in-up"]': {
		animation: `${huhuZoomInUp} infinite 3s ease-in-out`
	}
});
