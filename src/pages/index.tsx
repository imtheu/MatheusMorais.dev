import React from 'react';
import Head from 'next/head';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

import About from '../components/home/about';
import PostsCard from '../components/postsCard';
import PresentationCode from '../components/home/presentationCode';
import ProjectCard from '../components/projectCard';
import Separator from '../components/separator';
import Title from '../components/title';

import DefaultLayout from '../layouts/default';

import { getPosts } from '../services/posts';
import { getProjects } from '../services/projects';

const content: { [key: string]: Record<string, string> } = {
	'en-US': {
		projects: 'Projects'
	},
	'pt-BR': {
		projects: 'Projetos'
	}
};

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
	const projects = await getProjects(locale ?? '');
	const posts = await getPosts(locale ?? '');

	return {
		props: {
			projects,
			posts,
			locale: locale ?? ''
		}
	};
};

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Head>
				<title>MatheusMorais.dev</title>
			</Head>
			<div className="container">
				<PresentationCode />
				<Separator />
				<About />
				<Separator />
				<section>
					<Title>{content[props.locale].projects}</Title>
					<div className="row">
						{props.projects?.map((project) => (
							<ProjectCard
								key={project.slug}
								className="col-6"
								title={project.meta.title}
								content={project.meta.description}
								imageSrc={project.meta.thumbnail}
								url={project.url}
							/>
						))}
					</div>
				</section>
				<Separator />
				<section>
					<Title url="/blog">Blog</Title>
					{props.posts?.map((post) => (
						<PostsCard
							key={post.slug}
							title={post.meta.title}
							content={post.meta.description}
							url={post.url}
							external={post.external}
							date={new Date(post.meta.date)}
						/>
					))}
				</section>
			</div>
		</>
	);
};

Home.layout = DefaultLayout;

export default Home;
