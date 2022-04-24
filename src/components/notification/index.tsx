import React, { PropsWithChildren } from 'react';

import Spacing from 'components/spacing';
import Text from 'components/text';

import * as Styled from './style';

const Notification = (props: PropsWithChildren<unknown>) => (
	<>
		<Spacing size={5} />
		<Styled.Notification>
			<Text>{props.children}</Text>
		</Styled.Notification>
		<Spacing size={5} />
	</>
);

export default Notification;
