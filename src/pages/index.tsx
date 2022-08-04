import AOS from 'aos';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import React, { useEffect } from 'react';

import Spacing from 'components/spacing';
import Title from 'components/title';
import Text from 'components/text';
import PostCard from 'components/postCard';
import About from 'components/home/about';
import PresentationCode from 'components/home/presentationCode';
import ProjectCard from 'components/projectCard';
import DropCard from 'components/dropCard';

import DefaultLayout from 'layouts/default';

import 'aos/dist/aos.css';
import {
	ContentDirectories,
	getContentMetadata,
	Languages
} from 'utils/services.utils';

import { PostMetaFile } from 'src/types/Post';
import { ProjectMetaFile } from 'src/types/Project';
import { DropMetaFile } from 'src/types/Drop';

const content: { [key: string]: Record<string, string> } = {
	'en-US': {
		projects: 'Projects',
		dropsDescription:
			"Drops are quick tips, or things I've learned recently that I'd like to share."
	},
	'pt-BR': {
		projects: 'Projetos',
		dropsDescription:
			'Drops são dicas rapidinhas, ou coisas que aprendi recentemente e gostaria de compartilhar.'
	}
};

export const getStaticProps = async ({
	locale = Languages.EN_US
}: GetStaticPropsContext) => {
	const posts = await getContentMetadata<PostMetaFile>(
		ContentDirectories.Posts
	);

	const projects = await getContentMetadata<ProjectMetaFile>(
		ContentDirectories.Projects
	);

	const drops = await getContentMetadata<DropMetaFile>(
		ContentDirectories.Drops
	);

	return {
		props: {
			projects,
			posts,
			drops,
			locale: (locale as Languages) ?? ''
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
				{props.projects?.map((project) => {
					const metadata = project[props.locale];

					if (!metadata) {
						return null;
					}

					return (
						<ProjectCard
							key={metadata.slug}
							title={metadata.title}
							content={metadata.description}
							imageSrc={metadata.thumbnail}
							url={`/${props.locale}/projects/${metadata.slug}`}
						/>
					);
				})}
			</section>

			<Spacing size={6} multiplier={3} />

			<section>
				<Title branding>Drops</Title>
				<Text size={1} color="rockBlue">
					{content[props.locale].dropsDescription}
				</Text>
				<Spacing size={4} />
				{props.drops?.map((drop) => {
					const metadata = drop[props.locale];

					if (!metadata) {
						return null;
					}

					return (
						<DropCard key={metadata.slug} {...metadata} locale={props.locale} />
					);
				})}
			</section>

			<Spacing size={6} multiplier={3} />

			<section>
				<Title branding>Blog</Title>
				<Spacing size={4} />
				{props.posts?.map((post) => {
					const metadata = post[props.locale];

					if (!metadata) {
						return null;
					}

					return (
						<PostCard
							key={metadata.slug}
							title={metadata.title}
							content={metadata.description}
							url={
								metadata.external ?? `/${props.locale}/blog/${metadata.slug}`
							}
							external={metadata.external}
							date={new Date(metadata.date)}
						/>
					);
				})}
			</section>

			<Spacing size={6} multiplier={3} />
		</>
	);
};

Home.layout = DefaultLayout;

export default Home;
