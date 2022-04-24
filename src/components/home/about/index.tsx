import React from 'react';

import Grid from 'components/grid';
import Memoji from 'components/memoji';
import Title from 'components/title';
import Text from 'components/text';
import Spacing from 'components/spacing';

import useI18N from 'hooks/useI18N';

const content: { [key: string]: Record<string, string | JSX.Element> } = {
	'en-US': {
		title: 'About',
		description: (
			<Text tag="p" size={3} align="justify">
				I{'’'}m Matheus, i’ve been working for ~10 years with web development
				and I’m a front-end developer at{' '}
				<a
					href="https://letras.mus.br"
					target="_blank"
					rel="noopener noreferrer"
				>
					Letras.mus.br
				</a>
				<br />
				<br />
				<strong>I love writing, learning and teaching</strong>. And I love
				technology, too. That
				{"'"}s why I created this little corner of the internet.
				<br />
				<br />
				Brazilian, I{"'"}m about to graduate in computer science.
			</Text>
		)
	},
	'pt-BR': {
		title: 'Sobre',
		description: (
			<Text tag="p" size={3} align="justify">
				Sou o Matheus, trabalho por ~10 anos com desenvolvimento web e sou
				desenvolvedor front-end no{' '}
				<a
					href="https://letras.mus.br"
					target="_blank"
					rel="noopener noreferrer"
				>
					Letras.mus.br
				</a>
				<br />
				<br />
				<strong>Amo escrever, aprender e ensinar</strong>. E amo tecnologia. É
				por isso que criei esse pequeno canto da internet.
				<br />
				<br />
				Sou de <span title="Como todo bom Contagense">Belo Horizonte</span> e
				estou me formando em Ciência da Computação.
			</Text>
		)
	}
};

const About = () => {
	const { locale } = useI18N();

	return (
		<section id="about-aos-section">
			<Title branding>{content[locale].title as string}</Title>
			<Spacing size={4} />
			<Grid>
				<Grid.Item size={7} tabletSize={12} mobileSize={12}>
					{content[locale].description}
				</Grid.Item>
				<Grid.Item size={5} tabletSize={12} mobileSize={12}>
					<>
						<Spacing tabletSize={5} mobileSize={6} />
						<Memoji />
					</>
				</Grid.Item>
			</Grid>
		</section>
	);
};

export default About;
