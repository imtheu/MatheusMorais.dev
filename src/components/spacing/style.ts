import { CSS } from '@stitches/react';
import { styled } from '../../style/stitches.config';

const generateSpacingVariants = (viewport: 'desktop' | 'tablet' | 'mobile') => {
	const spacingVariants = 6;
	const spacing: { [key: number]: CSS } = {};

	for (let index = 0; index <= spacingVariants; index++) {
		switch (viewport) {
			case 'desktop': {
				spacing[index] = {
					marginBottom: `$space${index}`
				};
				break;
			}
			case 'tablet': {
				spacing[index] = {
					'@tablet': {
						marginBottom: `$space${index}`
					}
				};
				break;
			}
			case 'mobile': {
				spacing[index] = {
					'@phone': {
						marginBottom: `$space${index}`
					}
				};
				break;
			}
		}
	}

	return spacing;
};

export const Spacing = styled('div', {
	height: '0.1px',
	variants: {
		size: {
			...generateSpacingVariants('desktop')
		},
		tabletSize: {
			...generateSpacingVariants('tablet')
		},
		mobileSize: {
			...generateSpacingVariants('mobile')
		}
	}
});
