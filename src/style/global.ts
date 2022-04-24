import { globalCss } from './stitches.config';

const global = globalCss({
	'@font-face': [
		{
			fontFamily: 'Roboto Mono',
			src: "local(''), url('/fonts/Roboto_Mono/RobotoMono-Light.ttf') format('truetype')",
			fontWeight: 300,
			fontStyle: 'normal',
			fontDisplay: 'swap'
		},
		{
			fontFamily: 'Roboto Mono',
			src: "local(''), url('/fonts/Roboto_Mono/RobotoMono-Regular.ttf') format('truetype')",
			fontWeight: 400,
			fontStyle: 'normal',
			fontDisplay: 'swap'
		},
		{
			fontFamily: 'Inter',
			src: "local(''), url('/fonts/Inter/Inter.ttf') format('truetype')",
			fontWeight: 400,
			fontStyle: 'normal',
			fontDisplay: 'swap'
		},
		{
			fontFamily: 'Inter',
			src: "local(''), url('/fonts/Inter/Inter.ttf') format('truetype')",
			fontWeight: 500,
			fontStyle: 'medium',
			fontDisplay: 'swap'
		}
	],
	'*': {
		fontFamily: '$inter'
	},
	a: {
		textDecoration: 'none'
	}
});

export default global;
