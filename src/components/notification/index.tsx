import React, { PropsWithChildren } from 'react';
import { CSS } from '@stitches/react';

import Spacing from 'components/spacing';
import Text from 'components/text';

import * as Styled from './style';

const Notification = ({ children, css }: PropsWithChildren<{ css?: CSS }>) => (
	<>
		<Spacing size={5} />
		<Styled.Notification css={css}>
			<Text>{children}</Text>
		</Styled.Notification>
		<Spacing size={5} />
	</>
);

export default Notification;
