import React, { ElementType, PropsWithChildren } from 'react';
import { VariantProps } from '@stitches/react';

import * as Styled from './style';

type PropsType = {
	size?: VariantProps<typeof Styled.Text>['size'];
	mobileSize?: VariantProps<typeof Styled.Text>['mobileSize'];
	color?: VariantProps<typeof Styled.Text>['color'];
	font?: 'Inter' | 'RobotoMono';
	weight?: VariantProps<typeof Styled.Text>['weight'];
	align?: VariantProps<typeof Styled.Text>['align'];
	tag?: ElementType;
};

const Text = ({
	children,
	size,
	mobileSize,
	color,
	weight,
	align,
	font = 'Inter',
	tag = 'span'
}: PropsWithChildren<PropsType>) => (
	<Styled.Text as={tag} {...{ size, mobileSize, color, font, weight, align }}>
		{children}
	</Styled.Text>
);

export default Text;
