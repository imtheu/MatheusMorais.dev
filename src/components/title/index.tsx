import Link from 'next/link';
import React from 'react';

type PropsType = {
	children: string;
	url?: string;
};

const Title = (props: PropsType) => {
	return (
		<h1 className="heading-1 medium-weight">
			{props.url ? (
				<Link href={props.url}>
					<a>
						&#123; ...<span className="color-primary">{props.children}</span>{' '}
						&#125;
					</a>
				</Link>
			) : (
				<>
					&#123; ...<span className="color-primary">{props.children}</span>{' '}
					&#125;
				</>
			)}
		</h1>
	);
};

export default Title;
