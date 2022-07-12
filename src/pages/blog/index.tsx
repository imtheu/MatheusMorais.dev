import React from 'react';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

import PostCard from 'components/postCard';
import Spacing from 'components/spacing';
import Title from 'components/title';

import DefaultLayout from 'layouts/default';

import { ContentDirectories, getContentMetadata } from 'utils/services.utils';

import { PostMetaFile } from 'src/types/Post';

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
	const posts = await getContentMetadata<PostMetaFile>(
		ContentDirectories.Posts
	);

	return {
		props: {
			posts,
			locale: locale ?? ''
		}
	};
};

const Blog = ({
	posts,
	locale
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Title branding>Blog</Title>
			<Spacing size={4} />
			{posts.map((post) => {
				const metadata = post[locale];

				if (!metadata) {
					return null;
				}

				return (
					<PostCard
						key={metadata.slug}
						title={metadata.title}
						content={metadata.description}
						url={metadata.external ?? `/${locale}/blog/${metadata.slug}`}
						external={metadata.external}
						date={new Date(metadata.date)}
					/>
				);
			})}
			<Spacing size={6} multiplier={3} />
		</>
	);
};

Blog.layout = DefaultLayout;

export default Blog;
