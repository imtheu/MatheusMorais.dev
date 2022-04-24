import React, { ComponentProps, PropsWithChildren } from 'react';

import Text from '../text';

import * as Styled from './style';

type PropsType = {
	branding?: boolean;
	tag?: 'h1' | 'h2' | 'h3' | 'h4';
	size?: ComponentProps<typeof Text>['size'];
	mobileSize?: ComponentProps<typeof Text>['mobileSize'];
};

const Title = ({
	branding,
	children,
	size,
	mobileSize,
	tag = 'h1'
}: PropsWithChildren<PropsType>) => {
	return (
		<Styled.Title>
			<Text tag={tag} weight="medium" {...{ size, mobileSize }}>
				{branding ? (
					<>
						{'{ '}
						<Text color="primary">...</Text>
					</>
				) : null}
				{children}
			</Text>
		</Styled.Title>
	);
};

export default Title;
