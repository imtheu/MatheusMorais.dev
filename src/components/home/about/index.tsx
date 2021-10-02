import React from 'react';
import useI18N from '../../../hooks/useI18N';

import Title from '../../title';

const content: { [key: string]: Record<string, string | JSX.Element> } = {
	'en-US': {
		title: 'About',
		description: (
			<>
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
			</>
		),
		buttonText: 'Download my CV'
	},
	'pt-BR': {
		title: 'Sobre',
		description: (
			<>
				Sou o Matheus, trabalho por cerca de 10 anos com{' '}
				<strong className="color-primary">desenvolvimento web</strong> e sou
				desenvolvedor front-end no{' '}
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
				Brasileiro, estou me formando em ciência da computação.
			</>
		),
		buttonText: 'Baixe meu currículo'
	}
};

const About = () => {
	const { locale } = useI18N();

	return (
		<section>
			<Title>{content[locale].title as string}</Title>
			<p className="subtitle col-9">{content[locale].description}</p>
			<a href="/" className="button">
				{content[locale].buttonText}
			</a>
		</section>
	);
};

export default About;
