import React from 'react';
import Typewriter from 'typewriter-effect';

import useI18N from '../../../hooks/useI18N';

import styles from './presentationCode.module.css';

const typeWriterDelay = 30;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const content: { [key: string]: any } = {
	'en-US': {
		greeting: 'Hello!',
		job: "I'm a front-end developer",
		graduation: 'and a comp sci student'
	},
	'pt-BR': {
		greeting: 'Olá!',
		job: 'Eu sou desenvolvedor front-end',
		graduation: 'e estudante de computação'
	}
};

const PresentationCode = () => {
	const { locale } = useI18N();

	return (
		<div className={`heading-1 ${styles.presentationCode}`}>
			<Typewriter
				key={locale}
				onInit={(tw) => {
					tw.changeDelay(typeWriterDelay)
						.typeString(
							`<span class="${styles.lineNumber} color-grey">1</span> <span class="color-purple">const</span> Matheus = <span class="color-grey-darker">&#123;</span><br /><span class="${styles.lineNumber} color-grey">2</span> &nbsp;&nbsp;<span class="color-grey-darker light-weight">// ${content[locale].greeting} :D<br />`
						)
						.typeString(
							`<span class="${styles.lineNumber} color-grey">3</span> &nbsp;&nbsp;<span class="color-grey-darker light-weight">// ${content[locale].job}</span><br />`
						)
						.typeString(
							`<span class="${styles.lineNumber} color-grey">4</span> &nbsp;&nbsp;passion: "<span class="color-green">Front-end &hearts;</span>",<br />`
						)
						.typeString(
							`<span class="${styles.lineNumber} color-grey">5</span> &nbsp;&nbsp;<span class="color-grey-darker light-weight">// ${content[locale].graduation}</span><br />`
						)
						.typeString(
							`<span class="${styles.lineNumber} color-grey">6</span> &nbsp;&nbsp;computerScientist: <span class="color-red">true</span><br />`
						)
						.typeString(
							`<span class="${styles.lineNumber} color-grey">7</span> <span class="color-grey-darker">&#125;</span>&#59;`
						)
						.start();
				}}
			/>
		</div>
	);
};

export default PresentationCode;
