import React from 'react';
import { InferGetStaticPropsType } from 'next';

import Footer from '../components/footer';
import Header from '../components/header';
import PostsCard from '../components/postsCard';
import ProjectCard from '../components/projectCard';
import Separator from '../components/separator';
import Title from '../components/title';
import PresentationCode from '../components/home/presentationCode';
import About from '../components/home/about';

import { getPosts } from '../services/posts';
import { getProjects } from '../services/projects';

export const getStaticProps = async ({ locale }: { locale: string }) => {
	const projects = await getProjects(locale);
	const posts = await getPosts();

	return {
		props: {
			projects,
			posts
		}
	};
};

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div>
			<Header />
			<div className="container">
				<PresentationCode />
				<Separator />
				<About />
				<Separator />
				<section>
					<Title>Projects</Title>
					<div className="row">
						{props.projects.map((project) => (
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
				</section>
				<Separator />
				<Footer />
			</div>
		</div>
	);
};

export default Home;
