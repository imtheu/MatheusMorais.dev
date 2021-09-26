import React from 'react';

const ContentTable = ({ children }: { children: JSX.Element }) => {
	return (
		<div style={{ overflowX: 'auto' }}>
			<table>{children}</table>
		</div>
	);
};

export default ContentTable;
