import React, { PropsWithChildren } from 'react';

import * as Styled from './style';

type ItemPropsType = { size: number; tabletSize?: number; mobileSize?: number };

const Grid = ({ children }: PropsWithChildren<unknown>) => (
	<Styled.Grid>{children}</Styled.Grid>
);

const Item = ({
	size,
	tabletSize,
	mobileSize,
	children
}: PropsWithChildren<ItemPropsType>) => (
	<Styled.GridItem size={size} tabletSize={tabletSize} mobileSize={mobileSize}>
		{children}
	</Styled.GridItem>
);

Grid.Item = Item;

export default Grid;
