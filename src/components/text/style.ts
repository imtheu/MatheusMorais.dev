import { styled } from 'style/stitches.config';

export const Text = styled('span', {
	color: '$dark',
	fontFamily: '$inter',
	lineHeight: 1.4,
	margin: 0,
	padding: 0,

	a: {
		color: '$link',
		textDecoration: 'underline',
		'&:hover': {
			color: '$linkShade'
		}
	},

	strong: {
		fontWeight: '$fwMedium',
		color: '$primary'
	},

	variants: {
		font: {
			RobotoMono: {
				fontFamily: '$robotoMono'
			},
			Inter: {
				fontFamily: '$inter'
			}
		},

		size: {
			1: {
				fontSize: '$size1'
			},
			2: {
				fontSize: '$size2'
			},
			3: {
				fontSize: '$size3'
			},
			4: {
				fontSize: '$size4'
			},
			5: {
				fontSize: '$size5'
			}
		},

		mobileSize: {
			1: {
				'@phone': {
					fontSize: '$size1'
				}
			},
			2: {
				'@phone': {
					fontSize: '$size2'
				}
			},
			3: {
				'@phone': {
					fontSize: '$size3'
				}
			},
			4: {
				'@phone': {
					fontSize: '$size4'
				}
			},
			5: {
				'@phone': {
					fontSize: '$size5'
				}
			}
		},

		weight: {
			light: {
				fontWeight: '$fwLight'
			},
			regular: {
				fontWeight: '$fwRegular'
			},
			medium: {
				fontWeight: '$fwMedium'
			}
		},

		color: {
			primary: {
				color: '$primary'
			},
			link: {
				color: '$link'
			},
			dark: {
				color: '$dark'
			},
			medium: {
				color: '$medium'
			},
			mediumShade: {
				color: '$mediumShade'
			},
			light: {
				color: '$light'
			},
			white: {
				color: '$white'
			},
			parrotPink: {
				color: '$parrotPink'
			},
			rockBlue: {
				color: '$rockBlue'
			}
		},

		align: {
			left: {
				textAlign: 'left'
			},
			right: {
				textAlign: 'right'
			},
			center: {
				textAlign: 'center'
			},
			justify: {
				textAlign: 'justify'
			}
		}
	}
});
