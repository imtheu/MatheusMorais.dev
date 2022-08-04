import React, { PropsWithChildren } from 'react';

import * as Styled from './style';

type PropsType = {
	onClick?: () => void;
};

const Button = ({ children, onClick }: PropsWithChildren<PropsType>) => (
	<Styled.Button onClick={onClick}>{children}</Styled.Button>
);

export default Button;
