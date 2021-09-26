import React from 'react';

type PropsType = {
	children: string;
};

const Title = (props: PropsType) => {
	return (
		<h1 className="heading-1 medium-weight">
			&#123; ...<span className="color-primary">{props.children}</span> &#125;
		</h1>
	);
};

export default Title;
