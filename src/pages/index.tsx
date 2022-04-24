import AOS from 'aos';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import React, { useEffect } from 'react';

import Spacing from 'components/spacing';
import Title from 'components/title';
import PostCard from 'components/postCard';
import About from 'components/home/about';
import PresentationCode from 'components/home/presentationCode';
import ProjectCard from 'components/projectCard';

import DefaultLayout from 'layouts/default';

import { getPosts } from 'services/posts';
import { getProjects } from 'services/projects';

import 'aos/dist/aos.css';

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
	useEffect(() => {
		AOS.init({
			easing: 'ease-in-out',
			once: true,
			offset: 0
		});
	}, []);

	return (
		<>
			<Head>
				<title>MatheusMorais.dev</title>
			</Head>
			<PresentationCode />

			<Spacing size={6} multiplier={3} />
			<About />
			<Spacing size={6} multiplier={3} />

			<section>
				<Title branding>{content[props.locale].projects}</Title>
				<Spacing size={4} />
				{props.projects?.map((project) => (
					<ProjectCard
						key={project.slug}
						title={project.meta.title}
						content={project.meta.description}
						imageSrc={project.meta.thumbnail}
						url={project.url}
					/>
				))}
			</section>

			<Spacing size={6} multiplier={3} />

			<section>
				<Title branding>Blog</Title>
				<Spacing size={4} />
				{props.posts?.map((post) => (
					<PostCard
						key={post.slug}
						title={post.meta.title}
						content={post.meta.description}
						url={post.url}
						external={post.external}
						date={new Date(post.meta.date)}
					/>
				))}
			</section>

			<Spacing size={6} multiplier={3} />
		</>
	);
};

Home.layout = DefaultLayout;

export default Home;
