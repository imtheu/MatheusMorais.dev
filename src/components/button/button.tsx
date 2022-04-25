import React, { PropsWithChildren } from 'react';

import * as Styled from './style';

const Button = ({ children }: PropsWithChildren<unknown>) => {
	return <Styled.Button>{children}</Styled.Button>;
};

export default Button;
