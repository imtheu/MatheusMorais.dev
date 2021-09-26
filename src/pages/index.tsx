import React from 'react';

import Header from '../components/header';
import PresentationCode from '../components/presentationCode';
import ProjectCard from '../components/projectCard';
import Separator from '../components/separator';
import Title from '../components/title';

const Home = () => {
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
				</section>
				<Separator />
				<section>
					<Title>Projects</Title>
					<div className="row">
						<ProjectCard
							className="col-6"
							title="Lorem Ipsum"
							content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
								pharetra condimentum enim, eu blandit tortor placerat sit amet.
								Fusce condimentum eros eget nunc ultricies lacinia."
							imageSrc="/images/content/projects/doarei_thumbnail.png"
						/>
						<ProjectCard
							className="col-6"
							title="Lorem Ipsum"
							content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
								pharetra condimentum enim, eu blandit tortor placerat sit amet.
								Fusce condimentum eros eget nunc ultricies lacinia."
							imageSrc="/images/content/projects/doarei_thumbnail.png"
						/>
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
