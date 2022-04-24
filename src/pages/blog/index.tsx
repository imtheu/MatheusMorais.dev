import React from 'react';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

import PostCard from 'components/postCard';
import Spacing from 'components/spacing';
import Title from 'components/title';

import DefaultLayout from 'layouts/default';

import { getPosts } from 'services/posts';

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
	const posts = await getPosts(locale ?? '');

	return {
		props: {
			posts
		}
	};
};

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Title branding>Blog</Title>
			<Spacing size={4} />
			{props.posts.map((post) => (
				<PostCard
					key={post.slug}
					title={post.meta.title}
					content={post.meta.description}
					url={post.url}
					external={post.external}
					date={new Date(post.meta.date)}
				/>
			))}
			<Spacing size={6} multiplier={3} />
		</>
	);
};

Blog.layout = DefaultLayout;

export default Blog;
