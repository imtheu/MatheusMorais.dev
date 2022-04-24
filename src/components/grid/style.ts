import { CSS } from '@stitches/react';
import { styled } from '../../style/stitches.config';

const columnsNumber = 12;

const generateItemVariants = (viewport: 'desktop' | 'tablet' | 'mobile') => {
	const columns: { [key: number]: CSS } = {};

	for (let index = 0; index < columnsNumber; index++) {
		switch (viewport) {
			case 'desktop':
				columns[index + 1] = {
					'@notebookUp': {
						gridColumn: `span ${index + 1}`
					}
				};
				break;
			case 'tablet':
				columns[index + 1] = {
					'@tablet': {
						gridColumn: `span ${index + 1}`
					}
				};
				break;
			case 'mobile':
				columns[index + 1] = {
					'@phone': {
						gridColumn: `span ${index + 1}`
					}
				};
				break;
		}
	}

	return columns;
};

export const Grid = styled('div', {
	display: 'grid',
	gridTemplateColumns: 'repeat(12, 1fr)',
	gridColumnGap: '1.87em'
});

export const GridItem = styled('div', {
	variants: {
		size: {
			...generateItemVariants('desktop')
		},
		tabletSize: {
			...generateItemVariants('tablet')
		},
		mobileSize: {
			...generateItemVariants('mobile')
		}
	}
});
