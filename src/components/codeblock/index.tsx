import React from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula';

type PropsType = {
	children: string;
	className: string;
};

const CodeBlock = ({ children, className }: PropsType) => {
	const language = className.replace(/language-/, '') as Language;

	return (
		<Highlight
			{...defaultProps}
			code={children}
			language={language}
			theme={dracula}
		>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre
					className={className}
					style={{
						...style,
						padding: '30px 30px 6px',
						borderRadius: '5px',
						fontSize: '16px',
						lineHeight: '26px',
						overflowX: 'auto'
					}}
				>
					{tokens.map((line, i) => (
						<div key={i} {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span key={key} {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	);
};

export default CodeBlock;
