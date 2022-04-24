import { styled } from '../../style/stitches.config';

export const Footer = styled('footer', {
	width: '100%',
	padding: '80px 0 0',
	background: '$dark'
});

export const Nav = styled('nav', {
	textAlign: 'left',
	ul: {
		listStyle: 'none',
		margin: '0',
		padding: '0',
		'li+li': {
			marginTop: '$space5'
		}
	},
	a: {
		color: '$white'
	},
	'@notebookUp': {
		textAlign: 'right'
	}
});

export const FooterFooter = styled('div', {
	width: '100%',
	padding: '20px 0',
	background: '$darkShade',
	textAlign: 'center'
});

export const SocialIcons = styled('div', {
	display: 'flex',
	justifyContent: 'space-between',
	width: '250px'
});

export const SocialIcon = styled('a', {
	display: 'block',
	backgroundRepeat: 'no-repeat',
	fontSize: 0,
	border: 0,
	backgroundImage: "url('/images/social_sprite.svg')",
	backgroundSize: 'cover',
	overflow: 'hidden',

	variants: {
		icon: {
			instagram: {
				width: '32px',
				height: '40.5px'
			},
			github: {
				width: '36px',
				height: '40.5px',
				backgroundPosition: '-34px 0'
			},
			twitter: {
				width: '34.93px',
				height: '40.5px',
				backgroundPosition: '-74px 0'
			},
			linkedin: {
				width: '34.63px',
				height: '40.5px',
				backgroundPosition: '-107px 0'
			},
			rss: {
				width: '38.72px',
				height: '40.5px',
				backgroundPosition: '-144px 0'
			}
		}
	}
});
