import { DiscussionEmbed } from 'disqus-react';

type PropsType = {
	url: string;
	identifier: string;
	language: string;
	title: string;
};

const Comments = (props: PropsType) => {
	return (
		<section>
			<DiscussionEmbed
				shortname="matheusmorais"
				config={{
					url: props.url,
					identifier: props.identifier,
					title: props.title,
					language: props.language
				}}
			/>
		</section>
	);
};

export default Comments;
