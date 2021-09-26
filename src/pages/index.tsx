import { InferGetStaticPropsType } from 'next';
import React from 'react';

import Header from '../components/header';
import PresentationCode from '../components/presentationCode';
import ProjectCard from '../components/projectCard';
import Separator from '../components/separator';
import Title from '../components/title';
import { getProjects } from '../services/projects';

export const getStaticProps = async () => {
	const projects = await getProjects();

	return {
		props: {
			projects
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
				</section>
				<Separator />
			</div>
		</div>
	);
};

export default Home;
