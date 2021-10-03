import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import React from 'react';

import PostsCard from '../../components/postsCard';
import Title from '../../components/title';

import DefaultLayout from '../../layouts/default';

import { getPosts } from '../../services/posts';

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
			<Title>Blog</Title>
			{props.posts.map((post) => (
				<PostsCard
					key={post.slug}
					title={post.meta.title}
					content={post.meta.description}
					url={post.url}
					external={post.external}
					date={new Date(post.meta.date)}
				/>
			))}
		</>
	);
};

Blog.layout = DefaultLayout;

export default Blog;
