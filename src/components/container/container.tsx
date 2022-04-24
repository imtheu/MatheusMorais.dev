import React, { PropsWithChildren } from 'react';

import * as Styled from './style';

const Container = ({ children }: PropsWithChildren<unknown>) => (
	<Styled.Container>{children}</Styled.Container>
);
export default Container;
