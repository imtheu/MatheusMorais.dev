import React from 'react';

import * as Styled from './style';

type PropsType = {
	// eslint-disable-next-line no-magic-numbers
	size?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
	tabletSize?: PropsType['size'];
	mobileSize?: PropsType['size'];
	multiplier?: number;
};

const Spacing = ({
	size,
	tabletSize,
	mobileSize,
	multiplier = 1
}: PropsType) => {
	return (
		<>
			{[...new Array(multiplier)].map((_, index) => (
				<Styled.Spacing
					key={index}
					size={size === undefined ? undefined : size}
					tabletSize={tabletSize}
					mobileSize={mobileSize}
				/>
			))}
		</>
	);
};

export default Spacing;
