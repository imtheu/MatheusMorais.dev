import { styled } from 'style/stitches.config';

export const SocialVideos = styled('div', {
	textAlign: 'center'
});

export const Video = styled('div', {
	'> div': {
		display: 'none'
	},

	variants: {
		display: {
			TIKTOK: {
				'.TIKTOK': {
					display: 'block'
				}
			},
			INSTAGRAM: {
				'.INSTAGRAM': {
					display: 'block'
				}
			}
		}
	}
});
