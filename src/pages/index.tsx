import { InferGetStaticPropsType } from 'next';
import React from 'react';
import Footer from '../components/footer';

import Header from '../components/header';
import PostsCard from '../components/postsCard';
import PresentationCode from '../components/presentationCode';
import ProjectCard from '../components/projectCard';
import Separator from '../components/separator';
import Title from '../components/title';
import { getPosts } from '../services/posts';
import { getProjects } from '../services/projects';

export const getStaticProps = async () => {
	const projects = await getProjects();
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
				<section>
					<Title>About</Title>
					<p className="subtitle col-9">
						I’m Matheus, i’ve been working for 10 years with{' '}
						<strong className="color-primary">web development</strong> and I’m a
						front-end developer at{' '}
						<a
							href="https://letras.mus.br"
							target="_blank"
							rel="noopener noreferrer"
							className="color-secondary"
						>
							Letras.mus.br
						</a>
						.
						<br />
						<br />
						Brazilian, I’m about to graduate in computer science.
					</p>
					<a href="/" className="button">
						Download my CV
					</a>
				</section>
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
