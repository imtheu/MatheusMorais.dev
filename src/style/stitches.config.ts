import { createStitches } from '@stitches/react';

export const { styled, getCssText, globalCss } = createStitches({
	theme: {
		colors: {
			primary: '#36BD9E',
			primaryShade: '#30A68B',

			link: '#DAA21B',
			linkShade: '#c08f18',

			dark: '#404756',
			darkShade: '#383e4c',
			medium: '#A4ABBD',
			mediumShade: '#9096a6',
			light: '#D0D7EA',
			white: '#FFFFFF',

			parrotPink: '#D09EA8',
			rockBlue: '#9BABCF'
		},
		fontSizes: {
			size1: '0.75rem',
			size2: '1rem',
			size3: '1.333rem',
			size4: '1.777rem',
			size5: '2.369rem'
		},
		space: {
			space0: 0,
			space1: '0.25rem',
			space2: '0.5rem',
			space3: '0.75rem',
			space4: '1rem',
			space5: '1.5rem',
			space6: '3rem'
		},
		fontWeights: {
			fwLight: '300',
			fwRegular: '400',
			fwMedium: '500'
		},
		fonts: {
			robotoMono: "'Roboto Mono', monospace",
			inter: "'Inter', sans-serif"
		},
		shadows: {
			low: `
				0px 0.3px 0.3px hsl(221deg 20% 19% / 0.37),
				0.1px 0.5px 0.5px -2px hsl(221deg 20% 19% / 0.28),
				0.2px 1.1px 1px -4.1px hsl(221deg 20% 19% / 0.18)
			`,
			medium: `
				0px 0.3px 0.3px hsl(221deg 20% 19% / 0.39),
				0.1px 0.7px 0.6px -1.3px hsl(221deg 20% 19% / 0.32),
				0.3px 2.1px 1.9px -2.7px hsl(221deg 20% 19% / 0.24),
				0.8px 5.6px 5px -4.1px hsl(221deg 20% 19% / 0.17)
			`,
			high: `
				0px 0.3px 0.3px hsl(221deg 20% 19% / 0.36),
				0.1px 0.8px 0.7px -0.6px hsl(221deg 20% 19% / 0.33),
				0.2px 1.5px 1.4px -1.2px hsl(221deg 20% 19% / 0.29),
				0.4px 2.9px 2.6px -1.7px hsl(221deg 20% 19% / 0.26),
				0.8px 5.3px 4.8px -2.3px hsl(221deg 20% 19% / 0.22),
				1.4px 9.1px 8.2px -2.9px hsl(221deg 20% 19% / 0.19),
				2.2px 14.8px 13.4px -3.5px hsl(221deg 20% 19% / 0.16),
				3.4px 22.6px 20.4px -4.1px hsl(221deg 20% 19% / 0.12)
			`
		}
	},
	media: {
		phone: '(max-width:680px)',
		tablet: '(min-width:681px) and (max-width:1060px)',
		notebookUp: '(min-width:1061px)',
		notebook: '(min-width:1061px) and (max-width:1200px)',
		ultra: '(min-width:1500px)'
	}
});
