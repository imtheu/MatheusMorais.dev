import React, { useEffect } from 'react';

const TikTok = ({ id }: { id: string }) => {
	useEffect(() => {
		const script = document.createElement('script');
		script.async = true;
		script.src = 'https://www.tiktok.com/embed.js';
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<>
			<blockquote
				className="tiktok-embed"
				cite={`https://www.tiktok.com/@matheusmorais.dev/video/${id}`}
				data-video-id={id}
				style={{ maxWidth: '605px', minWidth: '325px' }}
			>
				{' '}
				<section>
					{' '}
					<a
						target="_blank"
						title="@matheusmorais.dev"
						href="https://www.tiktok.com/@matheusmorais.dev"
						rel="noreferrer"
					>
						@matheusmorais.dev
					</a>{' '}
				</section>{' '}
			</blockquote>{' '}
		</>
	);
};

export default TikTok;
