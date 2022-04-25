import { keyframes } from '@stitches/react';

import { styled } from 'style/stitches.config';

const huhuZoomInRight = keyframes({
	'0%': { transform: 'translateX(0px) translateY(0px)' },
	'100%': { transform: 'translateX(4px) translateY(5px)' }
});

const huhuZoomInLeft = keyframes({
	'0%': { transform: 'translateX(0px) translateY(0px)' },
	'100%': { transform: 'translateX(-1px) translateY(-5px)' }
});

const huhuFadeOut = keyframes({
	'0%': { transform: 'translateX(0px)' },
	'100%': { transform: 'translateX(-4px)' }
});

const huhuZoomInUp = keyframes({
	'0%': { transform: 'translateX(0px)' },
	'100%': { transform: 'translateX(6px)' }
});

export const Memoji = styled('div', {
	textAlign: 'center',
	position: 'relative',

	'.logoAnimation': {
		animationIterationCount: 'infinite',
		animationDirection: 'alternate',
		animationTimingFunction: 'ease-in-out'
	},

	'.logoAnimation[data-aos="zoom-in-right"], .logoAnimation[data-aos="zoom-in"]':
		{
			animationName: `${huhuZoomInRight}`,
			animationDuration: '2.5s'
		},
	'.logoAnimation[data-aos="zoom-in-left"]': {
		animationName: `${huhuZoomInLeft}`,
		animationDuration: '1.5s'
	},
	'.logoAnimation[data-aos="fade-out"]': {
		animationName: `${huhuFadeOut}`,
		animationDuration: '2s'
	},
	'.logoAnimation[data-aos="zoom-in-up"]': {
		animationName: `${huhuZoomInUp}`,
		animationDuration: '2.8s'
	}
});
